let xAtor = 100;
let yAtor = 366;
let velocidadeyAtor = 4;

//variavel de colisao
let colisao = false;
let testX;
let testY;
let distancia;

//pontos
let pontos=0;

function mostraAtor(){ 
        image(imagemAtor,xAtor,yAtor,30,30);
}
function movimentaAtor(){
	if (keyIsDown(UP_ARROW)){
		yAtor -= velocidadeyAtor;
	}
	if (keyIsDown(DOWN_ARROW)){
		yAtor +=velocidadeyAtor;
	}
}
function verificaColisao(){
	for (let i=0; i < imagemCarros.length; i++){
		colisao = collider(xCarros[i],yCarros[i],50,40,xAtor,yAtor,15);
		if (colisao){
			yAtor = 366;
			colidiuSon.play();
			if (pontos > 0){
				pontos -=1;
			}
		}
	}
}
function fazPonto(){
	if (yAtor <=60 ){
		pontos++;
		yAtor=366;
		pontoSon.play()
	}
	if (yAtor >=370){
		yAtor = 366;
	}

}
function mostraPonto(){
	stroke(255);
	textSize(25);
	fill(color(255,240,60))
	text(pontos,150,30);
}
