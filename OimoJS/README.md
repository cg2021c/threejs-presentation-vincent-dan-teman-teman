# Oimo JS

## Contents of the Presentation

* [Introduction to Oimo.js](#introduction-to-oimojs)
* [Terms in Oimo.js](#terms-in-oimojs)
* [Coding and Explanation](#coding-and-explanation)

---

## Introduction to Oimo.js

### What is Oimo.js 🤔

Oimo.js is a lightweight 3d physics engine for JavaScript. It's a full javascript conversion of OimoPhysics. Originally created by Saharan for actionscript 3.0.

- It is really simple to use
- Lack of Documentation. (Still in progress it says)

- [Github Docs](https://github.com/lo-th/Oimo.js/)
- [Oimo.js Demo](http://lo-th.github.io/Oimo.js/#basic)


## Terms in Oimo.js

### World
World is the container of physics simulation.
#### Attribute
- **timestep** (the time between each step default 1/60 is 60 frame second)
- **iterations** (the number of iterations for constraint solvers.)
- **broadphase** (the simulation collision algorithm 1: brute force, 2: sweep &amp; prune, 3: volume tree)
- **worldscale** (world system units is 0.1 to 10 meters max for dynamic body can be multiplied by this number)
- **random** (use extra random number in simulation)
- **info** (enable timing for display accurate simulation statistic)
- **gravity** (an array to define the start gravity [ x, y, z ])

#### Function
- world.step() Proceed only time step seconds time of World
- world.clear() Reset the world and remove all rigid bodies, shapes, joints and any object from the world
- world.getinfo() return string of simulation statistic if enable
- world.setgravity( [ x, y, x] ) set array world gravity 
- world.add({}) add someting to world, return 

#### Example
```javascript
world = new OIMO.World({ 
    timestep: 1/60, 
    iterations: 8, 
    broadphase: 2, // 1 brute force, 2 sweep and prune, 3 volume tree
    worldscale: 1, // scale full world 
    random: true,  // randomize sample
    info: false,   // calculate statistic or not
    gravity: [0,-9.8,0] 
});
```

### Object or Joint

Object is a physical object that resides in the world such as Sphere, Box, Cylinder.

#### Attribute
```javascript
    type:'sphere', // type of shape : sphere, box, cylinder 
    size:[1,1,1], // size of shape
    pos:[0,0,0], // start position in degree
    rot:[0,0,90], // start rotation in degree
    move:true, // dynamic or statique
    density: 1,
    friction: 0.2,
    restitution: 0.2,
    belongsTo: 1, // The bits of the collision groups to which the shape belongs.
    collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
```

## Coding and Explanation

