import React from "react";
// eslint-disable-next-line 
import Map from "../components/Map";

const Find = () => {
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
            <div class="form-group">
              <label for="check-in">Check-in </label>
              <input type="date" id="check-in" name="check-in" />
            </div>
            <div class="form-group">
              <label for="check-out">Check-out </label>
              <input type="date" id="check-out" name="check-out" />
            </div>
            <div class="form-group">
              <label for="time">Time </label>
              <input type="time" id="time" name="time" />
            </div>
            <button type="submit">Search</button>
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
