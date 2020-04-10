import React from 'react';
import './Footer.css';

function Footer (props) {
  return (
    <div className="Footer">

      <div className="AppMobile">
        <div className="App">
          <img
            src="https://image.flaticon.com/icons/svg/732/732181.svg"
            alt=""
          />
          <span>iOS</span>
        </div>

        <div className="App">
          <img src="https://image.flaticon.com/icons/svg/38/38002.svg" alt="" />
          <span>Android</span>
        </div>

        <div className="Conect">
          <a href="http://facebook.com">
            <img
              src="https://image.flaticon.com/icons/svg/145/145802.svg"
              alt=""
            />
          </a>
          <a href="http://google.com">
            <img
              src="https://image.flaticon.com/icons/svg/2702/2702602.svg"
              alt=""
            />
          </a>
          <a href="http://instagram.com">
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111463.svg"
              alt=""
            />
          </a>
        </div>

      </div>

      <div className="Logo">
        <img
          src="https://lh3.googleusercontent.com/mdZ1EFLh9n5HE7LFQw2CDAqnOzrGtJhTt5gA96-dPCxO3iWH3ydh8WZ-YcxmNxZCmBudSoUylCt9qHrQZ-bjfe8=h200"
          alt=""
        />

      </div>

      <div className="InfoCompany">
        <p>Công ty Cổ phần Foody</p>
        <p>
          <b>Địa chỉ</b>: Lầu 8, Tòa nhà Jabes 1,
          244 Cống Quỳnh, P. Phạm Ngũ Lão, Quận 1, Tp.HCM
        </p>
        <img
          src="https://www.now.vn/app/assets/img/gov_seals.jpg?c3d95a3d6c29919ae2c73a4a646841de"
          alt=""
        />
      </div>

    </div>
  );
}

export default Footer;
