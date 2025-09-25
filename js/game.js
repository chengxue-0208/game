//游戏类
class Game{
	constructor(select){
		this.stage = document.getElementById(select);
		this.player = new Player(select);
		this.player.create();
		this.enemy = new Enemy(select);
		this.enemyList = [];
		this.enemyList.push(this.enemy);
		//this.generateEnemy(select);
		
	}
	//随机生成敌人
	generateEnemy(select){
		//随机数生成

		this.timerGenerateEnemy = setInterval(() => {
			let n1 = Math.floor(Math.random()*160);
			let n2 = Math.floor(Math.random()*2);
			if(n2 === 1){
				const enemy = new Enemy(select);
				this.enemyList.push(enemy);
				enemy.createEnemy( 15 , n1 + 310, 'right');
			}else{
				const enemy = new Enemy(select);
				this.enemyList.push(enemy);
				enemy.createEnemy( 550 , n1 + 310, 'left');
			}
		},3000);
		
	}
	
	//判断子弹是否撞到敌人或玩家
	isCrash(objEnemy, objBullet){
		objEnemy.getPosition();
		
		var x,y,w,h;
		x = objEnemy.enemyX;
		y =  objEnemy.enemyY;
		w = x + 90 ;
		h = y + 77;
		objBullet.getPosition();
		if(objBullet.bulletX > x && objBullet.bulletX < w && objBullet.bulletY > y && objBullet.bulletY < h){
			return true;
		};
		return false;
		
	}
}