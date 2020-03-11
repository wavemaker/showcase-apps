import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="mock-screen">
    <Carousel autoPlay showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <img src="/img/medQuest/screenshots/web/screen1.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/web/screen2.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/web/screen3.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/web/screen4.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/patient/screen1.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/patient/screen2.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
    </Carousel>
  </div>
);
