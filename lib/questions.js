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

//add email validation

//add github validation

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
    message: 'What is the manager\'s ID number?', 
    name: 'mgrId',
    validate: 'checkInteger'
  },
  {
    type: 'input',
    message: 'What is the manager\'s email?', 
    name: 'mgrEmail',
    // validate: 'checkString'
  },
  {
    type: 'input',
    message: 'What is the manager\'s office number?', 
    name: 'mgrOfficeNum',
    validate: 'checkInteger'
  },
  {
  type: 'confirm',
  message: 'Would you like to add another team member?',
  name: 'confirm'
  }
];

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is the engineer\'s name?',
    name: 'engName',
    validate: 'checkString'
  },
  {
    type: 'input',
    message: 'What is the engineer\'s ID number?', 
    name: 'engId',
    validate: 'checkInteger'
  },
  {
    type: 'input',
    message: 'What is the engineer\'s email?', 
    name: 'engEmail',
    // validate: 'checkString'
  },
  {
    type: 'input',
    message: 'What is the engineer\'s github?', 
    name: 'engGithub',
    // validate: 'checkInteger'
  },
  {
  type: 'confirm',
  message: 'Would you like to add another team member?',
  name: 'confirm'
  }

];


// intern questions
const internQuestions = [
  {
    type: 'input',
    message: 'What is the intern\'s name?',
    name: 'intName',
    validate: 'checkString'
  },
  {
    type: 'input',
    message: 'What is the intern\'s ID number?', 
    name: 'intId',
    validate: 'checkInteger'
  },
  {
    type: 'input',
    message: 'What is the intern\'s email?', 
    name: 'intEmail',
    // validate: 'checkString'
  },
  {
    type: 'input',
    message: 'Where did the intern attend school?', 
    name: 'intSchool',
    validate: 'checkString'
  },
  {
  type: 'confirm',
  message: 'Would you like to add another team member?',
  name: 'confirm'
  }

];

//module export