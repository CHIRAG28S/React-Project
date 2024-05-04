import React, { Component } from 'react'
import Navigation from './navigation'
import Footer from './Footer'
import SeventhPage from './SeventhPage'

export default class Cart extends Component {
  render() {
    // const { id } = this.props.match.params;
    // alert(id);
    return (
      <>
        <Navigation />
        <main>

          <div class="container store">
            <div class="item">
              <img src="/gym_images/p1.jpg" alt="Item 1" />
              <div class="item-details">
                <h2 class="item-name">Cellucor C4 Original Pre Workout</h2>
                <p class="item-price">MRP: ₹2638 (Incl. taxes)</p>
                <a href='/buy/1' class="buy-btn">Buy Now</a>
              </div>
            </div>


            <div class="item">
              <img src="/gym_images/p2.jpg" alt="Item 2" />
              <div class="item-details">
                <h2 class="item-name">Muscletech Mass Tech Extreme 2000</h2>
                <p class="item-price">₹3699 (Incl. taxes , Free Delivery)</p>
                <a href='/buy/2' class="buy-btn">Buy Now</a>
              </div>
            </div>


            <div class="item">
              <img src="/gym_images/p3.jpg" alt="Item 2" />
              <div class="item-details">
                <h2 class="item-name">SN Syntha-6 Protein Powder 5 Lbs</h2>
                <p class="item-price">₹5249 (Incl. taxes , Free Delivery)</p>
                <a href='/buy/3' class="buy-btn">Buy Now</a>
              </div>
            </div>

            <div class="item">
              <img src="/gym_images/p4.jpg" alt="Item 2" />
              <div class="item-details">
                <h2 class="item-name">Ultimate Nutrition ISO Sensation 93</h2>
                <p class="item-price">₹6307 (Incl. taxes)</p>
                <a href='/buy/4' class="buy-btn">Buy Now</a>
              </div>
            </div>

            <div class="item">
              <img src="/gym_images/p5.jpg" alt="Item 2" />
              <div class="item-details">
                <h2 class="item-name">Muscletech NitroTech Performance Series</h2>
                <p class="item-price">₹4999 (Incl. taxes , Free Delivery)</p>
                <a href='/buy/5' class="buy-btn">Buy Now</a>
              </div>
            </div>
            <div class="item">
              <img src="/gym_images/p6.jpg" alt="Item 2" />
              <div class="item-details">
                <h2 class="item-name">Dymatize ISO 100, 5Lbs</h2>
                <p class="item-price">₹8149 (Incl. taxes , Free Delivery)</p>
                <a href='/buy/6' class="buy-btn">Buy Now</a>
              </div>
            </div>
            <div class="item">
              <img src="/gym_images/p7.jpg" alt="Item 2" />
              <div class="item-details">
                <h2 class="item-name">ESN Black Series Iso 100 Whey</h2>
                <p class="item-price">₹2899 (Incl. taxes)</p>
                <a href='/buy/7' class="buy-btn">Buy Now</a>
              </div>
            </div>
          </div>
          <SeventhPage />
          <Footer />
        </main>
      </>
    )
  }
}
