# Stack game with Cannon.JS

![Stack](../assets/stack.jpg)
Stack is one of those simple, silly, addictive games that you can lose an entire afternoon to if you're not careful. Once we play this game once, we will keep trying to achieve a better scores until we're satisfied enough with the scores. Surprisingly, with three.js and cannon.js, we can make our own web based stack game.

## Step 1 Set up the scenes
First thing to do is generating the scene with three.js.
```js
scene = new THREE.Scene();
```
Then, we add mesh to the scene. Here we use the predefined BoxGeometry to fill our scene. Set up the width, height, and depth of the box.
```js
const geometry = new THREE.BoxGeometry(width, boxHeight, depth);
const color = new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 50%)`);
const material = new THREE.MeshLambertMaterial({ color });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(x, y, z);
scene.add(mesh);
```

## Step 2 Add lights
The scene can only be seen after lights are added. Here, we will add two lights, the ambient and directional light. 

The ambient light is used to give base color for our box. Here we will set the color and intensity.
```js
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
```
On the other hand, the directional light has a similiar setup, but it also has a position. Directional light is like a sun that shines a scene from very far away at the same angle.
```js
const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 20, 0);
scene.add(dirLight);
```
With these two lights, the box should now be clearly visible.

## Step 3 Set up the camera
On this game, we will use orthographic projection, so that things will have the same size no matter how far things are from camera.
```js
const aspect = window.innerWidth / window.innerHeight;
const width = 10;
const height = width / aspect;

camera = new THREE.OrthographicCamera(
width / -2, // left
width / 2, // right
height / 2, // top
height / -2, // bottom
0, // near plane
100 // far plane
);

camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);
```

## Step 4 Render the images to browser
Here we use basic webGL renderer.
```js
// Set up renderer
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);

// Add it to html
document.body.appendChild(renderer.domElement);
```

## Step 5 Setting up the game
To make this game works, we need to prepare the initial function to set up the first box and then call a speific function to keep recreating new boxes while cutting their size and lifting the camera views.
Here is the function "AddLayer" to add new box layers on top of the old ones.
```js
function addLayer(x, z, width, depth, direction) {
  const y = boxHeight * stack.length; // Add the new box one layer higher
  const layer = generateBox(x, y, z, width, depth, false);
  layer.direction = direction;
  stack.push(layer);
}
```
Notice that this function also call the "GenerateBox" function to construct new boxes.
```js
function generateBox(x, y, z, width, depth, falls) {
  // ThreeJS
  const geometry = new THREE.BoxGeometry(width, boxHeight, depth);
  const color = new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 50%)`);
  const material = new THREE.MeshLambertMaterial({ color });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  scene.add(mesh);

  // CannonJS
  const shape = new CANNON.Box(
    new CANNON.Vec3(width / 2, boxHeight / 2, depth / 2)
  );
  let mass = falls ? 5 : 0; // If it shouldn't fall then setting the mass to zero will keep it stationary
  mass *= width / originalBoxSize; // Reduce mass proportionately by size
  mass *= depth / originalBoxSize; // Reduce mass proportionately by size
  const body = new CANNON.Body({ mass, shape });
  body.position.set(x, y, z);
  world.addBody(body);

  return {
    threejs: mesh,
    cannonjs: body,
    width,
    depth
  };
}
```

## Pyhsics Explanation