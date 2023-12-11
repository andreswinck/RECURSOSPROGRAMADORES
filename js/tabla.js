// Asegúrate de que este código se ejecute después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    // Encuentra el div donde quieres insertar la tabla
    let tableDiv = document.querySelector('div');

    // Crea la tabla y añade las clases necesarias
    let table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    table.className = 'table';


    let thead = document.createElement('thead');
    thead.classList.add('thead-dark');
    let headerRow = document.createElement('tr');
    ['Lenguaje/Componente/Recurso', 'Enlace', 'Usos','Detalle'].forEach(text => {
        let th = document.createElement('th');
        th.scope = 'col';
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

let tbody = document.createElement('tbody');
dataSet.forEach(item => {
    let row = document.createElement('tr');
    item.forEach((text, index) => {
        let td = document.createElement('td');
        if (index === 1) { // Si es la segunda columna, crea un enlace
            let a = document.createElement('a');
            a.href = text; // Asume que 'text' es la URL del enlace
            a.textContent = text; // Usa la URL como texto del enlace
            a.target = '_blank'; // Abre el enlace en una nueva pestaña
            td.appendChild(a);
        } else {
            td.textContent = text;
        }
        row.appendChild(td);
    });
    tbody.appendChild(row);
});
table.appendChild(tbody);

    // Añade la tabla al div
    tableDiv.appendChild(table);

    // Encuentra el campo de entrada de búsqueda
let searchInput = document.getElementById('search');

// Agrega un event listener para el evento 'input' en el campo de búsqueda
searchInput.addEventListener('input', (event) => {
    // Obtén el texto de búsqueda en minúsculas
    let searchText = event.target.value.toLowerCase();

    // Obtén todas las filas de la tabla
    let rows = table.getElementsByTagName('tr');

    // Itera sobre cada fila de la tabla
    for (let i = 1; i < rows.length; i++) { // Empieza en 1 para saltar el encabezado de la tabla
        // Si el texto de búsqueda está en la fila, muestra la fila, de lo contrario, ocúltala
        if (rows[i].textContent.toLowerCase().includes(searchText)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});
});


document.getElementById('theme-toggle').addEventListener('click', function() {
    let body = document.body;
    let button = this; // 'this' es el botón que fue clickeado
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        button.innerHTML = '<i class="bi bi-moon-fill"></i>'; // Cambia el botón a un icono de sol
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        button.innerHTML = '<i class="bi bi-brightness-high-fill"></i>'; // Cambia el botón a un icono de luna
    }
});
