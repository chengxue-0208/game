//子弹类
class Bullet{
	constructor(objGame){
		this.game = objGame;
		// this.stage = document.getElementById(select);
		this.bullet = document.createElement('div');
		this.bullet.className = 'bullet';
		// this.stage.appendChild(this.bullet);
	}
	//获取子弹当前位置
	getPosition(){
		this.bulletX =  parseInt(getStyle(this.bullet, 'left')) ;
		this.bulletY =  parseInt(getStyle(this.bullet, 'top')) ;
		// console.log('获取子弹当前的位置', this.bulletX, this.bulletY);
	}
	//获取当前子弹方向
	getDirection(){
		if(this.bullet.style.transform === 'rotateY(180deg)'){
			this.bullet.direction = 'left';
		}
		
		if(this.bullet.style.transform === 'rotateY(0deg)'){
			this.bullet.direction = 'right';
		}
		// console.log('获取子弹当前的方向', this.bullet.direction);
	}
	//在舞台上生成一个子弹
	createBullet(bulletX,bulletY , direction){
		this.game.stage.appendChild(this.bullet);
		//设置子弹的位置
		this.bullet.style.left = bulletX + 'px';
		this.bullet.style.top = bulletY + 'px';
		//设置子弹的方向
		if(direction === 'left'){
			this.bullet.style.transform = 'rotateY(180deg)';
		}else{
			this.bullet.style.transform = 'rotateY(0deg)';
		}
		this.bulletMove();
		
	}
	//子弹动画函数
	bulletMove(){
		clearInterval(this.timer);
		this.timer = setInterval(()=>{
			//获取子弹当前位置
			this.getPosition();
			//获取子弹射击方向
			this.getDirection();
			//判断子弹是否撞到敌人
			for(let i = 0; i< this.game.enemyList.length; i++){
				if(this.game.isCrash(this.game.enemyList[i] , this)){
					this.bulletMoveStop();
					this.bulletRemove();
					//敌人消失
					this.game.enemyList[i].moveStop();
					this.game.enemyList[i].enemyDie();
					this.game.enemyList.splice(i, 1);
				}
			}

			//判断子弹是否超出舞台，超出需要停止子弹并移除
			if(this.bulletX >= 800 || this.bulletX <= 0){
				this.bulletMoveStop();
				this.bulletRemove();
			}
			switch(this.bullet.direction){
				case 'left':
					this.bullet.style.left = this.bulletX - 10 + 'px' ;
					this.bullet.style.top = this.bulletY  + 'px' ;
					break;
				case 'right':
					this.bullet.style.left = this.bulletX + 10 + 'px' ;
					this.bullet.style.top = this.bulletY  + 'px' ;
					break;
				default:
				    break;
			}
			
		},10);
	}

	
	//子弹动画停止函数
	bulletMoveStop(){
		clearInterval(this.timer);
	}
	//子弹从舞台移除函数
	bulletRemove(){
		this.bullet.remove();
	}

	
}