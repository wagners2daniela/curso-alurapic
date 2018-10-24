$(function () {
    'use strict';
    /*$('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });*/

    $(".todo-list").todolist({
    onCheck: function (ele) {
      window.console.log("The element has been checked");
      return ele;
    },
    onUncheck: function (ele) {
      window.console.log("The element has been unchecked");
      return ele;
    }
  });
  /*$('#chat-box').slimScroll({
    height: '250px'
  });
  $('#todo-box').slimScroll({
    height: '250px'
  });*/
});


