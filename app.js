
let form = document.querySelector("form");
let score = document.querySelector(".score");
let span = document.querySelector("span");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
  score.style.display = "block";
  let num = 0;
  let rightAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  rightAnswers.forEach((answer) => {
    if(answer === "A"){
      num += 25;
    }
  });
  
  let output = 0;
  let timer = setInterval(() => {
    span.textContent = output + "%";
    if(output === num){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});