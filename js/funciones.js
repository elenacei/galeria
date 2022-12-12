const enlace = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0;
let rutas Img = [];

//abrir modal
enlaces.forEach((enlace,indice) => {
	rutasImg.push(enlaces[imgActual].getAttribute("href"));
	enlace.addEventListener("click",evento => {
		evento.preventDefault();
		imgActual = indice;
		imgModal.setAttribute("src",rutas[imgActual]);
		modal.classList.add("visible");
	});
});

//cerrar modal
modal.addEventListener("click",function(){
	modal.classList.remove("visible");
})

//navegación modal
flechas.forEach((flecha,indice) =>{
	flecha.addEventListener("click", evento  => {
		evento.stopPropagation();
		if(indice == 0){
			imgActual = imgActual > 0 ? imgActual - 1 : rutasImg.length - 1;
		}else{
			imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
		}
		imgModal.setAttribute("src",rutasImg[imgActual]);
	});
});







