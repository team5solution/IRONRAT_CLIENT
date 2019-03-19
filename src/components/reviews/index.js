import React, { Component } from "react";
import NavBar from "../navBar";
import Footer from "../footer";
import Modal from 'react-responsive-modal';
//import ReviewItems from "./reviewItems";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: "",
      rating: 0,
      reviewContent: "",
      errors: {}
    };
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
 <div>
   <div>
        <NavBar />
        <h1>Customer Reviews</h1>
        <hr />
        <button onClick={this.onOpenModal} className="btn btn-primary btn-lg" ><h6>Submit a Review</h6></button>
        
        <div className="modal fade" >
            <div className="modal-dialog modal-lg"></div>
        <div className="modal-content">
        <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false} closeOnOverlayClick={true} center>
                    <div className="modal-header">
                        <h4 className="modal-title text-dark">Create review</h4>
                    </div>
                    <div className="modal-body">
                    
                        <div className="form-group mb-5">
                            <p>
                                <label className="text-dark" >Name:</label>
                            </p>
                            <input  className="form-control" id="name"/>
                        </div>
                        <div className="form-group mb-5">
                            <p>
                                <label className="text-dark" >Rating:</label>
                            </p>
                            <input className="form-control" id="rate"/>
                        </div>
                        <div className="form-group mb-5">
                            <p>
                                <label className="text-dark" >Review:</label>
                            </p>
                            <textarea className="form-control" rows="8" id="review"></textarea>
                        </div>

                        <button className="btn btn-primary"><h6>submit review</h6></button>
                    </div>
                    <div className="modal-footer">
                        <button  className="btn btn-success" onClick={this.onCloseModal}>Close</button>
                    </div>
                    </Modal>
            </div>
            
            </div>
            </div>
        <Footer />
      </div>
    );
  }
}
export default Reviews;
