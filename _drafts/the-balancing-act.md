---
layout: post
title:  "The Balancing Act"
# date:   2020-08-30 08:00:00 -0700
categories: general
excerpt: Somewhere between Order and Chaos...
image: placeholder.png
image_alt: Placeholder
published: true
---

* Goals for the reader
  * Understanding the need for building stable foundations
  * Beginning to grasp the mental model for determining what should be stable, and what should remain flexible
  * 

A building - what will it be used for?
The rooms in the building - what will they be used for? What changes will there be over time?
We want it to be a safe building, comfortable, perhaps lovely
We want to be able to make changes to the building without a complete rebuild
Office - new, non-load bearing walls
Home - may be as simple as painting, 
How constrained do you want the building to be?
How constrained do you want the use of the building to be?

Design of a Bicycle
Structure for stability
Moving parts for flexibility
Movement, Momentum and Balance

Order and Chaos

Your foundation shouldn't constantly change - It should change only if the nature of the business changes.

order/chaos

rigid/flexible

Spectrum: Transience <--> Permanence

Instability --> Stability

Variability --> Invariability

Volatility --> Containment

Requirements toward the transient end of the spectrum should depend on requirements toward the Permanent end of the spectrum.

In a dependency graph, the more dependencies there are on a component, the more difficult it becomes to change. Therefore it is critical to design the interface to the component for stability.

* User Interfaces - wild amounts of change. Highly volatile (examples).

* API Gateway technologies - Highly volatile (examples) - and yet business critical orchestration and algorithms become interwoven with the concerns of the API entry point (security, serialization, validation, transport, design preferences, etc.). You don't want your business model to be directly coupled and interwoven with the latest technology, because there will always be a new latest technology! 

* Use Case Orchestration - ends up strewn throughout the application - typically in what is commonly called a "front end application" in the form of a web or mobile application.

* Core business algorithms - 

* Resource Dependencies - 

* Business Primitives - must be designed for low volatility - you don't get it for free!

A simple implementation can only enable a complex user interaction with the system. A system that encapsulates complexity is **by definition** what allows for and enables a simple user experience. (Use the power plug example and the car example).

Good Architectural Design = 
**Order allowing for channeled and constrained Chaos**
+
**Chaos preventing overly constrained and rigid solutions**

Instability isn't bad in the right places. You want balance.

Like a bicycle. Instabilty allows for nimbleness under control, but you need a solid foundation to allow you to control (use? channel?) the instability!

Balance is an emergent property of a bicycling system. bike + operator/rider - risk of falling! reward? speed, fun, exercise, etc.

[Antifragile - Designing the Systems of the Future](https://www.youtube.com/watch?v=pMfzxmCzThI)

{% include twitter_plug.html %}