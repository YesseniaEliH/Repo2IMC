function calculoIMC(){
  var nombre = document.getElementById('nombre').value;
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  var imc = (peso / Math.pow(altura,2)).toFixed(2);

  document.getElementById('resultado').innerHTML = nombre + " tu Indice de Masa Corporal es " + imc;
}
