import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="mock-screen">
    <Carousel autoPlay showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <img src="/img/medQuest/slides/web_screen1.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/img/medQuest/slides/web_screen2.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/img/medQuest/slides/web_screen1.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/medQuest/slides/web_screen2.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
    </Carousel>
  </div>
);
