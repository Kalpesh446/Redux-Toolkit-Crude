import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "./redux/UserReducer";

const Home = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <>
      <div className="container">
        <h2>Crud App with JSON Server</h2>
        <Link to={"/create"} className="btn btn-success my-3">
          Create +
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>
                    <Link to={`/edit/${e.id}`} className="btn btn-info">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(e.id)} className="btn btn-danger ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
