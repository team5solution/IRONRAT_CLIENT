import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchJob } from "../../action/job";
import { fetchTheme } from "../../action/themes";
import { Loading, isEmpty, getTheme } from "../../common";
import Job from "./jobs";
import PropTypes from "prop-types";
import NavBar from "../navBar";
import Footer from "../footer";

class Careers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.job.jobItems.length === 0) {
      this.props.fetchJob();
    }
    if (isEmpty(this.props.theme.info)) {
      this.props.fetchTheme();
    }
  }

  render() {
    const {
      job: { isFetching, jobItems },
      theme: { info }
    } = this.props;
    const { backgroundStyle, linkStyle, navStyle, buttonStyle } = getTheme(
      info
    );
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div style={backgroundStyle}>
        <NavBar navStyle={navStyle} btnStyle={buttonStyle} />

        <div className="container">
          <h1>Careers</h1>
          <hr />
          <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/dist/images/ironrats_powder_coating_career.jpg"
                  alt="Iron Rats Powder Coating career"
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/dist/images/ironrats_powder_coating_career_2.jpg"
                  alt="Iron Rats Powder Coating career"
                  className="img-fluid"
                />
              </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon" />
            </a>
          </div>
          <h2>Why we are a great workplace!</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lobortis eros vel varius luctus. Nunc viverra vestibulum erat a
            consectetur. Suspendisse in aliquam arcu. Quisque et enim mauris.
            Suspendisse egestas, lacus eu rutrum scelerisque, quam metus aliquet
            felis, ut semper lacus justo ac erat. Nunc in tincidunt odio. Duis
            nec dictum arcu. In ultricies purus ut risus suscipit imperdiet.
            Suspendisse tellus risus, tincidunt eget venenatis eget, auctor ut
            sapien. Suspendisse in lacus lacus. Vivamus faucibus faucibus
            sapien, sit amet laoreet tortor pharetra eu. Aenean et eros tellus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sodales venenatis tellus a aliquam. Sed erat lorem, condimentum
            vitae bibendum nec, dapibus a odio. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <p>
            Pellentesque et est a ipsum suscipit ultricies eu non ipsum. Aenean
            luctus lectus diam. Sed finibus consectetur magna ut volutpat. Fusce
            eu vehicula lorem. Integer porta felis elit, et ornare urna volutpat
            a. Proin ut libero enim. Maecenas eget massa vehicula, molestie leo
            quis, luctus turpis. Curabitur fermentum quis velit iaculis ornare.
            Vivamus nec neque ultricies, bibendum mauris at, ullamcorper nibh.
            Morbi mattis sit amet leo pharetra commodo. Vivamus sodales lobortis
            mauris vel dictum.
          </p>

          <p>
            Vivamus mollis ullamcorper ultricies. Vestibulum in tellus ut erat
            consectetur tempus. Praesent tincidunt gravida commodo. Suspendisse
            a nulla nisl. Cras ullamcorper ullamcorper erat vel convallis.
            Phasellus lobortis nulla metus, ac cursus nulla molestie id. Sed
            sagittis, nisl faucibus lacinia ultricies, velit dui ultricies
            magna, ut dignissim est elit eget nisi. Etiam quis eros aliquet,
            luctus ipsum vel, rutrum nunc. Aenean pulvinar dolor nec tempus
            viverra. Sed quis metus quis lorem dictum feugiat vitae eget nisi.
            Vestibulum sapien mi, congue nec massa et, mollis lacinia elit.
            Proin turpis sem, imperdiet sit amet nulla sit amet, blandit
            pulvinar dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nullam porta, ipsum quis aliquam facilisis, velit elit
            rutrum nunc, ac pellentesque enim dui sit amet ex. Sed a mattis est,
            vel accumsan orci. Pellentesque porta feugiat eleifend.
          </p>

          <p>
            Etiam quis nisi ut ex ornare dictum sit amet non tellus. Vivamus
            posuere sed libero vel hendrerit. Suspendisse mi nunc, sagittis non
            massa vel, porttitor ornare leo. Fusce pellentesque tortor quis
            libero tempus sodales. Donec eget ligula in erat hendrerit finibus.
            Suspendisse dapibus non nunc ut consectetur. Aliquam nec pretium
            augue, quis dictum ipsum.
          </p>

          <p>
            Curabitur et mi nibh. Curabitur non semper magna, ut tincidunt leo.
            Vestibulum fermentum libero nec nisi porttitor, in tristique nunc
            maximus. Praesent non eros justo. Etiam iaculis tellus vel justo
            dictum maximus. Curabitur bibendum ultrices vulputate. Duis lobortis
            leo non eros consectetur molestie. Praesent non mi ligula. Donec
            accumsan justo in enim suscipit volutpat.
          </p>

          <h2>Opportunities available</h2>
          <div className="row">
            {jobItems.map((item, i) => (
              <Job key={i} {...item} btnStyle={buttonStyle} />
            ))}
          </div>
        </div>
        <Footer bgStyle={backgroundStyle} linkStyle={linkStyle} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    job: state.job,
    theme: state.theme
  };
}
Careers.propTypes = {
  fetchJob: PropTypes.func.isRequired,
  fetchTheme: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { fetchJob, fetchTheme }
)(Careers);
