// task 1

$(document).ready(function(){
    $('h2.head').css('background-color', 'green');
    $('h2.head .inner').css('font-size', '35px');
  });


//   task 2
$(document).ready(function(){
    $('a[href^="https://"]').attr('target', '_blank');
  });


//   task 3
$('h3 + div').each(function() {
    $(this).insertBefore($(this).prev('h3'));
  });

//   task 4 
$(document).ready(function() {
   const checkboxes = $('input[type="checkbox"]');
    checkboxes.on('change', function() {
     const checkedBoxes = $('input[type="checkbox"]:checked');
      if (checkedBoxes.length >= 3) {
        checkboxes.attr('disabled', true);
      }
    });
  });

