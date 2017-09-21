import React from 'react';

class ListErrors extends React.Component {
  render() {
    const errors = this.props.errors;
    if (errors) {
      return (
        <div className="alert alert-danger">
          <br />
          <ul className="error-messages">
            {
              Object.keys(errors).map(key => {
                return (
                  <li key={key}>
                    {key} {errors[key]}
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ListErrors;
