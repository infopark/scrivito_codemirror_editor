@scrivito_codemirror_editor =
  can_edit: (element) -> $(element).is '[data-scrivito-field-type=html]'
  activate: (element) ->
    cmsField = $(element)
    value = cmsField.scrivito 'content'
    cmsField.empty()

    options = $.extend {},
      scrivito_codemirror_editor.default_options,
      scrivito_codemirror_editor.options,
      value: value

    editor = CodeMirror element, options

    editor.on 'change', (instance) -> cmsField.scrivito 'save', instance.getValue()
  default_options:
    lineNumbers: true
    lineWrapping: true
  options: {}

scrivito.on 'load', -> scrivito.define_editor 'codemirror', scrivito_codemirror_editor
