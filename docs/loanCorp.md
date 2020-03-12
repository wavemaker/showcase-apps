---
id: loanCorp
title: Loan Corp
sidebar_label: Loan Corp
---

import YouTube from 'react-youtube';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import { render } from "react-dom";
import Carousel from "../docs/loanCorp/slides";
import Features from "../docs/loanCorp/features";
import "react-responsive-carousel/lib/styles/carousel.min.css";


## Introduction

Loan Corp is a loan origination and loan processing  application where the loan processing part is done through an automated BPM process in a Camunda workflow engine.

<YouTube videoId="Fhie1OW8SOY" />

---

## Features of WM and Prefabs used

<Features />

---

## User Flow of App

![alt text](/img/loanCorp/workflow.svg 'User Flow of Loan Corp App') 

---

## Personas

<!-- 1. Relationship Manager, it is a mobile application that has features like tracking loans and customers.

  - It also has a part where he can provide feedback about mortgage properties if requested for a site visit by the back office processor.
  - User: tom
  - Password: 123456
  - APK url: https://docs.google.com/document/d/19YxI_PJwFSJDIqHJLvDfP53cFihg18nDoU524x


2. Customer has a web app. He applies for a loan and can view his loan status.
  - User: david
  - Password: 123456

3. Loan processor is a web app for processing the loans in the pipeline.
  - User: kevin
  - Password: 123456 -->

<section>
  <div className="container">
    <div className="row">
      <div className="col card text--center margin--sm padding--none">
        <div className="">
          <h5 className="card__header margin-bottom--none padding-horiz--none">
            Customer
          </h5>
          <div className="card__body">
            <p>Customer has a web app. He applies for a loan and can view his loan status.</p>
            <img alt="Customer Login Credentials" src={useBaseUrl('img/loanCorp/customer.png')} height="120px"/>
            <a href="http://pkcm4t2v2gzf.cloud.wavemakeronline.com/Herdius/#/myAccount" target="_blank" className="button button--primary button--outline margin-bottom--sm">Launch App</a>
            <p>User : <b>david</b> <br/> Password : <b>123456</b></p>
          </div>
        </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
        <div className="">
          <h5 className="card__header margin-bottom--none padding-horiz--none">
            Loan Processor
          </h5>
          <div className="card__body">
            <p>Loan processor is a web app for processing the loans in the pipeline.</p>
            <img alt="Loan Processor Login Credentials" src={useBaseUrl('img/loanCorp/loan_processor.png')} height="120px"/>
            <a href="http://pk51rnzxw91h.cloud.wavemakeronline.com/LoanProcessor/#/Main" target="_blank" className="button button--primary button--outline margin-bottom--sm">Launch App</a>
            <p>User: <b>kevin</b> <br/> Password: <b>123456</b></p>
          </div>
        </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
        <div className="">
          <h5 className="card__header margin-bottom--none padding-horiz--none">
            Relastionship Manager
          </h5>
          <div className="card__body">
          <p>RM is a mobile app that has features like tracking loans and customers.</p>
          <img alt="Relationship Manager Login Credentials" src={useBaseUrl('img/loanCorp/relationship_manager.png')} height="120px"/>
            <a href={useBaseUrl('img/loanCorp/loanCorp_RM.apk')} target="_blank" download className="button button--primary button--outline margin-bottom--sm">Download App</a>
            <p>User: <b>tom</b> <br/> Password: <b>123456</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


---

## Screen Shots

<Carousel />

<!-- ![alt text](/img/loanCorp/LoanCorp1.png 'Loan Corp') -->


