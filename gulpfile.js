const { src, dest, watch, series } = require("gulp"); // import source, destination, watch, series functions
const sass = require("gulp-sass")(require("sass")); // import gulp-sass plug-in che richiede a sua volta un'altra funzione (compilatore sass)

function buildStyles() { // compiling sass into css
  return src("index.scss").pipe(sass()).pipe(dest("css"));
  // prende index.scss, lo inserisce e lo converte in css
}

function watchTask() { // funzione per leggere il file sas per le modifiche da ricompilare ad ogni cambiamento
  watch(["index.scss"], buildStyles);
  //invoca watch  e come argomento gli passiamo ciò che vogliamo leggere
  // e come secondo argomento la funzione compilatore
}

exports.default = series(buildStyles, watchTask); // esportiamo in ordine e poi su terminale:  gulp 
