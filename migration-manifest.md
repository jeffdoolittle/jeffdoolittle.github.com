# Migration Manifest: Jekyll → Astro
# Generated for #22 (parent #21)
# Date: 2026-04-08

## Summary

- Total posts: 56
- Group 1 (SE Radio layout consolidation): 28 posts
- Group 2 (Footnote MDX conversion): 4 posts
- Group 3 (Gallery MDX conversion): 1 post
- Group 4 (Other inline includes — MDX or layout): 6 posts
- Group 5 ({% post_url %} static replacement): 3 posts (4 occurrences)
- Clean posts (no Liquid in body): 19 posts

Note: Several posts appear in multiple groups (e.g., a footnote post that also has a copyright footer).

---

## Group 1 — SE Radio Posts (28 posts)
### Closing block to remove from each body, move to Post.astro layout:
```
[{{ page.title }}]({{ page.episode_url }}){:target="blank"} on Software Engineering Radio.
[Go give it a listen]({{ page.episode_url }}){:target="blank"} and be sure to share with your colleagues.
{%- include se-radio-plug.md -%}
```
### Posts:
- _posts/2019/11/12/hosting-software-engineering-radio/ (2019-11-12-hosting-software-engineering-radio.md)
- _posts/2020-01-24-antifragile-architecture-barry-oreilly.md
- _posts/2020-03-03-waterfall-vs-agile-se-radio-jeremy-miller.md
- _posts/2020-04-23-righting-software-with-juval-lowy.md
- _posts/2020-09-15-writing-for-software-developers-with-philip-kiely.md
- _posts/2021-06-02-the-programmers-brain-with-felienne.md
- _posts/2021-07-27-the-fallacies-of-distributed-computing-with-peter-deutsch.md
- _posts/2021-10-13-managing-technical-debt-with-ipek-ozkaya.md
- _posts/2021-10-21-infrastructure-as-code-with-luke-hoban.md
- _posts/2021-11-23-dapr-distributed-application-runtime-with-davide-bedin.md
- _posts/2022-04-19-cross-platform-ui-with-jerome-laban.md
- _posts/2022-07-11-a-philosophy-of-software-design-with-john-ousterhout.md
- _posts/2022-09-20-graphql-with-tanmai-gopal.md
- _posts/2022-11-02-software-engineering-in-physics-research-with-ryan-magee.md
- _posts/2022-11-22-event-modeling-with-adam-dymitruk.md
- _posts/2023-04-26-dataware-with-dan-demers.md
- _posts/2023-05-23-platform-engineering-with-luca-galante.md
- _posts/2023-06-08-unleash-the-power-of-technical-empathy.md (check: may not have se-radio-plug)
- _posts/2023-07-27-software-as-an-engineering-discipline-with-chad-michel.md
- _posts/2023-08-09-backends-for-frontends-with-jens-neuse.md
- _posts/2024-01-11-ammerse-with-jonathan-crossland.md
- _posts/2024-03-12-geospatial-tech-with-john-frandsen.md
- _posts/2024-05-15-role-of-the-software-architect-with-ori-saporta.md
- _posts/2024-07-31-leaders-and-software-engineers-with-chuck-weindorf.md
- _posts/2024-10-11-software-quality-with-steve-smith.md
- _posts/2025-02-04-mass-transit-with-chris-patterson.md
- _posts/2025-04-01-se-radio-662-vlad-khononov-on-balancing-coupling-in-software-design.md
- _posts/2025-08-27-se-radio-683-artie-shevchenko-on-programmers-as-code-health-guardians.md
- _posts/2025-12-03-se-radio-697-philip-kiely-on-multi-model-ai.md

---

## Group 2 — Footnote Posts (4 posts → GFM footnotes)
### Pattern: {% include fnref.html x=N %} + {% for fn in page.footnotes %}{% include fn.html %}{% endfor %}
- _posts/2020-11-04-software-leadership-distilled.md
  - Also has: copyright footer using {{ page.title }}, {{ page.url }}
- _posts/2020-11-06-leadership-style-matrix.md
  - Also has: copyright footer using {{ page.title }}, {{ page.url }}
- _posts/2020-05-22-dont-disrupt-agile-drop-it.md
  - Also has: {% include quote.html content=page.quotes.a/b/c %} (Group 4)
