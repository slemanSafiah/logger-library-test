const card4 = document.getElementById("card4");
const container4 = document.getElementById("container4");

container4.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
  card4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container4.addEventListener("mouseenter", (e) => {
  card4.style.transition = "none";
});

container4.addEventListener("mouseleave", (e) => {
  card4.style.transition = "all 0.5s ease";
  card4.style.transform = "rotateY(0deg) rotateX(0deg)";
});
