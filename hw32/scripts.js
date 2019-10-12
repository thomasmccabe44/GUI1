// Test your work
// console.log(skills);

//assign variables from your data
var name = skills.name;
var value = skills.value;

//inject skills to your HTML DOM
// for graph.html
var labels = [];
var data = [];

for (i = 0; i < skills.length; i++) {
    // console.log(skills[i]);

    labels.push(skills[i].name);
    data.push(parseInt(skills[i].value));

}
console.log("labels", labels);
console.log("data", data);
