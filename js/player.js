//玩家人物类
class Player{
	constructor(select){
		this.timer;
		this.runStatus = false;
		this.stage = document.getElementById(select);
		this.BulletList = [];
		
		
		
	}
	create(){
		this.p =document.createElement('div');
		this.p.className='player';
		this.p.direction = 'right';
		this.pb=document.createElement('div');
		this.pb.className='playerbody';
		this.pf = document.createElement('div');
		this.pf.className='playerfoot';
		this.p.appendChild(this.pb);
		this.p.appendChild(this.pf);
		this.stage.appendChild(this.p);
		
	}
	//获取人物当前位置
	getPosition(){
		//获取元素的目前为止
		this.playerX =  parseInt(getStyle(this.p, 'left')) ;
		this.playerY =  parseInt(getStyle(this.p, 'top')) ;

	}
	//获取当前人物方向
	getDirection(){
		if(this.p.style.transform === 'rotateY(180deg)'){
			this.p.direction = 'right';
		}
		
		if(this.p.style.transform === 'rotateY(0deg)'){
			this.p.direction = 'left';
		}
	}
	

	//走路动作定义
	run(direction){
		if(!this.runStatus){
			clearInterval(this.timer);
			var i = 2;
			this.timer = setInterval(() => {
				if(i>9) i=2;
				this.runStatus = true;
				// i =2 ;
				this.pf.style.backgroundImage = "url('./img/run ("+i+").png')";
				i++;
				this.move(direction);
			}, 100);
		}

	}
	//开枪动作定义
	shoot(objGame){
			clearInterval(this.timer_shoot);
			var bulletX;
			var bulletY;
			var i = 1;
			this.timer_shoot = setInterval(() => {
				// i =2 ;
				this.pb.style.backgroundImage = "url('./img/shoot ("+i+").png')";
				i++;
				if(i===9){
					clearInterval(this.timer_shoot);
					//创建一个子弹
				    const div = new Bullet(objGame);
					this.BulletList.unshift(div.bullet) 
					//获取当前人物开枪位置
					//获取元素的目前为止
					this.getPosition();
					this.getDirection();
					if(this.p.direction === 'left'){
						 bulletX = this.playerX - 50;
						 bulletY = this.playerY + 50;
					}else{
						 bulletX = this.playerX + 150;
						 bulletY = this.playerY + 50;
					}
					div.createBullet(bulletX, bulletY, this.p.direction);
				}
			}, 50);
	}
	//停止走路
	runStop(){
		clearInterval(this.timer);
		this.runStatus = false;
	}
	//控制走路方向函数
	direction(d){
		if(d==='d'){
			this.p.style.transform = 'rotateY(180deg)';
		}
		if(d==='a'){
			this.p.style.transform = 'rotateY(0deg)';
		}
	}
	//按下按键移动player人物位置
	move(direction){
		
		//根据需要键盘位置移动方向
		switch(direction){
			case 'left':
				this.x= this.p.offsetLeft -5;
				this.y= this.p.offsetTop;
				break;
			case 'right':
				this.x= this.p.offsetLeft +5;
				this.y= this.p.offsetTop;
				break;
			case 'top':
				this.x= this.p.offsetLeft ;
				this.y= this.p.offsetTop -5;
				break;
			case 'bottom':
				this.x= this.p.offsetLeft;
				this.y= this.p.offsetTop +5;
				break;
			default:
			break;
			
		}
		
		//赋值
		this.p.style.left = this.x + 'px';
		this.p.style.top = this.y + 'px';
	}
	getName(){
		return this.name;
	}
	getScore(){
		return this.score;
	}
	
}