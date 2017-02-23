'use strict';
	
newGame();					

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
	
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if(i + j != 6) {
				gameBlock[i][j];
			} else {
				gameBlock[i][j] = '';
			}
		}; 
	};
	console.log(gameBlock);
	
	// перемишиваем соседние косточки
	var xi = 3, yj = 3;
	for(let n = 0; n < 500; ++n)
		switch(Math.round(3*Math.random())){
			case 0: if(xi != 0) swap(gameBlock,xi,yj,--xi,yj); break; // top
			case 1: if(yj != 3) swap(gameBlock,xi,yj,xi,++yj); break; // right
			case 2: if(xi != 3) swap(gameBlock,xi,yj,++xi,yj); break; // bootom
			case 3: if(yj != 0) swap(gameBlock,xi,yj,xi,--yj);        // left
		}
	console.log(xi,yj);
	
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			var block = document.createElement("div");	
			field.appendChild(block);
			if(gameBlock[i][j] == '') {
				block.className = "empty";
				block.innerHTML = (gameBlock[i][j]);
			} else {
				block.className = "block";
				block.innerHTML += (gameBlock[i][j]);
			}
		}; 
	};
}

function swap(gameBlock,i1,j1,i2,j2) {
	// [i1][j1] - координаты косточки
	// [i2][j2] - координаты соседней косточки
	let sub = gameBlock[i1][j1];
	gameBlock[i1][j1] = gameBlock[i2][j2];
	gameBlock[i2][j2] = sub;
}
























// создаем массив массивов
/* var number = [];
for(let i = 0; i < 4; i++){
	number[i] = []
	for(let j = 0; j < 4; j++){
		
		var block = document.createElement("div");
        block.className = "block";
		content.appendChild(block);
		
		if(i + j != 6) {
			block.innerHTML += (number[i][j] = i*4 + j + 1);
		} else {
			block.innerHTML = (number[i][j] = "");
		}
	}
	document.write("<br>");
}

var ei = 3;
var ej = 3;
for(let i = 0; i < 1600; ++i)
	switch(Math.round(3*Math.random())){
		case 0: if(ei != 0) swap(number,ei,ej,--ei,ej); break; // up
		case 1: if(ej != 3) swap(number,ei,ej,ei, ++ej); break; // right
		case 2: if(ei != 3) swap(number,ei,ej,++ei,ej); break; // down
		case 3: if(ej != 0) swap(number,ei,ej,ei,--ej); // left
	} */

	/* var numberBlock = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; */
	
	/* $.each(numberBlock, function(index, value){
		var ind = ++index;
		$('.content').append('<div class="block_' + index + '">' + value + '</div>');
    }); */

	/* // премешивание массива в случайном порядке
	function getRandomInt(a, b) {
		return Math.random() - 0.5;
	}
	var numberRandom = numberBlock.sort(getRandomInt);
	
	// перебор массива
	$.each(numberRandom, function(index, value){
		var ind = ++index;
		$('.content').append('<div class="block_' + index + '">' + value + '</div>');
		console.log(index + ' ' + value);
    }); */
	


