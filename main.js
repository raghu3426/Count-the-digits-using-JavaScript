let num=document.getElementById('n')
let save=document.getElementById('e')
let saved_reset=document.getElementById('res')
let b=0
let c=0
function counts() {
  b=b+1
  num.innerHTML=b
}
function s() {
  save.innerHTML=`Last Save ${b}`
}
function rese() {
  b=c
  alert("Saved data deleted")
}
function resets() {
  num.innerHTML=c
  
  if (b==c) {
    save.innerHTML=''
  }
}