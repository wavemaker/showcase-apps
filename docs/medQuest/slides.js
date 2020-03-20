import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="mock-screen">
    <Carousel autoPlay showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      {/* <div>
        <img src="/img/medQuest/screenshots/patient/screen1.png" />
        <img src="/img/medQuest/screenshots/patient/screen2.png" />
        <img src="/img/medQuest/screenshots/patient/screen3.jpeg" />
        <p className="legend">Legend 4</p>
      </div> */}
      {/* <div>
        <img src="/img/medQuest/screenshots/patient/screen4.png" />
        <img src="/img/medQuest/screenshots/patient/screen5.png" />
        <img src="/img/medQuest/screenshots/patient/screen6.png" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="/img/medQuest/screenshots/patient/screen7.jpeg" />
        <img src="/img/medQuest/screenshots/patient/screen8.jpeg" />
        <img src="/img/medQuest/screenshots/patient/screen9.jpeg" />
        <p className="legend">Legend 4</p>
      </div> */}
      <div>
        <img src="/img/medQuest/screenshots/nurse/screen1.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/nurse/screen2.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/nurse/screen3.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/nurse/screen4.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/nurse/screen5.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/nurse/screen6.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/nurse/screen9.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/nurse/screen10.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/pharmacist/screen1.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/pharmacist/screen2.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/medQuest/screenshots/pharmacist/screen3.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
    </Carousel>
  </div>
);
