import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from "@emailjs/browser";

class Contact extends Component {
  constructor(props) {
    super(props);
    // Initialize state to hold form data
    this.form = React.createRef();
    this.state = {
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    };
  }

  // sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_l4n176n", "template_8i36z9l", this.form.current, {
  //       publicKey: "1kfudHHzKPJC0ovs_",
  //     })
  //     .then(
  //       () => {
  //         console.log("Email sending SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };
  // handleChange function to update the state

  render() {
    if (!this.props.data) return null;
    const { user_name, user_email, subject, message } = this.state;

    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value, "name and value");
      this.setState({
        [name]: value,
      });
    };
    const sendEmail = (e) => {
      e.preventDefault();
      console.log(user_name, user_email, subject, message, "Clicked");

      emailjs
        .sendForm("service_l4n176n", "template_8i36z9l", this.form.current, {
          publicKey: "1kfudHHzKPJC0ovs_",
        })
        .then(
          () => {
            // console.alert("Thanks for contacing us.");
            window.alert("Thanks for contacing us.");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };

    // const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const contactMessage = this.props.data.contactmessage;
    const handlesubmit = (e) => {
      e.preventDefault();
      console.log(user_name, user_email, subject, message, "Values");
    };

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{contactMessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                ref={this.form}
                onSubmit={sendEmail}
                // onClick={handlesubmit}
                name="contactForm"
              >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="user_name"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="user_email"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="subject"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="message"
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" onClick={sendEmail}>
                      Submit
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {user_name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div> */}
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
