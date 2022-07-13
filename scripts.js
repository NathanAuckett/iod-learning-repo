function submitForm(){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (nameValidate(name) && emailValidate(email)){
      alert("Looking good, Champion!");
    }
  }

  function nameValidate(_name){
    if (_name == ""){
      alert("Please enter a name");
      return false
    }
    else if (_name.length > 30){
      alert("Name is too long!");
      return false
    }
    
    return true
  }

  function emailValidate(_email){
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (_email == ""){
      alert("Please enter an email.");
      return false
    }
    else if (!_email.match(mailFormat)){
      alert("Email format incorrect!\nPlease ensure you have typed your email correctly.");
      return false
    }
    
    return true
  }