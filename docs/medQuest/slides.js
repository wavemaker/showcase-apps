import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="mock-screen">
    <Carousel autoPlay showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen01.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen02.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen03.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen04.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen05.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen06.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen07.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen08.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen09.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen10.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen11.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/showcase/img/medQuest/screenshots/screen12.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
    </Carousel>
  </div>
);
