"use strict";

const animation1 = document.querySelectorAll(".animation1");

let count = 1;
animation1.forEach((a)=>{
  switch(count){
    case 1:
      a.animate(
            { 
              backgroundColor: ["#ffaaaa", "#ffd485",  "#ffaaaa"],
              opacity: [".8", ".5", ".8"],
              borderRadius: ["45% 45% 50% 45%", "50% 30% 35% 50%", "35% 45% 50% 45%", "45% 45% 50% 45%"],
            },
            {
              duration: 10000,
              iterations: Infinity,
              direction : "normal",
            },
          );
      count += 1;
      break;
    case 2:
      a.animate(
            { 
              backgroundColor: ["#ffaaaa", "#ffed9c",  "#ffaaaa"],
              opacity: [".5", ".8", ".5"],
              borderRadius: ["40% 50% 50% 35%", "40% 50% 35% 50%","50% 50% 50% 30%", "40% 50% 50% 35%"],
            },
            {
              duration: 10000,
              iterations: Infinity,
              direction : "reverse",
            },
          );
          count += 1;
      break;
    case 3:
      a.animate(
        { 
          backgroundColor: ["#ffd485", "#ffed9c", "#ffd485"],
          opacity: [".6", ".5", ".6"],
          borderRadius: ["30% 50% 45% 40%", "40% 50% 50% 50%", "50% 35% 50% 40%", "30% 50% 45% 40%"],
        },
        {
          duration: 10000,
          iterations: Infinity,
          direction : "normal",
        },
      );
      break;
  }
});

document.getElementById("spitout").addEventListener("click", ()=>{
    let box = document.getElementById("spitoutanimatebox");
    let input = document.getElementById("spitouttext")
    let inputtext = input.value;
    let spittedtext = document.createElement("p");
    console.log(inputtext);
    spittedtext.textContent = inputtext;
    box.appendChild(spittedtext);
    spittedtext.animate(
      { 
        transform: ["translateY(0px) scale(.8)", "translateY(-80px) scale(1.2)", "translateY(-150px) scale(1.5)" ] ,
        textShadow: ["0 0 20px rgba(0,0,0,0)", "0 0 20px rgba(0,0,0,0.5)", "0 0 20px rgba(0,0,0,0.1)"],
        color: ["#666", "#ccc", "#f6f6f6", "transparent"],
      },
      { 
        duration: 2000, 
        fill: "forwards",
        easing: "ease",
      }
    );
    input.value = "";
    window.setTimeout(function(){
      spittedtext.remove();
    }, 3000)
});
