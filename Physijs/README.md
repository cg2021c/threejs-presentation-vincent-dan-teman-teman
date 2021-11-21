# Physijs
> Physics plugin for three.js

## Introduction
In a nutshell, **Physijs** is a wrapper built on top of `Ammo.js` which makes it easier to use for graphic newbies to get into 3D programming. That's why it is necessary to include the `Ammo.js` physics engine.

## What's new?
**Physijs** runs all of its computations on a separate thread, via web worker, instead of the *render thread*. This is done to avoid frame rate drops that could happen in a scene that's being rendered inside an application.