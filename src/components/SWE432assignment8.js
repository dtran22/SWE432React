import React, { useState } from "react";

function SWE432assignment8(props) {
  const [inputValue, result] = useState(null);
  const [print, setPrint] = useState(false);

  const randomize = (event) => {
    var array = event.target.value.split(',');
    var name = array[Math.floor(Math.random() * array.length)];
    result(name)
  }
  return (
    <div>
      <h2>SWE 432 Assignment 8</h2>
      <br><p>Enter a list of names with each name following by a comma(,)</p><br>
      <table>
        <tr>
          <td>Names:</td>
          <td>
            <input type="text" onChange={randomize}/>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={()=>setPrint(true)}>Click Me!</button>
          </td>
        </tr>
      </table>
      {
        print?
        <h1>{inputValue}</h1>
        :null
      }
    </div>
  )
}

export default SWE432assignment8;
