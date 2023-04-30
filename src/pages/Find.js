import React from "react";
import axios from "axios";
import Map from "../components/Map";
// eslint-disable-next-line 


const Find = () => {
  async function position(data) {
    let info = await axios.post('user/near', {
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
      radius: 100
    })
    console.log(info.data[0])
  }
  function near() {
    navigator.geolocation.getCurrentPosition(position);
  }
  return (
    <>
      <div className="form__wrapper">



        <div id="map">
          <Map lat={51.505} lon={-0.09} />;
        </div>
        <div className="form__right">
          <div className="form__heading">
            <h1>
              Parking sorted in <span>seconds.</span>
            </h1>
            <p>
              Simply enter where & when you'll need parking and we'll find the
              perfect space for you.
            </p>
          </div>
          <form className="search-form">
            <div className="form-group">
              <label for="location">Location</label>
              <input type="text" id="location" name="location" required />
            </div>
            <div className="buttons-container">
              <button onClick={near} type="submit">Search</button>
              <button onClick={near} type="Button">Book</button>
              <button onClick={near} type="Button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <section className="find-sec-a">
        <div className="find-sec-a-left"></div>
        <div className="find-sec-a-right">
          <p className="main-text-sec-a">
            Guarantee your <span>Space</span> before you set off.
          </p>
          <p className="main-text-sec-a-sub">
            Our huge network of bookable parking spaces & driveways gets you
            closer to where you need to be. By reserving your parking, you’ll
            save time & money on all your journeys, whether it’s your daily
            commute, an evening gig or a weekend away.
          </p>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Find;
