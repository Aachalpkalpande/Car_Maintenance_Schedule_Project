// src/components/UserList.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetailsRequest } from "../redux/actions/userActions";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const userDetails = useSelector((state) => state.user.userDetails);
    console.log("user1",userDetails)

  return (
    <div>
      <h2>Users</h2>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u["phone-number"]})
            <button onClick={() => dispatch(fetchUserDetailsRequest(u.id))}>
              View Details
            </button>
          </li>
        ))}
      </ul>

      {userDetails && (
        <div className="card">
          <h3>{userDetails?.name} (Details)</h3>

          <p>Phone: {userDetails.phone_no} </p>
          <h4>Cars:</h4>
          <ul>

            {userDetails.Cars.map((c) => (
              <li key={c.id}>
                {c.model} - {c.color} ({c.purchase_date})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserList;
