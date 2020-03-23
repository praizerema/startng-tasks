let name= "Ayodele Praise";
document.getElementById("name").innerHTML = name;
let courses= ["PHP", "Python", "nodeJs", "HTML", "CSS", "JavaScript"],

ol = document.createElement('ol');

document.getElementById('courses').appendChild(ol);

courses.forEach(function (course) {
    let li = document.createElement('li');
    ol.appendChild(li);

    li.innerHTML += course;
});

var arrEven=[]
for(var i = 1; i<=200; i++){
    if(i % 2 === 0){
        arrEven.push(i)
    }
}
document.getElementById("even").innerHTML = arrEven;
