function FinalAnswer(){
  var password = document.getElementById("FinalQuestion")
  var passwordText = password.value;
  if(passwordText=="curated products and thoughtful messaging"){
    return true;
  }
  alert("Try again")
  return false;
}