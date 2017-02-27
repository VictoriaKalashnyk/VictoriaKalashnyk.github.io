'use strict';
	
newGame();					
var xi, yj; // координаты пустой косточки
var gameBlock = [];

function newGame() {
	
	// удаляем поле игры
	var field = document.getElementById("content");
	while (field.firstChild) {
		field.removeChild(field.firstChild);
	}
	
	// создаем массив массивов
	var gameBlock = ["one", "two", "three", "four"];
	gameBlock[0] = [1, 2, 3, 4];
	gameBlock[1] = [5, 6, 7, 8];
	gameBlock[2] = [9, 10,11,12];
	gameBlock[3] = [13,14,15,16];
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if(i + j != 6) {
				gameBlock[i][j];
			} else {
				gameBlock[i][j] = '';
			}
		}; 
	};
	//console.log(gameBlock);
	
	// перемишиваем косточки
	xi = 3; yj = 3; // координаты пустой косточки при формировании массива
	for(var n = 0; n < 500; ++n)
		switch(Math.round(3*Math.random())){
			case 0: if(xi != 0) swap(gameBlock,xi,yj,--xi,yj); break; // top
			case 1: if(yj != 3) swap(gameBlock,xi,yj,xi,++yj); break; // right
			case 2: if(xi != 3) swap(gameBlock,xi,yj,++xi,yj); break; // bottom
			case 3: if(yj != 0) swap(gameBlock,xi,yj,xi,--yj);        // left
		}
	//console.log(xi,yj); // новые координаты пустой косточки после перемешивания
	
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			var block = document.createElement("div");	
			field.appendChild(block);
			if(gameBlock[i][j] == '') {
				block.id = "block" + i + j;
				block.setAttribute("onclick", "move(" + i + "," + j + ")");
				block.innerHTML = (gameBlock[i][j]);
			} else {
				block.id = "block" + i + j;
				block.setAttribute("onclick", "move(" + [i] + "," + [j] + ")");
				block.innerHTML += (gameBlock[i][j]);
				block.style.background = "#525461";
			}
		}; 
	};
}

function move(i,j) {
	if((i == xi && Math.abs(j - yj) == 1) || (j == yj && Math.abs(i - xi) == 1)) {
		var empty = document.getElementById('block' + xi + yj);
		var elem = document.getElementById('block' + i + j);
		empty.innerHTML = elem.innerHTML;
		empty.style.background = "#525461";
		elem.innerHTML = "";
		elem.style.background = "none";
		xi = i;
		yj = j;
		// console.log(xi,yj); // координаты новой пустой косточки после передвижения косточки
	}
}

function swap(gameBlock,i1,j1,i2,j2) {
	// [i1][j1] - координаты пустой косточки
	// [i2][j2] - координаты соседней косточки
	var sub = gameBlock[i1][j1];
	gameBlock[i1][j1] = gameBlock[i2][j2];
	gameBlock[i2][j2] = sub;
}


