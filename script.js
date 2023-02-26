// mobile-menu element
const mobileMenu = document.querySelector("div");
const firstMenuBar = mobileMenu.children[0];
const secondMenuBar = mobileMenu.children[1];
const thirdMenuBar = mobileMenu.children[2];

// handle open and close of moblile menu
const addClass = (menubar, classname) => {
  return menubar.classList.add(classname);
};

const removeClass = (menubar, classname) => {
  return menubar.classList.remove(classname);
};

let isOpen = false;
mobileMenu.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen) {
    console.log("Open Menu");
    addClass(firstMenuBar, "rotate-45");
    addClass(secondMenuBar, "remove-span");
    addClass(thirdMenuBar, "rotate-135");

    removeClass(firstMenuBar, "span-0");
    removeClass(secondMenuBar, "add-span");
    removeClass(thirdMenuBar, "span-0");
  } else {
    console.log("Close Menu");
    addClass(firstMenuBar, "span-0");
    addClass(secondMenuBar, "add-span");
    addClass(thirdMenuBar, "span-0");

    removeClass(firstMenuBar, "rotate-45");
    removeClass(secondMenuBar, "remove-span");
    removeClass(thirdMenuBar, "rotate-135");
  }
});
