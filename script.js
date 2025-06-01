// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑ Top";
scrollBtn.id = "scrollToTop";
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
`;
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Welcome Alert on First Visit
window.addEventListener("load", () => {
  if (!localStorage.getItem("visited")) {
    alert("Welcome to Vishav Yadav's Portfolio!");
    localStorage.setItem("visited", "true");
  }
});

// Floating Image Animation
const img = document.getElementById('floatingImage');

const baseTop = 20;      // base top position in px
const amplitude = 20;    // floating movement range (px)
const speed = 0.02;      // speed of float animation
let angle = 0;

function animate() {
  angle += speed;
  const offset = Math.sin(angle) * amplitude;
  img.style.top = baseTop + offset + 'px';

  requestAnimationFrame(animate);
}

animate();
