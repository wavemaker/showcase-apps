---
id: autoSurveyor
title: Auto Surveyor
sidebar_label: Auto Surveyor
---

import YouTube from 'react-youtube';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import { render } from "react-dom";
import Carousel from "../docs/autoSurveyor/slides";
import Features from "../docs/autoSurveyor/features";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from 'react-player'


<!-- ## Introduction -->

<!-- Auto Surveyor shows the information and performance of sales representatives and sales heads
over the period of time. Representatives update the quotes to convert into sales. -->
Auto Surveyor app provides a visual representation of sales data with advanced filters, actions, and more. The app comprises of two profiles, including sales representative and sales head. Get visibility of the sales pipeline and convert them to a sale. Additionally, track your teams' performance, measure achieved goals, targets, and more.


---

## Personas

<section>
  <div className="container">
    <div className="row">
      <div className="col card text--center margin--sm">
          <div className="card__body">
            <img alt="Customer Login Credentials" src={useBaseUrl('/img/autoSurveyor/sales_head.png')} height="150px"/>
            <h5 className="margin-bottom--xs">Sales Head</h5>
            <p className="card-body-descp">As a sales head, you land into a visualized<br/> dashboard with the latest sales data metrics.<br/>  You can see what's trending, top leads, track<br/> top-performers of the team, and their<br/>  individual performance as well.</p>
            <a href="https://apps.wavemakeronline.com/DemoautoSurveyor/#/Dashboard?role=salesHead" target="_blank" className="button button--primary button--outline margin-bottom--md">Launch App</a>
          </div>
      </div>
      <div className="col card text--center margin--sm">
          <div className="card__body">
            <img alt="Loan Processor Login Credentials" src={useBaseUrl('/img/autoSurveyor/sales_representative.png')} height="150px"/>
            <h5 className="margin-bottom--xs">Sales Representative</h5>
            <p className="card-body-descp">As a sales representative, see your new goals,<br/> convert leads to a sale, get access to top<br/> -selling policies, view upcoming policy<br/>  renewals, your monthly bonus, <br/> badges earned, and more. </p>
            <a href="https://apps.wavemakeronline.com/DemoautoSurveyor/#/Dashboard?role=salesRep" target="_blank" className="button button--primary button--outline margin-bottom--md">Launch App</a>
          </div>
      </div>
    </div>
  </div>
</section>

---


## Features of WM and Prefabs used

Here are some of the value added features and prefabs from the WM applications

<Features />


---


## Screen Shots

<Carousel />

---
<!-- 
## Videos

<YouTube videoId="Fhie1OW8SOY" /> -->

<!-- ---

## User Flow of App

![alt text](/img/autoSurveyor/workflow.svg 'User Flow of Auto Surveyor App')  -->
