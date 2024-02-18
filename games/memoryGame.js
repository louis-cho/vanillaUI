import * as PIXI from 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.4/browser/pixi.mjs';

export class MemoryGame {
    constructor(containerElement) {
        this.firstTile = null;
        this.secondTile = null;
        this.canPick = true;

        this.stage = new PIXI.Container();
        this.renderer = PIXI.autoDetectRenderer(640, 480);
        this.renderer.backgroundColor = 0x888888; // Set the background color of the renderer
        this.tileAtlas = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/9729/images.json"];
        this.loader = new PIXI.Loader();
        this.loader.baseUrl = this.tileAtlas[0].substring(0, this.tileAtlas[0].lastIndexOf('/') + 1); // 수정된 부분
        this.gameContainer = new PIXI.Container();
        this.stage.addChild(this.gameContainer);
        containerElement.appendChild(this.renderer.view);

        this.loader.add(this.tileAtlas).load((loader, resources) => this.onTilesLoaded(resources)); // 수정된 부분
    }

    onTilesLoaded(resources) { // 수정된 부분
        let chosenTiles = [];
        for (let i = 0; i < 48; i++) {
            let candidate = Math.floor(Math.random() * 44);
            chosenTiles.push(candidate, candidate);
        }

        for (let i = 0; i < 96; i++) {
            let from = Math.floor(Math.random() * 48);
            let to = Math.floor(Math.random() * 48);
            let tmp = chosenTiles[from];
            chosenTiles[from] = chosenTiles[to];
            chosenTiles[to] = tmp;
        }

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 6; j++) {
                let tile = new PIXI.Sprite(resources[this.tileAtlas[0]].textures[chosenTiles[i * 6 + j]]);
                tile.buttonMode = true;
                tile.interactive = true;
                tile.isSelected = false;
                tile.theVal = chosenTiles[i * 6 + j];
                tile.position.x = 7 + i * 80;
                tile.position.y = 7 + j * 80;
                tile.tint = 0x000000;
                tile.alpha = 0.5;
                this.gameContainer.addChild(tile);

                tile.mousedown = tile.touchstart = (data) => {
                    if (this.canPick && !tile.isSelected) {
                        tile.isSelected = true;
                        tile.tint = 0xffffff;
                        tile.alpha = 1;

                        if (this.firstTile === null) {
                            this.firstTile = tile;
                        } else {
                            this.secondTile = tile;
                            this.canPick = false;

                            setTimeout(() => {
                                if (this.firstTile.theVal === this.secondTile.theVal) {
                                    this.gameContainer.removeChild(this.firstTile);
                                    this.gameContainer.removeChild(this.secondTile);
                                    this.firstTile = null;
                                    this.secondTile = null;
                                    this.canPick = true;
                                } else {
                                    setTimeout(() => {
                                        this.firstTile.isSelected = false;
                                        this.secondTile.isSelected = false;
                                        this.firstTile.tint = 0x000000;
                                        this.secondTile.tint = 0x000000;
                                        this.firstTile.alpha = 0.5;
                                        this.secondTile.alpha = 0.5;
                                        this.firstTile = null;
                                        this.secondTile = null;
                                        this.canPick = true;
                                    }, 1000);
                                }
                            }, 1000);
                        }
                    }
                };
            }
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.stage);
    }
}
