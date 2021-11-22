// Get Container From HTML
var container;
// Variable for Camera, Scene, And Renderer
var camera, scene, renderer;
// For Oimojs World
var world;
// Trackball for Camera
var trackball;
// Variable for Ground
var meshGround;
var groundBody;
// Variable for Cube
var meshCube;
var body;
// Variable for Ball
var meshBall;
var bodyBall;

// Oimojs
function initOimo() {
    world = new OIMO.World({ 
        timestep: 1/30, 
        iterations: 8, 
        broadphase: 2, // 1 brute force, 2 sweep and prune, 3 volume tree
        worldscale: 1, // scale full world 
        random: true,  // randomize sample
        info: false,   // calculate statistic or not
        gravity: [0,-9.8,0] 
    });

    // Ground
    var groundBody = world.add({
        type: "box",
        size: [200, 2, 200],
        pos: [0, -20, 0],
        rot: [0, 0, 0],
        move: false,
        density: 1,
        friction: 0.5,
        restitution: 0.1,
    });
    // Cube
    body = world.add({
        type: "box",
        size: [50, 50, 50],
        pos: [0, 100, 0],
        rot: [45, 45, 0],
        move: true,
        density: 1,
        friction: 0.5,
        restitution: 0.2
    });
    // Ball
    bodyBall = world.add({
        type: "sphere",
        size: [20, 32, 16],
        pos: [0, 50, 0],
        rot: [45, 45, 0],
        move: true,
        density: 1,
        friction: 0.5,
        restitution: 0.2
    });
}

// Threejs
function initThree() {
    // Container
    container = document.getElementById('container');

    // Camera and Scene
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.y = 100;
    camera.position.z = 400;
    scene = new THREE.Scene();

    // Texture Loader
    var loader = new THREE.TextureLoader();
    var texturejaprun = loader.load('img/japrun.jpg');  
    var textureground = loader.load('img/woodentexture.jpg');
    var textureishaq = loader.load('img/ishaq.jpg');

    // Material Texture
    var material = new THREE.MeshBasicMaterial({map: texturejaprun});
    var groundmaterial = new THREE.MeshBasicMaterial({map: textureground});
    var ballmaterial = new THREE.MeshBasicMaterial({map: textureishaq});

    // Ground Object
    var geometryGround = new THREE.BoxGeometry(200, 2, 200);
    meshGround = new THREE.Mesh(geometryGround, groundmaterial);
    meshGround.position.y = -20;
    scene.add(meshGround);

    // Cube Object
    var geometryCube = new THREE.BoxGeometry(50, 50, 50);
    meshCube = new THREE.Mesh(geometryCube, material);
    scene.add(meshCube);

    // Ball Object
    var geometryBall = new THREE.SphereGeometry(20, 32, 16);
    meshBall = new THREE.Mesh(geometryBall, ballmaterial);
    scene.add(meshBall);

    // Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Trackball for Camera
    trackball = new THREE.TrackballControls(camera);
}

// Animate Function
function animate() {
    trackball.update();
    requestAnimationFrame(animate);
    updatePhysics();
    render();
}

// Sync Model & Physics
function updatePhysics() {
    world.step();

    // Cube 
    meshCube.position.x = body.position.x;
    meshCube.position.y = body.position.y;
    meshCube.position.z = body.position.z;
    meshCube.quaternion.x = body.quaternion.x;
    meshCube.quaternion.y = body.quaternion.y;
    meshCube.quaternion.z = body.quaternion.z;
    meshCube.quaternion.w = body.quaternion.w;

    // Ball
    meshBall.position.x = bodyBall.position.x;
    meshBall.position.y = bodyBall.position.y;
    meshBall.position.z = bodyBall.position.z;
    meshBall.quaternion.x = bodyBall.quaternion.x;
    meshBall.quaternion.y = bodyBall.quaternion.y;
    meshBall.quaternion.z = bodyBall.quaternion.z;
    meshBall.quaternion.w = bodyBall.quaternion.w;
   
}

// render Function
function render() {
    renderer.render(scene, camera);
}

// Run the Function
initOimo();
initThree();
animate();