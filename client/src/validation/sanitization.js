import validator from 'validator';

const string=(input)=>{
  if(!validator.isEmpty(input)){
    input.trim();
    return validator.escape(input);
  }else {
    return false;
  }
}

export default string;
