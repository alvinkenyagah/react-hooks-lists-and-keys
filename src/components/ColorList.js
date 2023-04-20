import React from "react";

const colors = [
  {id:1,color:"firebrick"},
  {id:2,color:"rebeccapurple"},
  {id:3,color:"salmon"},
  {id:4,color:"darkslategray"},
  {id:5,color:"hotpink"},
];

function ColorList() {
  const listColors = colors.map((colorObj) => (
    <li key={colorObj.id} style={{color: colorObj.color}}>
      {colorObj.color}
    </li>
  ));

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>{listColors}</ol>
    </div>
  );
}

export default ColorList;
