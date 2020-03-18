---
id: salesVision
title: Sales Vision
sidebar_label: Sales Vision
---

import YouTube from 'react-youtube';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import { render } from "react-dom";
import Carousel from "../docs/salesVision/slides";
import Features from "../docs/salesVision/features";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from 'react-player'


## Introduction

<!-- Sales vision shows the information and performance of sales representatives and sales heads
over the period of time. Representatives update the quotes to convert into sales. -->
Sales Vision app provides a visual representation of sales data with advanced filters, actions, and more. The app comprises of two profiles, including sales representative and sales head. Get visibility of the sales pipeline and convert them to a sale. Additionally, track your teams' performance, measure achieved goals, targets, and more.


---

## Personas

<section>
  <div className="container">
    <div className="row">
      <div className="col card text--center margin--sm padding--none">
          <h5 className="card__header margin-bottom--none padding-horiz--none">
            Sales Head
          </h5>
          <div className="card__body">
            <p>As a sales head, you land into a visualized dashboard with the latest sales data metrics. You can see what's trending, top leads, track top-performers of the team, and their individual performance as well.</p>
            <img alt="Customer Login Credentials" src={useBaseUrl('img/salesVision/sales_head.png')} height="150px"/>
            <br/>
            <a href="http://pk50dzkgmxm4.cloud.wavemakeronline.com/DemoSalesVision" target="_blank" className="button button--primary button--outline margin-bottom--sm">Launch App</a>
            <p>Username: <b>sally.jones</b> <br/> Password: <b>wavemaker</b></p>
          </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
          <h5 className="card__header margin-bottom--none padding-horiz--none">
            Sales Representative
          </h5>
          <div className="card__body">
            <p>As a sales representative, see your new goals, convert leads to a sale, get access to top-selling policies, view upcoming policy renewals, your monthly bonus, badges earned, and more. </p>
            <img alt="Loan Processor Login Credentials" src={useBaseUrl('img/salesVision/sales_representative.png')} height="150px"/>
            <br/>
            <a href="http://pk50dzkgmxm4.cloud.wavemakeronline.com/DemoSalesVision" target="_blank" className="button button--primary button--outline margin-bottom--sm">Launch App</a>
            <p>Username: <b>amanda.brown</b> <br/> Password: <b>wavemaker</b></p>
          </div>
      </div>
    </div>
  </div>
</section>

---


## Features of WM and Prefabs used

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

![alt text](/img/salesVision/workflow.svg 'User Flow of Sales Vision App')  -->
