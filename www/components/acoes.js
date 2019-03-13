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

//mostra numero no display quando pressionado
$(document).on('click','.botao',function(){
  var valor = $("#display").val();
  valor += $(this).val();
  $("#display").val(valor);
});

//limpa o display
$(document).on('click','#clear',function(){
  var valor = $("#display").val();
  valor = "";
  $("#display").val(valor);
})

//implementação dos botões de calculos
var op;
var valor1;
var valor2;

$(document).on('click','btnSomar',function(){
  valor1 = $("display").val();
  op = "somar";
  $("display").val("");
})

$(document).on('click','btnSubtrair',function(){
  valor1 = $("display").val();
  op = "subtrair";
  $("display").val("");
})

$(document).on('click','btnMultiplicar',function(){
  valor1 = $("display").val();
  op = "multiplicar";
  $("display").val("");
})

$(document).on('click','btnDividir',function(){
  valor1 = $("display").val();
  op = "dividir";
  $("display").val("");
})
