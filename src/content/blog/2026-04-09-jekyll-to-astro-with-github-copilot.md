---
layout: post
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

My site had been running on [Jekyll](https://jekyllrb.com/) — specifically Jekyll 4.2.2 with the Minima theme, Ruby 2.6, and a collection of gems managed through Bundler. For a personal blog, that stack worked fine for years. But Ruby 2.6 reached end-of-life in 2022. The dependency tree had accumulated known vulnerabilities. Bundler updates were a careful exercise in not breaking things. Every time I opened the project after a few months away, something had rotted.

The toolchain was also just slow. Incremental builds, a Ruby install requirement, vendor directories checked into the repo — none of it was painful enough to fix on any given day, but all of it added quiet friction that accumulated into "I'll deal with the site later."

Later finally arrived.

## Why Astro

I didn't set out with a specific migration target in mind. I asked Copilot to survey the options — what modern static site frameworks would preserve the site's existing content model (Markdown posts with YAML frontmatter), support component-based layouts, and deploy cleanly to Netlify. It walked through several candidates and made a clear recommendation: [Astro](https://astro.build/).

The fit made sense. Astro is built specifically for content-heavy sites. It ships zero JavaScript by default. It has first-class Markdown support, a clean collection API, and an active ecosystem. The build times are fast and the output is static HTML — exactly what a personal blog needs. It was also the clear architectural choice for what the site had already become: a design-forward, content-first portfolio with no interactivity requirements beyond search.

## My Role: Architect and Decision-Maker

Here's the thing I want to be clear about: I didn't write the migration. Copilot did. But I *directed* it — and that distinction matters.

Every significant decision came back to me. Which layouts to create and how they should map to the existing Jekyll templates. How to handle the content collection schema. What to do with the custom `_includes` that were scattered across the old site. Which redirects to preserve. What to throw away.

Copilot built what I approved. When it proposed something I didn't like, I said so and it iterated. When it ran into an ambiguous case — say, whether a particular Jekyll front matter field should become a typed field in the Astro schema or just be left as a loose string — it surfaced the question and waited for direction.

That's the collaboration model that works. Not "AI does the work" and not "human does the work with AI suggestions." It's closer to the relationship between an architect and a skilled contractor. The architect sets the standards, makes the calls, and stays accountable for the outcome. The contractor moves fast and builds precisely to spec.

## What the Migration Actually Looked Like

The site had roughly 75 posts, a handful of static pages, several custom layouts, a set of data files driving navigation and social links, and a collection of includes that handled everything from a related-posts widget to a SE Radio episode footer. None of it was exotic, but all of it had to move.

Copilot worked through it systematically:

**Content collection schema** — all the Jekyll front matter fields mapped to a typed Zod schema, with sensible defaults and optional fields where the data was inconsistent across older posts.

**Layout migration** — Jekyll's `_layouts/` directory became Astro layout components. The cascade of `default → post/page` inheritance translated cleanly into Astro's `Base → Page/Post` component pattern.

**Includes and components** — some Jekyll includes mapped directly to Astro components. Others got absorbed into layouts where they'd always really belonged. A few got deleted because they were solving problems the new stack didn't have.

**Asset handling** — post images, favicons, PDFs, and other static files moved from `public/` into the proper `assets/` directory with updated references throughout.

**Search** — the site had a client-side search implementation built on a JSON index. In Astro, that became [Pagefind](https://pagefind.app/), which indexes static HTML at build time. Better performance, less maintenance, no custom JSON generation.

**Feed and redirects** — the RSS feed moved from a Jekyll plugin to an Astro integration. The old FeedBurner redirect in `netlify.toml` got cleaned up and replaced with a direct link to `/feed.xml`.

No content was lost. Every post URL preserved its original path. The site that came out the other side had the same content, the same structure, and the same SEO shape as the one that went in.

## The Dependency Problem, Solved

Going into the migration, the Jekyll stack had accumulated a real vulnerability load. Outdated gems, a sunset Ruby version, and a dependency graph that nobody wanted to touch. That's not a knock on Jekyll — it's the natural state of any project that stays on a fixed stack for a few years without active maintenance.

Astro runs on Node.js, which I was already using for tooling. The dependency tree is modern and actively maintained. The build toolchain is Vite under the hood. Updates are routine rather than risky.

The security posture of the site improved substantially just by moving to a maintained ecosystem. That's not something you can patch your way to — it's a structural benefit of the migration.

## What Didn't Go Perfectly

I'd be misrepresenting the experience if I said it was seamless end to end. It wasn't.

The CSS pipeline required some careful handling. Astro doesn't compile SCSS the same way Jekyll's asset pipeline does, and the site's custom styles had accumulated over years in a single `assets/main.scss`. We ended up with a `public/main.css` as the pre-compiled output that gets copied directly into the build — not the cleanest arrangement, but functional, and documented. The SCSS source stays as the canonical reference; changes have to land in both places until we set up a proper build step. That's a known tradeoff, not a hidden gotcha.

Search also required a few iterations. The first approach used a Pagefind UI widget that turned out to be incompatible with the site's existing header typeahead pattern. We backed that out and wired up the Pagefind low-level JavaScript API instead — which actually gave us more control and a cleaner result.

None of these issues were blockers. They were exactly the kind of mid-migration snags you'd expect on any non-trivial project, and working through them conversationally was faster than working through them alone.

## The Same Model, Again

Two days in a row, I used Copilot to do something that would have taken me weeks to do alone — if I'd have done it at all.

The redesign post was about the speed of visual iteration. This one is about something slightly different: the ability to tackle deferred maintenance that had been sitting on the to-do list for years because the activation energy was too high.

Jekyll worked. The site wasn't broken. But it was accumulating risk — security debt, toolchain friction, dependency rot — and I never quite had a weekend free enough to address it properly. The migration finally happened not because it became urgent, but because Copilot lowered the cost of doing it right.

That's the shift I keep coming back to. Not "AI is fast." It's that AI lowers the threshold for doing things you'd otherwise keep deferring. The work that doesn't happen because it's *just* too much friction to start today — that's where the real value compounds.

The site is now on a modern, maintained stack. It builds in seconds. It scores well on Lighthouse. It has full-text search. It has dark mode. It will be substantially easier to maintain for the next several years.

I contributed architectural judgment, content decisions, and final approval on every change. Copilot wrote the code.

That's a good division of labor.
