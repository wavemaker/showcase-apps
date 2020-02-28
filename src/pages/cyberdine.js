import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const features = [
  {
    title: <>Feature 1</>,
    imageUrl: 'img/cyberdine/feature-1.png',
    description: <>Deliver apps 67% faster with visual development, easy integration, and instant deployment</>,
  },
  {
    title: <>Feature 2</>,
    imageUrl: 'img/cyberdine/feature-2.png',
    description: <>Deploy your applications anywhere – public cloud, private cloud or on-premises infrastructure</>,
  },
  {
    title: <>Feature 3</>,
    imageUrl: 'img/cyberdine/feature-3.png',
    description: <>Open source runtime, proven frameworks and technologies for complete vendor independence</>,
  },
  {
    title: <>Feature 4</>,
    imageUrl: 'img/cyberdine/feature-4.png',
    description: <>Composable architecture based on microservices, APIs, reusable components and containerization</>,
  },
  {
    title: <>Feature 5</>,
    imageUrl: 'img/cyberdine/feature-5.png',
    description: <>Proven platform with robust security and support SLAs from a trusted partner</>,
  },
  {
    title: <>Feature 6</>,
    imageUrl: 'img/cyberdine/feature-6.png',
    description: <>High productivity gain coupled with transparent pricing for the lowest Total Cost of Ownership</>,
  },
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
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}



function Cyberdine() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="Cyberdine - ${siteConfig.title}">
      <header className={classnames('hero hero-cyberdine')}>
        <div className="container">
          <div className="row row--align-center">
            <h1 className="col hero__title text--center">Watch how the app was built</h1>
            <img src="img/cyberdine/banner.png" alt="Cyberdine" className="" />
            <Link to="" className="cyberdine-banner-playBtn"><img src="img/play-button.png" alt="" style={{width:'100px',}} /></Link>
          </div>
        </div>
      </header>
      <main>
        <section className="padding-top--xl margin-bottom--md">
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h1 className="title-primary">Cyberdine:Loan<br/> Processing Application</h1>
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
          <img src="img/wave-colors.png" alt=""/>
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
          <img src="img/wave-border-blue.png" width="100%" alt=""/>
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
                    <Link to="#"><img src="img/play-button.png" width="100px" /></Link>
                  </div>
                </div>
              </div>
              <div className="col col--8 padding-right--none">
                <img src="img/cyberdine/dashboard-pc.png" width="100%" alt=""/>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top--xl padding-bottom--xl">
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h1 className="title-primary">Application Users</h1>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Cyberdine;