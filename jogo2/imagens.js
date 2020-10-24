let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarros = [];

//definir sons
let colidiuSon;
let pontoSon;
let trilhaSon;
function preload(){
	imagemEstrada = loadImage("estrada.png");
	imagemAtor = loadImage("ator-1.png");
	imagemCarro = loadImage("carro-1.png");
	imagemCarro2 = loadImage("carro-2.png");
	imagemCarro3 = loadImage("carro-3.png");
	imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3];

	colidiuSon = loadSound("son/colidiu.mp3");
	pontoSon =  loadSound("son/pontos.wav");
	trilhaSon = loadSound("son/trilha.mp3");
}

