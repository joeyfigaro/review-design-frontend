import React from "react";

export const conditionalRender = (activated,name,clickHandler) => {
  if(activated) {
    return (
      <div className={`tool-activated ${name}`} onClick={clickHandler}>
      <span className={`icon-${name}`}></span>
        {name} -------> I am activated at the moment.
      </div>
    )
  }

  return (
    <div className={`tool ${name}`} onClick={clickHandler}>
      <span className={`icon-${name}`}></span>
      {name} --------> I am passive right now. 
    </div>
  )
}
