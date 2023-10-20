import { Outlet } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";


function App() {
  const {theme} = useContext(AuthContext);
  return (
    <div className={`${theme ? "light" : "dark"}`}>
      <Outlet />
    </div>
  );
}

export default App;
