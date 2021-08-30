const card3 = document.getElementById("card3");
const container3 = document.getElementById("container3");

container3.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container3.addEventListener("mouseenter", (e) => {
  card3.style.transition = "none";
});

container3.addEventListener("mouseleave", (e) => {
  card3.style.transition = "all 0.5s ease";
  card3.style.transform = "rotateY(0deg) rotateX(0deg)";
});
