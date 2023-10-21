import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {


  // Navbar profile image 
  const [photo, setPhoto] = useState(null)





  // handle cart

  const [cart, setCart] = useState([]);
  const [ovserver, setOvserver] = useState(true);


  useEffect(() => {
    fetch("https://brandshop-assignment-server-49xw7lijw.vercel.app/mycarts")
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
        });
  },[ovserver])






const [deleteOvserver, setDeleteOvserver] = useState(true)
  // handle mycart page
  useEffect(() => {
    fetch("https://brandshop-assignment-server-49xw7lijw.vercel.app/mycarts")
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
        });
  },[deleteOvserver])




  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    return newTheme;
  };

  // Authentication Firebase
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    setCart,
    handleTheme,
    theme,
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    cart,
    setOvserver,
    ovserver,
    setDeleteOvserver,
    deleteOvserver,
    setPhoto,
    photo
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
