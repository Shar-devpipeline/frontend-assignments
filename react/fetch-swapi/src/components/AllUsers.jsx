import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people`);
        const data = await response.json();
        setUsers(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Cool People</h1>
      {isLoading ? (
        <p>It is on its way ...</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.uid}>
              <Link to={`/user/${user.uid}`}>{user.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUsers;
