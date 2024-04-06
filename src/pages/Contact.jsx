import React from "react";
import "../styles/Contact.css";
import { GoNorthStar } from "react-icons/go";

function Contact() {
  return (
    <div className="contactContainer" id="contact">

      <div className="contactUsHeader">
        <h1>contact us</h1>
        <p>
          Do you have a question about a specific watch? Would you like to talk
          to one of our associates about the sale of your watch? Our team is
          happy to help with any questions you may have. We will be in touch
          shortly.
        </p>
      </div>

      <div className="form">

        <div className="required">
          <p>Required fields</p>
          <GoNorthStar className="starIcon" />
        </div>

        <form>

          <div className="name">
            <div className="firstName">
              <label htmlFor="">First Name <GoNorthStar/></label>
              <input type="text" />
            </div>
            <div className="lastName">
              <label htmlFor="">Last Name <GoNorthStar/></label>
              <input type="text" />
            </div>
          </div>

          <div className="email-phone">
              <div className="email">
                <label htmlFor="">Email <GoNorthStar/></label>
                <input type="email" />
              </div>
              <div className="phone">
                <label htmlFor="">Phone <GoNorthStar/></label>
                <input type="tel" />
              </div>
          </div>

          <div className="country-zip">
              <div className="country">
                <label htmlFor="">Select Country</label>
                <select id="country" name="country">
                  <option value="" disabled>Select Your Country</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Germany">Germany</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Greece">Greece</option>
                  <option value="France">France</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="US.America">US.America</option>
                </select>
              </div>
              <div className="zip">
                <label htmlFor="">Zip Code</label>
                <input type="number" />
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
