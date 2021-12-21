function OffLogin(){

    var LoginOff = document.getElementById('login')
    LoginOff.style.opacity = "0"
    LoginOff.style.left = "-1%"

    var MoverCadastro = document.getElementById('Form')
    MoverCadastro.style.marginLeft = "-50%"

}

function OnnLogin(){

    var LoginOn = document.getElementById('login')
    LoginOn.style.opacity = "100"
    LoginOn.style.left = "50%"

    var MoverCadastrorepeat = document.getElementById('Form')
    MoverCadastrorepeat.style.marginLeft = "-100%"


}