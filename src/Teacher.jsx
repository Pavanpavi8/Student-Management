import React from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axiosInstance from './helpers/axiosInstance'
import { useState } from 'react'

const Teacher = () => {
  let navigate = useNavigate()
        let [teacherData, setTeacherData] = useState({
                teacherName: "",
                email: "",
                password: "",
                phone: "",
                gender: ""
        })

        let tdata = (e) => {
                setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
        }
        let handleTeacherSignup = (e) => {
                e.preventDefault();
                try {
                        axiosInstance.post("/users/save", teacherData)
                        navigate("/login")
                        toast.success(`user ${teacherData.teacherName} Signuped successfully !`)
                }
                catch (err) {
                        console.log(err);
                        alert("Fill the details properly")
                }
        }
  return (
    <>
      <div  >
                        <form action="" onSubmit={handleTeacherSignup}>
                                <h2>Signup User</h2>
                                <div>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='userName' onChange={tdata} />
                                </div>
                                <div>
                                        <label htmlFor="email">Email </label>
                                        <input type="email" id='email' name='email' onChange={tdata} />
                                </div>
                                <div >
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id='password' name='password' onChange={tdata} />
                                </div>
                                <div >
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" id='phone' name='phone' onChange={tdata} />
                                </div>
                                        <label htmlFor="gender">Gender</label>
                                <div >
                                        <div>
                                                Male:  <input type="radio" name='gender' value={"male"} onChange={tdata} />
                                        </div>
                                        <div>
                                                Female : <input type="radio" name='gender' value={"female"} onChange={tdata} />
                                        </div>
                                </div>
                                <button>Signup</button>
                        </form>
                </div>
    </>
  )
}

export default Teacher
