var containerFormSingIn=document.getElementById("container-form-sing-in");
var containerFormCreateAccount=document.getElementById("container-form-create-account");
var btnSingIn = document.getElementById("btn-sing-in");
var btnCreateAccount=document.getElementById("btn-createAccount");

//Botones crear cuenta y sin-in
btnSingIn.onclick=showFormSingIn;
btnCreateAccount.onclick=showFormCreateAccount;

function showFormSingIn(){
containerFormSingIn.style.display="block";
containerFormCreateAccount.style.display="none";
}

function showFormCreateAccount (){
containerFormCreateAccount.style.display="block";
containerFormSingIn.style.display="none";
}