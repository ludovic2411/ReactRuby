let regex=new RegExp('[@]','g')

const email=(input)=>{
  input.trim();
  if(regex.exec(input)===null){
    console.log("not a valide email");
  }else {
    console.log("valid");
  }
}

email("totototo@com");
