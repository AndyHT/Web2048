var documentWidth = window.screen.availWidth;
var gridContainerWidth = 0.92 * documentWidth;
var cellSideLength = 0.18 * documentWidth;
var cellSpace = 0.04 * documentWidth;

function getPosTop(i, j){
	return cellSpace + i*(cellSpace + cellSideLength);
}

function getPosLeft(i, j){
	return cellSpace + j*(cellSpace + cellSideLength);
}

function getNumberBackgroundColor(number){
	switch(number){
		case 2:return "rgb(227,217,203)";break;
        case 4:return "rgb(223,209,187)";break;
        case 8:return "rgb(213,161,123)";break;
        case 16:return "rgb(211,139,108)";break;
        case 32:return "rgb(206,122,104)";break;
        case 64:return "rgb(203,104,85)";break;
        case 128:return "rgb(212,186,123)";break;
        case 256:return "rgb(213,183,113)";break;
        case 512:return "rgb(212,180,106)";break;
        case 1024:return "rgb(206,174,104)";break;
        case 2048:return "rgb(205,169,98)";break;
        case 4096:return "rgb(203,164,93)";break;
        case 8192:return "rgb(198,159,88)";break;
	}

	return "black"
}

function getNumberColor(number){
	if (number <= 4) {
		return "#776e65";
	};
		return "#ffffff";
}

function nospace(board){
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j] == 0) {
				return false;
			};
		};
	};
	return true;
}


function canMoveLeft(board){
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if (board[i][j] != 0) {
				if (board[i][j-1] == 0 || board[i][j-1] == board[i][j]) {
					return true;
				};
			};
		};
	};
	return false;
}

function canMoveUp(board){
	for (var i = 1; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j] != 0) {
				if (board[i-1][j] == 0 || board[i-1][j] == board[i][j]) {
					return true;
				};
			};
		};
	};
	return false;
}

function canMoveRight(board){
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 3; j++) {
			if (board[i][j] != 0) {
				if (board[i][j+1] == 0 || board[i][j+1] == board[i][j]) {
					return true;
				};
			};
		};
	};
	return false;
}

function canMoveDown(board){
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j] != 0) {
				if (board[i+1][j] == 0 || board[i+1][j] == board[i][j]) {
					return true;
				};
			};
		};
	};
	return false;
}

function noBlockHorizontal(raw, col1, col2, board){
	for (var i = col1+1; i < col2; i++) {
		if (board[raw][i] != 0) {
			return false;
		};
	};
	return true;
}

function noBlockVertical(raw1, raw2, col, board){
	for (var i = raw1+1; i < raw2; i++) {
		if (board[i][col] != 0) {
			return false;
		};
	};
	return true;
}

function gameover(){
	if (canMoveDown(board)||canMoveLeft(board)||canMoveRight(board)||canMoveUp(board)) {
		return false;
	};
	return true;
}
