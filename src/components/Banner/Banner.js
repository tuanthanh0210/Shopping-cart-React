import React from 'react';

function Banner (props) {
  return (
    <div
      className="Banner"
      style={{
        backgroundImage: ` url(
          'https://www.now.vn/app/assets/img/main-banner.jpg?45bff8c9ec408a5ba51f9fdef662324e'
        )`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: `16rem`,
        width: '`100%`',
      }}
    >
      {/* <h1>{props.banner.title}</h1> */}
    </div>
  );
}

export default Banner;
