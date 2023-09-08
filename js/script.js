window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo_principal").style.height = "40px";
    document.getElementById("btn_menu").style.padding = "0px 12px";
    document.getElementById("header").classList.add("shadow");
  } else {
    document.getElementById("logo_principal").style.height = "60px";
    document.getElementById("btn_menu").style.padding = "9px 12px";
    document.getElementById("header").classList.remove("shadow");
  }
}