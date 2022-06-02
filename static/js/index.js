const projectBtn = document.getElementById("to-project");
const homeBtn = document.getElementById("to-home");
const profileContent = document.querySelector(".profile-content");
const projectContent = document.querySelector(".project-content");
const fadeOutClass = "fadeOutElement";
const fadeInClass = "fadeInElement";
const hideClass = "hideElement";

projectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  profileContent.classList.remove(fadeInClass);
  profileContent.offsetWidth; // forces the browser to reapply animation
  // https://stackoverflow.com/questions/60686489/what-purpose-does-void-element-offsetwidth-serve
  // https://css-tricks.com/restart-css-animation/#aa-update-another-javascript-method-to-restart-a-css-animation
  profileContent.classList.add(fadeOutClass);
  setTimeout(() => {
    profileContent.classList.add(hideClass);
  }, 700);

  projectContent.classList.remove(hideClass);
  projectContent.classList.remove(fadeOutClass);
  projectContent.offsetWidth;
  projectContent.classList.add(fadeInClass);
});

homeBtn.addEventListener("click", () => {
  projectContent.classList.remove(fadeInClass);
  projectContent.offsetWidth;
  projectContent.classList.add(fadeOutClass);
  setTimeout(() => {
    projectContent.classList.add(hideClass);
  }, 700);

  profileContent.classList.remove(hideClass);
  profileContent.classList.remove(fadeOutClass);
  profileContent.offsetWidth;
  profileContent.classList.add(fadeInClass);
});
