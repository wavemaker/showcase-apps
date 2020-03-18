import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Heading from '@theme/Heading';

const AnchoredH2 = Heading('h2');

const loanCorp = [
  {
    title: <>Customer</>,
    description: (
      <>
        Customer has a web app. He applies for a loan and can view his loan status.
      </>
    ),
    imageUrl: 'img/loanCorp/customer.png',
    portalTitle: <>Launch Customer Portal</>,
    portalUrl: 'http://pkcm4t2v2gzf.cloud.wavemakeronline.com/Herdius/#/myAccount',
  },
  {
    title: <>Loan Processor</>,
    description: (
      <>
        Loan processor is a web app for processing the loans in the pipeline.
      </>
    ),
    imageUrl: 'img/loanCorp/loan_processor.png',
    portalTitle: <>Launch Loan Processor Portal</>,
    portalUrl: 'http://pk51rnzxw91h.cloud.wavemakeronline.com/LoanProcessor/#/Main',
  },
  {
    title: <>Relationship Manager</>,
    description: (
      <>
        RM is a mobile app that has features like tracking loans and customers.
      </>
    ),
    imageUrl: 'img/loanCorp/relationship_manager.png',
    portalTitle: <>Download Relationship Manager App</>,
    portalUrl: 'img/loanCorp/loanCorp_RM.apk',
  },
];

function LoanCorpApps({imageUrl, title, description, portalUrl, portalTitle}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h3 className="app-section-divider-title">{title}</h3>
      <p className="app-section-description">{description}</p>
      {imgUrl && (
        <div className="text--center">
          <img className="" src={imgUrl} alt={title} height="165px"/>
          {/* <p className="margin-bottom--none">
            <Link to={portalUrl} className="button button--link" target="_blank">{portalTitle} &rarr;</Link>
          </p> */}
        </div>
      )}
      
    </div>
  );
}


const salesVision = [
  {
    title: <>Sales Head</>,
    description: (
      <>
        As a sales head, you land into a visualized dashboard with the latest sales data metrics. You can see what's trending, top leads, track top-performers of the team, and their individual performance as well. 
      </>
    ),
    imageUrl: 'img/salesVision/sales_head.png',
    portalTitle: <>Launch User App</>,
    portalUrl: 'http://pk50dzkgmxm4.cloud.wavemakeronline.com/DemoSalesVision',
  },
  {
    title: <>Sales Representative</>,
    description: (
      <>
        As a sales representative, see your new goals, convert leads to a sale, get access to top-selling policies, view upcoming policy renewals, your monthly bonus, badges earned, and more.
      </>
    ),
    imageUrl: 'img/salesVision/sales_representative.png',
    portalTitle: <>Launch Manager App</>,
    portalUrl: 'http://pk50dzkgmxm4.cloud.wavemakeronline.com/DemoSalesVision',
  },
];

function SalesVisionApps({imageUrl, title, description, portalUrl, portalTitle}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      <h3 className="app-section-divider-title">{title}</h3>
      <p className="app-section-description">{description}</p>
      {imgUrl && (
        <div className="text--center">
          <img className="" src={imgUrl} alt={title} height="165px"/>
          {/* <p className="margin-bottom--none">
            <Link to={portalUrl} className="button button--link" target="_blank">{portalTitle} &rarr;</Link>
          </p> */}
        </div>
      )}
      
    </div>
  );
}


const medQuest = [
  {
    title: <>Patient</>,
    description: (
      <>
        Patient has a mobile app. He/She can book an appointment or raise a refill request.
      </>
    ),
    imageUrl: 'img/medQuest/patient.png',
    portalTitle: <>Download Patient App</>,
    portalUrl: 'img/medQuest/medQuest.apk',
  },
  {
    title: <>Nurse</>,
    description: (
      <>
        Nurse is a web app. To approve/reject the appoitments and refill requests of patients.
      </>
    ),
    imageUrl: 'img/medQuest/nurse.png',
    portalTitle: <>Launch Nurse Portal</>,
    portalUrl: 'http://3.12.123.37:8001/Medical/#/Main',
  },
  {
    title: <>Pharmacist</>,
    description: (
      <>
        Pharmacist is a web app. To approve/reject the requests of patients and nurse.
      </>
    ),
    imageUrl: 'img/medQuest/pharmacist.png',
    portalTitle: <>Launch Pharmacist Portal</>,
    portalUrl: 'http://3.12.123.37:8001/Medical/#/Main',
  },
];

