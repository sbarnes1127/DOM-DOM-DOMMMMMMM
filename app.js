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

    sqrButton.addEventListener("click", function () {
        let square = document.createElement('div');
        let squareText = document.createTextNode(clickCount);
        squares.appendChild(square);
        square.className = 'blackSquare';
        square.id = [clickCount++];

        square.addEventListener('mouseover', function () {
            square.appendChild(squareText);
        })

        square.addEventListener('mouseout', function (){
            square.removeChild(squareText);
        })

        square.addEventListener('click', changeColor);

        square.addEventListener('dblclick', function () {
            let squareId = square.id;
            let nextSquare = square.nextSibling;
            let priorSquare = square.previousSibling;
            
    
            if (squareId % 2 === 0) {
                if (!nextSquare) {
                    alert('There is no next square');
                    return;
                }
                squares.removeChild(nextSquare);
            } else {
                if (!priorSquare) {
                    alert('There is no previous square');
                    return;
                }
                squares.removeChild(priorSquare);
            }
        })
    })

    function changeColor(e) {
        let colors = ['red', 'blue', 'green', 'purple', 'orange'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        e.target.style.backgroundColor = randomColor;
    }
})