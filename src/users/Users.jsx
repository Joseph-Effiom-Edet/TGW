import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { userData } from "../indexedDB";

function Users() {
  const allUserDetails = useLiveQuery(() => userData.toArray(), []);

  return (
    <div className="user-list-container">
      {allUserDetails?.map((user) => (
        <div className="user-list-wrapper" key={user.id}>
          <img src={user.picture} alt="" />
          <div className="user-details">
            <p>Username: {user.username}</p>
            <p>Name: {user.name}</p>
            <p>Password: {user.password}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
