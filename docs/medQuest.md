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
          <img alt="Customer Login Credentials" src={useBaseUrl('img/medQuest/patient.png')} height="150px"/>
          <h5 className="margin-bottom--xs">Patient</h5>
          <p className="card-body-descp">Patient has a mobile app.<br/> He/She can book an <br/> appointment or raise <br/>a refill request.</p>
          <a href={useBaseUrl('img/medQuest/medQuest.apk')} download className="button button--primary button--outline margin-bottom--md">Download APP</a>
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
          <img alt="Loan Processor Login Credentials" src={useBaseUrl('img/medQuest/nurse.png')} height="150px"/>
          <h5 className="margin-bottom--xs">Nurse</h5>
          <p className="card-body-descp">Nurse is a web app. To reject<br/>/approve the appoitments <br/>andrefill requests <br/>of patients.</p>
          <a href="http://3.12.123.37:8001/Medical/#/Main" target="_blank" className="button button--primary button--outline margin-bottom--md">Launch App</a>
          <p>click on <b>Login as Nurse</b> button to login</p>
        </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
        <div className="card__body">
          <img alt="Relationship Manager Login Credentials" src={useBaseUrl('img/medQuest/pharmacist.png')} height="150px"/>
          <h5 className="margin-bottom--xs">Pharmacist</h5>
          <p className="card-body-descp">Pharmacist is a web app. <br/>To approve/reject the<br/> requests of patients<br/> and nurse.</p>
            <a href="http://3.12.123.37:8001/Medical/#/Main" target="_blank" className="button button--primary button--outline margin-bottom--md">Launch App</a>
            <p>click on <b>Login as Pharmacist</b> button to login</p>
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

![alt text](/img/medQuest/workflow.svg 'User Flow of MedQuest App') 


--- -->