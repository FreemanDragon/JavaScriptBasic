function solution() {
    var $solution = document.getElementById('Sol1');
    $solution.textContent = '';
    var $chessboard = document.createElement('table');
    $chessboard.classList.add('chessboard');
    var colourCell = ['black','white',];
    var colourCellIndex;

    for (var i = 0; i < 9; i++) {
        var $row = document.createElement('tr');
        if ((9 - i) % 2 == 0) colourCellIndex = true;
        else colourCellIndex = false;

        for (var j = '@'; j < 'I'; j = String.fromCharCode(j.charCodeAt(0) + 1)) {
            var $cell = document.createElement('td');
            if (i == 0 && j !== '@')
                $cell.textContent = j;
            else if (i !== 0 && j == '@')
                $cell.textContent = 9 - i;
            if (i !== 0 && j !== '@') {
                $cell.classList.add('chessboard__cell');
                $cell.classList.add(colourCell[+colourCellIndex]);
                colourCellIndex = !colourCellIndex;
            }
            $row.appendChild($cell);
        }
        $chessboard.appendChild($row);
    }
    $solution.appendChild($chessboard);
}
