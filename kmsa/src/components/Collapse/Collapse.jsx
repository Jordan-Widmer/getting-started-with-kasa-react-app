import { useState } from "react";
import ArrowDown from "../UI-Elements/icons/ArrowDown";
import ArrowUp from "../UI-Elements/icons/ArrowUp";
import "./collapse.css";
function Collapse(props) {
  const { title } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <div
        className="collapse-header"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>{title}</div>
        <div>{!isOpen ? <ArrowUp /> : <ArrowDown />}</div>
      </div>
      {isOpen ? <div className="collapse-body">{props.children}</div> : null}
    </div>
  );
}

export default Collapse;
