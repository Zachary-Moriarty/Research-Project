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
		let emotionType = parseInt(document.getElementById('stuborness').value);
		if(agentNum < agents.agents.length){
			let happy = parseFloat(document.getElementById("joyNum").value) / 100;
			let sad = parseFloat(document.getElementById("sadNum").value) / 100;
			let fear = parseFloat(document.getElementById("fearNum").value) / 100;
			let anger = parseFloat(document.getElementById("angerNum").value) / 100;
			agents.agents[agentNum].changeVals([happy, sad, fear, anger]);
			let joyWeights = agents.agents[agentNum].joy.getWeights();
			let sadWeights = agents.agents[agentNum].sad.getWeights();
			let fearWeights = agents.agents[agentNum].fear.getWeights();
			let angerWeights = agents.agents[agentNum].anger.getWeights();
			if(emotionType == 0){
				joyWeights[agentNum * 4] = -1;
				sadWeights[agentNum * 4 + 1] = -1;
				fearWeights[agentNum * 4 + 2] = -1;
				angerWeights[agentNum * 4 + 3] = -1;
			}
			else if(emotionType == 1){
				joyWeights[agentNum * 4] = 1;
				sadWeights[agentNum * 4 + 1] = 1;
				fearWeights[agentNum * 4 + 2] = 1;
				angerWeights[agentNum * 4 + 3] = 1;
			}
			else if(emotionType == 2){
				joyWeights[agentNum * 4] = 2;
				sadWeights[agentNum * 4 + 1] = 2;
				fearWeights[agentNum * 4 + 2] = 2;
				angerWeights[agentNum * 4 + 3] = 2;
			}
			agents.agents[agentNum].joy.setWeights(joyWeights);
			agents.agents[agentNum].sad.setWeights(sadWeights);
			agents.agents[agentNum].fear.setWeights(fearWeights);
			agents.agents[agentNum].anger.setWeights(angerWeights);
			agents.agents[agentNum].joy.changeBias(document.getElementById('joyCheck').checked)
			agents.agents[agentNum].sad.changeBias(document.getElementById('sadCheck').checked)
			agents.agents[agentNum].fear.changeBias(document.getElementById('fearCheck').checked)
			agents.agents[agentNum].anger.changeBias(document.getElementById('angerCheck').checked)
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


