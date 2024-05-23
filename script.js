/* TELA DE CARREGAMENTO */

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("#loader-wrapper").style.opacity = 0;
    setTimeout(function () {
      document.querySelector("#loader-wrapper").style.display = "none";
    }, 1000);
  }, 4000);
});
