//first declear an actual refernce to the game
var BunnyDefender = {}
//Define Boot state
//Boot should match filename and game is in index.html
BunnyDefender.Boot = function (game){

};

BunnyDefender.Boot.prototype = {
	preload: function(){
		//load assessts

		this.load.image('preloadBar','images/loader_bar.png');
		this.load.image('titleimage','images/TitleImage.png');
	}

	,create: function(){
		// this refers to the game
		this.input.maxPointer = 1; //Only have on pointer
		this.stage.disableVisibilityChange = false; //on focus out pause the game
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;//shoe visibilty put side of box
		this.scale.minWidth = 270;
		this.scale.minHeight = 480;
		//Center game
		this.scale.pageAlignVertical = true;
		this.scale.pageAlignHorizontally = true;
		
		this.scale.forcePortrait = true;//force portrait mode
		this.scale.setScreenSize(true);//force screen size

		this.input.addPointer(); //add Pointer
		this.stage.backgroundColor = '#171642';//add Background

		//launching prelpader
		this.state.start('Preloader');	
	}
};