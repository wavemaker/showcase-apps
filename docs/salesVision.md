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

Sales vision shows the information and performance of sales representatives and sales heads
over the period of time. Representatives update the quotes to convert into sales.


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
            <p>Sales head has a web app to view the performance of sales representatives under him.</p>
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
            <p>Sales representative has a web app to monitor his sales, upcoming renewals and pipeline customers.</p>
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
