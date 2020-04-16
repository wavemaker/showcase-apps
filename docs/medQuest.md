---
id: medQuest
title: MedQuest
sidebar_label: MedQuest
---

import YouTube from 'react-youtube';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import { render } from "react-dom";
import Carousel from "../docs/medQuest/slides";
import Features from "../docs/medQuest/features";
import "react-responsive-carousel/lib/styles/carousel.min.css";


<!-- ## Introduction -->

MedQuest is a healthcare app that manages the workflow of patients and doctors' consultation routines and regulates drug delivery. The app comprises of three profiles, including patient, doctor, and pharmacist. It allows you to track each stage in the individual app. 


---

## Personas

<section>
  <div className="container">
    <div className="row">
      <div className="col card text--center margin--sm padding--none">
        <div className="card__body">
          <img alt="Customer Login Credentials" src={useBaseUrl('/showcase/img/medQuest/patient.png')} height="150px"/>
          <h5 className="margin-bottom--xs">Patient</h5>
          <p className="card-body-descp">
            <ul className="text--left">
              <li>View appointment and refill hisotry</li>
              <li>Book an appointment</li>
              <li>Request refills</li>
              <br/>
            </ul>
          </p>
          <a href={useBaseUrl('/showcase/img/medQuest/medQuest.apk')} download className="button button--primary button--outline margin-bottom--md">Download APP</a>
          <div className="row">
            <div className="col padding-horiz--xs">
              User : <span className="text--semibold">peter@gmail.com</span>
            </div>
          </div>
          <div className="row">
            <div className="col padding-horiz--xs">
              Password : <span className="text--semibold">peter123</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
        <div className="card__body"> 
          <img alt="Loan Processor Login Credentials" src={useBaseUrl('/showcase/img/medQuest/nurse.png')} height="150px"/>
          <h5 className="margin-bottom--xs">Nurse</h5>
          <p className="card-body-descp">
            <ul className="text--left">
              <li>Accept or reject the appointment </li>
              <li>Prescribe drugs</li>
              <li>Approve or reject refill request</li>
            </ul>
          </p>
          <a href="http://pk6b8wcp6vj9.cloud.wavemakeronline.com/Medical/#/PatientDashboard" target="_blank" className="button button--primary button--outline margin-bottom--md">Launch App</a>
          <p>Click on above button to <b>Login as Nurse</b></p>
        </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
        <div className="card__body">
          <img alt="Relationship Manager Login Credentials" src={useBaseUrl('/showcase/img/medQuest/pharmacist.png')} height="150px"/>
          <h5 className="margin-bottom--xs">Pharmacist</h5>
          <p className="card-body-descp">
            <ul className="text--left">
              <li>Accept or reject the refill requests</li>
              <li className="margin-bottom--xs">View refill requests and hisotry</li>
              <br/>
            </ul>
          </p>
            <a href="http://pk6b8wcp6vj9.cloud.wavemakeronline.com/Medical/#/pharma_refill_requests" target="_blank" className="button button--primary button--outline margin-bottom--md">Launch App</a>
          <p>Click on above button to <b>Login as Pharmacist</b></p>
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



<!-- ## User Flow of App

![alt text](/showcase/img/medQuest/workflow.svg 'User Flow of MedQuest App')


--- -->