const compatibilityMatrix = {
  igglepiggle: {
    igglepiggle: 80,
    makkapakka: 75,
    upsydaisy: 90,
    tombliboo: 70,
    haahoo: 60,
    ninkynonk: 85,
    balanced: 70
  },
  makkapakka: {
    igglepiggle: 75,
    makkapakka: 85,
    upsydaisy: 65,
    tombliboo: 80,
    haahoo: 75,
    ninkynonk: 55,
    balanced: 75
  },
  upsydaisy: {
    igglepiggle: 90,
    makkapakka: 65,
    upsydaisy: 75,
    tombliboo: 75,
    haahoo: 65,
    ninkynonk: 80,
    balanced: 80
  },
  tombliboo: {
    igglepiggle: 70,
    makkapakka: 80,
    upsydaisy: 75,
    tombliboo: 90,
    haahoo: 85,
    ninkynonk: 70,
    balanced: 85
  },
  haahoo: {
    igglepiggle: 60,
    makkapakka: 75,
    upsydaisy: 65,
    tombliboo: 85,
    haahoo: 80,
    ninkynonk: 60,
    balanced: 80
  },
  ninkynonk: {
    igglepiggle: 85,
    makkapakka: 55,
    upsydaisy: 80,
    tombliboo: 70,
    haahoo: 60,
    ninkynonk: 70,
    balanced: 75
  },
  balanced: {
    igglepiggle: 70,
    makkapakka: 75,
    upsydaisy: 80,
    tombliboo: 85,
    haahoo: 80,
    ninkynonk: 75,
    balanced: 80 
  }
};

export function calculateCompatibilityScore(typeA, typeB) {
  if (!typeA || !typeB || !compatibilityMatrix[typeA] || !compatibilityMatrix[typeA][typeB]) {
    console.warn(`Invalid types for compatibility check: ${typeA}, ${typeB}`);
    return 0;
  }
  return compatibilityMatrix[typeA][typeB];
}

export function getCompatibilityInterpretation(score) {
  if (score >= 85) {
    return "Perfect partners! Like Igglepiggle and Upsy Daisy, natural best friends";
  } else if (score >= 75) {
    return "Excellent companions with strong complementary traits, supporting each other's growth";
  } else if (score >= 65) {
    return "Good friends with common interests, occasional differences but mutual understanding";
  } else if (score >= 55) {
    return "Friendly companions requiring more communication and understanding";
  } else {
    return "Challenging relationship requiring more tolerance and adaptation";
  }
}