import "./App.css";

const Bar = ({ width, height, offset }) => {

  const W = width + "px";
  const H = height + "px";

  return (
    <div className="bar" style={{ width: W, height: H, marginLeft: offset }}></div>
  );
};

export default Bar;