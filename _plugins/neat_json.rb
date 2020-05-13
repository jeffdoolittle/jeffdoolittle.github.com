require 'neatjson'

module Jekyll
  module NeatJsonFilter
    def neat_json(input)
      input = JSON[input] rescue input if input.class == String
      
      begin
        JSON.neat_generate(input, wrap: 40, after_comma: 1, after_colon: 1)
      rescue JSON::GeneratorError => e
        "Error: #{e}."
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::NeatJsonFilter)

