let btns = document.querySelectorAll("button");
let elCuadrado = document.querySelector(".el-Cuadrado");

let latestNews = () => {
  elCuadrado.style.backgroundColor = "white";
  let latestBgr = document.createElement("img");
  latestBgr.setAttribute(
    "src",
    "images/592c9a9bde027c366d3fa6711e227419--poster-print-spiderman.jpg"
  );
  elCuadrado.append(latestBgr);
  elCuadrado.classList.toggle("latest-news");
  setTimeout(() => {
    elCuadrado.classList.toggle("latest-news");
    elCuadrado.removeChild(latestBgr);
    elCuadrado.style.backgroundColor = "#033b77";
  }, 2000);
};
let hoop = () => {
  elCuadrado.style.backgroundColor = "white";
  let hoopBgr = document.createElement("img");
  hoopBgr.setAttribute("src", "images/1537871.png");
  elCuadrado.append(hoopBgr);
  elCuadrado.classList.toggle("hoop");
  setTimeout(() => {
    elCuadrado.classList.toggle("hoop");
    elCuadrado.removeChild(hoopBgr);
    elCuadrado.style.backgroundColor = "#033b77";
  }, 2000);
};

let tipsy = () => {
  elCuadrado.style.backgroundColor = "white";
  let tipsyBgr = document.createElement("img");
  tipsyBgr.setAttribute(
    "src",
    "images/—Pngtree—prohibit drunk driving_3176580.png"
  );
  elCuadrado.append(tipsyBgr);
  elCuadrado.classList.toggle("tipsy");
  setTimeout(() => {
    elCuadrado.classList.toggle("tipsy");
    elCuadrado.removeChild(tipsyBgr);
    elCuadrado.style.backgroundColor = "#033b77";
  }, 2000);
};

let alarmClock = () => {
  elCuadrado.style.backgroundColor = "white";
  let alarmBgr = document.createElement("img");
  alarmBgr.setAttribute(
    "src",
    "images/Alarm-clock-isolated-on-transparent-background-PNG.png"
  );
  elCuadrado.append(alarmBgr);
  elCuadrado.classList.toggle("alarm-clock");
  setTimeout(() => {
    elCuadrado.classList.toggle("alarm-clock");
    elCuadrado.removeChild(alarmBgr);
    elCuadrado.style.backgroundColor = "#033b77";
  }, 2000);
};

let ghost = () => {
  elCuadrado.style.backgroundColor = "white";
  let ghostBgr = document.createElement("img");
  ghostBgr.setAttribute("src", "images/2367.jpg");
  elCuadrado.append(ghostBgr);
  elCuadrado.classList.toggle("ghost");
  setTimeout(() => {
    elCuadrado.classList.toggle("ghost");
    elCuadrado.removeChild(ghostBgr);
    elCuadrado.style.backgroundColor = "#033b77";
  }, 1000);
};

let doTheThing = (btn) => {
  if (btn.target.id == "btn1") {
    latestNews();
    console.log("clicked btn 1");
  } else if (btn.target.id == "btn2") {
    hoop();
  } else if (btn.target.id == "btn3") {
    tipsy();
  } else if (btn.target.id == "btn4") {
    alarmClock();
  } else if (btn.target.id == "btn5") {
    ghost();
  }
};
btns.forEach((btn) => {
  btn.addEventListener("click", doTheThing);
});
