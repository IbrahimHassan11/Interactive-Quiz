const score = document.querySelector(".score");
const form = document.querySelector("form");
const span = document.querySelector("span");


form.addEventListener("submit", (e) =>{
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth"
  });

  score.style.display = "block";
  const correct = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  const divid = 100/correct.length;
  let num = 0;
  
  correct.forEach((e) => {
    if(e === "A"){
      num += divid;
    };
  })

  
  let i = 0;
  let timer = setInterval((e) => {
    i++;
    if(i === num){
      clearInterval(timer)
    }
    span.textContent = `${i}%`;
  }, 10);
  

});