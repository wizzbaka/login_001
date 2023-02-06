function setFormMessage(formElement, type, message){
  const messageEl = formElement.querySelector(".form__message");

  messageEl.textContent = message;
  messageEl.classList.remove("form__message--success", "form__message--error");
  messageEl.classList.add(`form__message--${type}`)
}

document.addEventListener("DOMContentLoaded", ()=>{

  const LoginForm = document.querySelector("#login");
  const CreateAccountForm = document.querySelector("#CreateAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e =>{

    e.preventDefault();
    LoginForm.classList.add("form--hidden");
    CreateAccountForm.classList.remove("form--hidden");
  });
  document.querySelector("#linkLogin").addEventListener("click", e =>{

    e.preventDefault();
    LoginForm.classList.remove("form--hidden");
    CreateAccountForm.classList.add("form--hidden");
  });
});