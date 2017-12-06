var text = "themanishere";
var L = text.length;
var row = Math.floor(Math.sqrt(L));
var cols = Math.ceil(Math.sqrt(L));
var display;

console.log('the row is ' + row);
console.log('the col is ' + cols);

for(var i = 0; i < row; i++){
    display += "<tr>";
    for(var j = 1; j <= cols; j++){
        display += "<td>" + j + "</td>";
    }
    display += "</tr>";
}
console.log( display );
