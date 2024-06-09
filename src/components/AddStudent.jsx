import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const[data,setData]=useState(
        {
                "fname":"",
                "lname":"",
                "address":"",
                "dob":"",
                "course":"",
                "mobile":"",
                "email":"",
                "college":""
        }
    )
    const inputHandler=(event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=() => {
        console.log(data)
    }
  return (
   
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br></br>
                <div class="bg-warning p-3">
                <div class="card">
                <div class="card-body">
                    <div className="row g-3">
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">FIRST NAME</label>
                            <input type="text" className="form-control" name='fname' value={data.fname} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">LAST NAME</label>
                            <input type="text" className="form-control" name='lname' value={data.lname} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ADDRESS</label>
                            <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DATE OF BIRTH</label>
                            <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">COURSE</label>
                            <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                                <option value="BTech">BTech</option>
                                <option value="MTech">MTech</option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">MOBILE</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">COLLEGE</label>
                            <textarea name="college" id="" className="form-control" value={data.college} onChange={inputHandler}></textarea>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SUCCESS</button>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-secondary">RESET</button>
                        </div>

                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>

    
  )
}

export default AddStudent