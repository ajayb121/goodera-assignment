import React from 'react';

import './index.css';

const leftRow = [
  "Ave. % of Interest",
  "Documentation (ID proof, collaterals, etc.)",
  "Loan processing charges",
  "Disbursement waiting period",
  "Other charges",
];

const config = [
  [
    "Banks",
    "15% or more",
    "Yes",
    "Yes",
    "1-2 days",
    "Yes, penalty on defaulting",
  ],
  [
    "Credit Card",
    "30% or more",
    "No",
    "Yes",
    "Immediate",
    "Yes, penalty on defaulting",
  ],
  [
    "Social Borrowing",
    "Zero",
    "Zero",
    "Zero",
    "Zero",
    "Zero",
  ],
  [
    "Money Lenders",
    "36% or more",
    "Yes",
    "Yes",
    "1-2 days",
    "Yes, penalty on defaulting",
  ],
  [
    "Chit Funds",
    "12% or more as dividend payouts",
    "Yes",
    "Yes, as commission",
    "30 days",
    "NO",
  ]
];

const Loans = () => {
  return (
    <div className="loanContainer">
      <div className="loanHead">The future of borrowing is social</div>
      <div className="loanContent">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</div>
      <div className="wrap">
        <div className="leftCol">
          <div>Personal Loans</div>
          <div>
            {leftRow.map((el, ind) => (
              <div key={ind} className="leftColElem">{el}</div>
            ))}
          </div>
        </div>
        <div className="table">
          {config.map((el, ind) => (
            <div className="column" key={ind}>
              {el.map((_ele, index) => (
                <div key={index}>{_ele}</div>
              ))}
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default Loans;