import React, {Component} from 'react'
import './Jobs.css'
import 'bootstrap/dist/css/bootstrap.css';
import {
    Modal,
    ModalBody, ModalHeader,
} from 'reactstrap';



class Jobs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modalRemark:false
        }
    }

    applyNow = ()=>{
        console.log("applynow clicked");
        this.setState({
            modalRemark: !this.state.modalRemark
         });
     };
    
    

    toggleRemark = () => {
        this.setState({
           modalRemark: false
        });
    };
    render(){
     return (
        <div className="container-fluid">
            <div className="content">
                <h1>Jobs:-</h1>

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Description</th>
                            <th>Experience</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Software Developer</td>
                            <td>we are hire 4+ years of experience condidates</td>
                            <td>2 to 4</td>
                            <td><button type="button" className="btn btn-primary" onClick={this.applyNow}>
                                Apply Now
                             </button></td>
                        </tr>
                    </tbody>
               
               </table>

               <Modal isOpen={this.state.modalRemark} backdrop="static" toggle={this.toggleRemark} size={'md'}>
                    <ModalHeader toggle={this.toggleRemark}>
                        <span ><b>Job Application </b></span>
                        
                    </ModalHeader>
                    <ModalBody>
                    <div className="row">  
                    <div className="col-md-4">
                    <label for="usr">Name:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">Phone:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">Email:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">DOB:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">Gender:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">Location:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">Designation:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">Experience:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">Current Salary:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">Skills:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="text" />
                    </div>
                    <div className="col-md-4">
                    <label for="usr">Upload Resume:</label>
                    </div>
                    <div className="col-md-5">
                    <input type="file" />
                    </div>
                    <div className="col-md-5 l-4">
                  <button type="button" className="btn btn-primary"> Submit</button>
                    </div>


                   
                   
                    </div>
                    <div className="col-md-4">
                    
                    
                  </div>
                    </ModalBody>

                </Modal>
            </div>
        </div>




    )
    }
}

export default Jobs
