import { useEffect, useState } from "react";
import axiosIntance from "../api/apiHelper";
import Button from "./Button";
import CardTodo from "./CardTodo";
import Search from "./Search";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axiosIntance
      .get("/todos")
      .then((resp) => {
        setTodos(resp.data.todos);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="row justify-content-between mb-2 p-3">
        <div className="col-md-5">
          <Search />
        </div>
        <div className="col-md-2 align-self-center">
          <Button icon="fa fa-plus" width="100%" title="Add Todo" />
        </div>
      </div>
      {/* todo card */}
      <div className="row">
        {!isLoading ? (
          todos.map((todo) => {
            return <CardTodo key={todo.id} todo={todo} />;
          })
        ) : (
          <h1>No todos</h1>
        )}
      </div>
    </div>
  );
};
export default Todos;
