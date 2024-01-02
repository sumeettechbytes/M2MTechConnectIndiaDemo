import React from 'react';

function ContactUsForm( { formStyle } ) {

    return (
        <form className={`${ formStyle }`} action="https://formspree.io/f/xlekeqld"
        method="POST">
            <div className="col-lg-12">
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" name="fullname" placeholder="Name*" required />
                </div>
            </div>

            <div className="col-lg-12">
                <div className="form-group">
                    <input type="email" className="form-control form-control-lg" name="email" placeholder="Email*" required />
                </div>
            </div>

            <div className="col-lg-12">
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" name="phone" placeholder="Phone" />
                </div>
            </div>

            <div className="col-lg-12">
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" name="subject" placeholder="Subject" />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <textarea className="form-control" name="message" placeholder="Your Message"></textarea>
                </div>
            </div>
            <div className="col-lg-12">
                <button className="rn-btn edu-btn w-100" type="submit">
                    <span>Submit Now</span><i className="icon-arrow-right-line-right"></i></button>
            </div>
        </form>
    )
}
export default ContactUsForm;