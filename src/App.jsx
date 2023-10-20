import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Componants/Navbar";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import Herosec from "./Componants/Herosec";


function App() {
  const {theme} = useContext(AuthContext);
  return (
    <div className={`${theme ? "light" : "dark"}`}>
      <Outlet />
    </div>
  );
}

export default App;
