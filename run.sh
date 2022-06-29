#!/usr/bin/env bash

bundle install
bundle exec jekyll serve --watch --drafts --livereload --incremental
