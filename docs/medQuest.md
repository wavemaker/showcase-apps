---
id: medQuest
title: MedQuest
sidebar_label: MedQuest
---

import YouTube from 'react-youtube';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import { render } from "react-dom";
import Carousel from "../src/pages/medQuestSlides";
import "react-responsive-carousel/lib/styles/carousel.min.css";


## Introduction

Medquest is a medical application where a patient can book an appointment with the doctor or he/she can re-order the prescribed medicines. Nurse (from hospital) can either accept/reject the booking and medicines refill requests. If Nurse accepts the medicine refill request, it will be forwarded to the Pharmacist where they can approve/reject the refills.

<YouTube videoId="Fhie1OW8SOY" />

---

## Features of WM and Prefabs used

<!-- 1. **Form wizard**
2. **Dialogue**
3. **Cards**
4. **Calendar**
5. **Tile**
6. **List**
7. **Search**
8. **Tabs**
9. **File Upload** -->

<div className="container  margin-top--lg">
  <div className="row">
    <div className="col text--center padding--none">
      <span className="fe-icon wizard"></span>
      <p>Wizard</p>
    </div>
    <div className="col text--center padding--none">
      <span className="fe-icon dialog"></span>
      <p>Dialogue</p>
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
    <div className="col text--center padding--none">
      <span className="fe-icon tile"></span>
      <p>Tile</p>
    </div>
    <div className="col text--center padding--none">
      <span className="fe-icon list"></span>
      <p>List</p>
    </div>
    <div className="col text--center padding--none">
      <span className="fe-icon search"></span>
      <p>Search</p>
    </div>
    <div className="col text--center padding--none">
      <span className="fe-icon tabs"></span>
      <p>Tabs</p>
    </div>
  </div>
  <div className="row">
    <div className="col text--center padding--none">
      <span className="fe-icon file-upload"></span>
      <p>File Upload</p>
    </div>
    <div className="col text--center padding--none">
    </div>
    <div className="col text--center padding--none">
    </div>
    <div className="col text--center padding--none">
    </div>
  </div>
</div>



---

## User Flow of App

The user flow starts with a patient registering with the app. By logging into the app, the patient will be able to 

1. **See his/her’s profile details**
2. **Book an appointment with the doctor**
3. **Raise a request to refill the prescribed medicines.**

##### Book Appointment flow : 
Patients will be provided with a list of medical departments from which he/she can search and choose according to the problem. After that, they have to give the details of symptoms and choose a date for the appointment. Depending upon date, available time slots will be shown and patients should select one from them. With this an appointment request is created and sent to the Nurse.

##### Refill request flow : 
Patient will be shown with the list of his/her’s prescribed medicines from which he/she can re-order the medicines. With this a refill request will be raised to the Nurse.

A patient can also see the history of appointments and refill requests.

Nurse will now be provided with the list of appointments and medicines requests for the current day. By clicking on the patient card, it will redirect to the page where the Nurse can cancel/approve an appointment or refill request. Separate tabs will be provided to view cancelled and approved requests.When a Nurse approves medicine refill requests, it will be sent to Pharmacist. 

Now Pharmacists can either approve or reject the request. Separate tabs are provided to view the approved and rejected requests.

For each of the above actions done, a push notification will be sent to the registered mobile number of the patient about the status of the requests.



---

## Personas

<!-- 1. Patient has a mobile app. He/She can book an appointment or raise a refill request. 
  - User: peter@gmail.com
  - Password: peter123
  - APK url: https://drive.google.com/file/d/1hZKbTjZdjEK4SnRgjpkVeolyWZHtqaSP/view

2. Nurse and Pharmacist has a web app. They can either approve/reject the requests.
  - Nurse can login by clicking on the ‘Login as Nurse’ button
  - Pharmacist can login by clicking on the ‘Login as Pharmacist’ button.
  - Deployed URL : http://pk6b8wcp6vj9.cloud.wavemakeronline.com/Medical/ -->

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
            <a href="http://pk6b8wcp6vj9.cloud.wavemakeronline.com/Medical/" target="_blank" className="button button--primary button--outline margin-bottom--sm">Launch App</a>
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
            <a href="http://pk6b8wcp6vj9.cloud.wavemakeronline.com/Medical/" target="_blank" className="button button--primary button--outline margin-bottom--sm">Launch App</a>
            <p>click on <b>Login as Pharmacist</b> button to login</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

---

## Screen Shots

<Carousel />

<!-- ![alt text](/img/medQuest/web_screen1.png 'MedQuest Web') -->

