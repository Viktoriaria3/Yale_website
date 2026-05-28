const container = document.getElementById("confetti-container");
const colors = ["#0d3b66", "#1d4e89", "#2e6fa1", "#3e88b3"]; // темні блакитні

function createRibbon() {
  const ribbon = document.createElement("div");
  ribbon.classList.add("ribbon");

  // випадкова стартова позиція
  ribbon.style.left = Math.random() * window.innerWidth + "px";
  ribbon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
  // випадкова швидкість і обертання
  const duration = Math.random() * 3 + 2; // 2-5 секунд
  const rotate = Math.random() * 360;
  ribbon.style.transform = `rotate(${rotate}deg)`;
  ribbon.style.animation = `fall ${duration}s linear forwards`;
  
  container.appendChild(ribbon);

  setTimeout(() => {
    ribbon.remove();
  }, duration * 1000);
}

// створюємо конфеті кожні 0.1 секунди
setInterval(createRibbon, 100);

// keyframes для падіння зі спіраллю
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(720deg); }
}
`;
document.head.appendChild(style);
