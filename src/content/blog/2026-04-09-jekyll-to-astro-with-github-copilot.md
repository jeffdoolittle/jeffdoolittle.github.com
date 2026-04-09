---
title: "The Architect and the AI: Migrating from Jekyll to Astro with GitHub Copilot"
date: 2026-04-09
category: software
tags: [ai, copilot, astro, jekyll, migration]
excerpt: How I migrated my personal site from a deprecated Ruby-based framework to a modern Astro stack — through conversation, not code.
image: /assets/20260301_180203.jpg
image_alt: Sunset over the mountains, Los Cabos, Baja California Sur, Mexico
published: true
---

Two days after [redesigning my site in two hours with GitHub Copilot](/2026/04/07/redesigning-with-github-copilot/), I asked myself an obvious follow-up question: if Copilot could redesign the site that quickly, what else could it do?

The answer turned out to be: migrate the entire thing off a deprecated framework. In a single extended session.

## The Problem with Jekyll

My site had been running on [Jekyll](https://jekyllrb.com/) for years. That stack worked fine for a long time, but the underlying Ruby version had reached end-of-life, the dependency tree had accumulated known vulnerabilities, and every time I opened the project after a few months away, something had rotted.

None of it was painful enough to fix on any given day. But all of it added quiet friction that accumulated into "I'll deal with the site later."

Later finally arrived.

## Why Astro

I didn't come in with a migration target already picked. I asked Copilot to survey the options — what modern frameworks would preserve the existing content, support a component-based layout system, and deploy cleanly to Netlify. It walked through the candidates and made a clear recommendation: [Astro](https://astro.build/).

The fit was obvious once I saw it. Astro is built for content-heavy sites, ships zero JavaScript by default, and has excellent Markdown support. More importantly, it's actively maintained — which was the whole point.

## My Role: Architect and Decision-Maker

Here's what I want to be clear about: I didn't write the migration. Copilot did. But I *directed* it — and that distinction matters.

Every significant decision came back to me. Which layouts to create. How to handle the content model. Which old patterns to carry forward and which to leave behind. Copilot built what I approved, surfaced ambiguous cases for direction, and iterated when I pushed back.

That's the collaboration model that works. It's closer to the relationship between an architect and a skilled contractor. The architect sets the standards, makes the calls, and stays accountable for the outcome. The contractor moves fast and builds precisely to spec.

## What the Migration Covered

The site had roughly 75 posts, a handful of static pages, several custom layouts, and a collection of reusable components built up over years. All of it moved. The content schema, layouts, components, assets, search, RSS feed — each piece translated into its Astro equivalent.

No content was lost. Every post URL preserved its original path. The site that came out the other side had the same content, the same structure, and the same SEO shape as the one that went in.

## The Security Benefit

The Jekyll stack had accumulated real security debt — an outdated runtime, unpatched dependencies, a dependency graph nobody wanted to touch. Moving to a modern, actively maintained ecosystem resolved that in one pass. That's not something you patch your way to. It's a structural benefit of the migration.

## What Didn't Go Perfectly

I'd be misrepresenting the experience if I said it was seamless end to end. There were a few rough edges — the CSS pipeline needed some careful handling to preserve existing styles, and search required a couple of iterations to get right. None of it was a blocker. Working through those snags conversationally was faster than working through them alone.

## The Same Model, Again

Two days in a row, I used Copilot to do something I'd been deferring for months.

The redesign post was about the speed of visual iteration. This one is about something slightly different: the ability to finally tackle maintenance that had been sitting on the to-do list for years because the activation energy was too high.

Jekyll worked. The site wasn't broken. But it was accumulating risk, and I never quite had a free weekend to address it properly. The migration happened not because it became urgent, but because Copilot lowered the cost of doing it right.

That's the shift I keep coming back to. Not "AI is fast." It's that AI lowers the threshold for doing things you'd otherwise keep deferring. The work that doesn't happen because it's *just* too much friction to start today — that's where the real value compounds.

I contributed architectural judgment, content decisions, and final approval on every change. Copilot wrote the code.

That's a good division of labor.
