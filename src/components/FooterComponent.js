import React from 'react';

function Footer(props) {

    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/DeirdreBreakenridge"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/dbreakenridge"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/dbreakenridge"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/deirdrebreakenridge"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon" href="https://www.deirdrebreakenridge.com/contact-us/"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright Deidre Breakenridge</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer;