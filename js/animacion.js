let animado = document.querySelectorAll(".animado");
let inanimado = document.querySelectorAll(".inanimado");
function mostrarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i<animado.length; i++) {
		let alturaAnimado = animado[i].offsetTop;
		if(alturaAnimado - 800 < scrollTop){
			animado[i].style.opacity = 1;
			animado[i].classList.add("agrandar")
		}

	}
}
function ocultarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i<inanimado.length; i++) {
		let alturaAnimado = inanimado[i].offsetTop;
		if(alturaAnimado - 900 < scrollTop){
			inanimado[i].style.opacity = 0;
		}

	}
}
window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', ocultarScroll);
