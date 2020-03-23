import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="mock-screen">
    <Carousel autoPlay showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <img src="/img/salesVision/screenshots/screen01.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/screen02.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/screen03.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/screen04.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/screen05.png" />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/screen06.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/screen07.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/screen08.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/screen09.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/salesVision/screenshots/screen10.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
    </Carousel>
  </div>
);
