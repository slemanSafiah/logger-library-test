const card2 = document.getElementById("card2");
const container2 = document.getElementById("container2");

container2.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container2.addEventListener("mouseenter", (e) => {
  card2.style.transition = "none";
});

container2.addEventListener("mouseleave", (e) => {
  card2.style.transition = "all 0.5s ease";
  card2.style.transform = "rotateY(0deg) rotateX(0deg)";
});
