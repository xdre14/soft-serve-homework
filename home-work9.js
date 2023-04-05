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
// $(document).ready(function() {
//    const checkboxes = $('input[type="checkbox"]');
//     checkboxes.on('change', function() {
//      const checkedBoxes = $('input[type="checkbox"]:checked');
//       if (checkedBoxes.length === 3) {
//         checkboxes.attr('disabled', true);
//       }
//     });
//   });

$(document).ready(function() {
    // зберігаємо всі чекбокси у змінну checkboxes
    var checkboxes = $('input[type="checkbox"]');
    // прив'язуємо функцію до події "click" на всі чекбокси
    checkboxes.on('click', function() {
      // знаходимо всі відмічені чекбокси
      var checkedBoxes = $('input[type="checkbox"]:checked');
      // якщо вибрано 3 чекбокси, робимо всі чекбокси неактивними
      if (checkedBoxes.length === 3) {
        checkboxes.attr('disabled', true);
      }
    });
  });