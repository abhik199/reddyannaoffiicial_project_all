import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/UserInfoTable.css";

const UserInfoTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/contacts`
      );
      const formattedUsers = response.data.map((user) => ({
        ...user,
        date: formatDate(user.date),
      }));
      setUsers(formattedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="user-table-container">
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Message Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.message}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfoTable;
