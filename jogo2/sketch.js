function setup(){
	createCanvas(500,400);
	trilhaSon.loop();
}
function draw(){
	background(imagemEstrada);
	mostraCarro();
	movimentaCarro();
	verificaCarro();
	mostraAtor();
	movimentaAtor();
	verificaColisao();
	fazPonto();
	mostraPonto();
}
