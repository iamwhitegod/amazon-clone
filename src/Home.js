import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg"
          alt="home banner"
        />
        <div className="home__row">
          <Product
            id="7548903545"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="9435384511"
            title="SINGER Mechanical MX60 Sewing Machine, 12.42 pounds, White"
            price={133.16}
            image="https://m.media-amazon.com/images/I/51JsRxAdSxL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8763240374"
            title="Smart Watch, Virmee VT3 Plus Fitness Tracker 1.5 In HD Touch Screen with Heart Rate Monitor Blood Oxygen Meter Sleep..."
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61yYxZThxBL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="1024850193"
            title="The Bose SoundLink Revolve, the Portable Bluetooth Speaker with 360 Wireless Surround Sound, Triple Black"
            price={199.0}
            image="https://m.media-amazon.com/images/I/81ipKYwWZBL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="5560178305"
            title="New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Silver(2nd Generation)"
            price={589.99}
            image="https://m.media-amazon.com/images/I/81lqq8UF5ML._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="9916644036"
            title="SAMSUNG LC24F396FHNXZA 23.5' FHD Curved LED-Lit FreeSync Monitor'"
            price={129.99}
            image="https://m.media-amazon.com/images/I/91ubktnbNVL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
