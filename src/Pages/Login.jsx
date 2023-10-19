import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

function Login() {

  const location = useLocation();
  const navigate = useNavigate()

  const {theme,signIn, googleSignIn} = useContext(AuthContext)

  const handleGooglesignIng = () => {
    googleSignIn()
  }



  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then (result => {
      result && navigate(location?.state ? location.state : '/');
    })
    .catch(error => {
      console.error(error);
    })
  }





  return (
    <>
      <div className="min-h-screen bg-base-200">
        <div className=" flex-col lg:flex justify-center items-center space-y-10 mt-10">
          <h1 className="text-3xl">Login</h1>
          
            <div className={`card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ${theme ? "bg-gray-800 text-white" : "bg-yellow-50 text-gray-500"}`}>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover"
                    >
                      Register
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6 space-y-3">
                  <input className="btn btn-primary hover:bg-gray-900 hover:text-yellow-50" type="submit" value="Login" />
                  <button className="border flex justify-center py-4 rounded-lg bg-blue-800" onClick={handleGooglesignIng}><FcGoogle></FcGoogle></button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </>
  );
}

export default Login;
