---
layout: post
title:  "ideas scratch pad"
# date:   2020-08-30 08:00:00 -0700
categories: general
excerpt: your few sentence excerpt goes here...
image: /assets/og_image.png
image_alt: Placeholder
published: true
---

## Activities, Tasks and Estimations

### Response from Greg

I've barely scratched the surface of the book but I get and feel the tension you suggest. I'm not sure myself but I've got a few thoughts.

First of all, you always get all of the activities.  Absolutely get a list of every thing you and your team can think of and then get an estimate for them - you don't want to miss anything that it turns out will take more than a couple days.

The real question then is what to do with the things that only take 1 or 2 days. I don't think you ever completely ignore them - their description should go somewhere.

I think if you can combine small ones (less than 3 days) into something about 5 days then do that.  Otherwise, just add the activity description to a neighboring larger activity. If something is about a week, then 7 days is still about a week. Or, eh, call it two weeks. But a two week activity plus 2 days is still just two weeks.

As you get more experience with your team, you find out what takes about a week and it becomes a natural rhythm. And here is something I learned from watching Amanda - don't be afraid to be real about how long something really takes. Something we might anxiously estimate to be a half a day really will take a day and a half with all things considered. I still do this and it bites me every time. Three days really can be a week.  And sometimes yes it is three days but don't make it a death march from the get-go. So, those distinct 1 or 2 day activities appear much less often - you get used to thinking in week long chunks.

I hope that helps. This went through a few rewrites as I tried to make it concise. I hope you are doing well.

### Response from Wouter

While I still need to start reading Righting Software (I know, shame on me 😉), I do think I get what you’re asking based on past experience/classes. The important concepts here are activities and  tasks, which both have a different purpose at a different stage of the project design. An activity consists of one or more tasks. Common tasks when developing a service are detailed design, write test plan, construction, testing and deployment. When doing project design, you do not yet include these tasks, but rather stay on the activity level (of course you do need to think about the underlying tasks in order to estimate). So if we have an activity for building ‘Manager A’ and it should include doing all the tasks I mentioned earlier. It’s safe to say that, regardless of the size of the service, it will take at least one week to properly design, build, test and deploy the service, hence the 5 day rule. Then, to keep things simple, only increment the size of an activity by 5 when you feel that the combined sum of all the underlying task should be greater then 5. This keeps scheduling the tasks easy (since everything is a multiple of 5), keeps context switching of your developers in the same workweek to a minimum and might even introduce some float (e.g. the actual duration was 12 but you’ve planned for 15 giving you 3 days of float). Related to this last point Juval also mentions ‘the law of big numbers’ in which some activities will be slightly over-estimated while others are under-estimated. The law of big numbers states that, over a sufficiently large collection of numbers, these things tend to even out quite nicely in the end. Please see the slide on the subject below as well.

When tracking the project, you will track the actual tasks and not so much the activity (the activity is done when all related tasks are completed). As mentioned earlier, the sum of the duration of all tasks should be the duration of the activity.

Note: the example tasks I mentioned for developing a single service are valid when you don’t have separate resources to design/test your service (as we had in a few of our projects). Ideally you want separate design and testing activities spanning multiple/all services which can be assigned to a Senior Developer/Junior Architect and a Tester or QA person.

I hope this explanation is useful to you. Should you have any questions/remarks, please don’t hesitate to ask.


## Risk

Acceptable (Optimal?) Risk

Some risk is necessary, otherwise why bother? There's very little value to be created or extracted pursuing low risk endeavors.


## Distributed Monolith

  * All components are deployed together
  * All services must be running for development
  * Changes to one service/component ripple to others

<https://www.youtube.com/watch?v=64w1zbpHGTg&feature=youtu.be>

## Architectural Metrics

What you measure...

* Measure
  * Quality
  * Schedule
  * Budget

Are your metrics really giving you what you want? Meta-metrics.

Don't measure just to measure. Measure for specified, empirical *outcomes*.

Hone your processes and metrics to reach the goals of the meta-metrics.

How to quantify? How to get people to adopt?

## Architectural Mindset

  * FAILURE MODES
    * Potentially infinite
  * SUCCESS MODES
    * Only one

  * Failure Responses
    * Recovery
    * Mitigation
    * Prevention

  * What could go wrong?
  * How can we avoid the error or failure in the first place?
  * How can we limit effects of the error or failure?
  * How can we recover from the error or failure?


## Other Ideas

Escaping the digital world with music

{% include twitter_plug.html %}