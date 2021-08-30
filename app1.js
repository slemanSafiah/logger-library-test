const card = document.getElementById("card1");
const container = document.getElementById("container1");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
});
