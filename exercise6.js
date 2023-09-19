fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const completedTodosPerUser = json.reduce((count, todo) => {
            if(todo.completed){
                if(count[todo.userId]){
                    count[todo.userId] += 1
                }else{
                    count[todo.userId] = 1
                }
            }
            return count
        }, {})
        console.log(completedTodosPerUser)
    })
    .catch(err => {
        console.log(err)
    })