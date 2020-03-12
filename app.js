document.addEventListener("DOMContentLoaded", function () {
    let buttonDiv = document.createElement('div');
    let sqrButton = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    sqrButton.appendChild(btnText);
    buttonDiv.appendChild(sqrButton);
    document.body.appendChild(buttonDiv);

    let squares = document.createElement('div');
    squares.className = 'squares';
    document.body.appendChild(squares)

    sqrButton.addEventListener("click", function() {
        let square = document.createElement('div');
        squares.appendChild(square);
        square.className = 'blackSquare';

    })
})