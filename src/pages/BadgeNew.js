import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";


class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName= {this.state.form.lastName}
                twitter=  {this.state.form.twitter}
                jobTitle= {this.state.form.jobTitle}
                email=    {this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/e4f8643fbb5ebc31195f50ce99002c1d?s=80"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
