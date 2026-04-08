#!/usr/bin/env bash

# Load chruby and activate the version from .ruby-version
source /usr/local/share/chruby/chruby.sh
source /usr/local/share/chruby/auto.sh
chruby "$(cat .ruby-version)"

rm -rf ./_site
bundle install
bundle exec jekyll serve --watch --drafts --livereload --incremental
