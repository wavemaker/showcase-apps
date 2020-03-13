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
            title: <>Dialogue</>,
            iconClass: 'fe-icon fe-dialogue',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/design-dialog',
        },
        {
            title: <>Cards</>,
            iconClass: 'fe-icon fe-card',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/datalive/cards',
        },
        {
            title: <>Calendar</>,
            iconClass: 'fe-icon fe-calendar',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/form-widgets/calendar',
        },
        {
            title: <>Tile</>,
            iconClass: 'fe-icon fe-tile',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/container/tile',
        },
        {
            title: <>List</>,
            iconClass: 'fe-icon fe-list',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/datalive/list',
        },
        {
            title: <>Search</>,
            iconClass: 'fe-icon fe-search',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/basic/search',
        },
        {
            title: <>Tabs</>,
            iconClass: 'fe-icon fe-tabs',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/container/tabs',
        },
        {
            title: <>File Upload</>,
            iconClass: 'fe-icon fe-file-upload',
            feUrl: 'https://www.wavemaker.com/learn/app-development/widgets/form-widgets/file-upload',
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
