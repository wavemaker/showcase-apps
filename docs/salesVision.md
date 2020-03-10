---
id: salesVision
title: Sales Vision
sidebar_label: Sales Vision
---

import YouTube from 'react-youtube';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.

<YouTube videoId="Fhie1OW8SOY" />

## Introduction

Sales vision shows the information and performance of sales representatives and sales heads
over the period of time. Representatives update the quotes to convert into sales.


---

## Features of WM and Prefabs used

<!-- 1. **List**
2. **Form Wizard**
3. **Data Table**
4. **Cards**
5. **Calendar**
6. **Filter** -->

<div className="container">
  <div className="row">
    <div className="col text--center padding--none">
      <img src={useBaseUrl('img/form_wizard.png')} alt="Form Wizard" width="175px" />
      <p>Form Wizard</p>
    </div>
    <div className="col text--center padding--none">
      <img src={useBaseUrl('img/data_table.png')} alt="Data Table" width="175px" />
      <p>Data Table</p>
    </div>
    <div className="col text--center padding--none">
      <img src={useBaseUrl('img/cards.png')} alt="Cards" width="175px" />
      <p>Cards</p>
    </div>
    <div className="col text--center padding--none">
      <img src={useBaseUrl('img/calendar.png')} alt="Calendar" width="175px" />
      <p>Calendar</p>
    </div>
  </div>
  <div className="row">
    <div className="col col--1"></div>
    <div className="col text--center padding--none">
      <img src={useBaseUrl('img/box_viewer.png')} alt="Box-viewer Prefab" width="175px" />
      <p>Box-viewer Prefab</p>
    </div>
    <div className="col text--center padding--none">
      <img src={useBaseUrl('img/docusign.png')} alt="Docusign Prefab" width="175px" />
      <p>Docusign Prefab</p>
    </div>
    <div className="col text--center padding--none">
      <img src={useBaseUrl('img/camunda_wf.png')} alt="Camunda workflow Integration" width="175px" />
      <p>Camunda workflow Integration</p>
    </div>
    <div className="col col--1"></div>
  </div>
</div>



---

## User Flow of App

**Sales Head** flow starts with a dashboard which includes the metrics of sales, goals, top leads,
top selling policies and top performers of the team.
- Navigation menu on the left provides navigation to the dashboard, sales pipeline, customers and team details.
- Sales pipeline section displays the list of customers and status of sales prospects.
- In the Customer section, details of upcoming renewals can be viewed by filtering the purchase value and product types.
- In My team section, representatives can be searched with name and on selection of representatives their
profile details, goals achieved and location are displayed.

**Sales Representative** flow starts with a dashboard which includes the metrics of his sales, goals,
upcoming policy renewals, top selling policies and top leads.
- Navigation menu on the left provides navigation to the dashboard, sales pipeline and customers.
- Sales pipeline section displays the list of customers along with status of quotes and details of tasks yet to be done.
- The quotes in the pipeline can be converted to sales. In the Customer section, details of upcoming renewals can be viewed by filtering the purchase value and product types.
- The profile details of the logged in user can be viewed by clicking on the user name at top right on header.
- Profile contains the basic information, goals achieved, monthly bonus, quarterly commission and badges earned.



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
          <h5 className="card__header margin-bottom--none padding-horiz--none">
            Sales Head
          </h5>
          <div className="card__body">
            <p>Sales head has a web app to view the performance of sales representatives under him.</p>
            <img alt="Customer Login Credentials" src={useBaseUrl('img/salesVision/sales_head.png')} height="150px"/>
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
            <p>Username: <b>amanda.brown</b> <br/> Password: <b>wavemaker</b></p>
          </div>
      </div>
    </div>
  </div>
</section>

---

## Screen Shots

![alt text](/img/loanCorp/LoanCorp1.png 'Loan Corp')

