const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

noBtn.addEventListener("click", () => {
  question.innerHTML = "You're right!!!!!!";
  gif.src =
    "https://media0.giphy.com/media/NleClMvMVW1gRdBSy5/giphy.gif?cid=ecf05e47uyr1u7ex37xxwz1jm5d5h2eszulubji39dwt61fw&ep=v1_gifs_search&rid=giphy.gif&ct=g";
});

yesBtn.addEventListener("mouseover", () => {
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const maxX = window.innerWidth - yesBtnRect.width;
  const maxY = window.innerHeight - yesBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
});