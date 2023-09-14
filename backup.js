function register() {
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const tableContainer = document.querySelector('.wrapper');
    const avatar = 'https://images.app.goo.gl/eCTaVhNoaAU1niKC7'
    const userId = 4;
    const data = {
        email: email,
        password: password
    };
    const changeAvatar = {
        id: userId,
        avatar_url: avatar,
    }
    const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlLXR3by5pLXdwLWRldi5jb20vIiwiYXVkIjoiaHR0cHM6Ly9zdGFnZS10d28uaS13cC1kZXYuY29tLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjoxOCwidXNlcl9lbWFpbCI6IjFqZWthbW9rYW5AZ21haWwuY29tIiwidXNlcl9wYXNzIjoiITFRd2VydHkifX0.Q5NjVW_ICvWQtuE12oO0ggEvi5KQHOm4yx_n_cqgcfI"


    function createTableFromData(data) {
        // Создайте элемент таблицы
        const table = document.createElement('table');

        // Создайте заголовок таблицы (если нужно)
        const tableHeader = document.createElement('thead');
        const headerRow = document.createElement('tr');
        for (const key in data[0]) {
            const headerCell = document.createElement('th');
            headerCell.textContent = key;
            headerRow.appendChild(headerCell);
        }
        tableHeader.appendChild(headerRow);
        table.appendChild(tableHeader);

        // Создайте строки и ячейки данных
        const tableBody = document.createElement('tbody');
        data.forEach(item => {
            const row = document.createElement('tr');
            for (const key in item) {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
            tableBody.appendChild(row);
        });
        table.appendChild(tableBody);

        return table;
    }
    fetch('https://stage-two.i-wp-dev.com/wp-json/v4/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' //цей заголовок вказує на тип переданого контенту
        },
        body: JSON.stringify(data) //передача JSON-рядка у тілі запиту
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });

    // Ваш код fetch и обработки данных
    fetch('https://stage-two.i-wp-dev.com/wp-json/v4/users', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const table = createTableFromData(data);
            tableContainer.appendChild(table);
        })
    
    
    fetch('https://stage-two.i-wp-dev.com/wp-json/v4/user', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(changeAvatar)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

        fetch('https://stage-two.i-wp-dev.com/wp-json/v4/users', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}
