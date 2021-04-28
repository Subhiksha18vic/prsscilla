let count = 0;
const addProducts = () => {
  count < 99 ?
   document.getElementById("js-basketCounter").innerHTML = `${++count}` :
   null; 
}
new WOW().init();
