---
layout: post
title:  "System Decomposition Primer"
date:   2019-12-05 15:00:00 -0800
categories: system-design
excerpt: Learning from the humble power outlet
img:
  file: 2019-12-05-system-decomposition-primer.jpg
  alt: Hawthorne Bridge, Portland, OR
published: true
---

Most software systems are decomposed by first identifying features and requirements. Then components are created that directly attempt to implement these features and requirements. Designing a system in this manner is like shipping a “cooking” MVP with a gas line, a Bunsen burner, and a match when what you wanted was a house with a kitchen. Even building just a kitchen in order to ship cooking fails because the kitchen can’t exist divorced from the house or building it is a part of. Imagine building a house one room at a time. Not with prefabricated components that are made to be put together simply, but with traditional construction techniques. The futility of such an approach is obvious. And yet the vast majority of software systems are designed this way.
 
Decomposing a system by features and requirements is like trying to deliver “driving” when what you wanted was a car. In the real world, appropriate components are integrated in the right way and features like “driving” are realized as emergent properties of the system. An interesting aspect of designing this way is that other use cases can be fulfilled with the same combination of components. For example, you can sit in a parked car, or have a conversation with the other vehicle occupants. You can enjoy the sights around you as you drive down the road. You can bring Fido with as you drive to the park. But if all you deliver is “driving,” these other use cases are not conceivable options in your system without a radical redesign. If you then attempt to create a “conversation” module and an “enjoy sights” component and a “bring pet along” service you compound the pain.
 
When you design to features and requirements, the end result is madness. Every change in requirements results in direct, expensive and even damaging changes to the system. Imagine the instability of a car or house built in such a fashion. And yet the currently accepted gold-standard in software development is to build iteratively according to features and requirements.
 
Iteration is important, but it should apply to design, not implementation. When building a car or a home, an incremental process is employed in order to build according to the design. And a hallmark of a good design is that previously unforeseen features and requirements can be fulfilled without requiring fundamental changes to the design of the system.
 
What we want are simple abstractions that have high value and are shielded from changing every time we discover a new requirement. The simpler the interaction is for the end user, the more volatility has been encapsulated behind the abstraction. High value abstractions combined in different ways can accommodate use cases never conceived of at the time the abstractions were being designed.
 
A great way to practice decomposition by volatility is by applying it to well designed systems in the real world. A good example of this can be found in the humble and often taken-for-granted power outlet in a wall near you. You expect when you plug in a device that it will "just work." The amount of possible devices you can plug in to the outlet is astronomical. New devices exist now that the designers of our current power outlets had never conceived of. And yet the power outlet remains stable in its design. The nature of the outlet need not change to accommodate every new device we might want to plug into it.
 
As you consider the power outlet, you can inform your decomposition of it in terms of contracts, behaviors, standardization, stressors, tolerances and failure modes. 
 
One element of the abstraction involves what you can see. There exists a three hole “contract” in most current outlets. These accept three prongs for live, neutral and ground. But there is more to the abstraction than meets the eye. What is the voltage? About 120V. What about the Hertz? 60Hz. The amps? 15-20A. These each have expected normal operating parameters and tolerances that have been defined and can be measured and verified.
 
Other unseen factors must be considered as well. What are the sources of power? You don't care and don't want to care. All that volatility remains encapsulated behind a simple interface. Now imagine if you had to know the source of the power in order to plug in a device. Ouch.
 
What about tolerances (voltage and amperage variance), stressors on the system (surges for example) and failure modes (brownouts or full blown outages)? A good engineer doesn’t trust what is coming out of the outlet to always function according to ideal operating parameters. There need to be forms of verification and failure handling. Otherwise things will break in unexpected and inconvenient ways, and people could be harmed or killed.
 
Many devices you plug into the wall have adapters to accommodate the power needs of the device and to help remediate failure modes. You can use a surge protector to add protection. You can include a battery backup to accommodate an outage. You can add a power conditioner to gain greater control over operating parameters and control your acceptable tolerances.
 
Notice how these components can be chained together to give you the behavior and protection you want. 
 
Notice how additional components are added depending on your level of tolerance to failure modes and stressors. For example, you might want much stronger mitigation and recovery modes for a desktop computer than you need for your vacuum. And yet the nature of the simple abstraction of the power outlet remains the same.
 
This barely scratches the surface of the ways you can ponder the simple power outlet.
 
Now imagine designing software systems this way...

There is so much more to learn by reading [Righting Software](https://rightingsoftware.org){:target="_blank"} by Juval Löwy, or by visiting the [IDesign](https://idesign.net){:target="_blank"} website.

{% include twitter_plug.html %}