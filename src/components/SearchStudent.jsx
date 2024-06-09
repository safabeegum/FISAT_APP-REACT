import React from 'react'
import Navbar from './Navbar'

const SearchStudent = () => {
  return (
    <div>
        <Navbar/>
        <div class="text-bg-warning p-3">
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card">
                        <div class="card-body">
                            <div className="row g-3">

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                                    <label htmlFor="" className="form-label">STUDENT NAME</label>
                                    <input type="text" className="form-control" />
                                </div>
                                
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                                    <button className="btn btn-primary">SEARCH</button>
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

export default SearchStudent