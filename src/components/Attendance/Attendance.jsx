import React from "react";
import { Link } from "react-router-dom";
//import { collection, getDocs } from "firebase/firestore";
//import { db } from "../../firebase";
import styles from "./attendance.module.css";
import {Table} from 'react-bootstrap';
import {ref,onValue} from 'firebase/database';
import { startFirebase } from "../../firebase";

export default function Attendance(props){

    /* const [Attendance, setAttendance] = useState([])

    useEffect(() => {
        getStudent_attendance()
    },[])

    useEffect(() => {
        console.log(Attendance)
    },[Attendance])
    

    function getStudent_attendance(){
        const Student_AttendanceRef = collection(db,'Student_Attendance')
        getDocs(Student_AttendanceRef)
         .then(response => {
            const attend = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id,
                }))
                setAttendance(attend)
         })
         .catch(error => console.log(error.message))
    }*/

    /*function get_student_list(){
        const Student_NameRef=collection(db,'Student_Name')
        getDocs(Student_NameRef).then(response => {
            const name = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id, 
            }))
            set
        })
    }*/

const db= startFirebase();

class RealtimeData extends React.Component{
        constructor(){
            super();
            this.state = {
                tableData: []
            } 
        }
        componentDidMount(){
            const dbRef= ref(db, 'Student')
            onValue(dbRef, (snapshot)=>{
                let records = [];
                snapshot.forEach(childSnapshot=>{
                    let keyName = childSnapshot.key;
                    let data = childSnapshot.val();
                    records.push({"key": keyName, "data":data}); 
                });
                this.setState({tableData: records});
            });

        }

    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student ID</th>
                        <th>Full Name</th>
                        <th>Physics</th>
                        <th>Chemistry</th>
                        <th>Mathematics</th>
                        <th>English</th>
                        <th>OO Programming</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row,index)=> {
                        return (
                        <tr>
                            <td>{index}</td>
                            <td>{row.key}</td>
                            <td>{row.data.Name}</td>
                            <td>{row.data.Physics}</td>
                            <td>{row.data.Chemistry}</td>
                            <td>{row.data.Mathematics}</td>
                            <td>{row.data.English}</td>
                            <td>{row.data.OOProgramming}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

    return(

        <div id="root">
    <div class="main_back">
      <div class="navbar_red"></div><span  className={styles.title}>ATTENDANCE MANAGEMENT SYSTEM</span>
      <div className={styles.nav_back}></div>
      <Link to="/"><div class="user_img"></div></Link><span  class="feat3">Users List</span><Link to="/attendance"><span  class="feat1">Attendance</span></Link><span class="username">{`Hi ${props.name}`}</span><span  class="current_details">CURRENT TIME: 
    19:20:47
    CURRENT DATE:
    17/09/2022
    SATURDAY</span>
    <div><Link to="/login">Login</Link></div>
      <div class="logout_button"></div><span class="logout_textsp"><Link id="signout" class="logout_text" to="/login">Logout</Link></span>
      <div class="pegasus_img"></div>
      <div class="app_window">

      <RealtimeData />
     </div> 
    </div>
  </div>
        
    )

}


