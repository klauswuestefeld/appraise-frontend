

/*function appchange() {
   document.getElementById('appraisals-tab').className = 'tab selected';
   document.getElementById('admin-tab').className = 'tab';
}*/

function change(el) {
if (el == 'appraisals-tab'){
   document.getElementById('appraisals-tab').className = 'tab selected';
   document.getElementById('admin-tab').className = 'tab';
}
else{
   document.getElementById('appraisals-tab').className = 'tab';
   document.getElementById('admin-tab').className = 'tab selected';
}
}


    window.addEventListener("load", function() {
     document.getElementById("admin-tab").onclick = function() {change("admin-tab")};   
     document.getElementById("appraisals-tab").onclick = function() {change("appraisals-tab")};
    });

/*window.addEventListener("load", function() {    

document.getElementById("menu").addEventListener("click",function(ev){
alert("teste");
if (ev == 'appraisals-tab'){
alert("teste");
   document.getElementById('appraisals-tab').className = 'tab selected';
   document.getElementById('admin-tab').className = 'tab';
}
else{
   document.getElementById('appraisals-tab').className = 'tab';
   document.getElementById('admin-tab').className = 'tab selected';
}
});*/
