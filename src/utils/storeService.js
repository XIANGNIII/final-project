import { db, auth } from '../firebase'
import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore'

export const storeService = {
  async getCurrentUser() {
    const currentUser = auth.currentUser

    if (!currentUser) {
      return null;
    }

    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        return {
          uid: currentUser.uid,
          ...userDocSnap.data()
        }
      } else {
         const usersRef = collection(db, 'users')
         const q = query(usersRef, where('uid', '==', currentUser.uid))
         const querySnapshot = await getDocs(q)

         if (!querySnapshot.empty) {
           const userDoc = querySnapshot.docs[0];
           return {
             uid: currentUser.uid,
             ...userDoc.data()
           }
         } else {
           return { uid: currentUser.uid, email: currentUser.email };
         }
      }
    } catch (error) {
      throw error
    }
  },

  async getUserResults(username) {
    if (!username) {
      return [];
    }
    try {
      const resultsRef = collection(db, 'results')
      const q = query(resultsRef, where('username', '==', username))
      const querySnapshot = await getDocs(q)

      const results = []
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        results.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : null
        })
      })

      return results.sort((a, b) => {
         if (a.createdAt === null && b.createdAt === null) return 0;
         if (a.createdAt === null) return 1;
         if (b.createdAt === null) return -1;
         return b.createdAt.getTime() - a.createdAt.getTime();
      });
    } catch (error) {
      throw error
    }
  },

  async getResultById(resultId) {
    if (!resultId || typeof resultId !== 'string' || resultId.trim() === '') {
        throw new Error('Invalid result ID');
    }
    try {
      const resultRef = doc(db, 'results', resultId)
      const resultDoc = await getDoc(resultRef)

      if (!resultDoc.exists()) {
        throw new Error('Result data not found')
      }

      const resultData = resultDoc.data()

      return {
        id: resultId,
        ...resultData,
        createdAt: resultData.createdAt?.toDate ? resultData.createdAt.toDate() : null
      }
    } catch (error) {
      if (error.message === 'Result data not found') {
          throw error;
      }
      throw new Error(`Failed to retrieve result: ${error.message}`);
    }
  },

  async getCurrentTest() {
    const currentUser = auth.currentUser
    if (!currentUser) {
      throw new Error('User not logged in')
    }

    try {
      const currentTestRef = doc(db, 'users', currentUser.uid, 'currentTest', 'answers');
      const currentTestDoc = await getDoc(currentTestRef);

      if (currentTestDoc.exists()) {
        return currentTestDoc.data();
      } else {
        const newTest = {
          answers: [],
          startedAt: new Date()
        }

        await setDoc(currentTestRef, newTest);
        return newTest;
      }
    } catch (error) {
      throw error
    }
  },

  async saveTestAnswer(questionId, option, weight = 1) {
    const currentUser = auth.currentUser
    if (!currentUser) {
      throw new Error('User not logged in')
    }

    if (questionId === undefined || option === undefined) {
        throw new Error('Missing questionId or option');
    }

    try {
      const currentTestRef = doc(db, 'users', currentUser.uid, 'currentTest', 'answers');
      const currentTestDoc = await getDoc(currentTestRef);

      if (!currentTestDoc.exists()) {
        await this.getCurrentTest();
        const freshTestDoc = await getDoc(currentTestRef);
        if (!freshTestDoc.exists()) {
            throw new Error('Failed to create or find current test data before saving answer.');
        }
      }

      const testData = currentTestDoc.data() || { answers: [] };
      const answers = testData.answers || [];

      const qIdInt = parseInt(questionId, 10);
      const existingAnswerIndex = answers.findIndex(a => parseInt(a.questionId, 10) === qIdInt)

      const answerData = {
        questionId: qIdInt,
        option: String(option),
        weight: parseFloat(weight) || 1
      }

      if (existingAnswerIndex >= 0) {
        answers[existingAnswerIndex] = answerData
      } else {
        answers.push(answerData)
      }

      await updateDoc(currentTestRef, { answers: answers });

      return {
        ...testData,
        answers
      }
    } catch (error) {
      throw error
    }
  },

  async saveTestResult(resultType, scores, answers) {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('User not logged in');
    }

    if (!resultType || !scores || !answers) {
      throw new Error('Missing required data to save result.');
    }

    try {
      const userData = await this.getCurrentUser();
      if (!userData || !userData.username) {
          throw new Error('Could not retrieve user data to save result.');
      }

      let resultId;
      try {
          resultId = crypto.randomUUID();
      } catch (e) {
          resultId = `result_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      }

      const resultRef = doc(db, 'results', resultId);
      await setDoc(resultRef, {
        uid: currentUser.uid,
        username: userData.username,
        answers: answers,
        resultType: resultType,
        scores: scores,
        createdAt: new Date()
      });

      try {
        const currentTestRef = doc(db, 'users', currentUser.uid, 'currentTest', 'answers');
        await setDoc(currentTestRef, {
          answers: [],
          startedAt: null
        });
      } catch (clearError) {
      }

      return resultId;
    } catch (error) {
      throw error;
    }
  }
}