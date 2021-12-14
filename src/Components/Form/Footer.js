import React from "react";
const Footer = () => {
  return (
    <div>
      <div className="row pb-3">
        <div className="col iconClass">
          <p className="text-secondary fw-bold">Create account with</p>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f icon"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin-in icon"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-google-plus-g icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
