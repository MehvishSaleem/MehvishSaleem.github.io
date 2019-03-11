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
                <p>I'm currently living in Vancouver and pursuing my Master's 
                  in Big Data. I'm mainly interested in reading about and implementing
                  data driven solutions to everyday problems using Machine Learning. Usually i'm a pretty chill person, going about life
                  binge watching shows, travelling and eating. But I have an ocassional 
                  tendency to get hyper about things 
                  i'm really passionate about. Things including, but not 
                  limited to: food, cats,  Feminism and The Office. 
                </p>
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
                <p>Check out my projects if you're interested to 
                  know more about my work!</p>
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
              <a href="https://open.spotify.com/user/mehvsaleem?si=pcrD8PEtRUCgmd0NAXsH9Q">
                  <img src={spotify} height="150pc" alt="" />
              </a> 
              <br></br>
              <br></br>
                <p>I put this here because i liked spotify's logo colour on my website.
                  Doesn't it look pretty? Oh and i'm really into indie music these days.
                  So if you find something cool, send it my way!</p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Little things i notice</h2>
              <p>
                So one of my aboslute favourite things to do is to explore
                new places and stop ocassionally (much to 
                the dismay of my friends) to take pictures of random things.
                And living in one of the most beautiful cities of the world certainly
                helps! Sooo, if you're interested in knowing about the little everyday things i notice
                and how i view the world through my camera, click on the link below.  
              </p>

              <ul className="actions">
                  <li><Link to="/generic" className="button">Gallery</Link></li>
              </ul>
            </header>
            
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>Coming soooon!</h2>
              <p>
              </p>
            </header>
            
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
