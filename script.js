console.log("hey");
var images = ["img/1000.png", "img/2000.png", "img/5000.png", "img/x.png"];
var curScore = 0;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function gameOver(){
    console.log("Called");
    for (let i = 0; i < 2; i++) {
        document.querySelectorAll(".target")[i].classList.remove("blocker");
        }
}

function updateScore(){
    document.querySelector("#cs").innerHTML = curScore;
}

function refresh(){
    location.reload();
}

function unveil(){
    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".chest")[i].setAttribute("src", images[i]);       
    }
};

function veil(){
    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".chest")[i].setAttribute("src", "img/chest.png");       
    }
}

function update(){
    updateScore();
    unveil();
    const myTimeout = setTimeout(veil, 2000);
}

function gen(key){
    shuffle(images);
    switch (images[key]) {
        case "img/1000.png": curScore+=1000;
            update();
            break;
        case "img/2000.png": curScore+=2000;
            update();
            break;
        case "img/5000.png": curScore+=5000;
            update();
            break;
        case "img/x.png": 
        gameOver();
        unveil();    
            break;
    }
}


for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".chest")[i].addEventListener("click", (e)=>{
        gen(i)
        //function
    })
    
}

document.querySelector("#refresh").addEventListener("click", ()=>{
    refresh();
});

