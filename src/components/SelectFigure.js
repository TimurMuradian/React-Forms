import { useState } from "react";

const SelectFigure = () => {
  const [type, setType] = useState("square");
  const [color, setColor] = useState("#aaa");

  const handleTypeChange = ({ target: { value } }) => {
    setType(value);
  };

  const handleColorChange = ({ target: { value } }) => {
    setColor(value);
  };

  const renderFigure = () => {
    const styles = {
      backgroundColor: color,
    };

    switch (type) {
      case "circle":
        styles.width = 200;
        styles.height = 200;
        styles.borderRadius = "50%";
        break;
      case "square":
        styles.width = 200;
        styles.height = 200;
        styles.borderRadius = 0;
        break;
      case "rectangle":
        styles.width = 200;
        styles.height = 400;
        styles.borderRadius = 0;
        break;
    }

    return <div style={styles} />;
  };

  return (
    <div>
      <lable>
        Choose Figure :{" "}
        <select value={type} onChange={handleTypeChange}>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
        </select>
      </lable>

      <lable>
        Choose Color :{" "}
        <input type="color" value={color} onChange={handleColorChange} />
      </lable>

      {renderFigure()};
    </div>
  );
};

export default SelectFigure;
