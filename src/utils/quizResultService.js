import { characterTypes } from './quizData';

export function calculateResult(answers) {
  const scores = {
    igglepiggle: 0,
    makkapakka: 0,
    upsydaisy: 0,
    tombliboo: 0,
    haahoo: 0,
    ninkynonk: 0
  };
  
  if (Array.isArray(answers)) {
    answers.forEach(answer => {
      const questionId = parseInt(answer.questionId);
      const option = String(answer.option);
      const weight = parseFloat(answer.weight || 1);
      
      switch(option) {
        case 'A':
          scores.igglepiggle += weight;
          break;
        case 'B':
          scores.makkapakka += weight;
          break;
        case 'C':
          scores.upsydaisy += weight;
          break;
        case 'D':
          scores.tombliboo += weight;
          break;
      }
    });
  }
  
  const haahooBaseScore = (scores.makkapakka + scores.tombliboo) / 2;
  scores.haahoo = Math.min(haahooBaseScore, 5);
  
  const questions258 = [2, 5, 8];
  const countBDIn258 = questions258.filter(qId => {
    const answer = answers.find(a => parseInt(a.questionId) === qId);
    return answer && (answer.option === 'B' || answer.option === 'D');
  }).length;
  
  if (countBDIn258 >= 2) {
    scores.haahoo = Math.min(scores.haahoo + 1, 5);
  }
  
  scores.ninkynonk = Math.min(scores.igglepiggle / 2, 5);
  
  const questions1410 = [1, 4, 10];
  const countAIn1410 = questions1410.filter(qId => {
    const answer = answers.find(a => parseInt(a.questionId) === qId);
    return answer && answer.option === 'A';
  }).length;
  
  if (countAIn1410 >= 2) {
    scores.ninkynonk = Math.min(scores.ninkynonk + 1, 5);
  }
  
  const questions369 = [3, 6, 9];
  let jumps = 0;
  
  for (let i = 0; i < questions369.length; i++) {
    const currentQId = questions369[i];
    const prevQId = currentQId - 1;
    
    const currentAnswer = answers.find(a => parseInt(a.questionId) === currentQId);
    const prevAnswer = answers.find(a => parseInt(a.questionId) === prevQId);
    
    if (currentAnswer && prevAnswer && currentAnswer.option !== prevAnswer.option) {
      jumps++;
    }
  }
  
  if (jumps >= 2) {
    scores.ninkynonk = Math.min(scores.ninkynonk + 1, 5);
  }
  
  const baseScores = {
    igglepiggle: scores.igglepiggle,
    makkapakka: scores.makkapakka,
    upsydaisy: scores.upsydaisy,
    tombliboo: scores.tombliboo
  };
  
  const maxBaseTypeScore = Math.max(...Object.values(baseScores));
  const topBaseTypes = Object.keys(baseScores).filter(type => baseScores[type] === maxBaseTypeScore);
  
  let secondHighestBaseScore = 0;
  const scoresArray = Object.values(baseScores).sort((a, b) => b - a);
  if (scoresArray.length > 1) {
    secondHighestBaseScore = scoresArray[1];
  }
  
  const baseTypesBalanced = Object.values(baseScores).every(score => 
    Math.abs(score - maxBaseTypeScore) <= 2 && score >= 2
  );
  
  let resultType;
  
  if (baseTypesBalanced) {
    resultType = 'balanced';
  } 
  else if (scores.haahoo > maxBaseTypeScore) {
    resultType = 'haahoo';
  } 
  else if (scores.ninkynonk > maxBaseTypeScore) {
    resultType = 'ninkynonk';
  }
  else if (maxBaseTypeScore > (secondHighestBaseScore + 2)) {
    resultType = topBaseTypes[0];
  } 
  else {
    const tiebreakerAnswer = answers.find(a => parseInt(a.questionId) === 10);
    
    if (tiebreakerAnswer) {
      switch (tiebreakerAnswer.option) {
        case 'A': resultType = 'igglepiggle'; break;
        case 'B': resultType = 'makkapakka'; break;
        case 'C': resultType = 'upsydaisy'; break;
        case 'D': resultType = 'tombliboo'; break;
        default: resultType = topBaseTypes[0];
      }
    } else {
      resultType = topBaseTypes[0];
    }
  }
  
  return {
    resultType,
    characterInfo: characterTypes[resultType],
    scores
  };
}