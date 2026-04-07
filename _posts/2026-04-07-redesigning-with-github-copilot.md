---
layout: post
title: "From Dormant to Redesigned: One Day with GitHub Copilot"
date: 2026-04-07 12:00:00 -0700
category: software
tags: [ai, copilot, design, jekyll]
excerpt: How I used GitHub Copilot to completely redesign my personal site in a single day — and what that reveals about AI-assisted development.
image: /assets/portland_view_from_mt_tabor.jpg
image_alt: View from Mt. Tabor, Portland
published: true
---

## The Starting Point

The site had been quiet since October 14, 2025 — just a two-line biographical update. The underlying design was years-old Minima with hand-crafted SCSS variables, flat post lists, and no real visual identity. Security vulnerabilities were aging in the Gemfile.

On April 7, 2026, all of that changed — in a single day.

Not a few tweaks. A complete transformation spanning five distinct phases, each tracked as a GitHub Issue with its own branch and merge.

---

## Phase 1 — Design Exploration

Rather than experimenting directly in the codebase, Copilot generated three fully self-contained HTML prototypes — `option-a.html`, `option-b.html`, `option-c.html` — with a companion README summarizing the tradeoffs:

| Option | Theme | Character |
|--------|-------|-----------|
| A | **Modern Professional** | Dark header, amber accent, card layout |
| B | **Minimal & Clean** | White canvas, teal accent, airy whitespace |
| C | **Warm Editorial** | Off-white, terracotta, editorial type |

This is a fundamentally better workflow than the traditional "guess and refresh" loop. All three options were fully rendered, side-by-side comparable, and disposable. Option A was chosen. The `_design/` folder was deleted entirely after selection — no cruft left behind.

The resulting implementation touched **17 files**, adding 2,535 lines and removing 222. Core changes:

- `assets/main.scss` grew from **615 to 1,236 lines** — and became a genuinely engineered stylesheet
- Sass variables (`$siteHighlightColor`) replaced by **CSS custom properties** (`:root { --link: ... }`) enabling theming at the token level
- Flat post list replaced by a **card-based grid** with hover states and metadata
- Max-width widened from 1,000px to **1,200px**
- Google Font pairing (display + body) added
- Header redesigned: deep navy (`#0f2744`) background with amber (`#f59e0b`) accent
- Footer restructured

---

## Phase 2 — Dependency Security

Immediately after the design merge, Copilot identified four gems with known vulnerabilities and updated them in a single `Gemfile.lock` change: `rexml`, `kramdown`, `addressable`, and `webrick`. Two of these had CVEs in the XML/injection parsing category.

---

## Phase 3 — Full-Width Hero

The homepage hero was promoted to full-bleed. This required coordinated changes across `_layouts/default.html` and `_layouts/home.html` — not a CSS tweak but a layout restructure, breaking the hero out of the standard content container.

---

## Phase 4 — Netlify Deployment Fix

The gem updates broke the Netlify build. The Ruby version Netlify was using was incompatible with the updated `addressable` gem. What followed was a multi-commit diagnostic sequence:

1. Try pinning Ruby 2.7.8 → fails (Netlify's `noble` build image changed)
2. Create `netlify.toml`, try Ruby 3.2 → different failure
3. Pin Ruby 3.1 specifically for `Liquid 4.0.3` `tainted?` compatibility

Three commits, three targeted iterations. This kind of environment-matrix debugging — local Ruby vs. Netlify CI vs. gem version compatibility — traditionally burns hours of context-switching. With Copilot, each iteration was documented in the commit message, leaving a diagnostic trail for any future regression.

---

## Phase 5 — Dark Mode

The most technically complex phase. Copilot implemented a full dark mode system:

- Dual-theme CSS custom properties (`:root` light + `[data-theme="dark"]`)
- A **no-flash script** injected in `<head>` that reads a cookie before the page renders, falling back to `prefers-color-scheme`
- A sun/moon toggle button in the header with icon sync
- Cookie persistence (365 days, `SameSite=Lax`)

This was followed by three refinement commits: amber lightened from `#f59e0b` to `#fbbf24` for better contrast, card/section title colors corrected through CSS variables, and a `--card-bg` property that was accidentally dropped in an earlier commit and restored. The iteration loop was tight — visual test, precise CSS fix, commit.

---

## Visual Improvements

| Before | After |
|--------|-------|
| Minima default gray header | Deep navy header with amber accent |
| Flat chronological post list | Card grid with hover elevation |
| 1,000px max-width | 1,200px max-width |
| System serif/sans fonts | Google Font pairing (display + body) |
| Light mode only | Light + dark mode with toggle, system preference, and cookie |
| Inline SCSS variables | Design token system (CSS custom properties) |
| Basic footer | Structured multi-column footer |
| Contained hero section | Full-bleed hero on homepage |

---

## Technical Improvements

- **Security**: Four gem CVEs patched
- **CSS architecture**: Migrated to CSS custom properties — a prerequisite for theming that would have required a full rewrite anyway
- **Deployment stability**: `netlify.toml` added with explicit Ruby version pinning, eliminating future environment drift
- **Workflow infrastructure**: `.github/copilot-instructions.md` (73 lines) codified an issue-first, branch-per-feature, merge-trigger workflow — making every future AI-assisted session follow a consistent, reviewable pattern
- **Prototype-first design**: The `_design/` prototyping approach separates design decisions from implementation, reducing costly mid-implementation pivots

---

## Comparative Time Analysis

| Task | Estimated without AI | Actual with AI |
|------|---------------------|----------------|
| Generate 3 design prototypes | 4–8 hours (mockup tools + HTML) | ~20 minutes |
| Evaluate and choose direction | 1–2 hours | Minutes (side-by-side in browser) |
| Implement design refresh (17 files, 2,535 lines) | 2–4 days | ~2 hours |
| Diagnose and fix Netlify/Ruby version matrix | 2–4 hours | ~45 minutes (3 targeted commits) |
| Dark mode with no-flash + cookie + toggle | 4–8 hours | ~1 hour |
| Security gem audit and update | 1–2 hours | ~10 minutes |
| **Total** | **~5–7 days** | **~1 day** |

The most striking leverage wasn't in any single feature — it was in the **design exploration phase**. Generating three complete, browser-renderable prototypes with coherent typography, color systems, and component structures in under an hour is something that previously required a designer, a prototype tool, and multiple review cycles. Here, it was a single conversation that produced artifacts you could open directly in a browser and compare.

---

## The Meta-Lesson

This project also encodes its own continuation strategy. The `.github/copilot-instructions.md` file means every future session starts with the same disciplined workflow: file an issue, branch from main, commit with references, merge on explicit approval. The AI isn't just doing the work — it's building the scaffolding that makes the next session faster than this one.