- _posts/2022-02-23-the-tao-of-software-architecture-an-introduction.md
  - Also has: {:toc} and {: .no_toc } (Kramdown TOC syntax — strip both)
  - Also has: copyright footer using {{ page.title }}, {{ page.url }}

---

## Group 3 — Gallery Post (1 post → MDX)
### Pattern: {% for l in page.locations %}{% for p in l.photos %} with lightbox images
- _posts/2024-03-14-los-cabos-2024.md
  - locations array in frontmatter
  - Create PhotoGallery.astro component accepting locations prop

---

## Group 4 — Other Inline Includes (6 posts)
### Posts and their includes:
- _posts/2021-07-24-immutable-architecture-book-club.md
  - {% include book-club-access.html %}
  - {{ page.url }} in body text
  - {% post_url 2021-02-18-the-art-of-immutable-architecture-michael-l-perry %}
- _posts/2021-07-28-liberating-constraints.md
  - {% include constraints-series.md %}
  - {% post_url %} references
- _posts/2021-12-20-design-before-technology.md
  - {% include constraints-series.md %}
  - {% post_url %} references, {{ page.title }} in quote
- _posts/2020-05-22-dont-disrupt-agile-drop-it.md (overlaps with Group 2)
  - {% include quote.html content=page.quotes.a/b/c %}
- _posts/2021-03-05-the-five-factor-model-of-cultural-alignment.md
  - {{ page.title }}, {{ page.url }} in copyright footer only → remove/hardcode
- _posts/2021-07-24-immutable-architecture-book-club.md
  - {{ page.url }} in body → hardcode to static URL

---

## Group 5 — {% post_url %} Static Replacements (3 posts, 4 occurrences)
- _posts/2021-07-24-immutable-architecture-book-club.md
  - {% post_url 2021-02-18-the-art-of-immutable-architecture-michael-l-perry %} → /2021/02/18/the-art-of-immutable-architecture-michael-l-perry/
- _posts/2021-07-28-liberating-constraints.md
  - {% post_url 2021-12-20-design-before-technology %} → /2021/12/20/design-before-technology/
- _posts/2021-12-20-design-before-technology.md
  - {% post_url 2021-12-20-design-before-technology %} → /2021/12/20/design-before-technology/ (self-referential)
  - {% post_url 2020-11-04-software-leadership-distilled %} → /2020/11/04/software-leadership-distilled/

---

## Additional Liquid Patterns (across groups)
### Copyright footer ({{ page.title }}, {{ page.url }}) — appears in 4 posts:
- 2020-11-04-software-leadership-distilled.md
- 2020-11-06-leadership-style-matrix.md
- 2021-03-05-the-five-factor-model-of-cultural-alignment.md
- 2022-02-23-the-tao-of-software-architecture-an-introduction.md
### Resolution: Convert to static text or remove (these are self-promotional footers, content is redundant)

### Kramdown TOC syntax:
- 2022-02-23-the-tao-of-software-architecture-an-introduction.md (lines 25-28)
### Resolution: Strip {:toc} and {: .no_toc } (Astro has no Kramdown TOC support)

---

## Redirect Files Enumerated
See urls-baseline.txt for full redirect mapping.

### Files to convert to public/_redirects:
- redirects/L-00001.md → /l/1
- redirects/exploring-requirements.md → /software-leadership/exploring-requirements
- redirects/leadership-style-matrix.md → /software-leadership/leadership-style-matrix/
- redirects/software-leadership-distilled.md → /software-leadership/software-leadership-distilled/
- redirects/pages/*.md (9 files)
- redirects/posts/*.md (5 files)
- redirects/social/*.md (11 files)
- redirects/papers/disrupting-agile.md → redirect-only to /2020/04/29/dont-disrupt-agile-drop-it/ (which itself redirects to /2020/05/22/dont-disrupt-agile-drop-it/)

---

## factually/ content
- /factually/ → src/pages/factually/index.astro
- /factually/historical-modeling/ → preserve as static page (index.md + content.html)

---

## Astro Integration Notes
- All IAL {: } syntax must be stripped (129 occurrences)
- rehype-external-links handles target="_blank" automatically
- MDX required for: Group 2 (footnotes), Group 3 (gallery), Group 4 posts with imports
- SE Radio plug moves to Post.astro layout (no MDX needed for Group 1)
