---
layout: page
title: About
permalink: /about/
images:
  - url: /assets/jeff_doolittle_bio_pic.jpg
    download: jeff_doolittle_bio_bw.jpg
  - url: /assets/head_shot_square_zoomed.jpg
    download: head_shot_square_zoomed.jpg
  - url: /assets/full_head_shot.jpg
    download: jeff_doolittle_bio_full.jpg
pagenav:
  - title: Professional Bio
    href: "#professional-bio"
  - title: Resume
    href: "#resume"
  - title: Personal Bio
    href: "#personal-bio"
  - title: Endorsements
    href: "#endorsements"
  - title: Portfolio
    href: "#portfolio"  
---

{%- include pagenav.html -%}

[![Software Architect and Mentor]({{ "/assets/about.jpg" | absolute_url }})](/assets/about.jpg)

<h2 id="professional-bio">Professional Bio <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

{%- include professional-bio.md -%}

[Bio Pics](#bio-pics) for use in publications are [available further down on this page](#bio-pics).

<p><hr /></p>

<h2 id="resume">Resume <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

See my [resume](/assets/resume.pdf){: target="_blank"} for an extensive description of my career.

<p><hr /></p>

<h2 id="personal-bio">Personal Bio <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

* Along with a group of friends, I planted [The Well Kingsburg](https://thewellkingsburg.org/) church in Kingsburg, CA where I pastored from 2010 to the beginning of 2017.

* My family currently resides in the Portland, Oregon area.

* I grew up in San Diego, California and graduated from <a href="https://www.powayusd.com/en-US/Schools/HS/PHS/Home" target="_blank">Poway High School</a>.

* I have been <a href="{{ site.baseurl }}{% post_url 2018-08-04-hope-in-the-dark %}">playing guitar</a> since I was 13, and it remains one of my passions and joys. I can also play piano and bass, and I'm learning to play the drums.

* I met my bride, Amy, at <a href="https://www.biola.edu/" target="_blank">Biola University</a> where I received my BS in Business Administration with an emphasis in Marketing, and a minor in Biblical Studies.

* I graduated Summa Cum Laude with a Master of Arts in <a href="https://www.bethel.edu/seminary/academics/transformational-leadership/" target="_blank">Transformational Leadership</a> from <a href="https://www.bethel.edu/academics/san-diego/" target="_blank">Bethel Seminary San Diego</a> in 2010.

* I believe life consists of three primary pursuits: Connecting with God, Connecting with People, and Connecting with Purpose.

<p><hr /></p>

<h2 id="bio-pics">Bio Pics <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

<div>
  {% for image in page.images %}
      <p style="text-align: center">
        <a href="{{ image.url }}" download="{{ image.download }}">
          <img width="480" src="{{ image.url | absolute_url }}" alt="Software Architect and Mentor" />
          <div style="margin: 0 0 2em 0; text-align: center;">
            Right click to download
          </div>
        </a>
    </p>
  {% endfor %}
</div>

<p><hr /></p>

<h2 id="endorsements">Endorsements <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

{%- include endorsements.md -%}

<p><hr /></p>

<h2 id="portfolio">Portfolio <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

{%- include portfolio.md -%}
