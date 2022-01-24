---
layout: page
title: Publications
permalink: /publications/
show_banner: true
pagenav:
  - title: Leadership
    href: "#leadership"
  - title: Software Engineering Radio
    href: "#se-radio"
  - title: Cutter Consortium
    href: "#cutter"
  - title: PADNUG
    href: "#padnug"
---

{%- include pagenav.html -%}

{% assign categories = site.data.publications.categories %}

{% include content-entries.html categories=categories %}
