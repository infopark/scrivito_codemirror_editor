# Scrivito CodeMirror Editor

[![Gem Version](https://badge.fury.io/rb/scrivito_codemirror_editor.svg)](https://badge.fury.io/rb/scrivito_codemirror_editor)

Use [CodeMirror](http://codemirror.net) to let your [Scrivito](https://scrivito.com) users edit HTML attributes as source code.


## Installation and Usage

### Add the gem

```
# Gemfile
gem 'scrivito_codemirror_editor'
```

### Add the assets

```
// application.js
// ...
//= require scrivito
//= require scrivito_codemirror_editor
// ...
```

```
/* application.css
 * ...
 *= require scrivito_codemirror_editor
 * ...
 */
```

### Enable CodeMirror for a single attribute

```
scrivito_tag :div, :my_widget, :my_html_attribute, {}, editor: :codemirror
```

### Enable CodeMirror for all HTML attributes on a details view

```
scrivito.on "load", ->
  scrivito.select_editor (element, editing) ->
    if $(element).is(".my_details_view [data-scrivito-field-type=html]")
      editing.use("codemirror")
```

## License

This software can be used and modified under the LGPL-3.0. Please refer to
http://www.gnu.org/licenses/lgpl-3.0.html for the license text.
