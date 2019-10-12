// Test your work
// console.log(skills);

//assign variables from your data
var name = skills.name;
var type = skills.type;
var value = skills.value;

//inject skills to your HTML DOM

for (i = 0; i < skills.length; i++) {
    console.log(skills[i]);

    let name = skills[i].name;
    let type = skills[i].type;
    let value = skills[i].value;

// for table.html
    // $('#skillsTable ').append('<tr><td class="text-left">'+ name + ' </td><td>' + type + '</td><td>' + value + '</td></tr>');

// for graph.html
$('#canvas ').append('<tr><td class="text-left">'+ name + ' </td><td>' + type + '</td><td>' + value + '</td></tr>');
}
