let displayValue = '';

function AgregarMostrar(value) {
  displayValue += value;
  document.getElementById('Mostrar').value = displayValue;
}

function BorrarPantalla() {
  displayValue = '';
  document.getElementById('Mostrar').value = displayValue;
}

function calcular() {
  try {
    const result = eval(displayValue);
    document.getElementById('Mostrar').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('Mostrar').value = 'Error';
    displayValue = '';
  }
}
