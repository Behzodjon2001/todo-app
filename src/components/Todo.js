import { useState, useRef } from "react";
import uuid from "react-uuid";
import Item from "./Item";

function Todo() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [todotrue, setTodotrue] = useState(
    JSON.parse(localStorage.getItem("todotrue")) || []
  );
  const [todofalse, setTodofalse] = useState(
    JSON.parse(localStorage.getItem("todofalse")) || []
  );
  const inputValue = useRef("");

  console.log(todo);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let obj = {
      id: uuid(),
      text: inputValue.current.value,
      isComplate: false,
      time: inputValue.current.value,
    };
    setTodo([...todo, obj]);
    inputValue.current.value = "";
    console.log(todo);
    localStorage.setItem("todo", JSON.stringify(todo));
    localStorage.setItem("todotrue", JSON.stringify(todotrue));
    localStorage.setItem("todofalse", JSON.stringify(todofalse));
  };

  const handleDelete = (evt) => {
    let delteTodo = todo.filter((item) => item.id !== evt);
    setTodo(delteTodo);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const handleEdit = (evt) => {
    let editTodo = todo.find((item) => item.id === evt);
    let elPropt = prompt(" ", editTodo.text);
    editTodo.text = elPropt;
    setTodo([...todo]);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const handleIsCoplate = (evt) => {
    let checkedTodo = todo.find((item) => item.id === evt);
    checkedTodo.isComplate = !checkedTodo.isComplate;
    if (checkedTodo.isComplate) {
      setTodotrue([...todo]);
    } else {
      setTodofalse([...todo]);
    }
    setTodo(todo);
    console.log(todo);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const UnComplate = () => {
    let data = JSON.parse(localStorage.getItem("todofalse"));
    let filter = data.filter((item) => item.isComplate === false);
    setTodofalse(filter);
    localStorage.setItem("todofalse", JSON.stringify(todofalse));
  };

  const complate = () => {
    let data = JSON.parse(localStorage.getItem("todotrue"));
    let filter = data.filter((item) => item.isComplate === true);
    setTodotrue(filter);
    localStorage.setItem("todotrue", JSON.stringify(todotrue));
  };

  const allData = () => {
    let data = JSON.parse(localStorage.getItem("todo"));
    setTodo(data);
    localStorage.setItem("todo", JSON.stringify(todo));
  };
  return (
    <div className="container">
      <form className="d-flex w-50 m-auto my-5 " onSubmit={handleSubmit}>
        <input ref={inputValue} type="date" />
        <input
          ref={inputValue}
          className="form-control w-50"
          type="text"
          placeholder="Ener your text"
        />
        <button className="btn btn-success"> Submit </button>{" "}
      </form>{" "}
      <div>
        <button className="btn btn-success" onClick={allData}>
          {" "}
          All{" "}
        </button>{" "}
        <button className="btn btn-info" onClick={complate}>
          {" "}
          Complete{" "}
        </button>{" "}
        <button className="btn btn-warning" onClick={UnComplate}>
          {" "}
          UnComplate{" "}
        </button>{" "}
      </div>{" "}
      <ul>
        <Item
          data={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleIsCoplate={handleIsCoplate}
        />{" "}
      </ul>{" "}
    </div>
  );
}

export default Todo;
