import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./Dashboard/EmployeeDashboard";
import AdminDashboard from "./Dashboard/AdminDashboard";
import { AuthContext } from "./components/context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  const { userData } = useContext(AuthContext);

  // Logged in employee ka latest data
  let storedUser = null;

try {
  storedUser = JSON.parse(localStorage.getItem("loggedInUserData"));
} catch (error) {
  storedUser = null;
}

  const currentEmployee =
    user === "employee" &&
    userData?.employees &&
    storedUser?.role === "employee"
      ? userData.employees.find(
          (emp) => emp.email === storedUser.data.email
        )
      : null;

  useEffect(() => {
let storedUser = null;

try {
  storedUser = JSON.parse(localStorage.getItem("loggedInUserData"));
} catch (error) {
  storedUser = null;
}
    if (storedUser) {
      setUser(storedUser.role);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");

      localStorage.setItem(
        "loggedInUserData",
        JSON.stringify({
          role: "admin",
        })
      );

      return;
    }

    if (userData?.employees) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");

        localStorage.setItem(
          "loggedInUserData",
          JSON.stringify({
            role: "employee",
            data: employee,
          })
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard />}

      {user === "employee" && currentEmployee && (
        <EmployeeDashboard data={currentEmployee} />
      )}
    </div>
  );
};

export default App;