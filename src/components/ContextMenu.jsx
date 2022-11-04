import { useState, useEffect, useRef } from "react";
import "./menu.css";

const ContextMenu = ({ targetId, options }) => {
  const [contextData, setContextData] = useState({
    visible: false,
  });
  const contextRef = useRef(null);

  useEffect(() => {
    const contextMenuEventHandler = (event) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement && targetElement.contains(event.target)) {
        event.preventDefault();
        setContextData({
          visible: true,
        });
      } else if (
        contextRef.current &&
        !contextRef.current.contains(event.target)
      ) {
        setContextData({ ...contextData, visible: false });
      }
    };

    const offClickHandler = (event) => {
      if (contextRef.current && !contextRef.current.contains(event.target)) {
        setContextData({ ...contextData, visible: false });
      }
    };

    document.addEventListener("contextmenu", contextMenuEventHandler);
    document.addEventListener("click", offClickHandler);
    return () => {
      document.removeEventListener("contextmenu", contextMenuEventHandler);
      document.removeEventListener("click", offClickHandler);
    };
  }, [contextData, targetId]);

  return (
    <div
      ref={contextRef}
      className="contextMenu"
      style={{
        display: `${contextData.visible ? "block" : "none"}`,
      }}
    >
      <div className="optionsList">
        {options.map((option) => (
          <li key={option} className="optionListItem">
            {option}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ContextMenu;
