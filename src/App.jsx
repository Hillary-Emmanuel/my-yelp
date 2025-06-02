import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home"; // 👈 import Home
import BackgroundLayout from "./components/BackgroundLayout";

export default function App() {
  return (
    <BrowserRouter>
      <BackgroundLayout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* 👈 home route */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BackgroundLayout>
    </BrowserRouter>
  );
}
