import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';

const db = getFirestore();

export async function fixUsers() {
  try {
    const usersFromUsers = await getAllUsers('users');
    const usersFromUsersList = await getAllUsers('usersList');
    
    const allUsers = [...usersFromUsers, ...usersFromUsersList];
    const uniqueUsers = removeDuplicates(allUsers, 'uid');
    
    for (const user of uniqueUsers) {
      if (!user.uid) {
        continue;
      }
      
      const userData = {
        uid: user.uid,
        username: user.username || `user_${user.uid.substring(0, 6)}`,
        email: user.email || '',
        createdAt: user.createdAt || new Date()
      };
      
      await setDoc(doc(db, 'users', user.uid), userData, { merge: true });
      
      if (userData.username) {
        await setDoc(doc(db, 'usernames', userData.username), {
          uid: user.uid,
          email: userData.email
        }, { merge: true });
      }
    }
    
    return uniqueUsers;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers(collectionName) {
  const usersRef = collection(db, collectionName);
  const snapshot = await getDocs(usersRef);
  
  const users = [];
  snapshot.forEach(doc => {
    users.push({
      id: doc.id,
      ...doc.data()
    });
  });
  
  return users;
}

function removeDuplicates(array, key) {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (!value || seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}