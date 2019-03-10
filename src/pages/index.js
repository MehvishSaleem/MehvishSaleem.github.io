import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import spotify from '../assets/images/spotify.png';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Mehvish Saleem" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>I'm currently pursuing my Master's in Big Data. 
                  I have an ocassional tendency to get hyper about things 
                  i'm really passionate about. Things including, but not 
                  limited to: Machine Learning, Feminism and Breaking Bad.</p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>My Social Media</h2>
            </header>
            <ul className="features">
              <li>
                <a href="https://github.com/MehvishSaleem">
                  <img src={github} height="150pc" alt="" />
                </a> 
                <br></br>
                <br></br>
                <p>Check out my projects if you're interested!</p>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/mehvish/">
                  <img src={linkedin} height="150pc" alt="" />
              </a> 
              <br></br>
              <br></br>
                <p>Connect with me and let's share our geeky interests over a cup of coffee.</p>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/mehvish/">
                  <img src={spotify} height="150pc" alt="" />
              </a> 
              <br></br>
              <br></br>
                <p>Really into indie music.</p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Little things i notice</h2>
              <p>
                Living in Vancouver gave me the opportunity to 
                experience nature in its purest form.  
                
              </p>
            </header>
            
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
