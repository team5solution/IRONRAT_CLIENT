import React, { Component } from "react";
import { SERVER_URL } from "../../settings";
import { ImageModal } from "../../common";
class ProductItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  handleClick = () => {
    this.setState({
      showModal: true
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false
    });
  };
  render() {
    const {
      _id,
      name,
      type,
      description,
      images,
      btnStyle,
      bgStyle
    } = this.props;
    const buttonStyle = { ...btnStyle, marginRight: "10px" };

    const productImages = images.map((item, index) => {
      return SERVER_URL + item;
    });
    const photoComponent = this.state.showModal ? (
      <ImageModal
        images={productImages}
        name={name}
        closeModal={this.closeModal}
      />
    ) : null;
    let infoControl, detailInfo1, detailInfo2, href, id;

    href = "#descr" + _id;
    id = "descr" + _id;

    infoControl = (
      <a
        className="btn btn-primary btn-lg"
        data-toggle="collapse"
        href={href}
        role="button"
        aria-expanded="false"
        aria-controls={id}
        style={buttonStyle}
      >
        <h6>More info on product</h6>
      </a>
    );
    detailInfo1 = (
      <div className="collapse" id={id}>
        <div className="card card-body text-dark">
          <p>{description}</p>
        </div>
      </div>
    );

    return (
      <div className="col-md-6" style={bgStyle}>
        <h3 className="mt-3">{name}</h3>
        <p>
          <img
            src={SERVER_URL + images[0]}
            alt="ottawa powder coating custom icon"
            className="img-fluid"
          />
        </p>
        {infoControl}
        {detailInfo2}

        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={this.handleClick}
          style={btnStyle}
        >
          <h6>More pictures</h6>
        </button>
        {detailInfo1}
        {photoComponent}
      </div>
    );
  }
}
export default ProductItems;
