import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
let today = new Date().toISOString().substr(0, 10);
const DateGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div className={classnames("form-group  mb-5", { "has-error": error })}>
      <p>
        <label>{label}</label>
      </p>

      <input
        onChange={onChange}
        type="date"
        min={today}
        name={field}
        rows="8"
        className="form-control"
      />
      {error && (
        <span className="help-block" style={{ color: "red" }}>
          {error}
        </span>
      )}
    </div>
  );
};

DateGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

DateGroup.defaultProps = {
  type: "date"
};

export default DateGroup;
