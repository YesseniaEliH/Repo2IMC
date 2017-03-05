function calculoIMC(){
  var nombre= document.getElementById('nombre').value;
  var peso=document.getElementById('peso').value;
  var altura=document.getElementById('altura').value;
  var form1=document.getElementsByName('form1')[0];
  var clasificacion;
  var peso=parseFloat(peso);
  var altura=parseFloat(altura);
  if(isNaN(peso)){
    alert ("Ingrese un valor numérico para peso");
    document.getElementById('peso').value="";
    document.getElementById('peso').focus();
    return;
  }
  if(isNaN(altura)){
    alert ("Ingrese un valor numérico para altura");
    document.getElementById('altura').value="";
    document.getElementById('altura').focus();
    return;
  }
  var resultado=(peso/(altura*altura)).toFixed(2);
  if(resultado>=40){
    clasificacion="Obesidad grado III Extrema o Mórbida";
  }else if(resultado>=30){
    clasificacion="Obesidad grado II";
  }else if(resultado>=27){
    clasificacion="Obesidad grado I";
  }else if(resultado>=25){
    clasificacion="Sobrepeso";
  }else if(resultado>=18){
    clasificacion="Normal";
  }else{
    clasificacion="Peso Bajo";
  }
  alert("Hola "+nombre.toUpperCase()+
        ":\n\nTu IMC (Índice de Masa Corporal) es : "+ resultado  +
        " \nTu Clasificación es  : "+ clasificacion);
  form1.reset();
  return;
}
