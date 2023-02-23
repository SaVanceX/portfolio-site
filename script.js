// mobile-menu element
const mobileMenu = document.querySelector("div");
mobileMenu.addEventListener("click", function () {
  // mobileMenu.children[1].classList.add("remove-span");
  if (!mobileMenu.children[1].classList.contains("remove-span")) {
    mobileMenu.children[1].classList.add("remove-span");
    mobileMenu.children[1].classList.remove("add-span");
  } else if (mobileMenu.children[1].classList.contains("remove-span")) {
    mobileMenu.children[1].classList.add("add-span");
    mobileMenu.children[1].classList.remove("remove-span");
  }

  if (!mobileMenu.children[0].classList.contains("rotate-45")) {
    mobileMenu.children[0].classList.add("rotate-45");
    mobileMenu.children[0].classList.remove("span-0");
  } else {
    mobileMenu.children[0].classList.add("span-0");
    mobileMenu.children[0].classList.remove("rotate-45");
  }

  if (!mobileMenu.children[2].classList.contains("rotate-135")) {
    mobileMenu.children[2].classList.add("rotate-135");
    mobileMenu.children[0].classList.remove("span-0");
  } else {
    mobileMenu.children[2].classList.add("span-0");
    mobileMenu.children[2].classList.remove("rotate-135");
  }
});
