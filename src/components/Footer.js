import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div class="wrap-footer">
        <h2>Pay<span>N</span>park</h2>
        <p>
          Our platform was developed by a group of college students as a
          semester project. It connects users with nearby parking spaces and
          electric vehicle charging stations, with the goal of making city
          living more accessible, affordable, and sustainable. Whether you're in
          a busy city or a residential area, our platform simplifies the process
          of finding available options for parking.
        </p>
      </div>
      <div class="icons">
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <p class="copyright">&copy; 2023 PayNpark</p>
    </footer>
  )
}

export default Footer