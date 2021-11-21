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
- world.step() 
- world.clear()
- world.getinfo()
- world.setgravity( [ x, y, x] )
- world.add({})

## Coding and Explanation

