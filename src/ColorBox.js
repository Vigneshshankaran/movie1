import { useState } from "react";

export function ColorBox() {
  const [colors, setColors] = useState("red");
  const [colorsList, setColorsList] = useState(["blue", "red"]);
  const styles = { background: colors };
  return (
    <div style={{ marginTop: "10px" }}>
      <input
        value={colors}
        style={styles}
        onChange={(event) => setColors(event.target.value)}
        placeholder="Enter The Color"
      />
      <button onClick={() => setColorsList([...colorsList, colors])}>
        {" "}
        Add Colors
      </button>
      {colorsList.map((crl) => (
        <ColorBox1 crls={crl} />
      ))}
    </div>
  );
}

function ColorBox1({ crls }) {
  const styles = {
    height: "50px",
    width: "100px",
    backgroundColor: crls,
    margin: "10px",
  };
  return <div style={styles}></div>;
}
