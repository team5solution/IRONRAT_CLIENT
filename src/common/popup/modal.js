import React from "react";
import SuccessIcon from "../../images/success.svg";
import ErrorIcon from "../../images/error.svg";
import WarningIcon from "../../images/warning.svg";
import InformationIcon from "../../images/information.svg";
import "./modal.css";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.show
    };
  }
  onDismiss = () => {
    this.setState({
      modal: false
    });
  };
  render() {
    // console.log(this.props);
    let alertIcon;
    //console.log(this.props);
    //console.log(this.state);
    switch (this.props.type) {
      case "success":
        alertIcon = SuccessIcon;
        break;
      case "error":
        alertIcon = ErrorIcon;
        break;
      case "warning":
        alertIcon = WarningIcon;
        break;
      default:
        alertIcon = InformationIcon;
    }
    let modal = this.state.modal ? (
      <div className="backdrop" style={{ display: this.state.modal }}>
        <div className="modal-window">
          <img
            src={alertIcon}
            alt="IRON Rat Customs Powder Coating Icon"
            styel={{ width: "10%" }}
          />
          <p>{this.props.content}</p>

          <div className="modal-footer">
            <button className="btn btn-primary" onClick={this.onDismiss}>
              <h6>Ok, I got it</h6>
            </button>
          </div>
        </div>
      </div>
    ) : null;
    return <div>{modal}</div>;
  }
}

export default Modal;
