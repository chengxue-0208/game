//敌人类
class Enemy{
	constructor(select){
		this.stage = document.getElementById(select);
		this.enemy = document.createElement('div');
		this.enemy.className = 'enemy';
		this.enemyX = 100 ;
		this.enemyY = 400 ;
		this.direction = 'left';
		
	}
	//获取当前敌人区域位置
	
	getPosition(){
		this.enemyX =  parseInt(getStyle(this.enemy, 'left')) ;
		this.enemyY =  parseInt(getStyle(this.enemy, 'top')) ;
		// console.log('获取敌人当前的位置', this.enemyX, this.enemyY);
	}
	
	//获取当前敌人走路方向
	getDirection(){
		if(this.enemy.style.transform === 'rotateY(0deg)'){
			this.direction = 'left';
		}
		
		if(this.enemy.style.transform === 'rotateY(180deg)'){
			this.direction = 'right';
		}
		
	}
	
	
	//在舞台上创建一个敌人
	/**
	 * @param {Object} enemyX 元素横坐标
	 * @param {Object} enemyY 元素纵坐标
	 * @param {Object} direction 移动方向
	 */
	createEnemy(enemyX,enemyY ,direction){
		this.stage.appendChild(this.enemy);
		this.enemy.style.left = enemyX + 'px';
		this.enemy.style.top = enemyY + 'px';
		this.direction = direction;
		switch(direction){
			case 'left':
				this.enemy.style.transform = 'rotateY(0deg)';
				break;
			case 'right':
				this.enemy.style.transform = 'rotateY(180deg)';
				break;
			default:
				break;
			
		}
		this.run();
	}
	//敌人走路定义
	run(){
			clearInterval(this.timer);
			var i = 1;
			this.timer = setInterval(() => {
				if(i>10) i=1;
				// i =2 ;
				this.enemy.style.backgroundImage = "url('./img/enemy ("+i+").png')";
				i++;
				if(i%4 === 1){
					this.move();
				}
				
			}, 100);
		
	}
	//移动动画函数
	move(){
		//获取当前位置
		this.getPosition();
		//获取当前方向
		this.getDirection();
		
		switch(this.direction){
			case 'left':
				this.enemy.style.left = this.enemyX - 10 + 'px';
				this.enemy.style.top = this.enemyY + 'px';
				break;
			case 'right':
				this.enemy.style.left = this.enemyX + 10 + 'px';
				this.enemy.style.top = this.enemyY + 'px';
				break;
			default:
				break;
		}
		
	}
	//移动停止动画函数
	moveStop(){
		clearInterval(this.timer);
	}
	//敌人死亡消失函数
	enemyDie(){
		this.enemy.remove();
	}
	
	
}
