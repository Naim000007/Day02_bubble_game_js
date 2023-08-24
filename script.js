let t = 60;
let score =0;
let randomnumber =0;

function makebubble(){
    let culeter = '';
// const bubble = document.getElementById("#pbtm")
for(let i=1; i<=102; i++)
{
    let numbergenerator = Math.floor(Math.random()*10);
    culeter += `<div id="bubble">${numbergenerator}</div>`
    document.querySelector("#pbtm").innerHTML = culeter
}
}
function newhit(){
    randomnumber = Math.floor(Math.random()* 10);
    document.querySelector("#hitvalue").textContent = randomnumber ;
}
function runtimer(){
    let timer = setInterval(function (){
        if (t > 0 ){
            t--;
            document.querySelector("#timevalue").textContent =t;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = ` <div style= display: flex; flex-direction: column; justify-content: center; align-items: center;"text-align: center; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
            <h1 style="color: #e74c3c; margin-bottom: 10px;">Game Over</h1>
            <p>Your Score: <span id="final-score">${score}</span></p>
        </div>`

        }
    },1000)
}
function generatscore(){
    score +=10;
    document.querySelector("#scorevalue").textContent = score ;
}
document.querySelector('#pbtm')
.addEventListener('click', function(detailes){
    let a= Number(detailes.target.textContent);
    if (a===randomnumber){
        generatscore();
        newhit();
        makebubble();
    }
})
runtimer();
makebubble();
newhit();