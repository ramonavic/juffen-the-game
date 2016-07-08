var number = process.argv.slice(2)[0];

if(isJuf(number)){
    console.log("juf!");
}else{
  console.log(number);
}

function isJuf(number) {
  if (number % 7 === 0) {
    return isJuf = true
  } else if (number % 10 === 7){
    return isJuf = true
  }
  else {
     return isJuf = false
  };
}

module.exports = {
  isJuf: isJuf,
};
