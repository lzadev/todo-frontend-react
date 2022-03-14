import Button from "./Button";
const CardTodo = ({ todo, remove }) => {
  const { completed, description, id, title } = todo;
  return (
    <div className="col-xl-4 col-md-4 col-sm-5 pb-2  animate__animated animate__fadeIn">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
          <h6 className="card-title">Description</h6>
          <p className="card-text">{description}.</p>
          <span className="badge rounded-pill bg-success p-1">Completed</span>
          <span className="badge rounded-pill bg-warning p-1">Pending</span>
          <br />
          <div className="row mt-2">
            <div className="col-xl-3 col-md-3 col-sm-3 mb-2">
              <Button width="100%" icon="fa fa-pencil-square-o" />
            </div>
            <div className="col-xl-3 col-md-3 col-sm-3 mb-2">
              <Button
                width="100%"
                bgColor="red"
                icon="fa fa-trash"
                onClick={() => remove(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardTodo;
