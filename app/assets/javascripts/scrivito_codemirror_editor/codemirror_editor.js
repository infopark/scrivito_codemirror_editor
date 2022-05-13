(function() {
  var scrivito_codemirror_editor = {
    can_edit: function(element) {
      return $(element).is('[data-scrivito-field-type=html]');
    },
    activate: function(element) {
      var cmsField = $(element);
      var value = cmsField.scrivito('content');
      cmsField.empty();
      var options = $.extend({}, scrivito_codemirror_editor.default_options, scrivito_codemirror_editor.options, {
        value: value
      });
      var editor = CodeMirror(element, options);
      editor.on('change', function(instance) {
        cmsField.scrivito('save', instance.getValue());
      });
    },
    default_options: {
      lineNumbers: true,
      lineWrapping: true
    },
    options: {}
  };

  scrivito.on('load', function() {
    scrivito.define_editor('codemirror', scrivito_codemirror_editor);
  });

}).call(this);
