fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const uncompleted = json.filter(todo => !todo.completed).map(todo => todo.title)
        console.log(uncompleted)
    })
    .catch(err => {
        console.log(err)
    })