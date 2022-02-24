---
layout: post
title: Design Before Technology
date: 2021-12-20 02:00:00 -0800
category: leadership
tags: [design, system, application, software, architecture, constraint, ]
excerpt: A good design requires adoption of and adherence to critical constraints. No great work of art, literature, architecture or industry ever came into existence without critical constraints.
image: /assets/20211204_133109.jpg
image_alt: Leavenworth, Washington, Bavarian Village
published: true
---

{% include constraints-series.md %}

## So There I Was, Scrolling Through Hacker News

I came across a Hacker News "Ask HN" question today: 

> [Ask HN: What tech stack would you use to build a new web app today?](https://news.ycombinator.com/item?id=29626371)

My short answer?

> Focus on design before technology. 

Questions like these nearly always require a different response than the one the person presently wants. The difficulty comes when you try to respond with much more helpful suggestions, but the community views it as "off topic" or "not relevant".

So how would I respond if the original poster showed willingness to explore the bigger problem?

___

## Design Before Technology

> All problems are solved by good design. -Stephen Gardiner

A good design keeps technical options open. A good design provides a few, simple, well defined interfaces for integration. A good design enables composability and modularity, leading to reusability while maintaining comprehensibility.

A good design encapsulates implementation details. A good design strongly encapsulates the System ("back end") from the Application ("front end"), and vice versa, allowing the technology for the Application and the System to evolve independently. A good design applies the principle of encapsulation at all levels, from the most coarse-grained to the very fine-grained.

[***A good design requires adoption of and adherence to critical constraints. No great work of art, literature, architecture or industry ever came into existence without critical constraints.***]({% post_url 2021-12-20-design-before-technology %})

Off the top of my head, some examples of critical constraints for software systems include:

- Know what **Use Cases** will drive the System.
- Identify and call out **solutions masquerading as requirements**.
- Avoid **The Jump to "How"** by first at least answering "why" and "what" (and likely "when", "where", "who" and "how much").
- Applications ("front end") answer the question **"how to render"** not "what to render".
- Systems ("back end") answer the question **"what to render"** not "how to render".
- Avoid **endpoint proliferation** at all costs.
- Use pipelines and mediators for request handling to allow for pluggable **cross cutting concerns**.
- Don't use coding Design Patterns for **system decomposition** (they may or may not be fine as implementation details depending on the situation).
- **Document** your design. Keep the design documentation **up to date**.
- **Design Big, build small.**
- Design to allow testing of application logic independent from infrastructure and vice versa.
- Design to enable testing of composable units of functionality (don't just write unit tests!).
- Technical Empathy requires you to ship the **SDK** for the System. Even if the only application developer is you, be kind to yourself. [**Do it. Ship the SDK**](https://youtu.be/jQvvmT3ab80).
- Create a **command line interface** (CLI) that can drive the system. The CLI should consume the same SDK used by other Applications that integrate with the System. This helps keep the API clean, drives **quality and testability**, and increases Technical Empathy.
- **Technical Empathy. Always Technical Empathy.**

Required reading:

- [Exploring Requirements](https://www.amazon.com/Exploring-Requirements-Quality-Before-Design/dp/0932633137/)
- [Software Fundamentals: Collected Papers by David L. Parnas](https://www.amazon.com/Software-Fundamentals-Collected-Papers-Parnas/dp/0201703696/)
- [Righting Software](https://www.amazon.com/Righting-Software-Juval-L%C3%B6wy/dp/0136524036/)
- [A Philosophy of Software Design](https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X/)

---

How would you reply to the original question? What are your thoughts on design before technology?

Stay tuned for more on [Liberating Constraints]({% post_url 2021-07-28-liberating-constraints %}) in this series!
