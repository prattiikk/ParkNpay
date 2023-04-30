import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    {/* <!-- main-section --> */}
    <main>
      <div className="main__text">
        <h1>Find parking in <span>seconds!</span></h1>
        <p>
          Book a parking space as per the suitable date, time and location from
          options available.
        </p>
        <Link className='a' to="/find">find a spot!</Link>
      </div>
      <div className="main__img"></div>
    </main>
    <hr />


    {/* <!-- Ev-section --> */}
    <section className="ev">
      <div className="ev__left"></div>
      <div className="ev__right">
        <h3>
          Spark Up Your <span>Electric</span> Ride: Discover Charging Points in
          a Flash!
        </h3>
        <p>
          PayNpark is designed to help you locate nearby electric vehicle
          charging stations quickly and easily. With a user-friendly interface
          and an up-to-date database, you can find the nearest station and power
          up your EV in no time, ensuring a hassle-free electric ride.
        </p>
        <a href="/">Find nearby charging spots</a>
      </div>
    </section>

    <hr />


    {/* <!-- Card-section --> */}
    <section className="card-deck">
      <h2 className="card-deck__heading">parking <span>Made</span> easy.</h2>
      <div className="cards">
        <div className="card__child">
          <h4>Wherever,whenever</h4>
          <p>Choose from millions of spaces across the globe</p>
          <p>Find your best option for every car journey</p>
        </div>
        <div className="card__child">
          <h4>Peace of mind</h4>
          <p>View information on availability, price and restrictions</p>
          <p>Reserve in advance at over 45,000+ locations</p>
        </div>
        <div className="card__child">
          <h4>Seamless experience</h4>
          <p>Pay for JustPark spaces via the app or website</p>
          <p>Follow easy directions and access instructions</p>
        </div>
      </div>
    </section>
    <hr />


    {/* <!-- testimonials section --> */}

    <h2 className="testimonials__heading">
      "Customer <span>Success Stories,</span> Hear from Our Satisfied Users!"
    </h2>

    <section className="testimonials">
      {/* <!-- card --> */}
      <div className="card card--bg-purple">
        {/* <!-- card header --> */}

        <header className="card__header">
          <img
            src="testimonials/oliver-ragfelt-khV4fTy6-D8-unsplash.jpg"
            className="card__img"
            alt="user img"
          />
          <div>
            <h3>Oliver Ragfelt</h3>
            <p>Verified User</p>
          </div>
        </header>

        {/* <!-- card text --> */}
        <p className="card__lead">
          "I've been using this website to rent a parking space near my office
          for the past few months, and I couldn't be happier! The process was so
          easy, and I found the perfect spot just a few blocks away. Highly
          recommend!" - John S.
        </p>
      </div>

      <div className="card card--bg-purple">
        {/* <!-- card header --> */}

        <header className="card__header">
          <img
            src="testimonials/mohammad-faruque-SpIKPT8zeAs-unsplash.jpg"
            className="card__img"
            alt="user img"
          />
          <div>
            <h3>Mohammad Faruque</h3>
            <p>Verified user</p>
          </div>
        </header>

        {/* <!-- card text --> */}
        <p className="card__lead">
          "I was skeptical about renting a parking space online, but this
          website made it so simple and straightforward. The user interface was
          easy to navigate, and I was able to find a spot close to my apartment
          in no time." - Sarah T.
        </p>
      </div>

      <div className="card card--bg-purple">
        {/* <!-- card header --> */}

        <header className="card__header">
          <img
            src="testimonials/brooke-cagle-0P1naKwoejM-unsplash.jpg"
            className="card__img"
            alt="user img"
          />
          <div>
            <h3>Brooke Cagle</h3>
            <p>Verified user</p>
          </div>
        </header>

        
        <p className="card__lead">
          "I've tried other parking rental websites in the past, but this one is
          by far the best. The selection of spots is unbeatable, and the prices
          are very reasonable. I'll definitely be using this site again in the
          future." - Michael B.
        </p>
      </div>

      <div className="card card--bg-purple">
        {/* <!-- card header --> */}

        <header className="card__header">
          <img
            src="testimonials/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
            className="card__img"
            alt="user img"
          />
          <div>
            <h3>Joseph Gonzalez</h3>
            <p>Verified user</p>
          </div>
        </header>

        {/* <!-- card text --> */}
        <p className="card__lead">
          "As someone who lives in a busy city, finding a parking spot can be a
          nightmare. But this website made it so easy for me to rent a spot in a
          safe and convenient location. I'll never go back to circling the block
          looking for a space!" - Rachel K.
        </p>
      </div>
    </section>
    <hr />
    </>
  )
}

export default Home