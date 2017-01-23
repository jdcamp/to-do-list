



$(document).ready(function() {
    $("form.task-list").submit(function(event) {
      event.preventDefault();
      $(".done").show();
      var inputTask = $("input#task").val();
    $(".output-stream").append('<div class="form-check form-check">'+
            '  <label class="form-check-label">'+
                '<input class="form-check-input" type="checkbox"'+  'class="checkbox" name="tasks-given" value="option1"> '+ inputTask +
              '</label>'+
            '</div>')
          });
     $(".done").click(function() {
       $("input:checkbox[name=tasks-given]:checked").each(function() {
         $(this).parent().parent().remove();
       });
     });
});
