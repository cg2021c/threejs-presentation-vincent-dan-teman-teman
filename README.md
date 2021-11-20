# Adding Physics in Three.js

Group 8 : Vincent dan teman teman

Members  | NRP  | 
---------|------
Frans Wijaya | 0511194000
Vincent Yonathan | 05111940000186
Christian Bennett | 05111940000078
Adrian Santoso | 0511194000
Bill Harit | 0511194000
Jason Gunawan | 0511194000

## Introduction to Physics in Three.js
Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.

Physics is always important in 3D graphics. It makes scenes more realistic. If you simply put your object into the scene, it will move nicely and realistically. So you spend less time tuning each move.

There are some Physics Laws that can be used in 3D Graphics to make it simply stunning. Those are :
- Lighting
- Torque
- Rotation
- Collision
- Linear Movement
- Friction (Gravitational or Linear)
- And many more!

Some games and movies even implement this in the making of 3D Graphics. Especially nowadays, a game/movie will be less interesting and spectacular without 3D Graphics. Let’s say
Games like Grand Theft Auto V, Black Myth, Red Dead Redemption and God Of War.

![Grand Theft Auto V](./Ammo.JS/images/Grand_Theft_Auto_V.png)
![Red Dead Redemption](./Ammo.JS/images/God_of_War_4_cover.jpg)
![God Of War](./Ammo.JS/images/Red_Dead_Redemption.jpg)

Those games will implement dozens of Physical Laws to make a stunning view and/or effects. Let’s say in Grand Theft Auto V, the cars have a break and gas to stop and move which implements the Physics Law of Linear Movement. Or falling from a building that will pull the player toward the center of the plane, which obeys the Gravitational Law of Physics. Or just simply get crashed by a car or punched by people, the system will be able to detect what is called a collision. Even a simple game like Tetris, Pacman both obeys the laws of Physics.

Whilst, some game modes purposely don’t obey the law of Physics like Creative Mode in Minecraft where the player can fly or create a block way high above the sky or in the sea without the block falling. It was all made to have some fun that we can’t have in the real world. Without further ado, let’s dive into some of it in three.js.


