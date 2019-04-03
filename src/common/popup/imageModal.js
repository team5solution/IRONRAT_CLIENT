import React, { Component } from "react";
class ImageModal extends Component {
  constructor(props) {
    super(props);
  }
  onDismiss = () => {
    this.props.closeModal();
  };
  render() {
    const { images, name } = this.props;
    const imagesComponent = images.map((image, index) => {
      if (index === 0) {
        return (
          <div className="carousel-item active" key={index}>
            <img
              src={image}
              alt="Iron rats powder coating logo"
              className="img-fluid"
            />
          </div>
        );
      } else {
        return (
          <div className="carousel-item" key={index}>
            <img
              src={image}
              alt="Iron rats powder coating logo"
              className="img-fluid"
            />
          </div>
        );
      }
    });
    return (
      <div className="backdrop">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-dark">{name}</h4>
            </div>
            <div className="modal-body">
              <div id="demo" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">{imagesComponent}</div>

                <a
                  className="carousel-control-prev"
                  href="#demo"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                </a>
                <a
                  className="carousel-control-next"
                  href="#demo"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                </a>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.onDismiss}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageModal;
