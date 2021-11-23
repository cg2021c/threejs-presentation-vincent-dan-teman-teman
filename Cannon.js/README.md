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

## Basic Concepts
- Shape : A geometrical shape, such as a sphere, cube or plane, used for the the physics calculations.
- Rigid Body : A rigid body has a shape and a number of other properties used in the calculations such as mass and inertia.
- Constraint : A 3D body has 6 degrees of freedom, 3 for position and three to describe the rotation vector. A constraint is a limit on one of the degrees of freedom.
- Contact constraint : A type of constraint to simulate friction and restitution. These are like the faces of an object where the constraint is applied.
- World : A collection of bodies and constraints that interact together.
- Solver : The algorithm that is passed over the bodies and constraints to calculate there physical properties and adjust them accordingly.

## Collision Detection
Collision detection algorithms determine what pairs of objects may be colliding. Collision detection is a computationally expensive process, so various methods can be used to simplify the collision detection.

- Narrowphase : Outright body vs body collision detection. This is the most computationally expensive.
- Broadphase : Is a compromise on Narrowphase where various other techniques can be used to improve collision detection performance.

To know more about broadphase, you may visit this https://sbcode.net/threejs/physics-cannonjs/.