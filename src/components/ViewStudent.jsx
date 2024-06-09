import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {
    const[data,changeData]=useState(
        [
            {
              "_id": "66651683741a512717d92b87",
              "firstname": "Manu",
              "lastname": "R",
              "college": "FISAT",
              "dob": "02/04/1999",
              "course": "B-Tech Comp Science",
              "mobile": "+91 95266 7443",
              "email": "aa@gmail.com",
              "address": "Kochi",
              "__v": 0
            },
            {
              "_id": "666516bc741a512717d92b88",
              "firstname": "Rahul",
              "lastname": "D",
              "college": "FISAT",
              "dob": "02/01/1992",
              "course": "MCA",
              "mobile": "+91 95266 74440",
              "email": "aa@gmail.com",
              "address": "Test Address",
              "__v": 0
            }
          ]

    )
  return (
    <div>
        <Navbar/>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <br></br>
                

                <table class="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FIRST NAME</th>
                        <th scope="col">LAST NAME</th>
                        <th scope="col">COLLEGE</th>
                        <th scope="col">DATE OF BIRTH</th>
                        <th scope="col">COURSE</th>
                        <th scope="col">MOBILE</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">ADDRESS</th>
                        <th scope="col">V</th>
                    </tr>
                </thead>

                {
                    data.map(
                        (value,index) => {
                            return  <tbody>
                            <tr>
                                <td>{value._id}</td>
                                <td>{value.firstname}</td>
                                <td>{value.lastname}</td>
                                <td>{value.college}</td>
                                <td>{value.dob}</td>
                                <td>{value.course}</td>
                                <td>{value.mobile}</td>
                                <td>{value.email}</td>
                                <td>{value.address}</td>
                                <td>{value.__v}</td>
                            </tr>
                        </tbody>
                        }
                    )
                }
                
               
                </table>

                </div>
                </div>
            </div>
        </div>
   
  )
}

export default ViewStudent