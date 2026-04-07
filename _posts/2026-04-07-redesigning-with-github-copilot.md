---
layout: post
title: "From Dormant to Redesigned: Two Hours with GitHub Copilot"
date: 2026-04-07
category: software
tags: [ai, copilot, design, jekyll]
excerpt: How I used GitHub Copilot to completely redesign my personal site in about two hours — and what that reveals about AI-assisted development.
image: /assets/20260307_182107.jpg
image_alt: Photo from March 2026
published: true
---

My personal site had been on life support for months. The design was years old and it showed — a default Minima theme with some hand-rolled SCSS variables, a flat list of posts, and no real identity. I'd been meaning to refresh it but never quite found the time.

On April 7, 2026, I decided to stop meaning to and just do it. With GitHub Copilot.

Two hours later, I had a completely redesigned site.

## Starting with Exploration, Not Code

The thing that surprised me most wasn't how fast Copilot wrote code. It was how it changed my *process*.

Instead of jumping straight into the stylesheet and guessing my way toward something I liked, I asked Copilot to generate three distinct design directions as standalone HTML files I could open in a browser and compare side by side. Within minutes I had three fully rendered prototypes.

I chose one quickly. The whole exploration took maybe twenty minutes, and I went into implementation already knowing exactly what I wanted. That's not how this used to go.

## What Actually Changed

Files changed, styles updated, but the most important change wasn't volume, it was architecture. Copilot migrated all the hardcoded color variables to custom properties, which meant the entire color system was now themeable. That turned out to matter more than I realized at the time.

The visual result was significant: a full-bleed hero on the homepage, a card-based post grid instead of a flat list, a wider layout, custom fonts, and a structured footer. The site finally looked like something I'd actually designed rather than something I'd inherited from a template. It finally looks like something I can be proud of.

Copilot also patched four known security vulnerabilities while it was at it. That's not glamorous work, but it's the kind of thing that quietly accumulates on a personal project when nobody's watching.

## The Deployment Rabbit Hole

Nothing ever goes completely smoothly. Updating dependencies broke the build. I went through three iterations to find the right combination of dependencies. Each attempt was small, targeted, and committed with a clear message explaining what we tried and why. This grunt work could honestly have eaten up entire weekends...

What would normally turn into an afternoon of tab-switching between documentation, Stack Overflow, and the Netlify UI instead became a focused thirty to forty-five minute diagnostic sequence. More importantly, the commit history tells the full story of *why* we landed where we did — which is genuinely useful the next time something like this happens.

## Dark Mode

Once the custom properties were in place, adding a full dark mode was an obvious and natural extension. Copilot implemented the toggle, the no-flash script (so the page doesn't flicker on load), and cookie persistence so the preference sticks across sessions. A few refinement commits to dial in contrast on the amber accents, and it was done.

Without the CSS architecture work done as part of the initial refresh, dark mode would have required a much more invasive rewrite. The earlier decision compounded.

## The Numbers

| Task | Without AI | With AI |
|------|-----------|---------|
| Generate 3 design prototypes | 4–8 hours | ~20 minutes |
| Choose a direction | 1–2 hours | Minutes |
| Implement the redesign | 2–4 days | ~1 hour |
| Debug Netlify deployment | 2–4 hours | ~45 minutes |
| Add dark mode | 4–8 hours | ~45 minutes |
| Patch security vulnerabilities | 1–2 hours | ~10 minutes |
| **Total** | **~5–7 days** | **~2 hours** |

## What I Took Away from This

The leverage wasn't just speed. It was the *shape* of the work.

Prototype-first design, systematic issue tracking, meaningful commit messages, automated security awareness — these aren't new ideas. But they're easy to skip on a personal project when it's just you and there's no team expecting you to do it right. Copilot helped me enforce a discipline that can be challenging to sustain on a personal project, and the result is a codebase that's genuinely easier to maintain.

The `.github/copilot-instructions.md` file we created along the way means every future session starts the same way: file an issue, branch from main, commit with references, merge on approval. The AI isn't just doing the work. It's making it easier to do the *next* thing well too.
