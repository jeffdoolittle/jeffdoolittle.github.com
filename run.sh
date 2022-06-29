#!/usr/bin/env bash

rm -rf ./_site
bundle install
bundle exec jekyll serve --watch --drafts --livereload --incremental
