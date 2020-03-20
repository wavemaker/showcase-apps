import React from "react";
import { Carousel } from "react-responsive-carousel";
import YouTube from 'react-youtube';

export default () => (
  <div className="mock-screen">
    <Carousel  showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <img src="/img/loanCorp/screenshots/screen01.png"/>
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen02.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen03.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen04.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen05.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen06.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen07.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen08.png" />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen09.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen10.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen11.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen12.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/screenshots/screen13.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
    </Carousel>
  </div>
);
