
function goToForm() {
const website = document.getElementById("websiteInput").value;
window.location.href = `/form.html?website=${encodeURIComponent(website)}`;
}


(function(){
const scene = document.querySelector('.orbit-scene');
if (!scene) return;
const laptop = scene.querySelector('.orbit-laptop');
scene.addEventListener('mousemove', (e) => {
    const r = scene.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5; // -0.5 .. 0.5
    const y = (e.clientY - r.top) / r.height - 0.5;
    laptop.style.transform = `translateZ(20px) rotateX(${4 - y*6}deg) rotateY(${x*6}deg)`;
    // slow subtle parallax for orbits
    const orbits = scene.querySelectorAll('.orbit');
    orbits.forEach((o,i) => {
    o.style.transform = `translate(-50%,-50%) rotate(${(i%2 ? 1 : -1) * x * 8}deg)`;
    });
});
scene.addEventListener('mouseleave', ()=> {
    laptop.style.transform = `translateZ(20px) rotateX(4deg) rotateY(0deg)`;
    document.querySelectorAll('.orbit').forEach(o=> o.style.transform='translate(-50%,-50%)');
});
})();
