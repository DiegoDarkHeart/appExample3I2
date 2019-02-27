// This is a JavaScript file
/* 
$(document).on('click','#btn9',function(){
  var valor = $("#display").val();
  valor += "9";
  $("#display").val(valor);
});

$(document).on('click','#btn8',function(){
  var valor = $("#display").val();
  valor += "8";
  $("#display").val(valor);
});

$(document).on('click','#btn7',function(){
  var valor = $("#display").val();
  valor += "7";
  $("#display").val(valor);
});

$(document).on('click','#btn6',function(){
  var valor = $("#display").val();
  valor += "6";
  $("#display").val(valor);
});

$(document).on('click','#btn5',function(){
  var valor = $("#display").val();
  valor += "5";
  $("#display").val(valor);
});

$(document).on('click','#btn4',function(){
  var valor = $("#display").val();
  valor += "4";
  $("#display").val(valor);
});

$(document).on('click','#btn3',function(){
  var valor = $("#display").val();
  valor += "3";
  $("#display").val(valor);
});

$(document).on('click','#btn2',function(){
  var valor = $("#display").val();
  valor += "2";
  $("#display").val(valor);
});

$(document).on('click','#btn1',function(){
  var valor = $("#display").val();
  valor += "1";
  $("#display").val(valor);
});
*/

$(document).on('click','.botao',function(){
  var valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
});

$(document).on('click','#clear',function(){
  var valor = $("#display").val();
  valor = "";
  $("#display").val(valor);
})
