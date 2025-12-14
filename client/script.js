
function goToForm() {
const website = document.getElementById("websiteInput").value;
window.location.href = `/form.html?website=${encodeURIComponent(website)}`;
}


document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
});

