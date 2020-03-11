import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="mock-screen">
    <Carousel autoPlay showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <img src="/img/loanCorp/screenshots/customer/screen1.png"/>
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/customer/screen2.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/customer/screen3.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/customer/screen4.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/customer/screen5.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/customer/screen6.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/loanProcessor/screen1.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/loanProcessor/screen2.png" />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/loanProcessor/screen3.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/loanProcessor/screen4.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/loanProcessor/screen5.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/relationshipManager/screen1.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/relationshipManager/screen2.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/relationshipManager/screen3.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
    </Carousel>
  </div>
);
