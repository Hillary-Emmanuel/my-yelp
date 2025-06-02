import React, { useEffect, useState } from "react";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    location: "",
  });
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch {
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleCreateRestaurant = (e) => {
    e.preventDefault();
    setRestaurants([...restaurants, restaurant]);
    setRestaurant({ name: "", description: "", location: "" }); // Reset form
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="dashboard-container" id="dashboardContainer">
      {user ? (
        <>
          <h2 className="welcome-heading" id="welcomeHeading">
            Welcome, {user.username}!
          </h2>
          <button
            onClick={handleSignOut}
            className="signout-button"
            id="signOutButton"
          >
            Sign Out
          </button>

          <h3 className="section-title" id="createRestaurantHeading">
            Create a New Restaurant
          </h3>
          <form
            onSubmit={handleCreateRestaurant}
            className="restaurant-form"
            id="restaurantForm"
          >
            <input
              id="restaurantName"
              className="form-input"
              name="name"
              placeholder="Restaurant Name"
              value={restaurant.name}
              onChange={handleInputChange}
              required
            />
            <textarea
              id="restaurantDescription"
              className="form-textarea"
              name="description"
              placeholder="Description"
              value={restaurant.description}
              onChange={handleInputChange}
              required
            />
            <input
              id="restaurantLocation"
              className="form-input"
              name="location"
              placeholder="Location"
              value={restaurant.location}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="submit-button"
              id="createRestaurantButton"
            >
              Create
            </button>
          </form>

          <h3 className="section-title" id="myRestaurantsHeading">
            My Restaurants
          </h3>
          <ul className="restaurant-list" id="restaurantList">
            {restaurants.map((r, i) => (
              <li key={i} className="restaurant-item">
                <strong>{r.name}</strong> — {r.description} ({r.location})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="loading-text" id="loadingText">
          Loading...
        </p>
      )}
    </div>
  );
}
