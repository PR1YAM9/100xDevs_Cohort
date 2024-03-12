import React, { useEffect, useState } from "react";
import HeadingComponent from "./HeadingComponent";
import axios from "axios";
import SubHeading from "./SubHeading";
import ButtonCom from "./ButtonCom";
import { Navigate, useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUser] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/user/bulk?test:${filter}`)
      .then((res) => {
        setUser(res.data.user);
      })
  
  }, [filter]);

  return (
    <>
      <div className="m-6">
        <HeadingComponent text={"Users"} />
        <input
          type="text"
          placeholder="Search Users"
          className="w-full px-2 py-1 rounded border border-slate-200 my-3"
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="">
          {users.map((user) => (
            <User key={user._id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

const User = ({ user }) => {
    const navigate = useNavigate();
    const onClick = () =>{
        navigate(`/send?id=${user._id}&name=${user.firstName}`)
    }
   return (
    <>
      <div className="flex flex-row justify-between">
        <SubHeading text={user.firstName + user.lastName} />
        <ButtonCom text={"Send Money"} onClick={onClick} />
      </div>
    </>
  );
};

export default Users;
