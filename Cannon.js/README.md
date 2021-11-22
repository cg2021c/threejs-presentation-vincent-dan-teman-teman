# About Cannon.js

## Lightweight 3D physics for the web
Inspired by three.js and ammo.js, and driven by the fact that the web lacks a physics engine, here comes cannon.js. The rigid body physics engine includes simple collision detection, various body shapes, contacts, friction and constraints.

## How it works
Cannon.js can calculate physics phenomenon, but it only calculates the numbers. That's why three.js is needed. In most cases, Cannon.js will handle positions and orientations updates. While three.js will sync the position and orientation from cannon.js and then render the scene. Cannon.js is like the brain and three.js is the body that will animate the action.

## Features
- Lightweight, smaller file size than many ported physics engines.
- 100% open source JavaScript, written from scratch.
- Uses an iterative Gauss-Seidel solver to solve constraints.
- Uses the SPOOK stepper.