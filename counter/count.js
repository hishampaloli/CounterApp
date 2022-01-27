let count = 0;
let counterCount = 0;

const count_text = document.getElementById("counter-h3");
const save_p = document.getElementById("total-count");
const br_tag = document.getElementById("br-tag");

function increment(){
count++;
getCount = count;
count_text.innerHTML = getCount;
if(getCount >= 0){
    count_text.style.color = "green";
}else{
    count_text.style.color = "red";
}
}

function decriment(){
    count--;
    decrimentCount = count;
    count_text.innerHTML = decrimentCount;
    if(decrimentCount < 0){
        count_text.style.color = "red";
    }else{
        count_text.style.color = "green";
    }
}

function save(){
counterCount++
getCounterCount = counterCount;
getCountText = "COUNT (" + getCounterCount + "): ";

save_p.innerHTML += getCountText + count_text.innerHTML + "" +"<br />";

}

function reset(){
  count = 0;
  counterCount = 0;
  count_text.innerHTML = count;
  save_p.innerHTML = "";
  if(count > 0 || count < 0){
    count_text.style.color = "black";
  }else{
      count_text.style.color = "black";
  }
}

function color(){
    count_text.style.color = "yellow"
   return count_text.innerHTML;
}