(function () {

	var Snake=window.Snake=function () {
     //蛇的身体的（坐标 COl ROW）		
     this.body=[
     {"col":4,"row":5},
     {"col":4,"row":6},
     {"col":4,"row":7},
     {"col":4,"row":8},
     {"col":4,"row":9},
     ] ; 
     // /*蛇行走的方法*/
      this.direction="L";
      this.eat=false;
	 }

   //蛇需要渲染自己的身体
   Snake.prototype.changeBodyColor=function () {
      game.render(this.body[0].col,this.body[0].row,"orange");
   	for (var i = 1; i <this.body.length; i++) {
   		game.render(this.body[i].col,this.body[i].row,"red");
     }
   }


   //根据Direction改变方向
   Snake.prototype.upDateMySelf=function () {

           
       switch(this.direction){
          case "U":
              var head={"col":this.body[0].col-1,"row":this.body[0].row};
              break;
          case "D":
              var head={"col":this.body[0].col+1,"row":this.body[0].row};
              break;
          case "L":
              var head={"col":this.body[0].col,"row":this.body[0].row-1};
              break;

           case "R":
              var head={"col":this.body[0].col,"row":this.body[0].row+1};
              break;    

           }
          this.body.unshift(head);

           
           !game.food.eated()&&this.body.pop();


      }
  //改变蛇的方向
  Snake.prototype.changDriection=function (direction) {
           
           //过滤掉一些信息
          if (this.direction=="L"&&direction=="R"||
              this.direction=="R"&&direction=="L"||
              this.direction=="U"&&direction=="D"||
              this.direction=="D"&&direction=="U") {
               return;
          }else{

              this.direction=direction;
          }    
  } 
  
  //判断蛇死没死
  Snake.prototype.gameOver=function () {
    
    if (this.body[0].col==0||this.body[0].row==0) {

      alert("gameover");
    }
  

  }
})()