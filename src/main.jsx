import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 2, 130], fov: 100 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <App />
    </Canvas>
  </React.StrictMode>
);
