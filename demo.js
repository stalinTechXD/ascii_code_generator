var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var h2 = document.querySelector('h2');
var ul = document.querySelector('ul');

function getRandomColor()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0 ; i<6 ; i++)
    {
        var r = Math.floor(Math.random() * 16);
        color = color + letters[r];
    }
    return color;
}