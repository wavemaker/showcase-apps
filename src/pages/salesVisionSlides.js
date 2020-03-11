import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="mock-screen">
    <Carousel autoPlay showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <img src="/img/salesVision/screenshots/salesRepresentative/screen1.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/salesRepresentative/screen2.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/salesRepresentative/screen3.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/salesRepresentative/screen4.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/salesRepresentative/screen5.png" />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/salesHead/screen1.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/salesHead/screen2.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/salesHead/screen3.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/salesHead/screen4.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/salesHead/screen5.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
    </Carousel>
  </div>
);
