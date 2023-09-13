function register() {
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const data = {
        email: email,
        password: password
    };
    const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlLXR3by5pLXdwLWRldi5jb20vIiwiYXVkIjoiaHR0cHM6Ly9zdGFnZS10d28uaS13cC1kZXYuY29tLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjoxOCwidXNlcl9lbWFpbCI6IjFqZWthbW9rYW5AZ21haWwuY29tIiwidXNlcl9wYXNzIjoiITFRd2VydHkifX0.Q5NjVW_ICvWQtuE12oO0ggEvi5KQHOm4yx_n_cqgcfI"

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
    
    fetch('https://stage-two.i-wp-dev.com/wp-json/v4/users', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwtToken}` // Добавляем JWT токен в заголовок с префиксом "Bearer"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    
}
