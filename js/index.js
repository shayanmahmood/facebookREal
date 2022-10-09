// const menuContainer = document.querySelector(".menu-container"),
// messengerContainer = document.querySelector(".messenger-container"),
// notificationContainer = document.querySelector(".notification-container"),
// profileContainer = document.querySelector(".profile-container"),
// userSelect = document.querySelectorAll(".user-select");

// userSelect.addEventListener("click", () => {

//     if(userSelect.id === "menu"){
//         menuContainer.classList.toggle("visiblety-changer");
//     }
//     else if(userSelect.id === "messenger"){
//         messengerContainer.classList.toggle("visiblety-changer");
//     }
//     else if(userSelect.id === "notification"){
//         notificationContainer.classList.toggle("visiblety-changer");
//     }
//     else{
//         profileContainer.classList.toggle("visiblety-changer");
//     }
//     console.log(userSelect)

// });
// console.log(userSelect)

const dropDown = document.querySelector(".sidebar-drowndown"),
  dropdownItem = document.querySelector(".sidebar-dropdownItem"),
  dropUp = document.querySelector(".sidebar-drownup"),
  sidebarFlex = document.querySelector(".sidebar-flex"),
  parent = document.querySelector(".sidebar-dropdownCircle"),
  child = document.querySelector(".sidebar-dropdownIcon"),
  loaderImg = document.querySelector(".sidebar-flexLoader"),
  nextIcon = document.querySelector(".postStory-iconBox"),
  nextIconLeft = document.querySelector(".postStory-iconBoxLeft"),
  scrollingPoint = document.querySelector(".postStory-main");

dropDown.addEventListener("click", () => {
  child.classList.add("hidden");
  loaderImg.classList.remove("hidden");
  setTimeout(function () {
    dropDown.remove();
    dropdownItem.classList.toggle("hidden");
    dropdownItem.appendChild(dropUp);
  }, 2000);
});

dropUp.addEventListener("click", () => {
  dropUp.remove();
  dropdownItem.classList.toggle("hidden");
  sidebarFlex.appendChild(dropDown);
  child.classList.toggle("hidden");
  loaderImg.classList.toggle("hidden");
});


nextIcon.addEventListener("click",() => {
   scrollingPoint.scrollTo(200,0);
   nextIcon.classList.add("visiblety-changer");
   nextIconLeft.classList.remove("visiblety-changer");
});

nextIconLeft.addEventListener("click", () => {
  scrollingPoint.scrollTo(0,200);
  nextIconLeft.classList.add("visiblety-changer");
  nextIcon.classList.remove("visiblety-changer");
});