    import { Application, Container, Assets, Sprite } from 'pixi.js';
    import './styles.css';

    // A very simple example of creating an app using PixiJS

    // TODO: refactor - view is deprecated in this context
    const canvas = document.getElementById('pixiCanvas') as HTMLCanvasElement;
    const app = new Application();
    await app.init({ 
      view: canvas
    })

    // Add the view to the DOM
    document.body.appendChild(app.canvas);
  
    app.renderer.background.color = 0x2980b9;

    // Create and add a container to the stage
    const container = new Container();
    app.stage.addChild(container);

    // TODO: get this working with local assets
    const textures = await Assets.load('https://pixijs.com/assets/bunny.png');

    // Assets.add({ alias: 'dog', src: './assets/dog.png' });
    // // Load the assets
    // const textures = await Assets.load(['dog']);  
  
    // Create a sprite from the imported PNG file
    const sprite = Sprite.from(textures);
    sprite.x = 100;
    sprite.y = 100;
    container.addChild(sprite);

    // Listen for animate update
    app.ticker.add((time) =>
    {
      // TODO: do something
    });

