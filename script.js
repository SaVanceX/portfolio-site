// mobile-menu element
const hamburgerMenu = document.querySelector("div.hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

console.log(mobileMenu);
const firstMenuBar = hamburgerMenu.children[0];
const secondMenuBar = hamburgerMenu.children[1];
const thirdMenuBar = hamburgerMenu.children[2];

// handle open and close of moblile menu
const addClass = (menubar, classname) => {
  return menubar.classList.add(classname);
};

const removeClass = (menubar, classname) => {
  return menubar.classList.remove(classname);
};

let isOpen = false;
hamburgerMenu.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen) {
    console.log("Open Menu");
    addClass(firstMenuBar, "rotate-45");
    addClass(secondMenuBar, "remove-span");
    addClass(thirdMenuBar, "rotate-135");

    removeClass(firstMenuBar, "span-0");
    removeClass(secondMenuBar, "add-span");
    removeClass(thirdMenuBar, "span-0");
    mobileMenu.classList.add("right-position");
    // mobileMenu.classList.add("display-block");
  } else {
    console.log("Close Menu");
    addClass(firstMenuBar, "span-0");
    addClass(secondMenuBar, "add-span");
    addClass(thirdMenuBar, "span-0");

    removeClass(firstMenuBar, "rotate-45");
    removeClass(secondMenuBar, "remove-span");
    removeClass(thirdMenuBar, "rotate-135");
    mobileMenu.classList.remove("right-position");
  }
});
