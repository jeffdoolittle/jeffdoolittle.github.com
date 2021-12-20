---
layout: page
title: Leadership
permalink: /leadership/
show_banner: true
pagenav:
  - title: Software Leadership
    href: /software-leadership/
    external: false
  - title: Mentoring
    href: /mentoring
---

{% assign posts = site.posts | where: "category", "leadership" %}
{%- include posts.html posts=posts -%}
