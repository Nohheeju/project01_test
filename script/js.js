/*
메인메뉴, 서브메뉴
*/
let menu = document.querySelector(".main_menu");
let items = menu.querySelectorAll(".main_menu li");
let lia = menu.querySelectorAll(".main_menu>li>a");
let tabLine = document.querySelector(".line");
console.log(menu, items, lia, tabLine);

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", function () {
    let subMenu = this.querySelector(".sub_menu");
    if (subMenu) {
      subMenu.style.display = "block";
    }
    if (items) {
      let itemss = this.querySelector(".main_menu li > a ");
      itemss.style.color = "#ab0202";
    }
  });
  items[i].addEventListener("mouseleave", function () {
    let subMenu = this.querySelector(".sub_menu");
    if (subMenu) {
      subMenu.style.display = "none";
    }
    if (items) {
      let itemss = this.querySelector(".main_menu li > a ");
      itemss.style.color = "#fff";
    }
  });
}
function moveLine(num) {
  let newLeft = lia[num].offsetLeft;
  let newWidth = lia[num].offsetWidth;
  tabLine.style.left = newLeft + "px";
  tabLine.style.width = newWidth + "px";
}
items.forEach(function (item, idx) {
  item.addEventListener("mouseenter", function (e) {
    moveLine(idx);
  });
});
/*
탭메뉴
*/
let tabMenu = document.querySelectorAll(".tab_menu a");
let tabCon = document.querySelectorAll(".tab_content .tap");

function showContent(num) {
  tabCon.forEach(function (item) {
    item.style.display = "none";
  });
  tabCon[num].style.display = "flex";
}
function activeTab(num) {
  tabMenu.forEach(function (item) {
    item.classList.remove("active");
  });
  tabMenu[num].classList.add("active");
}
activeTab(0);

tabMenu.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    showContent(idx);
    activeTab(idx);
  });
});
