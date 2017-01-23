



$(document).ready(function() {
    $("form.task-list").submit(function(event) {
      event.preventDefault();
      var inputTask = $("input#task").val();
    $(".output-stream").append('<div class="form-check form-check">'+
            '  <label class="form-check-label">'+
                '<input class="form-check-input" type="checkbox"'+  'class="checkbox" value="option1"> '+ inputTask +
              '</label>'+
            '</div>')
          });
});
