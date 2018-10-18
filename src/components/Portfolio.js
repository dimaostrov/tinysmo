import React from 'react';
import { Section, Container, Video, Button, Image, Card } from '@front10/landing-page-book/dist/components';

import Particles from 'react-particles-js';

import bamazon from '../images/bamazon.png';
import aframe from '../images/aframe.png';
import giffer from '../images/giffer.png';
import liri from '../images/liri.png';
import guessword from '../images/guessword.png';
import faceSquared from '../images/faceSquared.png';
import mongoScrape from '../images/mongoscrape.png';
import pictureGame from '../images/picture game.png';
import calaptio from '../images/calaptio.png'

const Portfolio = () =>
  <div
    style={{
      backgroundColor: "#212529",
      paddingTop: "3rem",
      height: '100%'
    }}
  >
    >
  <Main>
      <Article image={calaptio} title="Calaptio" description="A scheduling app for teams to work together" link="http://calaptio.herokuapp.com" />
      <Article image={pictureGame} title="React Picture Picking Game" description="A game where you have to pick a different character otherwise your score will reset" link="https://dimaostrov.github.io/react-image-game" />
      <Article image={faceSquared} title="FaceSquared" description="A face recognition software that allows you to hook up your home IP camera or NVR to analyze all motion sensitive streams" link="https://pure-sea-66381.herokuapp.com" />
      <Article image={aframe} title="Aframe Cryptocurrency example" description="Just messin round with a-frame" link='https://github.com/dimaostrov/aframe-example' />
      <Article image={bamazon} title='Bamazon' description="Cli app to interface with an inventory in MySql" link='https://github.com/dimaostrov/bamazon' />
      <Article image={liri} title='LIRI NODE APP' description="a beginners Siri like app that has functionality to look up various movie/music APIs." link='https://github.com/dimaostrov/liri-node-app' />
      <Article image={mongoScrape} title="Mongo News Scraper" description="A news scraper using Mongo DB and Cheerio" link="https://fierce-journey-21685.herokuapp.com/" />
      <Article image={guessword} title='Word Guesser' description='Hangman style cli implementation' link='https://github.com/dimaostrov/word_guesser' />
      <Article image={giffer} title="Giffer" description="Using giphy API to pull gifs" link="https://github.com/dimaostrov/giphy-api" />
    </Main>
  </div>

const Main = props => (
  <div className="cf pa3 pa4-m pa5-l mw9 center gradient-lily">
    <div className="fr w-100 w-80-l">
      <p className="f6">full-stack js developer</p>
      <h1 className="f2 f1-l lh-title mt0 mb4 mb5-ns">
        Specializing in front end development
      </h1>
    </div>
    <div className="f6 fl w-100 mb4">
      {props.children}
    </div>
  </div>
);

const Article = ({ image, title, description, link }) =>
<Card
image={image}
imageBorder
imageCircle={false}

summary={description}
title={title}
/>


export default Portfolio;