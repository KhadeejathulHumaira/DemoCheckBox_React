import React, { useState } from "react";
import style from "./CheckBox.module.css";

const lists = [
  { id: 1, name: "hello" },
  { id: 2, name: "World" }
];

function CheckBox() {
  const [isClick, setIsClick] = useState(0);
  return lists.map((item) => (
    <div>
      {isClick === item.id ? (
        <div>
          <p className={style.p_strick} checked="true">
            {item.name}
          </p>
          <input type="checkbox" onClick={() => setIsClick(item.id)} />
        </div>
      ) : (
        <div>
          <p className={style.p}>{item.name}</p>
          <input type="checkbox" onClick={() => setIsClick(item.id)} />
        </div>
      )}
    </div>
  ));
}
export default CheckBox;
