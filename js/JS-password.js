var acess = false;
while(acess==false){
    var EnteredPassword = prompt("Insira a senha:")
    if(EnteredPassword == ""){
        alert("Acesso liberado!")
        acess = true
    } else{
        alert("Senha Incorreta!!")
    }
}