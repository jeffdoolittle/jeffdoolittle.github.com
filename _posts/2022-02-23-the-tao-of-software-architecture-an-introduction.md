---
layout: post
title: "The Tao of Software Architecture: An Introduction"
date:   2022-02-23 02:30:00 -0800
category: leadership
tags: [software, problem, solution, discovery, design, delivery, complexity, system, business, technical, architect, engineer, software]
excerpt: Perspectives for clarity, responsibility, and value creation.
image:  /assets/20220109_144136.jpg
image_alt: "Portland: Pearl District"
published: true
footnotes:
  - id: 1
    content: > 
      <strong>Title Inflation</strong>: The propensity to apply fancy sounding titles based on seniority, interviewing prowess, technological comprehension, and/or resume-driven-development.
  - id: 2
    content: > 
      <a href="https://www.amazon.com/dp/1603580557">Thinking in Systems</a> by Donella Meadows is a wonderful introduction to systems thinking.
  - id: 3
    content: > 
      See my presentation for Portland's Microsoft User Group on <a href="/2021/03/03/padnug-software-architecture-as-complexity-containment">Software Architecture as Complexity Containment</a>
            
---

- TOC
{:toc}


## Discovery, Definition and Delivery

For millennia, humans have sought to discover, define and deliver novel solutions to persistent problems. The Romans devised the aqueducts to address the need for reliable water supplies. Railways have met needs for consistent material supply chains for centuries. Human ingenuity continues to press the limits of what previously had been thought impossible. The technological revolutions of recent decades have not altered this trajectory, only accelerated it. At our best, humans seek to engineer solutions that create real value, addressing the needs of our times while preparing to meet the challenges of the future.

## A Cure for Solutionizing

Unfortunately, there many examples from human history to illustrate the results of quick solutions applied to poorly defined problems. In fact, *"quick solutions applied to poorly defined problems"* sums up the state of the software industry.

> **"Quick solutions applied to poorly defined problems"** sums up the state of the software industry.

This can be described in a word: *solutionizing*. Jumping too quickly to "how" is a prime indicator that solutionizing is happening, or isn't far around the corner. Making technology and implementation decisions before understanding actual business requirements should garner scorn and repudiation. But instead this often seems to be the "state of the art" in software.

*The Tao of Software Architecture* begins with a Solution Design Model that accurately diagnoses the problem while providing a framework for discovering solutions.

## The Solution Design Model

