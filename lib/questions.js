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
const checkEmail = (email) => 
{
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  if (!email.match(pattern))
  {
    return 'Please enter a valid email address.'
  }
    return true
}



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
    validate: checkString
  },
  {
    type: 'input',
    message: 'What is the manager\'s ID number?', 
    name: 'mgrId',
    validate: checkInteger
  },
  {
    type: 'input',
    message: 'What is the manager\'s email?', 
    name: 'mgrEmail',
    validate: checkEmail
  },
  {
    type: 'input',
    message: 'What is the manager\'s office number?', 
    name: 'mgrOfficeNum',
    validate: checkInteger
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
    validate: checkString
  },
  {
    type: 'input',
    message: 'What is the engineer\'s ID number?', 
    name: 'engId',
    validate: checkInteger
  },
  {
    type: 'input',
    message: 'What is the engineer\'s email?', 
    name: 'engEmail',
    validate: checkEmail
  },
  {
    type: 'input',
    message: 'What is the engineer\'s github name?', 
    name: 'engGithub',
    validate: checkString
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
    validate: checkString
  },
  {
    type: 'input',
    message: 'What is the intern\'s ID number?', 
    name: 'intId',
    validate: checkInteger
  },
  {
    type: 'input',
    message: 'What is the intern\'s email?', 
    name: 'intEmail',
    validate: checkEmail
  },
  {
    type: 'input',
    message: 'Where did the intern attend school?', 
    name: 'intSchool',
    validate: checkString
  },
  {
  type: 'confirm',
  message: 'Would you like to add another team member?',
  name: 'confirm'
  }

];

//module export
module.exports = {
  roleQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions
};