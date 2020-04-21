# Plugin to add environment variables to the `site` object in Liquid templates

module Jekyll

  class EnvironmentVariablesGenerator < Generator

    def generate(site)
      site.config['env'] = ENV['JEKYLL_ENV'] || 'development'
      site.config['TEST_ENV'] = ENV['TEST_ENV'] || 'test'
    end

  end

end