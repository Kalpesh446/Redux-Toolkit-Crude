import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./redux/UserReducer";
import { useDispatch } from "react-redux";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const exitingUser = users.filter((f) => f.id == id);
  const { name, email } = exitingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <h3>Update User</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" className="form-control" value={uname} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" className="form-control" value={uemail} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br />
            <button className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