function MedQuestApps({imageUrl, title, description, portalUrl, portalTitle}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h3 className="app-section-divider-title">{title}</h3>
      <p className="app-section-description">{description}</p>
      {imgUrl && (
        <div className="text--center">
          <img className="" src={imgUrl} alt={title} height="165px"/>
          {/* <p className="margin-bottom--none">
            <Link to={portalUrl} className="button button--link" target="_blank">{portalTitle} &rarr;</Link>
          </p> */}
        </div>
      )}
      
    </div>
  );
}

function LoanCorp(){
  return(
    <Link to="docs/loanCorp" className="container app-section">
      <div className="app-section-header">
        <div className="app-section-title">
          <img className="app-section-logo margin-right--sm" src="img/loanCorp/logo.png" alt="LoanCorp" /> Loan Corp
        </div>
        <p className="app-section-description">Loan Corp is a loan origination and loan processing application where the loan processing part is done through an automated BPM process in a Camunda workflow engine.</p> 
      </div>
      {loanCorp && loanCorp.length && (
        <section className="app-section-body">
          <div className="app-section-divider">
            <div className="row">
              {loanCorp.map((props, idx) => (
                <LoanCorpApps key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
  </Link>
  );
}

function SalesVision(){
  return(
    <Link to="docs/salesVision" className="container app-section">
      <div className="app-section-header">
        <div className="app-section-title">
          <img className="app-section-logo margin-right--sm" src="img/salesVision/logo.png" alt="Sales Vision" /> Sales Vision
        </div>
        <p className="app-section-description">Sales Vision app provides a visual representation of sales data with advanced filters, actions, and more. The app comprises of two profiles, including sales representative and sales head. Get visibility of the sales pipeline and convert them to a sale. Additionally, track your teams' performance, measure achieved goals, targets, and more.</p> 
      </div>
      {salesVision && salesVision.length && (
        <section className="app-section-body">
          <div className="app-section-divider">
            <div className="row">
              {salesVision.map((props, idx) => (
                <SalesVisionApps key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Link>
  );
}

function MedQuest(){
  return(
    <Link to="docs/medQuest" className="container app-section">
      <div className="app-section-header">
        <div className="app-section-title">
          <img className="app-section-logo margin-right--sm" src="img/medQuest/logo.png" alt="MedQuest" /> MedQuest
        </div>
        <p className="app-section-description">Medquest is a medical application where a patient can book an appointment with the doctor or he/she can re-order the prescribed medicines. Nurse (from hospital) can either accept/reject the booking and medicines refill requests. If Nurse accepts the medicine refill request, it will be forwarded to the Pharmacist where they can approve/reject the refills.</p>   
      </div>
      {medQuest && medQuest.length && (
        <section className="app-section-body">
          <div className="app-section-divider">
            <div className="row">
              {medQuest.map((props, idx) => (
                <MedQuestApps key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Link>
  );
}


function ShowcaseApps() {
  return (
    <section className="showcaseApps">
      <div className="container tabs-btn-center">
        {/* <AnchoredH2 id="showcaseApps">One Tool For Your Entire Pipeline</AnchoredH2>
        <div className="sub-title">Get data from A to B without patching tools together</div> */}
        <Tabs
          centered={true}
          className="rounded"
          defaultValue="all"
          values={[
            { label: <><i className="feather icon-shuffle"></i> All</>, value: 'all', },
            { label: <><i className="feather icon-box"></i> Finance</>, value: 'finance', },
            { label: <><i className="feather icon-shield"></i> Insurance</>, value: 'insurance', },
            { label: <><i className="feather icon-shield"></i> Healthcare</>, value: 'healthcare', },
          ]}>
          <TabItem value="all">
            <div className="">
              {/* <SVG src="/img/showcaseApps-distributed.svg" className={styles.topologyDiagram} /> */}
              <LoanCorp/>
              <MedQuest/>
              <SalesVision/>
            </div>
          </TabItem>
          <TabItem value="finance">
            <div className="">
            <LoanCorp/>              
            </div>
          </TabItem>
          <TabItem value="insurance">
            <SalesVision/>            
          </TabItem>
          <TabItem value="healthcare">
            <MedQuest/>
          </TabItem>
        </Tabs>
      </div>
    </section>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Wavemaker ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero-apps')}>
      {/* , styles.heroBanner */}
        <div className="container">
          <div className="row">
            <div className="col col--8">
              <h1 className="hero__title">WaveMaker {siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline} created by WaveMaker our rapid 
low-code platform.</p>
            </div>
            <div className={classnames('col text--center')}>
            {/* , styles.heroBanner */}
              <a href=""><img src="img/play-button.png" /></a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={classnames('padding-bottom--md', styles.features)}>
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h1 className="title-primary">Explore WaveMaker <br/> {siteConfig.title}</h1>
              </div>
            </div>
          </div>
        </section>

        <ShowcaseApps />

      </main>
    </Layout>
  );
}

export default Home;
