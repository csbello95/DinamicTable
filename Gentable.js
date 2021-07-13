const generateTable = (row, col) => {
    let element = document.getElementById('container');
    let html = "<table>"
        for(let i=0; i<row ;i++){
            html += `<tr>`;
            for(let j=0; j<col;j++){
                 html += `<td>${j+1}</td>`;
                 
            }
            html += `</tr>`;
        }
        html += "</table>"
        element.innerHTML = html;
    }
    let filas = Number(prompt("Por favor digite el número de filas"));
    let columnas = Number(prompt("Por favor digite el número de filas"));
    
    generateTable(filas,columnas);