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

// const insurance = [
//   {
//     title: <>Arch Insurance</>,
//     appUrl: <>arch-insurance</>,
//     tagline: <>Customer</>,
//     description: (
//       <>
//         Little Fast is an application for employees and canteen staff to reduce queues and get a 
//         better experience in corporate canteens.,
//       </>
//     ),
//     imageUrl: 'img/arch_insurance.png',
//     launchLabel: <>Launch in Studio</>,
//     launchUrl: '#',
//     tryApp: <>Try App</>,
//     tryAppUrl: '#',
//     badgeLabels: ['OAuth Prefabs','Data Table', 'Grid Layout','Live Filter'],
//   },
//   {
//     title: <>Halo Insurance</>,
//     appUrl: <>halo-insurance</>,
//     tagline: <>Loan Processor</>,
//     description: (
//       <>
//         Little Fast is an application for employees and canteen staff to reduce queues and get a 
//         better experience in corporate canteens.,
//       </>
//     ),
//     imageUrl: 'img/halo_insurance.png',
//     launchLabel: <>Launch in Studio</>,
//     launchUrl: '#',
//     tryApp: <>Try App</>,
//     tryAppUrl: '#',
//     badgeLabels: ['OAuth Prefabs','Data Table', 'Grid Layout','Live Filter'],
//   },
// ];


// function Badges(badgeLabels){
//   <span className="badge badge--secondary"></span>
// }

// function Insurance({imageUrl, title, appUrl, tagline, description, launchLabel, launchUrl, tryApp, tryAppUrl, badgeLabels}) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={classnames('col col--6', styles.insurance)}>
//       <div className="app-section">
//         <div className="app-section-header">
//           <img className="app-section-logo" src={imageUrl} alt={title} />
//           <div className="container">
//             <Link to={appUrl} className="app-section-title">{title}</Link>
//             <h4 className="app-section-tagline">{tagline}</h4>
//           </div>   
//         </div>
//         <div className="app-section-body">
//           <p className="app-section-description">{description}</p>
//             <span className="badge badge--secondary margin-right--sm">fxhcg</span>
//           <Link to={launchUrl} className="button button--link">{launchLabel}</Link>
//           <Link to={tryAppUrl} className="button button--link">{tryApp}</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

const loanCorp = [
  {
    title: <>Customer</>,
    description: (
      <>
        Herdius is a protocol to access the whole decentralized web. Interact 
        directly with any smart contract,
      </>
    ),
    imageUrl: 'img/loanCorp/customer.png',
    portalUrl: '#',
  },
  {
    title: <>Loan Processor</>,
    description: (
      <>
        Herdius is a protocol to access the whole decentralized web. Interact 
        directly with any smart contract,
      </>
    ),
    imageUrl: 'img/loanCorp/loan_processor.png',
    portalUrl: '#',
  },
  {
    title: <>Relationship Manager</>,
    description: (
      <>
        Herdius is a protocol to access the whole decentralized web. Interact 
        directly with any smart contract,
      </>
    ),
    imageUrl: 'img/loanCorp/relationship_manager.png',
    portalUrl: '#',
  },
];

function LoanCorpApps({imageUrl, title, description, portalUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h3 className="app-section-divider-title">{title}</h3>
      <p className="app-section-description">{description}</p>
      {imgUrl && (
        <div className="text--center">
          <img className="" src={imgUrl} alt={title} height="145px"/>
          <p className="margin-bottom--none">
            <Link to={portalUrl} className="button button--link">Launch {title} Portal</Link>
          </p>
        </div>
      )}
      
    </div>
  );
}


const salesVision = [
  {
    title: <>User</>,
    description: (
      <>
        Herdius is a protocol to access the whole decentralized web. Interact 
        directly with any smart contract,
      </>
    ),
    imageUrl: 'img/loanCorp/customer.png',
    portalUrl: '#',
  },
  {
    title: <>Manager</>,
    description: (
      <>
        Herdius is a protocol to access the whole decentralized web. Interact 
        directly with any smart contract,
      </>
    ),
    imageUrl: 'img/loanCorp/loan_processor.png',
    portalUrl: '#',
  },
];

function SalesVisionApps({imageUrl, title, description, portalUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      <h3 className="app-section-divider-title">{title}</h3>
      <p className="app-section-description">{description}</p>
      {imgUrl && (
        <div className="text--center">
          <img className="" src={imgUrl} alt={title} height="145px"/>
          <p className="margin-bottom--none">
            <Link to={portalUrl} className="button button--link">Launch {title} Portal</Link>
          </p>
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
        Herdius is a protocol to access the whole decentralized web. Interact 
        directly with any smart contract,
      </>
    ),
    imageUrl: 'img/medQuest/customer.png',
    portalUrl: '#',
  },
  {
    title: <>Nurse</>,
    description: (
      <>
        Herdius is a protocol to access the whole decentralized web. Interact 
        directly with any smart contract,
      </>
    ),
    imageUrl: 'img/medQuest/nurse.png',
    portalUrl: '#',
  },
  {
    title: <>Pharmacist</>,
    description: (
      <>
        Herdius is a protocol to access the whole decentralized web. Interact 
        directly with any smart contract,
      </>
    ),
    imageUrl: 'img/medQuest/pharmacist.png',
    portalUrl: '#',
  },
];

function MedQuestApps({imageUrl, title, description, portalUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h3 className="app-section-divider-title">{title}</h3>
      <p className="app-section-description">{description}</p>
      {imgUrl && (
        <div className="text--center">
          <img className="" src={imgUrl} alt={title} height="145px"/>
          <p className="margin-bottom--none">
            <Link to={portalUrl} className="button button--link">Launch {title} Portal</Link>
          </p>
        </div>
      )}
      
    </div>
  );
}

function LoanCorp(){
  return(
    <div className="container app-section">
    <div className="app-section-header">
      <img className="app-section-logo" src="img/loanCorp/logo.png" alt="LoanCorp" />
      <div className="container">
        <Link to="loanCorp" className="app-section-title">Loan Corp</Link>
      </div>   
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
  </div>
  );
}

function SalesVision(){
  return(
    <div className="container app-section">
      <div className="app-section-header">
        <img className="app-section-logo" src="img/salesVision/logo.png" alt="LoanCorp" />
        <div className="container">
          <Link to="salesVision" className="app-section-title">Sales Vision</Link>
        </div>   
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
    </div>
  );
}

function MedQuest(){
  return(
    <div className="container app-section">
      <div className="app-section-header">
        <img className="app-section-logo" src="img/medQuest/logo.png" alt="MedQuest" />
        <div className="container">
          <Link to="medQuest" className="app-section-title">MedQuest</Link>
        </div>   
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
    </div>
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
            <div className="col col--9">
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
        <section className={styles.features}>
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
