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

 

const insurance = [
  {
    title: <>Arch Insurance</>,
    appUrl: <>arch-insurance</>,
    tagline: <>Customer</>,
    description: (
      <>
        Little Fast is an application for employees and canteen staff to reduce queues and get a 
        better experience in corporate canteens.,
      </>
    ),
    imageUrl: 'img/arch_insurance.png',
    launchLabel: <>Launch in Studio</>,
    launchUrl: '#',
    tryApp: <>Try App</>,
    tryAppUrl: '#',
    badgeLabels: ['OAuth Prefabs','Data Table', 'Grid Layout','Live Filter'],
  },
  {
    title: <>Halo Insurance</>,
    appUrl: <>halo-insurance</>,
    tagline: <>Loan Processor</>,
    description: (
      <>
        Little Fast is an application for employees and canteen staff to reduce queues and get a 
        better experience in corporate canteens.,
      </>
    ),
    imageUrl: 'img/halo_insurance.png',
    launchLabel: <>Launch in Studio</>,
    launchUrl: '#',
    tryApp: <>Try App</>,
    tryAppUrl: '#',
    badgeLabels: ['OAuth Prefabs','Data Table', 'Grid Layout','Live Filter'],
  },
];


function Badges(badgeLabels){
  <span className="badge badge--secondary"></span>
}

function Insurance({imageUrl, title, appUrl, tagline, description, launchLabel, launchUrl, tryApp, tryAppUrl, badgeLabels}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.insurance)}>
      <div className="app-section">
        <div className="app-section-header">
          <img className="app-section-logo" src={imageUrl} alt={title} />
          <div className="container">
            <Link to={appUrl} className="app-section-title">{title}</Link>
            <h5 className="app-section-tagline">{tagline}</h5>
          </div>   
        </div>
        <div className="app-section-body">
          <p className="app-section-description">{description}</p>
            <span className="badge badge--secondary margin-right--sm">fxhcg</span>
          <Link to={launchUrl} className="button button--link">{launchLabel}</Link>
          <Link to={tryAppUrl} className="button button--link">{tryApp}</Link>
        </div>
      </div>
    </div>
  );
}

const cyberdine = [
  {
    title: <>Customer</>,
    description: (
      <>
        Herdius is a protocol to access the whole decentralized web. Interact 
        directly with any smart contract,
      </>
    ),
    imageUrl: 'img/cyberdine/customer.png',
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
    imageUrl: 'img/cyberdine/loan_processor.png',
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
    imageUrl: 'img/cyberdine/relationship_manager.png',
    portalUrl: '#',
  },
];

function Cyberdine({imageUrl, title, description, portalUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h3 className="app-section-divider-title">{title}</h3>
      <p className="app-section-description">{description}</p>
      {imgUrl && (
        <div className="text--center">
          <img className="" src={imgUrl} alt={title} />
          <Link to={portalUrl} className="button button--link">Launch {title} Portal</Link>
        </div>
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
          // centered={true}
          className="rounded"
          defaultValue="insurance"
          values={[
            { label: <><i className="feather icon-shuffle"></i> All</>, value: 'all', },
            { label: <><i className="feather icon-box"></i> Supply Chain Management</>, value: 'supply_chain_management', },
            { label: <><i className="feather icon-shield"></i> Insurance</>, value: 'insurance', },
            { label: <><i className="feather icon-shield"></i> Healthcare</>, value: 'healthcare', },
          ]}>
          <TabItem value="all">
            <div className="">
              {/* <SVG src="/img/showcaseApps-distributed.svg" className={styles.topologyDiagram} /> */}
              {/* <Link to="/docs/setup/deployment/showcaseApps#distributed">Learn more about the distributed topology</Link> */}
            </div>
          </TabItem>
          <TabItem value="supply_chain_management">
            <div className="">
              
            </div>
          </TabItem>
          <TabItem value="insurance">
            <div className="container app-section">
              <div className="app-section-header">
                <img className="app-section-logo" src="img/cyberdine/logo.png" alt="Cyberdine" />
                <div className="container">
                  <Link to="cyberdine" className="app-section-title">Cyberdine</Link>
                  <h5 className="app-section-tagline">Customer, Loan Processor, Relationship Manager</h5>
                </div>   
              </div>
              {cyberdine && cyberdine.length && (
                <section className="app-section-body">
                  <div className="app-section-divider">
                    <div className="row">
                      {cyberdine.map((props, idx) => (
                        <Cyberdine key={idx} {...props} />
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>

            {insurance && insurance.length && (
              <section className="">
                <div className="row">
                  {insurance.map((props, idx) => (
                    <Insurance key={idx} {...props} />
                  ))}
                </div>
              </section>
            )}  
          </TabItem>
          <TabItem value="healthcare">
            <div className="">
            </div>
          </TabItem>
        </Tabs>
      </div>
    </section>
  )
}

// function Feature({imageUrl, title, description}) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={classnames('col col--4', styles.feature)}>
//       {imgUrl && (
//         <div className="text--center">
//           <img className={styles.featureImage} src={imgUrl} alt={title} />
//         </div>
//       )}
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

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
            <div className="col col--5 padding-top--lg">
              <h1 className="hero__title">Welcome to WaveMaker {siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline} created by WaveMaker our rapid 
low-code platform.</p>
              {/* <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/doc1')}>
                  Get Started
                </Link>
              </div> */}
            </div>
            <div className={classnames('col text--center', styles.heroBanner)}>
              <a href=""><img src="img/play-button.png" /></a>
            </div>
          </div>
        </div>
      </header>
      <main className="padding-top--xl">
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
        
        {/* {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row padding-left--xl padding-right--xl">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )} */}
      </main>
    </Layout>
  );
}

export default Home;
