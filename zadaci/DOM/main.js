
const users = [
    { username: "new_user", password: "123456789" },
  ];
  
  const loginButton = document.getElementById("login-button");
  const resultDiv = document.getElementById("result");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  
  loginButton.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    if (username === "") {
      resultDiv.innerText = "please, enter username";
    
    } else if (password === "") {
      resultDiv.innerText = "please, enter password";

    } else {
      const user = users.find(user => user.username === username);
      if (!user) {
        resultDiv.innerText = "please, enter valid username";
       
      } else if (user.password !== password) {
        resultDiv.innerText = " please, enter valid password";
       
      } else {
        resultDiv.innerText = "Successful login!";
      
      }
    }
  });
  
