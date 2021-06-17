var Guestlist = [];
function submit()
{
var GuestName = document.getElementById("Name1").value;
Guestlist.push(GuestName);
console.log(Guestlist);
document.getElementById("display-name").innerHTML = Guestlist;
}

function show()
{
document.getElementById("p1").innerHTML = Guestlist;
}

function sort()
{
var S1 = Guestlist.sort();
document.getElementById("display-sortedname").innerHTML = S1;
}

function search()
{
var s = document.getElementById("searchname1").value;
var found=0;
var j;
for(j=0; j<Guestlist.length; j++ ){
if(s==Guestlist[j]){
    found=found+1;
}
}
document.getElementById("p2").innerHTML = "namefound" +found+"time/s";
console.log("namefound"+found+"time/s");
}






