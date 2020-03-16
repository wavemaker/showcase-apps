import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';


function Features(){
    const usedFeatures = [
        {
            title: <>List</>,
            iconClass: 'fe-icon fe-list',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/datalive/list',
        },
        {
            title: <>Form</>,
            iconClass: 'fe-icon fe-form',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/datalive/form',
        },
        {
            title: <>Card</>,
            iconClass: 'fe-icon fe-card',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/datalive/cards',
        },
        {
            title: <>Calendar</>,
            iconClass: 'fe-icon fe-calendar',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/form-widgets/calendar',
        },
        {
            title: <>Data table</>,
            iconClass: 'fe-icon fe-data-table',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/datalive/data-table',
        },
        {
            title: <>Live Filter</>,
            iconClass: 'fe-icon fe-live-filter',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/datalive/live-filter',
        },
    ];
      
    function FeaturesFlow({title, iconClass, feUrl}) {
        return (
        <div className="fe-box">
            <a href={feUrl} target="_blank">
                <span className={iconClass}></span>
            </a>
            <p>{title}</p>
        </div>
        
        );
    }

    function Features(){
        return(
          <div className="container  margin-top--lg">
            {usedFeatures && usedFeatures.length && (
                <div className="row">
                {usedFeatures.map((props, idx) => (
                    <FeaturesFlow key={idx} {...props} />
                ))}
                </div>
            )}
          </div>
        );
      }

    return(
        <Features />
    );
}


export default Features;
