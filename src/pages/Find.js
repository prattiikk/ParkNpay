import React from "react";
import axios from "axios";
import { useState } from "react";
import Map from "../components/Map";
// eslint-disable-next-line 


const Find = () => {
  const [latitude,setlatitude]=useState("0");
  const [longitude,setlongitude]=useState("0");
  const [parkdata,setparkdata]=useState("");
async function cancel(){
  try{
      let info=await axios.post('/user/cancel');
      alert(info.data.message);
  }catch(err){
      alert(err.response.data.message);
  }
}

  function book() {
    if(parkdata==""){
      alert("search first for booking parking spots");
    }else{
      axios.post('/user/book',{owned_id:parkdata.owned_id}).then((response)=>{
        alert(response.data.message);
      }).catch((error)=>{
        alert(error.response.data.error);
      });
  }
  
}

  function updatepos(lat,lon){
    setlatitude(lat);
    setlongitude(lon);
  }
  function position(data) {
        axios.post('user/near', {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
        radius: 10
      }).then((info)=>{
                console.log(info);
                if(info.data!=''){
                  setparkdata(info.data[0]);
                  updatepos(info.data[0].latitude,info.data[0].longitude);
                  alert("Showing nearest spot");
                }else{
                  alert("No parking spots found");
                }
      }).catch((error)=>{
      console.log(error);
    })
  }
  function near() {
    navigator.geolocation.getCurrentPosition(position);
  }
  return (
    <>
      <div className="form__wrapper">



        <div id="map">
          <Map lat={latitude} lon={longitude} />;
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
              <label id="address">Location</label>
              <input type="text" id="location" name="location" required />
            </div>
            <div className="buttons-container">
              <button onClick={near} type="submit">Search</button>
              <button onClick={book} type="Button">Book</button>
              <button onClick={cancel} type="Button">Cancel</button>
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
