/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    todos=[];

    add(todo){
        this.todos.push(todo);
        console.log(this.todos);
    }

    remove(index){
        this.todos.splice(index,1);
        console.log(this.todos)
    }

    update(idx,todo){
        this.todos[idx]=todo;
        console.log(this.todos)
    }

    getAll(){
        console.log(this.todos)
    }

    get(idx){
        console.log(this.todos[idx])
    }

    clear(){
        this.todos=[];
        console.log(this.todos)
    }
}

let todo = new Todo();
todo.add("row")
todo.add("row")
todo.add("as")
todo.add("row")
todo.update(1,"adsa")

todo.getAll()
todo.get(2)

todo.clear();
// todo.remove(2)

module.exports = Todo;