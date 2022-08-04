var ekran = document.querySelector('.mo');
   document.querySelectorAll('td').forEach(function (td){
td.addEventListener('click',function(e){
 var belgi = e.target.innerText;
console.log(belgi);
if(belgi =="c"){
   ekran.value ="";
}
else if(belgi == "="){
   ekran.value = eval(ekran.value);
}
else{
   ekran.value += belgi;
}
});
   });