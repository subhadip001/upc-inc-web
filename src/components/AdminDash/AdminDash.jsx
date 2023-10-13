import React, { useEffect, useRef, useState } from "react";
import "./AdminDash.css";
import axios from "axios";
import LinkManager from "../Link Manager/LinkManager";

const AdminDash = ({ setUserDetails }) => {
  let [users, setUsers] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await axios
          .get("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/getAll")
          .then((res) => {
            setUsers(res.data.users);
          });
      } catch (err) {
        // alert(err);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
    <div className="admin-sec">
      <h2>Admin Dashboard</h2>
      <h4>Total Users : {users.length - 1}</h4>
      <input
        type="text"
        class="search-bar"
        placeholder="Search by UPC Id"
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
      />
      <table class="user-details">
        <thead>
          <tr>
            <th>UPC ID</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            if (user.upc_id === "admin") {
              return;
            }
            if (user.upc_id.toLowerCase().includes(searchKey.toLowerCase())) {
              return (
                <tr>
                  <td>{user.upc_id}</td>
                  <td>{user.name}</td>
                  <td
                    className="detail-btn"
                    onClick={() => {
                      setUserDetails(user);
                    }}
                  >
                    View Details
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
    <LinkManager/>
    </>
  );
};

export default AdminDash;
