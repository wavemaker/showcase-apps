import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="mock-screen">
    <Carousel autoPlay showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen01.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen02.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen03.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen04.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen05.png" />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen06.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen07.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen08.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen09.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/showcase/img/autoSurveyor/screenshots/screen10.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
    </Carousel>
  </div>
);
