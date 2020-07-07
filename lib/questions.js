const checkString = (string) => {
  if (string.trim()===''){
    return 'Please enter some information.'
  }
  return true
};


const checkInteger = (integer) => {
  if (isNaN(integer)){
    return 'Please enter a number.'
  }
  return true
};

///Employee role questions
//manager, engineer, intern
//role
const roleQuestion = [
  {
    type: 'list',
    message: 'What role are you adding to this team?',
    choices: ['manager', 'engineer', 'intern'],
    name: 'role'
  }
];

const managerQuestions = [
  {
    type: 'input',
    message: 'What is the manager\'s name?',
    name: 'mgrName',
    validate: 'checkString'
  },
  {
    type: 'input',
    message: 'What is the manager\'s name?', /// id
    name: 'mgrName',
    validate: 'checkString'
  },
  {
    type: 'input',
    message: 'What is the manager\'s name?', /// office number
    name: 'mgrName',
    validate: 'checkString'
  },
  // {
  //   // add more employees?
  // },
];

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is the engineer\'s name?',
    name: 'engName',
    validate: 'checkString'
  },
  {
  //   type: 'input',
  //   message: 'What is the manager\'s name?', /// id
  //   name: 'mgrName',
  //   validate: 'checkString'
  // },
  // {
  //   type: 'input',
  //   message: 'What is the manager\'s name?', /// github
  //   name: 'mgrName',
  //   validate: 'checkString'
  // },
  // {
  //   // add more employees?
  // },
];


// intern questions
const internQuestions = [
  {
    type: 'input',
    message: 'What is the intern\'s name?',
    name: 'intName',
    validate: 'checkString'
  },
  // {
  //   type: 'input',
  //   message: 'What is the manager\'s name?', /// id
  //   name: 'mgrName',
  //   validate: 'checkString'
  // },
  // {
  //   type: 'input',
  //   message: 'What is the manager\'s name?', /// school
  //   name: 'mgrName',
  //   validate: 'checkString'
  // },
  // {
  //   // add more employees?
  // },
];

//module export