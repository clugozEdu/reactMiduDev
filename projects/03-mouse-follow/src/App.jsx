import { useState, useEffect } from "react";

function App() {
  const [enable, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("effect", { enable });

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log("move", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener("mousemove", handleMove);
    }

    return () => {
      console.log("clean effect", { enable });
      window.removeEventListener("mousemove", handleMove);
    };
  }, [enable]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button
        onClick={() => {
          setEnabled(!enable);
        }}>
        {enable ? "Desactivado" : "Activado"} seguir puntero
      </button>
    </>
  );
}

export default App;
