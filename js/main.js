function getStyle(obj, name){
		return getComputedStyle(obj,null)[name];
}



window.onload = function(){
	
	var game = new Game('stage');
	
	const start = document.getElementById('start');
	const pause = document.getElementById('pause');
	const restart = document.getElementById('restart');
	
		start.onclick = function(){
			game.start('stage');
		}
		pause.onclick = function(){
			game.pause();
		}
		pause.onclick = function(){
			game.restart();
		}
	
	//定义一个键盘
	document.onkeydown = function(e){
							switch(e.key){
								case 'ArrowDown':
									game.player.run('bottom');
									break;
								case 'ArrowUp':
									game.player.run('top');
									break;
								case 'ArrowRight':
									game.player.run('right');
									break;
								case 'ArrowLeft':
									game.player.run('left');
									break;
								case 'd':
									game.player.direction(e.key);
									break;
								case 'a':
									game.player.direction(e.key);
									break;
								case 's':
									game.player.shoot(game);
									break;
								default:
									break;
								
							}
						}
	document.onkeyup = function(e){
		
		switch(e.key){
			case 'ArrowDown':
			case 'ArrowUp':
			case 'ArrowRight':
			case 'ArrowLeft':
				game.player.runStop();
				break;
			default:
				break;
				}
	}
	
}
