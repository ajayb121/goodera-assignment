import React, { useState } from 'react';

import documents from "../../static/images/documents-header.svg";
import hassles from "../../static/images/hassles-header.svg";
import interest from "../../static/images/interest-header.svg";
import leftArrow from "../../static/images/left-arrow.svg";
import rightArrow from "../../static/images/right-arrow.svg";

import './index.css';

const config = [{
  imgSrc: interest,
  label: "Zero % Interest",
  content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
}, {
  imgSrc: documents,
  label: "Zero Documents",
  content: "Between family and friends, there isn’t a need for any documentation while borrowing",
}, {
  imgSrc: hassles,
  label: "Zero Hassles",
  content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
}];

const Header = () => {
  const [selectedElIndex, setSelectedElIndex] = useState(0);

  const updateSelectedHeader = (index) => {
    if (index < 3 && index >= 0) {
      setSelectedElIndex(index)
    }
  }

  return (
    <>
      <div className="wrapper">
        {config.map(({ imgSrc, label, content }, index) => (
          <div className="header" key={index}>
            <img src={imgSrc} className="headerImg" alt={`${label} image`} />
            <div className="label">{label}</div>
            <div className="content">{content}</div>
          </div>
        ))}
      </div>
      <div className="wrapperMobile">
        {config && (
          <div className="header">
            <div className="arrow-icon" role="presentation" onClick={() => updateSelectedHeader(selectedElIndex - 1)}>
              <img src={leftArrow} alt="left-arrow" />
            </div>
            <img src={config[selectedElIndex].imgSrc} className="headerImg" alt={`${config[selectedElIndex].label} image`} />
            <div className="label">{config[selectedElIndex].label}</div>
            <div className="content">{config[selectedElIndex].content}</div>
            <div className="arrow-icon" role="presentation" onClick={() => updateSelectedHeader(selectedElIndex + 1)}>
              <img src={rightArrow} alt="right-arrow" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;