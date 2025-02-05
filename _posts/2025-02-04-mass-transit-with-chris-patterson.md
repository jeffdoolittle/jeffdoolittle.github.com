---
layout: post
title: MassTransit with Chris Patterson
date: 2025-02-04 04:00:00 -0800
category: se-radio
tags: [software, engineering, distributed, system, message bus, message queue, event, stream, pub sub, fire, forget, retry, parallel, async]
excerpt: "What is a message bus and when do you need one?"
image: /assets/20241217_161857.jpg
image_alt: Eiger, Mönch and Jungfrau, Switzerland
published: true
episode_url: https://se-radio.net/2025/02/se-radio-654-chris-patterson-on-masstransit-and-event-driven-systems/
guest: Chris Patterson
---

[Chris Patterson](https://github.com/phatboyg), founder and principal architect of [MassTransit](https://masstransit.io/), joined me on Software Engineering Radio to discuss MassTransit, a message bus framework for building distributed systems. The conversation started with an exploration of message buses, their role in asynchronous and durable application design, and how frameworks like MassTransit simplify event-driven programming in .NET. Chris explained concepts like pub/sub, durable messaging, and the benefits of decoupled architectures for scaling and reliability.

The discussion also delved into advanced topics such as sagas, stateful consumers for orchestrating complex processes, and how MassTransit supports patterns like outbox and routing slips for ensuring transactional consistency. Chris highlighted the importance of observability in distributed systems, sharing how MassTransit integrates with tools like OpenTelemetry to provide comprehensive monitoring. The episode includes advice on adopting event-driven approaches, overcoming leadership hesitancy, and ensuring secure and efficient implementations. Chris also emphasized the balance between leveraging cutting-edge tools and addressing real-world challenges in software architecture.

[{{ page.title }}]({{ page.episode_url }}){:target="blank"} on Software Engineering Radio.

[Go give it a listen]({{ page.episode_url }}){:target="blank"} and be sure to share with your colleagues.

{%- include se-radio-plug.md -%}
