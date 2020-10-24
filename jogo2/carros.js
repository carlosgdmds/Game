let yCarros =  [40,96,150,210,270,318]; 
let xCarros = [600,600,600,600,600,600];
let velocidadexCarros = [1,2,3,2,3,1];

function mostraCarro(){ 
	for (let i=0; i < imagemCarros.length; i++){
        	image(imagemCarros[i],xCarros[i],yCarros[i],50,40);
	}
}
function movimentaCarro(){
	for (let i=0; i < imagemCarros.length; i++){
		xCarros[i] -= velocidadexCarros[i];
	}
}
function verificaCarro(){
	for (let i=0; i < imagemCarros.length; i++){
		if (xCarros[i] <= -40){
			xCarros[i] = 600;
		}
	}
}
