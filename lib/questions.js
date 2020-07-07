const checkString = (string) => {
  if (string.trim()===''){
    return 'Please enter some information.'
  }
  return true
};


const checkInteger = (integer) => {
  if (integer = NaN){
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

//manager questions


// engineer questions


// intern questions


//module export