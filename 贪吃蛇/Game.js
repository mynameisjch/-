(function () {
	  var Game=window.Game=function () {
	 	//游戏创建的表格
	 	this.table=null;
	 	this.tr=null;
	 	this.td=null;
	 	this.init();
	 	this.snake=new Snake();
         this.food=null; 
	 	//开始游戏
	 	this.start();
	 	//游戏监听键盘事件
	 	this.binEvent();
	 	
	  }
	    //初始化游戏界面
	  Game.prototype.init=function () {
	  	this.table=document.createElement("table");
	  	document.body.appendChild(this.table);
	  	//创建表格
	  	for (var i = 0; i <20; i++) {
            this.tr=document.createElement("tr");
            this.table.appendChild(this.tr);
	    for (var j= 0; j <20; j++) {
             this.td=document.createElement("td");
             this.tr.appendChild(this.td); 
	     }
	   }
	 }

    //游戏类渲染小格子
    Game.prototype.render=function (x,y,color) {

    document.getElementsByTagName("tr")[x].getElementsByTagName("td")[y].style.backgroundColor=color;
    }

   //游戏里面放食物
   Game.prototype.innerHTML=function (col,row,HTML) {

   	document.getElementsByTagName("tr")[col].getElementsByTagName("td")[row].innerHTML=HTML;

   }
   //每帧都要清空小格子的颜色
   Game.prototype.clearTdColor=function () {
    for (var i = 0; i <20; i++) {
    	 for (var j = 0; j <20; j++) {
    	    this.render(i,j,"white");
    	    }   
        }
   } 
  //开始游戏
  Game.prototype.start=function () {

       var self =this;
       var frame=0;
        //异步操作
      var timer=setInterval(function () {
        if (!self.food) {

              self.food=new Food();

          }
         frame++;
         document.getElementById("info").innerHTML="帧数:"+frame;	
         //每帧清空小格子	
         self.clearTdColor(); 
        
          self.snake.gameOver();
           //更新自己
        self.snake.upDateMySelf();

        //渲染自己
        self.snake.changeBodyColor();

         
          if (self.food.eated()) {
          	
              //改变食物的有没有
             self.innerHTML(self.food.col,self.food.row,"");

          	 self.food=null;
          	 //重新的位置
          	 self.food=new Food();
          }


        },500);
     

  }
  //监听键盘事件
  Game.prototype.binEvent=function () {

         var self=this;  
      //当键盘被按下的时候
  	 document.onkeydown=function (event) {
         var e =event;
        switch(e.keyCode){
        case 37:
           self.snake.changDriection("L");
           break;
         case 38:
           self.snake.changDriection("U");
           break;  
          case 39:
           self.snake.changDriection("R");
           break; 
           case 40:
          self.snake.changDriection("D");
           break;   
        }
     }
  }
})()