import React from 'react'
import {Link} from 'react-router-dom'

const How = () => {
  return (
    <>
    <section className="learn-sec-wrapper">
      <div>
        <h2>
          Discover the <span>easiest</span> way to secure a parking space for
          your next trip.
        </h2>
        <p id="temp">
          Simply let us know where you're headed, and our smart app will swiftly
          locate the perfect spot for you. With over 100,000 parking spaces at
          your fingertips, including private driveways, you'll always be near
          your destination.
        </p>
      </div>
      <hr />
      <div className="learn-sec-container">
        <div className="learn__child">
          <h4>
            <span>1.</span> Booking a parking space has never been easier.
          </h4>
          <p>
            Browse through our available spaces, read reviews and view photos,
            and with just a tap, your space is guaranteed in seconds.
          </p>
        </div>
        <div className="learn__child">
          <h4>
            <span>2.</span> Best of all, our service is completely
            <span>Free.</span>
          </h4>
          <p>
            Say goodbye to the hassle of parking and let us make your trip a
            breeze.
          </p>
        </div>
        <div className="learn__child">
          <h4>
            <span>3.</span> Once you've booked, everything is taken care of.
          </h4>
          <p>
            Access directions and instructions are readily available through
            your account, and if you need to make changes to your booking, it's
            a breeze.
          </p>
        </div>
        <div className="learn__child" id="first"></div>
        <div className="learn__child" id="second"></div>
      </div>
      <div className="main-text"><Link className="main-text__link" to="/find" >find a spot!</Link></div>
    </section>
    <hr />
    </>
  )
}

export default How