const register = () => {
  // Getting user data
  const email = document.getElementById('txtEmailRegister').value;
  const password = document.getElementById('txtPasswordRegister').value;

  // Creating event
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  
  // This is to send data from app to firebase
  auth.createUserWithEmailAndPassword(email, password)
  .then(userCredential => {
    // Sign in
    let user = userCredential.user;
    console.log("Registro exitoso.");
    console.log(user);
    registerForm.reset();
  })
  .catch((error) => {
    // Bad login messages
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

   
   });
    

  return true 

}

export default register;