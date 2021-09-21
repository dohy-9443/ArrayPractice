import Arr from "./navData.js";

const ulEl = document.querySelector("#jsUl");

// Object.keys(Arr).length
// 객체의 key 개수

let navMain = [];
let liHeight = [];

for (let i = 0; i < Object.keys(Arr).length; i++) {
  navMain.push(Object.keys(Arr)[i]);
  const liEl = document.createElement("li");
  liEl.classList.add("flex");
  liEl.innerText = navMain[i];

  ulEl.appendChild(liEl);
}

const lis = document.querySelectorAll("#jsUl > li");

lis.forEach((li) => {
  const ul = document.createElement("ul");
  // ul.classList.add("flex");

  li.appendChild(ul);
});

const liUlEls = document.querySelectorAll("#jsUl > li > ul");

navMain.forEach((cur, index) => {
  for (let i = 0; i < Arr[cur].length; i++) {
    const li = document.createElement("li");
    li.classList.add("flex");

    liUlEls[index].appendChild(li);

    li.innerText = Arr[cur][i];

    // console.log(`나는 ${i} 번째`);
  }
});

liUlEls.forEach((ul) => {
  let height = ul.childNodes.length * 30;
  liHeight.push(height);
});

const maxHeight = Math.max(...liHeight);

lis.forEach((li) => {
  li.childNodes[1].style.height = maxHeight;

  li.addEventListener("mouseover", function (event) {
    this.childNodes[this.childNodes.length - 1].style.height = maxHeight;
  });

  li.addEventListener("mouseout", function () {
    this.childNodes[this.childNodes.length - 1].style.height = 0;
  });
});
// console.log(navMain);
