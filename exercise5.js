fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const uncompleted = json.reduce((count, todo) => {
            if(!todo.completed){
                count.push({userID: todo.userId, title: todo.title})
            }
            return count;
        }, [])
        console.log(uncompleted)
    })
    .catch(err => {
        console.log(err)
    })