const tableContainer = document.querySelector('.wrapper');
const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlLXR3by5pLXdwLWRldi5jb20vIiwiYXVkIjoiaHR0cHM6Ly9zdGFnZS10d28uaS13cC1kZXYuY29tLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjozMCwidXNlcl9lbWFpbCI6InBlcnNvbmUxQGdtYWlsLmNvbSIsInVzZXJfcGFzcyI6IiExUWF6d3N4In19.324VRmi6ty_Mnl4O9T2DuwzuohDp52E0Yw_N5F5bc0M"

function createTableFromData(data) {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    for (const key in data[0]) {
        const headerCell = document.createElement('th');
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    }
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

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

function register() {
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const data = {
        email: email,
        password: password
    };
    fetch('https://stage-two.i-wp-dev.com/wp-json/v4/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' //цей заголовок вказує на тип переданого контенту
        },
        body: JSON.stringify(data) //передача JSON-рядка у тілі запиту
    }).then(response => response.json())
}

function showUsers() {
    if (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }
    fetch('https://stage-two.i-wp-dev.com/wp-json/v4/users', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        },
    }).then(response => response.json()).then(data => {
            const table = createTableFromData(data);
            tableContainer.appendChild(table);
        })
}

function sendData() {
    const userId = document.querySelector('.id').value;
    const avatar = document.querySelector('.img-url').value;
    const changeAvatar = {
        id: userId,
        avatar_url: avatar,
    }
    fetch('https://stage-two.i-wp-dev.com/wp-json/v4/user', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changeAvatar)
    }).then(response => response.json())
}


