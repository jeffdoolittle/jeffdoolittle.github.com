#!/usr/bin/env bash

# Use macOS system Ruby for local dev (bypasses chruby/ruby-3.1.2 which lost openssl@1.1)
# Netlify uses RUBY_VERSION=3.1 from netlify.toml — this file is local-only.
export PATH="/usr/bin:$PATH"

rm -rf ./_site
bundle install
bundle exec jekyll serve --watch --drafts --livereload --incremental
