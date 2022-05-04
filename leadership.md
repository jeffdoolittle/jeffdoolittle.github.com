---
layout: page
title: Leadership
permalink: /leadership/
show_banner: true
pagenav:
  - title: Recent Content
    href: /leadership/
    external: false
  - title: Mentoring
    href: /mentoring/
---

{%- include pagenav.html -%}

{% assign posts = site.posts | where: "category", "leadership" %}
{%- include posts.html posts=posts -%}
