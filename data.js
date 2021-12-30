function clearResult() {
    document.getElementById("todo-list").innerHTML = "";
  }

const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)

    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        let ol = document.getElementById('todo-list');

        for(let i = 0; i < arrayOfTodos.length; i++) {

            let userId = arrayOfTodos[i].userId;
            let liUserId = document.createElement('li');
            liUserId.appendChild(document.createTextNode(userId));
            ol.appendChild(liUserId);

            let id = arrayOfTodos[i].id;
            let liId = document.createElement('li');
            liId.appendChild(document.createTextNode(id));
            ol.appendChild(liId);

            let title = arrayOfTodos[i].title;
            let liTitle = document.createElement('li');
            liTitle.appendChild(document.createTextNode(title));
            ol.appendChild(liTitle);

            let completed = arrayOfTodos[i].completed;
            let liCompleted = document.createElement('li');
            liCompleted.appendChild(document.createTextNode(completed));
            ol.appendChild(liCompleted);

        }
 
    }

    function filterUserID(userId){
        const result = arrayOfTodos.filter(Element => Element.userId === userId);
        clearResult();
        let ol = document.getElementById('todo-list');

        for (let i = 0; i < result.length; i++) {
            const  = arrayOfTodos[i];
            
        }

            return result;

    }
    

      