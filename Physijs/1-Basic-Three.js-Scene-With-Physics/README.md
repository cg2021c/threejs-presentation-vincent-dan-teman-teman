# Basic Three.js Scene with Physics
> Dominos, falling...

<img src="img/domino.png" width="150">

In this example, a scene will be created that's going to simulate domino tiles that will start falling down as soon as the scene is loaded. The complete physics of this scene is managed by Physijs.

The [code](https://github.com/cg2021c/threejs-presentation-vincent-dan-teman-teman/blob/main/Physijs/Code/src/chapter-12/js/12-01.js) 
and [preview](https://cg2021c.github.io/threejs-presentation-vincent-dan-teman-teman/Physijs/Code/src/chapter-12/01-dominos.html) for this section.

## Step 1: Define a Physijs scene
To configure Physijs the following property will be added in the script.
```js
Physijs.scripts.worker = '../../libs/other/physijs/physijs_worker.js';
Physijs.scripts.ammo = './ammo.js';
```
Defining a Physijs scene:
```js
...
var scene = new Physijs.Scene;
initDefaultLighting(scene);
scene.add(new THREE.AmbientLight(0x0393939));
...
```
## Step 2: Define the ground area that holds the dominos
The code snippet below will define the sandbox that contains all the dominos. There will be borders made from boxes.
```js
...
function createGroundAndWalls(scene) {
  var textureLoader = new THREE.TextureLoader();
  var ground_material = Physijs.createMaterial(
          new THREE.MeshStandardMaterial(
            {map: textureLoader.load('../../assets/textures/general/wood-2.jpg')}
          ),
          .9, .3);
...
```
## Step 3: Place the dominos
The dominos will be placed by creating `THREE.BoxGeometry` instances that's wrapped inside `BoxMesh` and place them at a specific position on top of the ground.
```js
var stoneGeom = new THREE.BoxGeometry(0.6, 6, 2);
var stone = new Physijs.BoxMesh(stoneGeom, Physijs.createMaterial(new THREE.MeshStandardMaterial({
color: colors[index % colors.length], transparent: true, opacity: 0.8
})));
stone.position.copy(point); // point is the location where to position the stone
stone.lookAt(scene.position);
stone.__dirtyRotation = true;
stone.position.y=3.5;
scene.add(stone);
```
## Step 4: Tip over the first domino
To tip over the first domino, its rotation on the x axis will be set go 0.2 which will tip it slightly. The scene's gravity will do the rest and tip over the first domino.
```js
...
stones[0].rotation.x = 0.2;
stones[0].__dirtyRotation = true;
...
```