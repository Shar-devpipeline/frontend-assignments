import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const User = ({ match }) => {
  const { userId } = match.params;
  const [user, setUser] = useState(null);
  const [homePlanet, setHomePlanet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://www.swapi.tech/api/people/${userId}`
        );
        const data = await response.json();
        setUser(data.result.properties);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleShowHomePlanet = async () => {
    if (!user?.homeworld) return;
    setIsLoading(true);
    try {
      const response = await fetch(user.homeworld);
      const data = await response.json();
      setHomePlanet(data.result.properties.name);
    } catch (error) {
      console.error("Error fetching home planet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return <p>Loading details...</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      {homePlanet ? (
        <p>Home Planet: {homePlanet}</p>
      ) : (
        <button onClick={handleShowHomePlanet} disabled={isLoading}>
          {isLoading ? "Loading..." : "Show Home Planet"}
        </button>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/user/:userId" component={User} />
      </Switch>
    </Router>
  );
};

export default User;
