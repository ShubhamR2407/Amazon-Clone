import React from "react";
import Header from "./Header";
import "./Homepage.css";
import Product from "./Product";

function Homepage() {
  return (
    <div>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/UK_COVID19_Prime_FT_XSite_HeroTALL_1500x600._CB419556475_.jpg"
          alt=""
        />
        {/* Products - id, title, rating, price, image */}
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup:How Constant innovation Creates Radically Successfull Buisnessman Paybacks"
            price={11.96}
            rating={3}
            image="https://th.bing.com/th/id/R.9de82ef2da08008a74aa3afbec9f3cf9?rik=zaas85eGaea9BQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-T-d3JPMr-Uk%2fUPshLuidy6I%2fAAAAAAAAFbU%2fvOiHd0qgnC4%2fs1600%2flean-startup_book-cover.jpeg&ehk=O90jlIAsVo0HEm3VJD7I%2b0%2fbWRp8HxsmQwJdugopPLU%3d&risl=&pid=ImgRaw&r=0"
          />
          <Product
            id="2"
            title="Pigeon Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. 1500 Watt (Silver)"
            price={490}
            rating={4}
            image="https://m.media-amazon.com/images/I/51DGcy8eBCL._SX679_.jpg"
          />
            
        </div>
        <div className="home__row">
        <Product
            id="3"
            title="iQOO Z5 5G (Mystic Space, 8GB RAM, 128GB Storage)"
            price={18999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71AJtySCB0L._SX569_.jpg"
          />
          <Product
            id="4"
            title="HP Pavilion AMD Ryzen 7 5800H 15.6 inches FHD Gaming Laptop (16GB/512GB SSD/Windows 11 Home/NVIDIA RTX 3050 Graphics/MS Office/ Shadow Black & Ultra Violet/1.98 Kg), 15-ec2146AX"
            price={79999}
            rating={5}
            image="https://m.media-amazon.com/images/I/51DmOWr3rnL._SX679_.jpg"
          />
           <Product
            id="5"
            title="ZEBRONICS Zeb-Thunder Wireless Bluetooth Over The Ear Headphone FM, mSD, 9 hrs Playback with Mic (Brown)"
            price={599}
            rating={4}
            image="https://m.media-amazon.com/images/I/811UXhL9eUL._SX522_.jpg"
          />
        
        </div>
        <div className="home__row">
        <Product
            id="6"
            title="LG NanoCell 218.4 cm (86 Inches) 8K Ultra HD Smart QNED TV 86QNED99TPZ (Black) (2021 Model)"
            price={999999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61ruTclhkIL._SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
