---
layout: page
title: System Gateway
permalink: /software-leadership/system-gateway
image: /assets/Jeff%20Doolittle%20-%20Abstract%20System%20Gateway.jpg
image_alt: System Design - System Gateway

---

The **System Gateway** exposes a **Universal Gate** by which external **Carriers** can communicate with the **System**.

Once through the **Universal Gate**, messages are forwarded by **Carriers** to another gate, or to the ultimate intended **Recipient** of the message.

## System Gateway Concerns

* Who
  * Enforcement
    * Who is the Sender?
    * Is the Sender authorized to send this Message to this Context?
* What
  * Validation
    * Is the Message valid?
* When
  * When can Senders expect a Context to be available for receiving Messages (uptime/SLA)?
* Where
  * Location
    * How do Senders discover the Universal Entry Context?
  * Routing
    * How do Guards determine the next Context to receive the Message?
* How
  * Contract
    * How do Senders know what Message types a Guard must accept for a Context?
  * Enrichment
    * What additional information must be included when the Message is delivered to the next Context?
  * Transformation
    * What modifications must be made to the Message before it is delivered to the next Context?
  * Transport
    * What delivery mechanisms must a Context accept?
    * What delivery mechanisms could a Context use to deliver the Message to the next Context?
* How Much
  * How long should a Sender expect to receive a response for a given Message (if any)?
  * How many attempts will be made to deliver the Message?
  * Backpressure
  * Circuit Breaker

## Values

* Must relentlessly prevent any and all coupling of services to infrastructural topology
* Must relentlessly prevent any and all coupling of services to infrastructural technology
* Must remain conceptually agnostic regarding implementation technologies (Busses, Transports, Meshes, etc.).
* Services must not have knowledge regarding their own lifecycle
* Services must not have nor rely on knowledge regarding the lifecycle of their dependencies
* Must provide service abstractions that naturally contain complexity
* Must encapsulate any and all implementation details within each and every service
  * algorithm
  * ordering
  * dependencies
  * etc.
* Must favor Convention over Configuration
* ...

## Messaging Actors

* **Message**
  * Payload (what, why)
  * Envelope
    * Instructions (where, how, how much, how long)
    * Credentials (who)
    * Descriptors (when, what kind)
* **Sender**
  * The Message Sender
* **Recipient**
  * The intended Message Recipient
* **Client**
  * An external Sender and Recipient of Messages

## System Gateway Components

* **Service**
  * An internal Sender and Recipient of messages
* **Contexts**
  * Universal
    * The point of universal ingress to the System
  * Intermediary
    * The point of ingress to a collection of Service Contexts
  * Service
    * The point of ingress to a particular type of Service
* **Gate**
  * The point-of-entry to a Context.
* **Gatekeeper**
  * Primary Roles
    * Enforcement
    * Routing
    * Carrier Selection
* **Carrier**
  * Carries messages from one Context to another

The **System Gateway** exposes the **Universal Gate** by which **Clients** communicate with the **System**.

From the perspective of business functionality, the **System** emerges from the composition of **Service Contexts** and their respective **Services**.

From the standpoint of implementation and infrastructure, the **System** consists of the composition of **Gates**, **Gatekeepers** and **Carriers**.

**Gatekeepers** ensure rule enforcement at each **Gate** and enlist **Carriers** to forward messages from one **Context** to another.

### Gates and Gatekeepers

At the point of ingress to each **Gate** a **Gatekeeper**, evaluates each incoming message within its own **Context** to determine whether to forward the message on to another **Context**.

 This can be thought of like a waiting room in which a **Gatekeeper** functions to determine what should be done with the message next.

* Universal Gate
  * Enforce: can this message enter the Property?
  * Route: what Complex does this message go to next?
  * Carrier: what carrier will forward the message?
* Intermediary Gate
  * Enforce: can this message enter the Complex?
  * Route: what Building does this message go to next?
  * Carrier: what carrier will forward the message?
* Service Gate
  * Enforce: can this message enter the Building?
  * Route: what Room does this message go to next?
  * Carrier: what carrier will forward the message?

**Gatekeepers** can and should provide other functionality where appropriate for their given **Context**, such as:

* Protocol Adaptation (changing **Carriers**)
* Mapping Internal and External Data Contracts
* Ensuring Authentication
* Enforcing Authorization
* Data Validation
* Service Lifecycle Control

## System Gateway - Gate Components

![System Gateway - Gate Components](/assets/Jeff%20Doolittle%20-%20System%20Gateway%20-%20Gate%20Components.jpg)

## Abstract System Gateway

![Abstract System Gateway](/assets/Jeff%20Doolittle%20-%20Abstract%20System%20Gateway.jpg)

## Related Patterns

Ambassador: <https://docs.microsoft.com/en-us/azure/architecture/patterns/ambassador>

Gatekeeper: <https://docs.microsoft.com/en-us/azure/architecture/patterns/gatekeeper>

___

[{{ page.title }}]({{ page.url }}) originally appeared at [jeffdoolittle.com](https://jeffdoolittle.com/).

Copyright © 2020 Jeff Doolittle. All rights reserved.

{% include lightbox.html %}
