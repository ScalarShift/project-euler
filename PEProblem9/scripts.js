function generatePythTrip(n){
  let triples = []
  for(let a=1; a<n; a++){
    for(let b=a; b<n; b++){
      for(let c=b; c<n; c++){
        if(a*a + b*b === c*c){
	  if(a + b + c === n){
            triples.push([a,b,c]);
          }
        }
      }
    }
  }
  return triples;
}

//-------------------------------------------------

let numberBox = document.getElementById("number");
let submitButton = document.getElementById("submit");
let display = document.getElementById("display");

function main(){
  let n = parseInt(numberBox.value);
  display.innerHTML = generatePythTrip(n);
}

submitButton.addEventListener("click", main);