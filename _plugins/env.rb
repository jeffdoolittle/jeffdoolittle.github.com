# Plugin to add environment variables to the `site` object in Liquid templates

module Jekyll

  class EnvironmentVariablesGenerator < Generator

    def generate(site)
      site.config['JEKYLL_ENV'] = ENV['JEKYLL_ENV'] || 'local'
    end

  end

end