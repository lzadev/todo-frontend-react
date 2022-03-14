import { useEffect, useState } from "react";
import axiosIntance from "../api/apiHelper";
import Button from "./Button";
import CardTodo from "./CardTodo";
import Modal from "./Modal";
import Search from "./Search";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axiosIntance
      .get("/todos")
      .then((resp) => {
        setTodos(resp.data.todos);
        setIsLoading(false);
      })
      .catch(console.error);
  };

  const addTodo = () => {};

  const removeTodo = (id) => {
    axiosIntance
      .delete(`/todos/${id}`)
      .then((resp) => {
        console.log(resp);
        getTodos();
      })
      .catch(console.error);
  };

  const openModal = () => {
    setShowModal(true);
    console.log("clicked");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className="row justify-content-between mb-2 p-3">
          <div className="col-md-5">
            <Search />
          </div>
          <div className="col-md-2 align-self-center">
            <Button
              icon="fa fa-plus"
              width="100%"
              title="Add Todo"
              onClick={openModal}
            />
          </div>
        </div>
        {/* todo card */}
        <div className="row">
          {!isLoading ? (
            todos.map((todo) => {
              return <CardTodo key={todo.id} todo={todo} remove={removeTodo} />;
            })
          ) : (
            <h1>No todos</h1>
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <Modal onClose={closeModal}>
            <h1>hola mundo</h1>
          </Modal>
        )}
      </div>
    </>
  );
};
export default Todos;
