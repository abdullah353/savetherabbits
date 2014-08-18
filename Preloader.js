BunnyDefender.Preloader = function(game){
	this.preloadBar = null;
	this.titleText = null;
	this.ready = false;

};


BunnyDefender.Preloader.prototype = {
	preload: function(){
		// 
		this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY, 'preloadBar');
		// 
		this.preloadBar.anchor.setTo(0.5, 0.5);
		// Assign to acutal preloader mechanism
		this.load.setPreloadSprite(this.preloadBar);
		// 
		this.titleText = this.add.image(this.world.centerX,this.world.centerY-400, 'titleimage');
		// set the transform point to center of object
		this.titleText.anchor.setTo(0.5, 0.5);
	}

	,create: function(){
		// we don't need to crop 
		this.preloadBar.cropEnabled = false;
	}
	,update: function(){
		// constanly run after create function
		this.ready = true;
	}
};