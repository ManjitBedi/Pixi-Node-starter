This is a basic start project for using [PixiJS](https://pixijs.com) verion 8 with Node.js & Typescript.

There are various things that were required to be configured to get it to build.

## Notes

A single sprite of s rabbit is displayed on screen.

```
const textures = await Assets.load('https://pixijs.com/assets/bunny.png');
// Create a sprite from the imported PNG file
const sprite = Sprite.from(textures);
sprite.x = 100;
sprite.y = 100;
container.addChild(sprite);
```

The HTML is being overlaid on top of the canvas component, from the CSS.

```
  #pixiCanvas {
	position: absolute;
	display: block;
	z-index: 0;
  }
  
  #htmlOverlay {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
  }
```

## TODO
There are some deprecations in PixiJS that I will get to...

