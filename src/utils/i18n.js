export const translations = {
  en: {
    login: 'Login',
    username: 'Username',
    password: 'Password',
    enterUsername: 'Enter username',
    enterPassword: 'Enter password',
    loggingIn: 'Logging in...',
    dontHaveAccount: "Don't have an account?",
    register: 'Register',
    usernameNotExist: 'Username does not exist',
    incorrectPassword: 'Incorrect password',
    loginFailed: 'Login failed, please check your username and password',
    
    registering: 'Registering...',
    alreadyHaveAccount: 'Already have an account?',
    passwordsNotMatch: 'Passwords do not match',
    passwordTooShort: 'Password must be at least 6 characters',
    usernameExists: 'Username already exists, please choose another one',
    
    backToHome: 'Back to home page',
    question: 'Question',
    previous: 'Previous',
    next: 'Next',
    seeResults: 'See Results',
    
    yourResult: 'Your Result',
    loading: 'Loading your result...',
    personalityBreakdown: 'Personality Breakdown',
    takeQuizAgain: 'Take Quiz Again',
    shareResult: 'Share Result',
    resultNotFound: 'Result not found',
    invalidResultId: 'Invalid result ID',
    errorLoadingResult: 'Error loading result',

    checkCompatibility: "Check Compatibility",
    errorCurrentUserNoResults: "Cannot check compatibility. Your results are not available.",
    errorSearchedUserNoResults: "Searched user's result is invalid.",
    resultViewedBy: "{viewer} viewed your result!",
    resultViewedTail: "viewed your result!"
  },
  zh: {
    login: '登录',
    username: '用户名',
    password: '密码',
    enterUsername: '输入用户名',
    enterPassword: '输入密码',
    loggingIn: '登录中...',
    dontHaveAccount: '没有账户？',
    register: '注册',
    usernameNotExist: '用户名不存在',
    incorrectPassword: '密码不正确',
    loginFailed: '登录失败，请检查您的用户名和密码',
    
    registering: '注册中...',
    alreadyHaveAccount: '已有账户？',
    passwordsNotMatch: '两次输入的密码不一致',
    passwordTooShort: '密码长度至少为6个字符',
    usernameExists: '用户名已被使用，请选择其他用户名',
    
    backToHome: '返回主页',
    question: '问题',
    previous: '上一题',
    next: '下一题',
    seeResults: '查看结果',
    
    yourResult: '您的结果',
    loading: '加载结果中...',
    personalityBreakdown: '个性分析',
    takeQuizAgain: '再次测试',
    shareResult: '分享结果',
    resultNotFound: '找不到结果数据',
    invalidResultId: '无效的结果ID',
    errorLoadingResult: '加载结果时出错',

    checkCompatibility: "检查匹配度",
    errorCurrentUserNoResults: "无法检查匹配度。你的测试结果不可用。",
    errorSearchedUserNoResults: "搜索用户的结果无效。",
    resultViewedBy: "{viewer} 查看了你的结果！",
    resultViewedTail: "查看了你的结果！"
  }
};

let currentLanguage = 'en'

export function getLanguage() {
  return currentLanguage
}

export function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang
    localStorage.setItem('language', lang)
  }
}

export function initLanguage() {
  const savedLang = localStorage.getItem('language')
  if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang
  }
}

export function t(key, params = {}) {
  let text = translations[currentLanguage][key] || key
  
  Object.entries(params).forEach(([key, value]) => {
    text = text.replace(`{${key}}`, value)
  })
  
  return text
}