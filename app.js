//Elemetos

let btnEncriptar = document.querySelector(".btn-encriptar");
let txtEncriptar = document.querySelector('.encriptar');
let aviso = document.querySelector('.txt-aviso');
let respuesta= document.querySelector('.evaluar');
let contenido = document.querySelector('.img-texto-contenedor');
let btnCopiar = document.querySelector('.btn-copiar');

let btnDesencriptar=document.querySelector('.btn-desencriptar')


//Boton encriptar 
btnEncriptar.addEventListener('click', e=>{
    let texto=txtEncriptar.value;

    if(texto == texto.toLowerCase()){

        texto= texto.replace(/e/, 'enter');
        texto= texto.replace(/i/, 'imes');
        texto= texto.replace(/a/, 'ai');
        texto= texto.replace(/o/, 'ober');
        texto= texto.replace(/u/, 'ufat');


    }else{
        aviso.textContent = 'No acentos y solo minusculas';
        aviso.style.fontWeight='800';
        aviso.style.color = '#dc143c';

        setTimeout(()=>{
            aviso.removeAttribute('style')
        },1500);




    }  
    
    respuesta.innerHTML = texto;
    contenido.remove();
    btnCopiar.style.visibility = 'inherit';
      
})

//btn desencriptar
btnDesencriptar.addEventListener('click', e=>{
    let texto=txtEncriptar.value;

    if(texto == texto.toLowerCase()){

        texto= texto.replace(/enter/, 'e');
        texto= texto.replace(/imes/, 'i');
        texto= texto.replace(/ai/, 'a');
        texto= texto.replace(/ober/, 'o');
        texto= texto.replace(/ufat/, 'u');


    }else{
        aviso.textContent = 'No acentos y solo minusculas';
        aviso.style.fontWeight='800';
        aviso.style.color = '#dc143c';

        setTimeout(()=>{
            aviso.removeAttribute('style')
        },1500);




    }  
    
    respuesta.innerHTML = texto;
    contenido.remove();
    btnCopiar.style.visibility = 'inherit';
      
})

//btn copiar
btnCopiar.addEventListener('click', e=>{
    
    let copiar=respuesta;
    copiar.select();
    document.execCommand('copy');
    
    



})
