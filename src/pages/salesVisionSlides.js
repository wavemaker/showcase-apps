import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="mock-screen">
    <Carousel autoPlay showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={true} swipeable={true} showStatus={false} dynamicHeight={false} centerMode={false} useKeyboardArrows={true}>
      <div>
        <img src="/img/loanCorp/Loans_CSR_Flow/Loan-CSR-07.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/Loans_CSR_Flow/Loan-CSR-02.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/Loans_CSR_Flow/Loan-CSR-03.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/Loans_CSR_Flow/Loan-CSR-04.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/Loans_CSR_Flow/Loan-CSR-05.png" />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src="/img/loanCorp/Loans_CSR_Flow/Loan-CSR-06.png" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
    </Carousel>
  </div>
);
