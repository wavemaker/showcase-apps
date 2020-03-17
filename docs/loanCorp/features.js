import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';


function Features(){
    const usedFeatures = [
        {
            title: <>Wizard</>,
            iconClass: 'fe-icon fe-wizard',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/container/wizard',
        },
        {
            title: <>Data Table</>,
            iconClass: 'fe-icon fe-data-table',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/datalive/data-table',
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
            title: <>Box-viewer Prefab</>,
            iconClass: 'fe-icon fe-box-viewer padding--sm',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/prefab/box-viewer-prefab',
        },
        {
            title: <>Docusign Prefab</>,
            iconClass: 'fe-icon fe-docusign padding--xs',
            feUrl: '#',
        },
        {
            title: <>Camunda workflow Integration</>,
            iconClass: 'fe-icon fe-camunda padding--none',
            feUrl: '#',
        },
    ];
      
    function FeaturesFlow({title, iconClass, feUrl}) {
        return (
        <div className="fe-box">
            <a href={feUrl} target="_blank">
                <i className={iconClass}></i>
            </a>
            <p>{title}</p>
        </div>
        );
    }

    function Features(){
        return(
          <div className="container  margin-top--lg">
            {usedFeatures && usedFeatures.length && (
                <div className="row no-wrap">
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
