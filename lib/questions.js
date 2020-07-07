const checkString = (string) => {
  if (string.trim()===''){
    return 'Please enter some information.'
  }
  return true
};

// const checkInteger = (integer) => {
//   const
// }

///Employee role questions
//manager, engineer, intern
//role
const roleQuestion = [
  {
    type: 'list',
    message: 'What role are you adding to this team?',
    choicesL ['manager', 'engineer', 'intern'],
    name: 'role'
  }
];

//manager questions


// engineer questions


// intern questions


//module export