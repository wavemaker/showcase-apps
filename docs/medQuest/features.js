import React from "react";
import { Carousel } from "react-responsive-carousel";
import YouTube from 'react-youtube';

export default Features => (
  <div className="features-slick">
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={false} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/container/wizard" target="_blank">
                <i className="fe-icon fe-wizard"></i>
            <p>Wizard</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/design-dialog" target="_blank">
                <i className="fe-icon fe-dialogue"></i>
            <p>Dialogue</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/datalive/cards" target="_blank">
                <i className="fe-icon fe-card"></i>
            <p>Cards</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/form-widgets/calendar" target="_blank">
                <i className="fe-icon fe-calendar"></i>
            <p>Calendar</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/container/tile" target="_blank">
                <i className="fe-icon fe-tile"></i>
            <p>Tile</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/datalive/list" target="_blank">
                <i className="fe-icon fe-list"></i>
            <p>List</p>
        </a>
      </div>
      <div>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/basic/search" target="_blank">
                <i className="fe-icon  fe-search"></i>
            <p>Search</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/container/tabs" target="_blank">
                <i className="fe-icon  fe-tabs"></i>
            <p>Tabs</p>
        </a>
        <a className="fe-box" href="https://www.wavemaker.com/learn/app-development/widgets/form-widgets/file-upload" target="_blank">
                <i className="fe-icon  fe-file-upload"></i>
            <p>File Upload</p>
        </a>
      </div>
    </Carousel>
  </div>
);
