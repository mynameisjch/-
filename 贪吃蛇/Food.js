(function () {
	var Food=window.Food=function () {

     while(true){
      this.col=_.random(0,19);
      this.row=_.random(0,19);
      for (var i = 0; i <game.snake.body.length; i++) {
           
      if (this.col==game.snake.body[i].col&&this.row==game.snake.body[i].row) {
           	  break;
            }
     }

       if (i==game.snake.body.length) {
       	break;
     }

  }
      game.innerHTML(this.col,this.row,"$$");
  }
  //判断食物是否吃掉
  Food.prototype.eated=function () {

  	if (game.snake.body[0].col==this.col&&game.snake.body[0].row==this.row) {
             return true;
  	}
     return false;
 }
})()