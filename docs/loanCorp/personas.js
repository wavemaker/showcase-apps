import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';


function Personas(){
    const roles = [
        {
            roleName: <>Customer</>,
            roleDesc: <>Customer has a web app. He applies for a loan and can view his loan status.</>,
            roleIcon: 'img/loanCorp/customer.png',
            appUrl: 'http://pkcm4t2v2gzf.cloud.wavemakeronline.com/Herdius/#/myAccount',
            btnTitle: <>Launch App</>,
            loginDetails: <>User : david<br/> Password : 123456</>,
        },
        {
            roleName: <>Loan Processor</>,
            roleDesc: <>Loan processor is a web app for processing the loans in the pipeline.</>,
            roleIcon: 'img/loanCorp/loan_processor.png',
            appUrl: 'http://pk51rnzxw91h.cloud.wavemakeronline.com/LoanProcessor/#/Main',
            btnTitle: <>Launch App</>,
            loginDetails: <>User : kevin<br/> Password : 123456</>,
        },
        {
            roleName: <>Customer</>,
            roleDesc: <>Customer has a web app. He applies for a loan and can view his loan status.</>,
            roleIcon: 'img/loanCorp/customer.png',
            appUrl: 'http://pkcm4t2v2gzf.cloud.wavemakeronline.com/Herdius/#/myAccount',
            btnTitle: <>Launch App</>,
            loginDetails: <>User : david<br/> Password : 123456</>,
        },
    ];
      
    function RolesFlow({roleName, roleDesc, roleIcon, appUrl, btnTitle, loginDetails}) {
        return (
        <div className="fe-box">
            <a href={appUrl} target="_blank">
                <img src={roleIcon} alt={roleName} />
            </a>
            <p>{roleName}</p>
        </div>
        );
    }

    function Personas(){
        return(
          <div className="container  margin-top--lg">
            {roles && roles.length && (
                <div className="row">
                {roles.map((props, idx) => (
                    <RolesFlow key={idx} {...props} />
                ))}
                </div>
            )}
          </div>
        );
      }

    return(
        <Personas />
    );
}


export default Personas;
