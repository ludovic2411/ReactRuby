import validator from 'validator';

const email=(input)=>{
  input.trim();
  validator.escape(input);
  if(validator.isEmail(input)){
    validator.normalizeEmail(input);
    return true
  }else {
    return false
  }
}

export default email;
