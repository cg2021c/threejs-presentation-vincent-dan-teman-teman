# Physijs
> Physics plugin for three.js

## Introduction
In a nutshell, **Physijs** is a wrapper built on top of `Ammo.js` which makes it easier to use for graphic newbies to get into 3D programming. That's why it is necessary to include the `Ammo.js` physics engine.

## What's new?
**Physijs** runs all of its computations on a separate thread, via web worker, instead of the *render thread*. This is done to avoid frame rate drops that could happen in a scene that's being rendered inside an application.

**Features**:
- Support for multiple object shapes, including convex objects and heightfields.
- Material system provides simple control over friction and restitution ("bounciness")
- Integrated collision detection and events
- Compound objects using the hierarchy system in three.js
- Full constraint system including Point, Hinge, Degree of Freedom, and more
- Vehicle systems
- Rotations using either euler or quaternion systems - your preference
- Built seamlessly on top of three.js to keep the same convention and coding style

## References
- [Official website](https://chandlerprall.github.io/Physijs/)
- [Learn Three.js - Third Edition](https://www.packtpub.com/product/learn-three-js-third-edition/9781788833288)