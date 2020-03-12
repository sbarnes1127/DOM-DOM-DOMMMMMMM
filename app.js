document.addEventListener("DOMContentLoaded", function () {
    let buttonDiv = document.createElement('div');
    let sqrButton = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    sqrButton.appendChild(btnText);
    buttonDiv.appendChild(sqrButton);
    document.body.appendChild(buttonDiv);

    let squares = document.createElement('div');
    squares.className = 'squareGroup';
    document.body.appendChild(squares)
    let clickCount = 1;

    sqrButton.addEventListener("click", function() {
        let square = document.createElement('div');
        let squareText = document.createTextNode(clickCount);
        squares.appendChild(square);
        square.className = 'blackSquare';
        square.id = [clickCount++];

        square.addEventListener('mouseover', function(e) {
            square.appendChild(squareText);

        })
    })

    
        
})