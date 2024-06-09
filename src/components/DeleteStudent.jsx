import React from 'react'
import Navbar from './Navbar'

const DeleteStudent = () => {
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

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">STUDENT NAME</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">DELETE</button>
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

export default DeleteStudent