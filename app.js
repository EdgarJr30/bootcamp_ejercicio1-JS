//Cantidad de notas a solicitar
let notesValue = prompt("Ingrese la cantidad de notas a promediar");

//Arreglo de notas
let arrNotes = [];

//Iterar la cantidad de veces que se pidio
for (i = 1; i <= notesValue; i++) {
  // Asignar las notas a una variable
  let nNotas = prompt(`Ingrese la nota #${i}`);
  // Almacenar cada nota en el arreglo de notas
  result = arrNotes.push(parseInt(nNotas));
}

let promedio = (notas = arrNotes) => {
  let sumatoria = 0;
  for (let i = 0; i < notas.length; i++) {
    sumatoria += notas[i];
  }
  return `El promedio de ${notas.length} notas es: ${(
    sumatoria / notas.length
  ).toFixed(2)}`;
};

let maxNumber = (number = arrNotes) => {
  let maxNumber = Math.max(...number);
  return `La nota más alta es: ${maxNumber}`;
};

let minNumber = (number = arrNotes) => {
  let minNumber = Math.min(...number);
  return `La nota más baja es: ${minNumber}`;
};

if (!notesValue || notesValue === "0") {
  document.getElementById("resultado").innerHTML =
    "No se han ingresado valores a promediar";
} else {
  let promedioResult = promedio();
  let maxNumberResult = maxNumber();
  let minNumberResult = minNumber();

  document.getElementById("promedio").innerHTML = promedioResult;
  document.getElementById("maxNumber").innerHTML = maxNumberResult;
  document.getElementById("minNumber").innerHTML = minNumberResult;
}