All day, every day, humans constantly **orient** ourselves to our surroundings while placing our **focus** on a particular aspect or element within our environment. It’s so natural we usually don’t even think about it. Just stop for a second to consider your current environment (your **orientation**) and the current object of your attention (your **focus**)—which hopefully is [this page]({{ page.url }}#orientation-and-focus). Notice how every thought and action comes into existence within a **contextual orientation** and a **particular focus**. Orientation helps you find your location within your current reality. Focus directs your attention and shapes the space of available actions you might take next within your current context. An orientation plus a focus equals a perspective.

> An orientation plus a focus equals a perspective.

### Solution Design Perspectives

Usually we don't even realize how each of us arrives at our unique perspectives. We implicitly ask questions of orientation, such as "How do I **define reality** and help others see what I see **from my vantage point**?" Then we direct our focus with implicit questions like "Where should I keep my **attention** and expend my **effort**?"

This first diagram illustrates how these foundational questions relate to orientation and to focus.

![Solution Design Orientation and Focus](/assets/solution-design/solutiondesign_01_orientation_and_focus.svg){:class="img-solution-design"}

The Solution Design Model identifies two *ranges of orientation*: orientation according to the **domain** and orientation according to **capabilities**.

#### Ranges of Orientation

  - Domain: What is the nature of the business and the general problems is seeks to solve?
  - Capabilities: What common capabilities can be integrated to provide solutions and how do these capabilities differ across customers or over time?

The Solution Design Model also identifies two *lenses of focus*: the nature of **systems** and the functionality of **technologies**.

#### Lenses of Focus
  - Systems: How can we devise the simplest set of processes, components or services that provide a viable near- and long-term solution?
  - Technologies: What technologies will best maintain design integrity while fulfilling specific requirements?

This results in four unique perspectives, each of which explores distinct questions. The following diagram provides some examples.

![Solution Design Questions](/assets/solution-design/solutiondesign_02_questions.svg){:class="img-solution-design"}

### Example: A Restaurant

Let's take an example to illustrate the concept. In a restaurant, distinct stakeholders ask different questions based on their perspective.

The following diagram illustrates the kinds of concerns that arise from each unique perspective.

![Solution Design Restaurant](/assets/solution-design/solutiondesign_03_restaurant.svg){:class="img-solution-design"}

It should be clear that a well functioning restaurant must take all of these perspectives into consideration. These perspectives also delineate distinct areas of **responsibility**. These responsibilities depend on one another and can mutually affect one another in various ways. However, the primary flow from problem statement to solution execution flows according to the following illustration.

![Solution Design Flow](/assets/solution-design/solutiondesign_05_flow.svg){:class="img-solution-design"}

This diagram illustrates how the solution design process primarily moves from:

- *Domain Oriented, Systems Focused* to
- *Capability Oriented, Systems Focused* to
- *Capability Oriented, Technology Focused* to
- *Domain Oriented, Technology Focused*

This does not imply strict linearity or a lack of mutual interdependence between these perspectives. It does explicitly delineate the most important flow of information and decision making in the solution design process.

As a thought experiment imagine the potential results for the restaurant in the absence of one of these perspectives. Then consider what might happen if this solution design flow were reversed or altered. Imagine the horrible mess of confusion and blaming that would likely result.

### Clarifying Responsibilities

As mentioned previously, each perspective in the Solution Design Model delineate distinct areas of responsibility. Clarifying responsibilities cultivates a sense of both personal and shared ownership for the solution design process.

![Solution Design Perspectives](/assets/solution-design/solutiondesign_04_perspectives.svg){:class="img-solution-design"}

The *Domain Oriented, Systems Focused* perspective bears responsibility to discover and clarify unique problems and opportunities for a particular business or type of business. This makes such a perspective primarily responsible for concerns such as business model, business systems and product/market fit.

The *Capability Oriented, Systems Focused* perspective identifies constraints and complexities that may arise as solutions to a problem or opportunity are explored. This role ensures that volatilities in the system are prevented from bringing the whole system down or requiring a major redesign of the system itself.

The *Capability Oriented, Technology Focused* perspective provides expertise and experience with common or novel tools and technologies to be evaluated and considered as contributing factors toward potential solutions.

The *Domain Oriented, Technology Focused* perspective implements solutions that take into account the unique problem or opportunity, the constraints and complexities of the system, and the chosen set of available technology options.

Let's look at another example, this time from the world of construction, to help illustrate the different responsibilities borne by each perspective.

### Example: Construction Roles

The *Owner / Client* bears the general responsibility for deciding that a particular construction project at a particular time with a specific set of budgetary constraints might be worth undertaking.

The *Architect* takes on responsibility to design a site or structure that meets the actual requirements of the project, while taking into account physical, temporal, economic and general scheduling constraints.

Various *Experts* may provide guidance regarding common materials and equipment, and may also suggest novel materials and equipment when those might provide advantages such as consistency, reduced maintenance, economies of scale, or increased simplicity.

The *Contractor* bears the responsibility to fulfill the requirements of the construction project according to all of the requirements, constraints, and capabilities defined by those responsible for the other perspectives.

![Solution Design Construction Roles](/assets/solution-design/solutiondesign_06_construction_roles.svg){:class="img-solution-design"}

Now that we have a clearer sense of these distinct perspectives and responsibilities, let's explore how they can apply in the software industry.

## Software Solution Design

When it comes to software solution design, a lack of **role clarity** leads to persistent problems for organizations and for the industry as a whole. The words "Software Architect" fail to provide such clarity of role and responsibility. The title "Software Architect" essentially amounts to an undifferentiated description, subject to **title inflation**{% include fnref.html x=1 %}, that is **regularly misapplied exclusively to technologists**.

> Software Architect: An undifferentiated description, subject to **title inflation**, that is **regularly misapplied exclusively to technologists**.

Variations in titles often add to the confusion rather than providing clarity. For example, what consistently differentiates a "Technical Architect" from a "Solution Architect?" Other titles like "Cloud Architect" and "Platform Architect" merely cloud matters further. This situation leaves huge gaps in the understanding of—and proper accountability for—critical responsibilities.

Add to this the fact that the vast majority of software architects operate from a technology focused perspective. Diagrams and descriptions of systems that focus heavily on tools and technologies illustrate this fact clearly. Such [solutionizing](#a-cure-for-solutionizing) is rife in the software industry, demonstrated by endless examples of such "jumps to how." Sometimes it seems like software architects are more like ineffective linguists, creating new languages to describe complex concepts using symbols they don't even understand and therefore can't really explain.

> Sometimes it seems like software architects are more like ineffective linguists, creating new languages to describe complex concepts using symbols they don't even understand and therefore can't really explain.

That tools and technologies take center stage should not surprise us. Very few software architects have received training or guidance in **systems thinking**{% include fnref.html x=2 %}. When people don't know what to do, they rarely rise to the occasion but instead fall back on their training.

> When people don't know what to do, they rarely rise to the occasion but instead fall back on their training.

This is not to say anything negative about technologists. Individuals with a deep understanding of the technology landscape are critical. But when your fallbacks are tools and technologies, it's no wonder that relentless pressure to release "MVPs" or "just ship something" leads to undifferentiated, unmaintainable blobs of interconnected technologies with no cohesion or attention to complexity containment{% include fnref.html x=3 %}.

Imagine the same lack of clarity in relation to the construction example from above. Suppose the contractor takes on responsibilities from the architect and the owner / client. Or imagine someone *expecting them to do so* while the contractor remains unaware of such expectations. Imagine the confusion, finger pointing and blaming. It's easy to imagine this for restaurants and construction, and yet these same behaviors are tolerated and even expected in most software projects and organizations.

Using the Solution Design Model, we can address the clarity gap by identifying and differentiating the roles and responsibilities of each type of software architect.

![Solution Design Software Architect Roles](/assets/solution-design/solutiondesign_07_software_architect_roles.svg){:class="img-solution-design"}

- Business Architect
  - Domain Oriented, Systems Focused
  - Sector, division and product oriented. Technology familiar domain experts as system thinkers.
  - Would make a great management consultant for businesses in a particular domain.
- Systems Architect
  - Capability Oriented, Systems Focused
  - Pure design engineers. System and Project Design experts. Process and technology leaders.
- Technical Architect
  - Capability Oriented, Technology Focused
  - Technology, integration and distributed systems experts.
- Solution Architect
  - Domain Oriented, Technology Focused
  - "Integrators." Sector, division and product oriented. Domain familiar technology experts.
  - Experts in execution and solution delivery.

## The Neglect of and Need for Systems Thinking

Business Architects and Systems Architects remain rare and often misidentified. Systems Thinking is frequently neglected, misunderstood, or even opposed. The Solution Design Model highlights the necessity of these perspectives and illustrates how their distinct responsibilities relate to the more frequently identified and accepted perspectives.

Business Architects must be deeply familiar with the details of the domain, but they are *not* specifically product owners or product managers. People with such titles may fill the role of Business Architect, but it's not about title and position. It's about the ability to apply Systems Thinking to Business Problems and Opportunities.

Systems Architects must be deeply familiar with technological capabilities and patterns, but they are *not* primarily technologists. Again, titles and positions are irrelevant to the responsibilities of a Systems Architect. A System Architect applies Systems Thinking to software System Design and Project Design.

## Next Steps

Upcoming chapters will explore the Solution Design Model in more detail and from different angles. In the meantime, consider how this model can apply in your context. Imagine the advantages of having team members that represent the distinct lenses of Systems focus and Technology focus. Consider how to leverage the unique ranges of Domain orientation and Capability orientation. And envision how clarifying roles and responsibilities can help your organization design systems that meet the opportunities of today while preparing to meet the challenges of tomorrow.

<!-- 
Title Inflation
The propensity to apply fancy sounding titles based on seniority, interviewing prowess, technological comprehension, and/or resume-driven-development.
Technologists
This is not to say anything negative about technologists. They are amazing, capable and crucial!
However a lack of differentiation and distinction between types of software architecture roles causes confusion at best, and catastrophe at worst.
Software Architects
The industry lacks clarity about what differentiates a Capability oriented architect from a Domain oriented one
The vast majority operate from a Technical orientation with a Concrete focus
 -->

<!-- 
## Solution Design

We need clarity regarding design processes that lead to the actual creation of value.  We need tools to help us gauge whether we are too quickly "jumping to how" on one end, or falling prey to analysis paralysis on the other. We need mechanisms that enable us to discover, define and deliver systems of true and lasting value.

- How do we **discover** new customer value opportunities that tend to be high in value, moderate in risk, and relatively low in effort?
- How do we **define** high quality, composable systems that manifest properties of anti-fragility, not only surviving but gaining from disorder?
- How do we consistently and repeatedly **deliver** new solutions and extensions to existing solutions by integrating and reusing common components and services, rather than rewriting and redoing things over and over again?

This is the counter to solutionizing. -->



<!-- Some varying flows of information are worth exploring in more detail. Others may be worth avoiding in certain contexts and situations. However, attempts to describe each and every possible flow of information between these various stakeholders would fill volumes.

Later on we will explore and evaluate some of the various functional and dysfunctional flows that this model reveals. For now the simplest approach is to remember the [**responsibilities**](#clarifying-responsibilities) attributable to each perspective. Knowing who is responsible for what provides a [liberating constraint](/2021/07/28/liberating-constraints/). It allows us to discover the best flow of information at the right time, rather than pushing the model too far by attempting to rigidly define every possible flow of information in advance. -->

<!-- 

It begins with a set of [Core Values](#core-values).

## Core Values

These core values fall into two broad categories: [engineering values](#engineering-values), and [interpersonal values](#interpersonal-values).

### Engineering Values

[**Repeatability**](#repeatability) - employ configuration and automation to compose repeatable processes. Computer systems excel at taking a given set of inputs and producing repeatable and predictable outputs. Well designed systems leverage repeatability to invalidate their own assumptions and increase the velocity of discovery toward viable solutions.
  
[**Reversibility**](#reversibility) - leverage repeatability to enable reversibility that mitigates risk and allows for incremental improvements. Well designed systems avoid dependency on irreversible decisions. The ability to revisit initial assumptions with distinct inputs and parameters naturally leads to more resilient and maintainable systems.

[**Reuse**](#reuse) - define clear contracts and constraints to provide a stable and reliable foundation for reuse that the software industry so desperately seeks. The Holy Grail of software systems seems unattainable in most situations. Repeatability and reversibility along with composability bring the elusive promise of reuse to reality.

### Interpersonal Values
  
[**Trust**](/2020/11/04/software-leadership-distilled/#core-values){:target="_blank"} - Make and keep agreements to build trust.

[**Clarity**](/2020/11/04/software-leadership-distilled/#core-values){:target="_blank"} - Provide clarity of role and responsibility.

[**Empowerment**](/2020/11/04/software-leadership-distilled/#core-values){:target="_blank"} - Cultivate systems of empowerment.

Read more about how [Trust, Clarity and Empowerment form a foundation of excellence and empowerment for software leaders](/2020/11/04/software-leadership-distilled){:target="_blank"}.

With these core values in mind, let's explore some unique perspectives related to Solution Design. -->


---

## Footnotes

{% for fn in page.footnotes %}
{% include fn.html x=fn.id text=fn.content %}
{% endfor %}
