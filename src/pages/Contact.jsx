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
              <label htmlFor="">
                First Name <GoNorthStar className="labelIcons" />
              </label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="lastName">
              <label htmlFor="">
                Last Name <GoNorthStar className="labelIcons" />
              </label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="email-phone">
            <div className="email">
              <label htmlFor="">
                Email <GoNorthStar className="labelMailIcons" />
              </label>
              <input type="email" placeholder="abc@mail.com" />
            </div>
            <div className="phone">
              <label htmlFor="">Phone <GoNorthStar className="labelPhoneIcons"/></label>
              <input type="tel" placeholder="+(country code) - " />
            </div>
          </div>

          <div className="country-zip">
            <div className="country">
              <label htmlFor="">Select Country <GoNorthStar className="labelCountryIcons" /></label>
              <select id="country" name="country">
                <option value=""></option>
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
              <label htmlFor="">Primary Zip <GoNorthStar className="labelZipIcons" /></label>
              <input type="number" />
            </div>
          </div>

          <div className="subject">
            <label htmlFor="">Select Subject <GoNorthStar className="labelSubjectIcons" /></label>
            <select name="subject" id="subject">
              <option value="Select Subject"></option>
              <option value="Buy from MyWatch">Buy from MyWatch</option>
              <option value="Sell to MyWatch">Sell to MyWatch</option>
              <option value="Trade with MyWatch">Trade with MyWatch</option>
              <option value="Get a Loan">Get a Loan</option>
              <option value="Site feedback">Site feedback</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className="message">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="btn">
            <button type="submit">submit message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
