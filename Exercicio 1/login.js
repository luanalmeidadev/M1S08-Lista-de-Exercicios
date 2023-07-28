import {dadosUsuarios} from "./dados.js"


const emailEl = document.getElementById("email")
const passwordEl = document.getElementById("password")
const formEl = document.getElementById("form")
formEl.addEventListener("submit",(event) => {
  event.preventDefault();
  console.log(emailEl.value)
  console.log(passwordEl.value)
  validarLogin();
})


function validarLogin() {
  const arrayDadosUsuarios = JSON.parse(dadosUsuarios)
  console.log(JSON.parse(dadosUsuarios))
  arrayDadosUsuarios.forEach(item => {
    console.log(item)
    if (item.email == emailEl.value && item.senha == passwordEl.value) {
      localStorage.setItem("dados_usuario", JSON.stringify({nome:item.nome, email:item.email}))
      alert("usuario correto!")
    }
    

  });


}

