import React from "react";
import axios from "axios";
// eslint-disable-next-line 
import Map from "../components/Map";

const Find = () => {
  async function position(data){
    let info=await axios.post('user/near',{
      latitude:data.coords.latitude,
      longitude:data.coords.longitude,
      radius:100
     })
     console.log(info.data[0])
   }
  function near(){
         navigator.geolocation.getCurrentPosition(position);
  }
  return (
    <>
      <div class="form__wrapper">
        {/* <Map placeName={"Pune"}/> */}
        <div id="map"></div>
        <div class="form__right">
          <div class="form__heading">
            <h1>
              Parking sorted in <span>seconds.</span>
            </h1>
            <p>
              Simply enter where & when you'll need parking and we'll find the
              perfect space for you.
            </p>
          </div>
          <form class="search-form">
            <div class="form-group">
              <label for="location">Location </label>
              <input type="text" id="location" name="location" required />
            </div>
            <button onClick={near} type="submit">Search</button>
          </form>
        </div>
      </div>
      <hr />
      <section class="find-sec-a">
        <div class="find-sec-a-left"></div>
        <div class="find-sec-a-right">
          <p class="main-text-sec-a">
            Guarantee your <span>Space</span> before you set off.
          </p>
          <p class="main-text-sec-a-sub">
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
