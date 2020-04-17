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
import Personas from "../docs/loanCorp/personas";
import "react-responsive-carousel/lib/styles/carousel.min.css";


<!-- ## Introduction -->

Loan Corp is a loan processing system that automates the workflow using the Camunda BPM. It comprises of three profiles, including the applicant, loan processor, and relationship manager. When an applicant submits a loan request, the processor approves or rejects the application. In some cases, depending on the applicant's report, the relationship manager can re-evaluate the application. You can track each stage in the individual app. 


---



## Personas

<!-- <Personas /> -->

<section>
  <div className="container">
    <div className="row">
      <div className="col card text--center margin--sm padding--none">
        <div className="card__body">
          <img alt="Customer Login Credentials" src={useBaseUrl('/img/loanCorp/customer.png')} height="120px"/>
          <h5 className="margin-bottom--xs">Customer</h5>
            <ul className="text--left card-body-descp">
              <li>Apply for loan</li>
              <li>Upload document</li>
              <li>E-sign document through docusign</li>
              <li>View the loan status</li>
            </ul>
          <a href="https://apps.wavemakeronline.com/Herdius/#/myAccount" target="_blank" className="button button--primary button--outline margin-bottom--md">Launch App</a>
        </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
        <div className="card__body">            
          <img alt="Loan Processor Login Credentials" src={useBaseUrl('/img/loanCorp/loan_processor.png')} height="120px"/>
          <h5 className="margin-bottom--xs">Loan Processor</h5>
            <ul className="text--left card-body-descp">
              <li>View loan applications</li>  
              <li>Add W2 section</li>
              <li>Automates loan approval or rejection</li>
              <li>Send for site visit request</li>
            </ul>
          <a href="https://apps.wavemakeronline.com/LoanProcessor/#/Main" target="_blank" className="button button--primary button--outline margin-bottom--md">Launch App</a>
        </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
        <div className="card__body">
          <img alt="Relationship Manager Login Credentials" src={useBaseUrl('/img/loanCorp/relationship_manager.png')} height="120px"/>
          <h5 className="margin-bottom--xs">Relastionship Manager</h5>
            <ul className="text--left margin-bottom--md card-body-descp">
              <li>Review moderate-rated application</li>  
              <li>View customers' profile</li>
              <li>Submit site visit request report</li>
            </ul>
          <a href={useBaseUrl('/loanCorp/RM.apk')} target="_blank" download className="button button--primary button--outline margin-bottom--md margin-top--xs">Download App</a>
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


<!-- 
## User Flow of App

![alt text](/img/loanCorp/workflow.svg 'User Flow of Loan Corp App')

--- -->

<!-- 
## Videos

<YouTube videoId="Fhie1OW8SOY" /> -->


