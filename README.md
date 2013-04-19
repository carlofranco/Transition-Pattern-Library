# Transition Pattern Library

A middleman-based site for showcasing programmatic CSS-transition animations. It is a useful framework for organizing demo animations from multiple contributors with different coding styles, because demo files can specify their own css and js files. The approach to demoing transitions follows that described by [Alex Maccaw](https://github.com/maccman) in [http://blog.alexmaccaw.com/css-transitions](http://blog.alexmaccaw.com/css-transitions), which gives us CSS transition callbacks and chaining.

## Features

* Based on Middleman
* Siloed markup/js/css
* Approaches transitions programmatically

## Requirements

* jQuery 1.8.2
* Middleman 3.012
* middleman-listpages 0.0.2

## Installation

* bundle install
* bundle exec middleman

Now go to 0.0.0.0:4567

## Recommended usage

Create folders and files for demo categories and the demos themselves. Create stylesheets either on a per-category basis, or per-demo basis (same goes for javascript), and specify these in the YAML frontmatter of your demo pages. Use the CSS to specific initial styles for your demo objects, and create your transitions using the jQuery, as demonstrated.

## Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request