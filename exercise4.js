fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
            const completedTodosNum = json.reduce((count, todo) => {
                return todo.completed ? count + 1 : count
            }, 0)
            console.log(completedTodosNum)
    })
    .catch(err => {
        console.log(err)
    })