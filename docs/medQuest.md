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


## Introduction

Medquest is a medical application where a patient can book an appointment with the doctor or he/she can re-order the prescribed medicines. Nurse (from hospital) can either accept/reject the booking and medicines refill requests. If Nurse accepts the medicine refill request, it will be forwarded to the Pharmacist where they can approve/reject the refills.


---

## Personas

<section>
  <div className="container">
    <div className="row">
      <div className="col card text--center margin--sm padding--none">
        <div className="">
          <h5 className="card__header margin-bottom--none padding-horiz--none">
            Patient
          </h5>
          <div className="card__body">
            <p>Patient has a mobile app. He/She can book an appointment or raise a refill request.</p>
            <img alt="Customer Login Credentials" src={useBaseUrl('img/medQuest/patient.png')} height="150px"/>
            <a href={useBaseUrl('img/medQuest/medQuest.apk')} download className="button button--primary button--outline margin-bottom--sm">Download APP</a>
            <p>User: <b>peter@gmail.com</b> <br/> Password: <b>peter123</b></p>
          </div>
        </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
        <div className="">
          <h5 className="card__header margin-bottom--none padding-horiz--none">
            Nurse
          </h5>
          <div className="card__body">
            <p>Nurse is a web app. To approve/reject the appoitments and refill requests of patients.</p>
            <img alt="Loan Processor Login Credentials" src={useBaseUrl('img/medQuest/nurse.png')} height="150px"/>
            <a href="http://3.12.123.37:8001/Medical/#/Main" target="_blank" className="button button--primary button--outline margin-bottom--sm">Launch App</a>
            <p>click on <b>Login as Nurse</b> button to login</p>
          </div>
        </div>
      </div>
      <div className="col card text--center margin--sm padding--none">
        <div className="">
          <h5 className="card__header margin-bottom--none padding-horiz--none">
            Pharmacist
          </h5>
          <div className="card__body">
          <p>Pharmacist is a web app. To approve/reject the requests of patients and nurse.</p>
          <img alt="Relationship Manager Login Credentials" src={useBaseUrl('img/medQuest/pharmacist.png')} height="150px"/>
            <a href="http://3.12.123.37:8001/Medical/#/Main" target="_blank" className="button button--primary button--outline margin-bottom--sm">Launch App</a>
            <p>click on <b>Login as Pharmacist</b> button to login</p>
          </div>
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


## Videos

<YouTube videoId="Fhie1OW8SOY" />



<!-- ## User Flow of App

![alt text](/img/medQuest/workflow.svg 'User Flow of MedQuest App') 


--- -->