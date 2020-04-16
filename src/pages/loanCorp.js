import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const users = [
  {
    title: <>Customer</>,
    description: <>Reskill existing developers to build full-stack apps without specialists. Free up scarce resources to  focus on other strategic IT initiatives</>,
    imageUrl: '/img/loanCorp/customer.png',
    portalLabel:<>Launch Customer Portal</>,
    portalUrl: '#'
  },
  {
    title: <>Loan Processor</>,
    description: <>Reskill existing developers to build full-stack apps without specialists. Free up scarce resources to  focus on other strategic IT initiatives</>,
    imageUrl: '/img/loanCorp/loan_processor.png',
    portalLabel:<>Launch Loan Processor</>,
    portalUrl: '#'
  },
  {
    title: <>Relationship Manager</>,
    description: <>Reskill existing developers to build full-stack apps without specialists. Free up scarce resources to  focus on other strategic IT initiatives</>,
    imageUrl: '/img/loanCorp/relationship_manager.png',
    portalLabel:<>Launch RM Portal</>,
    portalUrl: '#'
  }
];

function Users({imageUrl, title, description, portalUrl, portalLabel}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4 app-users')}>
      <h2 className="title-primary">{title}</h2>
      <p className="">{description}</p>
      {imgUrl && (
        <div className="text--center">
          <img className="margin-bottom--md" src={imgUrl} alt={title} />
          <Link to={portalUrl} className="button button--warning">{portalLabel}</Link>
        </div>
      )}
      <div className="col app-credentials">
        <h5 className="title-primary">Credentials</h5>

      </div>
      
    </div>
  );
}


const features = [
  {
    title: <>Feature 1</>,
    imageUrl: '/img/loanCorp/feature-1.png',
    description: <>Deliver apps 67% faster with visual development, easy integration, and instant deployment</>
  },
  {
    title: <>Feature 2</>,
    imageUrl: '/img/loanCorp/feature-2.png',
    description: <>Deploy your applications anywhere – public cloud, private cloud or on-premises infrastructure</>
  },
  {
    title: <>Feature 3</>,
    imageUrl: '/img/loanCorp/feature-3.png',
    description: <>Open source runtime, proven frameworks and technologies for complete vendor independence</>
  },
  {
    title: <>Feature 4</>,
    imageUrl: '/img/loanCorp/feature-4.png',
    description: <>Composable architecture based on microservices, APIs, reusable components and containerization</>
  },
  {
    title: <>Feature 5</>,
    imageUrl: '/img/loanCorp/feature-5.png',
    description: <>Proven platform with robust security and support SLAs from a trusted partner</>
  },
  {
    title: <>Feature 6</>,
    imageUrl: '/img/loanCorp/feature-6.png',
    description: <>High productivity gain coupled with transparent pricing for the lowest Total Cost of Ownership</>
  }
];


function Feature({title, imageUrl, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--2', styles.features)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featuresImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="margin-top--md title-primary">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function LoanCorp() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="LoanCorp - ${siteConfig.title}">
      <header className={classnames('hero hero-loanCorp')}>
        <div className="container">
          <div className="row row--align-center">
            <h1 className="col hero__title text--center">Watch how the app was built</h1>
            <img src="/showcase/img/loanCorp/banner.png" alt="LoanCorp" className="" />
            <Link to="#" className="loanCorp-banner-playBtn"><img src="/showcase/img/play-button.png" alt="" style={{width:'100px',}} /></Link>
          </div>
        </div>
      </header>
      <main>
        <section className="margin-bottom--md">
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h1 className="title-primary">LoanCorp:Loan<br/> Processing Application</h1>
                <p>Reskill existing developers to build full-stack apps without specialists. Free up<br/> scarce resources to  focus on other strategic IT initiatives</p>
                <div className="col">
                  <Link to="#" className="button button--warning margin-left--sm margin-right--sm button--lg margin-bottom--md">Try App <i className="fas fas-times"></i></Link>
                  <Link to="#" className="button button--warning margin-left--sm margin-right--sm button--lg margin-bottom--md">Launch App In Studio <i className="fas fas-times"></i></Link>
                </div>
              </div>  
            </div>
          </div>
        </section>

        <section className="margin-bottom--md">
          <img src="/showcase/img/wave-colors.png" alt=""/>
        </section>

        <section className="padding-top--xl margin-bottom--md">
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h1 className="title-primary">Key WM features used</h1>
                {features && features.length && (
                  <section className={styles.features}>
                    <div className="container features-divider">
                      <div className="row">
                        {features.map((props, idx) => (
                          <Feature key={idx} {...props} />
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </div>  
            </div>
          </div>
        </section>

        <section className="margin-bottom--md">
          <img src="/showcase/img/wave-border-blue.png" width="100%" alt=""/>
        </section>

        <section className="padding-vert--xl">
          <div className="container-overflow">
            <div className="row row--align-center">
              <div className="col col--1"></div>
              <div className="col col--3">
                <div className="row">
                  <h1 className="title-primary margin-bottom--lg">Watch an overview of the app</h1>
                </div>
                <div className="row  row--align-center">
                  <div className="col col--9 padding-horiz--none">
                    <p className="margin-vert--none">From skipping the queue, change issues, menu online, seat availability, analytics</p>
                  </div>
                  <div className="col col--3 padding-horiz--none">
                    <Link to="#"><img src="/showcase/img/play-button.png" width="100px" /></Link>
                  </div>
                </div>
              </div>
              <div className="col col--8 padding-right--none">
                <img src="/showcase/img/loanCorp/dashboard-pc.png" width="100%" alt=""/>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--xl padding-bottom--xl app-users-sec">
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h1 className="title-primary">Application Users</h1>
                {users && users.length && (
                  <section className={classnames('margin-top--xl', styles.features)}>
                    <div className="container">
                      <div className="row">
                        {users.map((props, idx) => (
                          <Users key={idx} {...props} />
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
        </section> */}
      </main>
    </Layout>
  );
}

export default LoanCorp;