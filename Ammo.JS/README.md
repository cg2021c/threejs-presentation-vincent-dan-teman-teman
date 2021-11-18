# Introduction to Physical Simulations with Three.js and Ammo.js

## Contents of the Presentation

* [Introduction to Ammo.js](#introduction-to-ammojs)
* [Terms in Ammo.js](#terms-in-ammojs)
* [Coding and Explanation](#coding-and-explanation)

---

## Introduction to Ammo.js

### What is Ammo.js 🤔

Ammo.js is one of the most powerful JavaScript Physics Engine available, created to help the user create two dimensional Physics Simulation to an object.
- Ammo.js has an interesting pedigree as it actually is a direct JavaScript port of *Bullet3D*.

- *Bullet3D* itself is a powerful open source C++ based Physics Engine which has been used in video games and also movies.

- **Ammo** actually stands for "Avoided Making My Own js physics engine by compiling BulletJs from C++". (No Jokes, try searching for it)

- The creator of Ammo.js is never stated, but the code can be found in the [Github Repository](https://github.com/kripken/ammo.js) created by an user **kripken** with 40+ Authors which contribute in the creation of this engine.

---

## Terms in Ammo.js

### Physical World 🌍

There has to be a world that obeys the laws of physics except that in a parallel Universe that has its own set of Physical Laws.
- The definition of Physical World simply means the world where the physics simulation will take place in.

- In Ammo.js this world is called a Collision World and has among its derivatives the Dynamic World.

- This physics world has options to set gravity and expose functions and objects so it can create a physics simulation within an objects.

---

### Rigid Body 

Physics is a study about matters, in which there has to be a body alongside with the mass, density, etc.  

- In ammo.js this body is called a **Collision Object** or a **Rigid Body** which moves, collides, has a mass and has an impulse applied to it.

- Rigid Body is idealised representation of a body in which deformation is ignored. This means that a shape which doesn't change, and can be manipulated via certain properties.

- The default rigid body is formless and it needed a shape to interact in Physical Simulation and calculate the *Inertia Tensor*.

Examples of **Rigid Body** 
* Position and orientation

* Linear velocity

* Angular velocity

* Forces and impulses

* Torques and torque impulses

---

### Types of Rigid Body

#### Rigid Body : Dynamic

Dynamic rigid bodies have mass greater than zero and will move around being affected by the forces and laws governing the physics world. The object will be affected by gravity, impulse, and would respond appropriately to collisions from other bodies.

Examples :
- Billiard/Snooker Game 
- FPS Shooting Game

#### Rigid Body : Static

Static rigid bodies are just what their name says which is static and can never be moved by the user. The requirements to be a static rigid body is having the mass of 0.

Examples :
- The Billiard Table
- The Ground

#### Rigid Body : Kinematic

Kinematic objects are static objects that can be moved by the user. The object will not be affected by any force from the physics world not even gravity, they are just there.

Example :
- A Floating Block in Minecraft

---

### Collision

Collision happens when two or more object encounters resulting in exchange or transformation of energy. In this Physics, there are 2 topics that covers the collision

#### Collision Detection

Collision Detection is about detecting when two or more objects collide.
Example :
- Deducting the health of the boss for every successful attack (The sword/bullet collide with the boss body).

#### Collision Filtering

Collision Filtering sets which objects should collide and which should not. This is important to set an object which can collide and which doesn't. In Ammo.js, *Masks* is used for this kind of condition.<br>
Every rigid body in ammo.js has a bitwise masks collision group and collision mask. The collision group represents the collision identity group of the rigid body while the collision mask represents other collision identity groups that should be collided with. 

Principal of Collision in Ammo.js is "**collision between two object can only occur if a bitwise AND operation between the collision mask of A and the collision group of B is anything but zero and vice versa.**"

Rigid Body  | Collision Group    | Collision Mask
------------|--------------------|----------------
A | 0010 | 0001
B | 0011 | 0010
C | 0101 | 0011

Can you determine which Rigid Body will collide and which won't?

---

### Constraints

A constraint component connects two rigid bodies together or connects a rigid body to a static point in the world. 
<br>
The types of joints supported by Ammo.js 
#### Point to Point (P2P)
Point to point constraint limits the translation so that the local pivot points of two rigid bodies match in worldspace. A chain of rigid bodies can be connected using this constraint.

![P2P Constraint](./images/P2P.png)

#### Hinge Constraints

Hinge constraint/ Revolute joint restricts two additional angular degrees of freedom, so the body can only rotate around one axis, the hinge axis. This can be useful to represent doors or wheels rotating around one axis.

![Hinge Constraint](./images/Hinge.png)

#### Slider Constraints

The slider constraint allows the body to rotate around one axis and translate along this axis.

![Slider Constraint](./images/Slider.png)

#### Cone Twist Constraints

This is a special point to point constraint that adds cone and twist axis limits. x-axis serves as a twist axis. This is useful for making joints like the upper arm’s joint.

---
## Coding and Explanation

To demonstrate the Physical Simulation using Three.js and Ammo.js, Follow this 4 ~~distressing~~ simple steps!
