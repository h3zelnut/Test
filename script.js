// List bawaan dari fetch data API


async function fetchTodos(){

    // Try and Catch

    try {

        // Fetch data dari API
        // Response Variable
        // Query link
        const response = await fetch ("https://jsonplaceholder.typicode.com/users?_limit=5")

        const data = await response.json()

        console.log(response)
        console.log(data)
        displayTodos(data)
        
    } catch (error) {

        console.log(error)
        
    }

}


// Display todos


function displayTodos(todos){

    const todoList = document.getElementById("todoList")

    // Clear
    todoList.innerHTML = ""

    // Masukin list-list baru dari fetch data
    // Foreach --> karena array

    todos.forEach((todo) => {
        // List baru
        const item = document.createElement("li")
        item.textContent = todo.username

        // Masukin listnya ke unordered list
        todoList.appendChild(item)

        // List baru
        const item2 = document.createElement("li")
        item2.textContent = todo.name

        // Masukin listnya ke unordered list

        todoList.appendChild(item2)

    });

    todos.forEach( ( {address} ) => {

        // List baru
        const item = document.createElement("li")
        item.textContent = address.city

        // Masukin listnya ke unordered list
        todoList.appendChild(item)
        
    });

}


function addTodo(){


    // Perlu ambil isi title yang mau kita masukin
    const title = document.getElementById("todoInput").value

    if (title === "") return

    document.getElementById("todoInput").value = ""


    // Masukin list baru

    const todoList = document.getElementById("todoList")

    const item = document.createElement("li")

    item.textContent = title // ganti jadi user input

    // Masukin listnya ke unordered list

    todoList.appendChild(item)

}


// Add event listener
document.getElementById("addTodoButton").addEventListener("click", addTodo)

fetchTodos()
