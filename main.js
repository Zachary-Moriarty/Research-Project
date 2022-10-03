const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

const agent1 = new agent();

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);

	gameEngine.start();
});
