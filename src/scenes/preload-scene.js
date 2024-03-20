import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene{
    constructor() {
        super({
            // @ts-ignore
            key: SCENE_KEYS.PRELOAD_SCENE,
            active : true,
        });
        console.log(SCENE_KEYS.PRELOAD_SCENE)
    }

    init() {
        console.log('init');
    }

    preload() {
        this.load.image('background', 'assets/images/monster-tamer/battle-backgrounds/forest-background.png')
    }

    create() {
        console.log('create');
        this.textures.get('preload')
    }

    update() {
        console.log('update');
    }
}