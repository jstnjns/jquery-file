/**
 * --------------------------------------------------------------------
 * jQuery File Input Widget
 * Author: Justin Jones, justin@jstnjns.com
 * Copyright (c) 2011 Justin Jones
 *
 * Styling a <input type="file" /> sucks.  Or, it used to.. before this
 * widget was created. You can now style them just like the text inputs
 * and buttons already being used in your forms.
 *
 * Uses similar method as http://www.quirksmode.org/dom/inputfile.html
 *
 * --------------------------------------------------------------------
 */
(function($) {
  $.fn.fileInput = function() {
    return $(this).each(function() {
      var $file       = $(this).addClass('ui-file'),
          $wrapper    = $('<div />', {
                          'class' : 'ui-file-wrapper'
                        })
                          .insertBefore($file),
          $fake_group = $('<div />', {
                          'class' : 'ui-file-fake-wrapper'
                        })
                          .appendTo($wrapper),
          $fake_input = $('<input />', {
                          'class' : 'ui-file-fake-input',
                          'type'  : 'text'
                        })
                          .appendTo($fake_group),
          $fake_button= $('<button />', {
                          'class' : 'ui-file-fake-button',
                          'type'  : 'button',
                          'text'  : 'Browse...'
                        })
                          .appendTo($fake_group),
                          
          init = function() {
            $file
              .prependTo($wrapper)
              .change(function() {
                $fake_input.val($file.val());
              });
        
            $file.attr('disabled')&&disable();
          },
          disable = function() {
            $fake_button
              .attr('disabled', 'disabled')
              .addClass('ui-disabled');
            $fake_input
              .attr('disabled', 'disabled')
              .addClass('ui-disabled');
          },
          enable = function() {
            $fake_button
              .attr('disabled', false)
              .removeClass('ui-disabled');
            $fake_input
              .attr('disabled', false)
              .removeClass('ui-disabled');
          };
          
      init();
    });
  };
})(jQuery);