var data = 0;
document.getElementById("root").innerText=data;
function dercement(){
  if (data < 1) {
    document.getElementById("root").innerText=data;
  }
  else {
    data=data-1;
    document.getElementById("root").innerText=data;
  }
}
function increment(){
  data=data+1;
  document.getElementById("root").innerText=data;
}