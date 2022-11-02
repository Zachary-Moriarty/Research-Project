const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

const agents = new socialNetwork();


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(agents)
	//gameEngine.addEntity(new nueron([1,1,1,1]))
	gameEngine.init(ctx);

	const run = document.getElementById("Run");
	const stop = document.getElementById("stop");
	const choice = document.getElementById("networks");
	const step = document.getElementById("step");
	const reset = document.getElementById("reset");
	var flag = false;

	agents.buildNetwork('allConnectedSmall');	

	run.addEventListener("click", function(e){
		flag = true;
		startLoop();
	});

	stop.addEventListener("click", function(e){
		flag = false;
	});

	step.addEventListener("click", function(e){
		agents.run();
	});

	reset.addEventListener("click", function(e){
		let network = choice.options[choice.selectedIndex].text;
		agents.buildNetwork(network);
	});
	function startLoop(){
		if(flag == true){
			agents.run();
			setTimeout(startLoop, 500);
		}
	}
	gameEngine.start();
});


