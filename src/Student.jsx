import React from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from './helpers/axiosInstance'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Student = () => {
    let navigate = useNavigate()
        let [studentsdata, setStudentsdata] = useState({
                studentName: "",
                email: "",
                password: "",
                phone: "",
                gender: ""
        })

        let sdata = (e) => {
                setStudentsdata({ ...studentsdata, [e.target.name]: e.target.value })
        }
        let handleStudentSignup = (e) => {
                e.preventDefault();
                try {
                        axiosInstance.post("/users/save", studentsdata)
                        navigate("/login")
                        toast.success(`user ${studentsdata.studentName} Signuped successfully !`)
                }
                catch (err) {
                        console.log(err);
                        alert("Fill the details properly")
                }
        }
  return (
    <>
      <div  >
                        <form action="" onSubmit={handleStudentSignup}>
                                <h2>Signup User</h2>
                                <div>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='userName' onChange={sdata} />
                                </div>
                                <div>
                                        <label htmlFor="email">Email </label>
                                        <input type="email" id='email' name='email' onChange={sdata} />
                                </div>
                                <div >
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id='password' name='password' onChange={sdata} />
                                </div>
                                <div >
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" id='phone' name='phone' onChange={sdata} />
                                </div>
                                        <label htmlFor="gender">Gender</label>
                                <div >
                                        <div>
                                                Male:  <input type="radio" name='gender' value={"male"} onChange={sdata} />
                                        </div>
                                        <div>
                                                Female : <input type="radio" name='gender' value={"female"} onChange={sdata} />
                                        </div>
                                </div>
                                <button>Signup</button>
                        </form>
                </div>
    </>
  )
}

export default Student
