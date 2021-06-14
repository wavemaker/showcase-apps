import React from "react";
import { Carousel } from "react-responsive-carousel";
import YouTube from 'react-youtube';

export default Features => (
  <div className="features-slick">
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={false} swipeable={true} showStatus={false} dynamicHeight={true} centerMode={false} useKeyboardArrows={true}>
      <div>
        <a className="fe-box" href="https://docs.wavemaker.com/learn/app-development/widgets/container/wizard" target="_blank">
                <i className="fe-icon fe-wizard"></i>
            <p>Wizard</p>
        </a>
        <a className="fe-box" href="https://docs.wavemaker.com/learn/app-development/widgets/datalive/data-table" target="_blank">
                <i className="fe-icon fe-data-table"></i>
            <p>Data Table</p>
        </a>
        <a className="fe-box" href="https://docs.wavemaker.com/learn/app-development/widgets/datalive/cards" target="_blank">
                <i className="fe-icon fe-card"></i>
            <p>Cards</p>
        </a>
        <a className="fe-box" href="https://docs.wavemaker.com/learn/app-development/widgets/form-widgets/calendar" target="_blank">
                <i className="fe-icon fe-calendar"></i>
            <p>Calendar</p>
        </a>
        <a className="fe-box" href="https://docs.wavemaker.com/learn/app-development/widgets/prefab/box-viewer-prefab" target="_blank">
                <i className="fe-icon fe-box-viewer"></i>
            <p>Viewer</p>
        </a>
        <a className="fe-box" href="https://docs.wavemaker.com/learn/app-development/widgets/prefab/entity-extraction-from-documents#docsNav" target="_blank">
                <i className="fe-icon fe-entity-extrator"></i>
            <p>Entity Extractor</p>
        </a>
      </div>
      <div>
        <a className="fe-box" href="https://docs.wavemaker.com/learn/how-tos/camunda-wavemaker-app-integration#docsNav" target="_blank">
                <i className="fe-icon  fe-camunda"></i>
            <p>Camunda</p>
        </a>
        <a className="fe-box" href="https://docs.wavemaker.com/learn/app-development/widgets/prefab/docusign#docsNav" target="_blank">
                <i className="fe-icon fe-docusign"></i>
            <p>E Verify</p>
        </a>
      </div>
    </Carousel>
  </div>
);
