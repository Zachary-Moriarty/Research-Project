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
	const networkType = document.getElementById("networks");
	const initialType = document.getElementById("initialVals");
	const step = document.getElementById("step");
	const reset = document.getElementById("reset");
	const set = document.getElementById("set");
	var flag = false;

	agents.buildNetwork('allConnectedSmall', 8, 0);	

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
		flag = false;
		let network = networkType.options[networkType.selectedIndex].text;
		let initial = initialType.options[initialType.selectedIndex].value;
		let slope = parseInt(document.getElementById("steepness").value);
		agents.buildNetwork(network, slope, initial);
	});

	set.addEventListener("click", function(e){
		let agentNum = parseInt(document.getElementById('agentNum').value);
		if(agentNum < agents.agents.length){
			let happy = parseFloat(document.getElementById("joyNum").value);
			let sad = parseFloat(document.getElementById("sadNum").value);
			let fear = parseFloat(document.getElementById("fearNum").value);
			let anger = parseFloat(document.getElementById("angerNum").value);
			agents.agents[agentNum].changeVals([happy, sad, fear, anger]);
		}
	})

	function startLoop(){
		if(flag == true){
			agents.run();
			setTimeout(startLoop, 500);
		}
	}
	gameEngine.start();
});


