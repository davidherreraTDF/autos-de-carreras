let priVuelta: number = Number(
  prompt("ingrese el tiempo de la primera vuelta")
);
let SegVuelta: number = Number(
  prompt("ingrese el tiempo de la segunda vuelta")
);
let terVuelta: number = Number(
  prompt("ingrese el tiempo de la tercera vuelta")
);
let cuaVuelta: number = Number(prompt("ingrese el tiempo de la cuarta vuelta"));

let tiempoTotal: number = priVuelta + SegVuelta + terVuelta + cuaVuelta;

let promeVuelta: number = tiempoTotal / 4;

console.log("el tiempo total es:", tiempoTotal);

console.log("el promedio por vuelta es:", promeVuelta);
