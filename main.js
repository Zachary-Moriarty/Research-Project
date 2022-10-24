const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

const agents = new socialNetwork();


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(agents)
	
	gameEngine.init(ctx);


	agents.buildNetwork('allConnectedSmall');	

	gameEngine.start();
});
