const inputTexto = document.querySelector(".text-area1");
const mensaje = document.querySelector(".text-area2");

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}
function encriptar(StringParaEncriptar){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar= StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
         if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
       demoVisibility();
   

       return StringParaEncriptar;
}


function btndesencriptar(){
    const textoDesencriptado = desencriptar (inputTexto.value);
    mensaje.value = textoDesencriptado;
}
function desencriptar (StringParaDesencriptar){
    let matrizCodigo =[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar= StringParaDesencriptar.toLowerCase(); 
    for ( let i = 0; i < matrizCodigo.length; i ++){
        if (StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo [i][0], matrizCodigo[i][1])
        }
    }

    return StringParaDesencriptar;
}


function copy() {
    var copyText = document.getElementById("myOutput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
  }
  function demoVisibility() {
    document.getElementById("muneco").style.visibility = "hidden";
  }
