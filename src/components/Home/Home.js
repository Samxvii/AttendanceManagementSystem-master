import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Login/login.module.css";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { getAuth, signOut } from "firebase/auth";
//import logout from "../Logout/Logout";
//import Attendance from '../Attendance/Attendance';


function Home(props) {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  
  if(props.name){
 
    /* const logout= document.getElementById('signout');
    logout.addEventListener('click', (e) => {
    e.preventDefault();
    const auth=getAuth();
    auth.signOut().then(() => {
        alert('User Signed Out!!');
    });
  });*/

  //function logout(){
    
  //};

 /* var logt = document.getElementById("signout");
  logt.onclick = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("Sign out successful");
    }).catch((error) => {
      alert("Error signing out!!");
    });
  };*/ 
  

   return (
    <div id="root">
    <div class="main_back">
      <div class="navbar_red"></div><span  class="title">ATTENDANCE MANAGEMENT SYSTEM</span>
      <div class="nav_back"></div>
      <div class="user_img"></div><span  class="feat3">Users List</span><Link to="/attendance"><span  class="feat1">Attendance</span></Link><span class="username">{`Hi ${props.name}`}</span><span  class="current_details">CURRENT TIME: 
    19:20:47
    CURRENT DATE:
    17/09/2022
    SATURDAY</span>
      <div class="logout_button"></div><span class="logout_textsp"><Link id="signout" class="logout_text" to="/login">Logout</Link></span>
      <div class="pegasus_img"></div>
      <div class="app_window">
    
      <span class="e3_117">Successfully Signed in User!!</span><span class="e3_118">Welcome to your
     Attendance Management System.</span>
     </div> 
    </div>
  </div>
  
          //<Link to="/login">Login</Link>
      //<h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
  );
}

else{
  return(
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

}

export default Home;