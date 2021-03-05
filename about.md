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
  - title: Focus
    href: "#focus"
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

I am a Software Architect and Transformational Leader. I have over twenty years of experience designing and architecting software systems, and providing developer leadership and mentorship.

I bring together a unique blend of technical prowess, compassion, empathy, commitment to high quality, and leadership skills. I excel at helping Software Executives, Engineers and Developers to accelerate their productivity. I thrive on helping everyone I work with to maximize their skills and fulfill their potential, personally and professionally.

- Senior Software Architect for Trimble CMS
- Third decade in the software industry
- Former CTO for a boutique consulting firm
- Former SaaS CTO in the AgTech industry
- BS - Business Administration and Marketing
- MA - Transformational Leadership
- Host on [Software Engineering Radio](https://www.se-radio.net/team/jeff-doolittle/){:target="_blank"}
- Published Author and Industry Thought Leader


<h2 id="focus">Focus<span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

**Vision**: A world where humans thrive by discovering, refining and acting on their unique value creation potential while helping others do the same.

**Mission**: To help make good software professionals great!

**Strategy**: Design Engineering Leadership (Training, Mentoring, Writing, Presenting, Model Building, Scientific Method)

<h2 id="professional-bio">Professional Bio <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

{%- include professional-bio.md -%}

<h2 id="bio-pics">Bio Pics <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

<div>
  {% for image in page.images %}
      <p style="text-align: center">
        <a href="{{ image.url }}" download="{{ image.download }}">
          <img width="480" src="{{ image.url | absolute_url }}" alt="Software Architect and Transformational Leader" />
          <div style="margin: 0 0 2em 0; text-align: center;">
            Right click to download
          </div>
        </a>
    </p>
  {% endfor %}
</div>

<p><hr /></p>

<h2 id="resume">Resume <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

See my [resume](/assets/resume.pdf){: target="_blank"} for an extensive description of my career.

<p><hr /></p>

<h2 id="personal-bio">Personal Bio <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

* My family currently resides in the Portland, Oregon area.

* I grew up in San Diego, California and graduated from <a href="https://www.powayusd.com/en-US/Schools/HS/PHS/Home" target="_blank">Poway High School</a>.

* I have been <a href="{% post_url 2018-08-04-hope-in-the-dark %}">playing guitar</a> since I was 13, and it remains one of my passions and joys. I can also play piano and bass, and I'm learning to play the drums.

* I met my bride, Amy, at <a href="https://www.biola.edu/" target="_blank">Biola University</a> where I received my BS in Business Administration with an emphasis in Marketing, and a minor in Biblical Studies.

* I graduated Summa Cum Laude with a Master of Arts in <a href="https://www.bethel.edu/seminary/academics/transformational-leadership/" target="_blank">Transformational Leadership</a> from <a href="https://www.bethel.edu/academics/san-diego/" target="_blank">Bethel Seminary San Diego</a> in 2010.

<p><hr /></p>

<h2 id="endorsements">Endorsements <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

{%- include endorsements.html -%}

<p><hr /></p>

<h2 id="portfolio">Portfolio <span style="float: right; vertical-align: center; font-size: .5em">^ <a href="#top">top</a></span></h2>

{%- include portfolio.html -%}
