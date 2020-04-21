---
layout: plain
title: Environment
permalink: /env
---

# Environment

site.env: {{ site.env }}

site.test: {{ site.test }}

site.TEST_ENV: {{ site.TEST_ENV }}

<p>Last updated: {{ site.time | date: '%A, %B %e, %Y at %l:%M:%S %p %Z' }}</p>
