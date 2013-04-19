# Transition Pattern Library

A middleman-based site for showcasing programmatic CSS-transition animations. It is a useful framework for organizing demo animations from multiple contributors with different coding styles, because demo files can specify their own css and js files. The approach to demoing transitions follows that described by Alex Maccaw in [http://blog.alexmaccaw.com/css-transitions](http://blog.alexmaccaw.com/css-transitions), which gives us CSS transition callbacks and chaining.

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

Create folders and files for demo categories and the demos themselves. Create stylesheets either on a per-category basis, or per-demo basis (same goes for javascript). Use the CSS to specific initial styles for your demo objects, and create your transitions using the jQuery, as demonstrated.