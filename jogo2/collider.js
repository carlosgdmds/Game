function collider(rx ,ry, rw, rh, cx, cy, diameter){
	testX = cx;
	testY = cy;
	if (cx < rx){
		testX = rx;
	}else if (cx > rx+rw){
		testX = rx+rw;
	}
	if (cy < ry){
		testY = ry;
	}else if (cy > ry+rh){
		testY = ry+rh;
	}
	distancia = this.dist(cx,cy,testX,testY);
	if (distancia <= diameter / 2){
		return true;
	}
	return false;

}
