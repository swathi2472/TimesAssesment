// url="./src/Json/timesData.json"
// const obj = JSON.parse(url);
// // document.getElementById("title_one").innerHTML="Saudi King Salman Hospitalized for Medical Tests";
// console.log("hkjhjk",obj);
var dataObj
var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         dataObj = JSON.parse(this.responseText);
        console.log("Json parsed data is: " + JSON.stringify(dataObj));
        getTitles();
       }
    };
xmlhttp.open("GET", "./src/Json/timesData.json", true);
xmlhttp.send();
function getTitles()
{
    document.getElementById("title_one").innerHTML=dataObj[0]?dataObj[0].title:'';
    document.getElementById("title_two").innerHTML=dataObj[1]?dataObj[1].title:'';
    document.getElementById("title_three").innerHTML=dataObj[2]?dataObj[2].title:'';
    document.getElementById("title_four").innerHTML=dataObj[3]?dataObj[3].title:'';
    document.getElementById("title_five").innerHTML=dataObj[4]?dataObj[4].title:'';
}
function getStories(value) {
      firstUrl=dataObj[value-1]?dataObj[value-1].link:''; 
        window.open(firstUrl,'_blank');
  
 }

