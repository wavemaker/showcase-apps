---
id: loanCorp
title: Loan Corp
sidebar_label: Loan Corp
---

import YouTube from 'react-youtube';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import { render } from "react-dom";
import Carousel from "../src/pages/loanCorpSlides";
import "react-responsive-carousel/lib/styles/carousel.min.css";

<YouTube videoId="Fhie1OW8SOY" />

## Introduction

Loan Corp is a loan origination and loan processing  application where the loan processing part is done through an automated BPM process in a Camunda workflow engine.


---

## Features of WM and Prefabs used

<!-- 1. **Form wizard**
2. **Data table**
3. **Cards**
4. **Calendar**
5. **Box-viewer prefab**
6. **Docusign prefab**
7. **Camunda workflow integration** -->
<div className="container margin-top--lg">
  <div className="row">
    <div className="col text--center padding--none">
      <span className="fe-icon wizard"></span>
      <p>Wizard</p>
    </div>
    <div className="col text--center padding--none">
      <span className="fe-icon data-table"></span>
      <p>Data Table</p>
    </div>
    <div className="col text--center padding--none">
      <span className="fe-icon card"></span>
      <p>Card</p>
    </div>
    <div className="col text--center padding--none">
      <span className="fe-icon calendar"></span>
      <p>Calendar</p>
    </div>
  </div>
  <div className="row">
    <div className="col col--1"></div>
    <div className="col text--center padding--none">
      <span className="fe-icon box-viewer"></span>
      <p>Box-viewer Prefab</p>
    </div>
    <div className="col text--center padding--none">
      <span className="fe-icon docusign"></span>
      <p>Docusign Prefab</p>
    </div>
    <div className="col text--center padding--none">
      <span className="fe-icon camunda"></span>
      <p>Camunda workflow Integration</p>
    </div>
    <div className="col col--1"></div>
  </div>
</div>


---

## User Flow of App

- The user flow starts with a customer looking at the details of a suggested product of this particular finance provider. He likes the product, in this case a mortgage and opts to apply for it.
- He is provided with a multi stage form where he gets a preview of his profile information in the first section.
- In the second section he provides the Property details with address.
- In the third section he provides the mortgage details and then uploads the required document.
In this case a sample W2 form.  
- The loan application gets generated on submission and moves to the Loan processor app. 
- On login into his app the loan processing officer can see this “New Loan” application. He goes to the details and processes the W2 section of the application.
- On submission of details the Camunda workflow engine process gets invoked.
- If the loan amount is less than 30 times the wages it gets auto approved by the BPM engine automatically. 
- If the loan amount is more than 60 times the wage than the loan gets rejected automatically by the BPM engine. And if the wage is somewhere in between these two conditions then loan status gets changed to “Site Visit”. A notification goes to the mobile app of the Relationship Manager requesting him for a site visit for that particular loan. 
- The RM pays the property a visit and sends his feedback to the loan processor via his mobile app.
- This triggers the change of the loan status to “Final review” from “Site visit”.
- The Loan processor views this feedback in his app and manually decides to either approve or reject the loan.
- This invokes another camunda process to update the loan status to Approve or Reject.


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
            <a href="http://pkcm4t2v2gzf.cloud.wavemakeronline.com/Herdius/#/myAccount" className="button button--primary button--outline margin-bottom--sm">Launch Customer App</a>
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
            <a href="http://pk51rnzxw91h.cloud.wavemakeronline.com/LoanProcessor/#/Main" className="button button--primary button--outline margin-bottom--sm">Launch Loan Processor</a>
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
            <a href="https://docs.google.com/document/d/19YxI_PJwFSJDIqHJLvDfP53cFihg18nDoU524x" download className="button button--primary button--outline margin-bottom--sm">Download APK</a>
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


