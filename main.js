import Arr from "./navData.js";

const ulEl = document.querySelector("#jsUl");

// Object.keys(Arr).length
// 객체의 key 개수

let navMain = [];

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
  console.log(`${cur} 시작`);
  for (let i = 0; i < Arr[cur].length; i++) {
    const li = document.createElement("li");
    li.classList.add("flex");

    liUlEls[index].appendChild(li);

    li.innerText = Arr[cur][i];
    console.log(`나는 ${i} 번째`);
  }

  console.log(`${cur} 끝`);
});

liUlEls.forEach((ul) => {
  console.log(ul);
});
// console.log(navMain);
