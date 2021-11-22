# Using constraints to limit the movement of objects

Until now, we’ve seen some basic physics in action. Physijs also provides advanced constructs that allow you to
limit the movement of your objects. In Physijs, these objects are called 
constraints. The following table gives an overview of the constraints that are
available in Physijs:

Constraint  | Description  | 
---------|------
PointConstraint | This allows you to fix the position of one object to the position of another object. If one object moves, the other will move with it, keeping the distance between them the same.
HingeConstraint | HingeConstraint allows you to limit the movement of an object as if it were on a hinge, such as a door.
SliderConstraint | This constraint, as the name implies, allows you to limit the movement of an object to a single axis, for instance, a sliding door.
ConeTwistConstraint | With this constraint, you can limit the rotation and the movement of one object to another. This constraint functions like a ball-and-socket joint; for instance, the way your arm moves in your shoulder socket.
DOFConstraint | DOFConstraint allows you to specify the limit of movement around any of the three axes, and it allows you to set the minimum and maximum angle that is allowed. This is the most versatile of the constraints available.

The easiest way to understand these constraints is to see them in action and
play around with them. For this, we’ve provided a couple of examples where
these constraints are used.