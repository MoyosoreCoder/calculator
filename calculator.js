const input = document.querySelector(".userInput");
const seven = document.querySelector(".numberSeven");
const eight = document.querySelector(".numberEight");
const nine = document.querySelector(".numberNine");
const four = document.querySelector(".numberFour");
const five = document.querySelector(".numberFive");
const six = document.querySelector(".numberSix");
const one = document.querySelector(".numberOne")
const two = document.querySelector(".numberTwo")
const three = document.querySelector(".numberThree")
const zero = document.querySelector(".numberZero")
const dot = document.querySelector(".dot")
const clear = document.querySelector("#clear")
const equals = document.querySelector(".equals");
const percent = document.querySelector('#percent')
const signs = document.querySelectorAll(".signs")
const plusMinus = document.querySelector('#plusMinus')


signs.forEach((sign) => {
    sign.addEventListener("click", () => {
        input.value += sign.textContent
    })

})


//for seven
seven.addEventListener("click", () => {
    input.value += seven.textContent
    
})


//for eight
eight.addEventListener("click", () => {
    input.value += eight.textContent
});

//for nine
nine.addEventListener("click", () => {
    input.value += nine.textContent
});


//for four
four.addEventListener("click", () => {
    input.value += four.textContent
});

//for five
five.addEventListener("click", () => {
    input.value += five.textContent
});

//for six
six.addEventListener("click", () => {
    input.value += six.textContent
});

//for one
one.addEventListener("click", () => {
    input.value += one.textContent
});

two.addEventListener("click", () => {
    input.value += two.textContent
});
three.addEventListener("click", () => {
    input.value += three.textContent
});


zero.addEventListener("click", () =>{
    input.value += zero.textContent
})

dot.addEventListener("click", () => {
    input.value += dot.textContent

})

clear.addEventListener("click", () => {
    input.value = ""
})

function calculatePercent() {
    const percentResult = Number(input.value) / 100
    return percentResult
}
percent.addEventListener("click",() => {
    input.value = calculatePercent()
})

plusMinus.addEventListener("click", ()=>{
    const addMinus =  Number(input.value) * -1;
    input.value = addMinus
})

equals.addEventListener("click", () => {

        const result = input.value = eval(input.value.replaceAll("÷", "/"))

         console.log(typeof(result))
    
});