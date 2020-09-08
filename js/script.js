//document.getElementById("menu-icono").addEventListener("click", mostrar_menu);

//function mostrar_menu(){
  //  document.getElementById("mov-cont").classList.toggle('move-all');
  //  document.getElementById("show-menu").classList.toggle('show-lateral-menu-header');
//}

/*-------------------------------------------------*/
/*script para layout de imagenes*/
/*-------------------------------------------------*/

//const grid = new Muuri('.grid',{
   // layaout:{
    //    rounding:false
  //  }
//});

/*-------------------------------------------------*/
/*-------------------------------------------------*/
/*galeria estilos modal*/
/*-------------------------------------------------*/
/*-------------------------------------------------*/

//variable

let modale=document.querySelector('.modale');
let images =document.querySelectorAll('.galeriap img');
let modalImg=document.querySelector('#mymodaleimg');
let imgBox = document.querySelectorAll('.lists img');
let caption = document.querySelector('.caption-text');
let close = document.querySelector('.close');


images.forEach((images) =>{
    images.addEventListener('click', ()=>{
        modale.style.display = "block";
        modalImg.src = images.src;
        caption.innerHTML = images.alt;
    });
});


imgBox.forEach(img=>img.addEventListener("click", imgLightbox));
function imgLightbox(event){
    modalImg.src = event.target.src;
}

close.addEventListener("click",()=>{
    modale.style.display = "none";
});