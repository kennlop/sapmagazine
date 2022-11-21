const landing = document.getElementById("landing");

window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;


  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

  const maxX = landing.offsetWidth - window.innerWidth,
        maxY = landing.offsetHeight - window.innerHeight;

  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

  landing.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}