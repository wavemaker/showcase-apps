import React from "react";
import { Carousel } from "react-responsive-carousel";
import YouTube from 'react-youtube';

export default Features => (
  <div className="features-slick">
    <Carousel showArrows={false} infiniteLoop={true} showThumbs={false} showIndicators={false} swipeable={false} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={false}>
      <div>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/datalive/list" target="_blank">
                <i className="fe-icon fe-list"></i>
            <p>List</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/datalive/data-table" target="_blank">
                <i className="fe-icon fe-data-table"></i>
            <p>Data Table</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/datalive/cards" target="_blank">
                <i className="fe-icon fe-card"></i>
            <p>Cards</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/form-widgets/calendar" target="_blank">
                <i className="fe-icon fe-calendar"></i>
            <p>Calendar</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/datalive/form" target="_blank">
                <i className="fe-icon fe-form"></i>
            <p>Form</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/datalive/live-filter" target="_blank">
                <i className="fe-icon fe-live-filter"></i>
            <p>Live Filter</p>
        </a>
      </div>
    </Carousel>
  </div>
);
