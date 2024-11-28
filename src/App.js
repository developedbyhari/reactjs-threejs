import { OrbitControls, Sky, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {

  const bikeModel = useGLTF('bike.gltf')

  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <OrbitControls />
        <Sky />
        <primitive object={bikeModel.scene} />
      </Canvas>
    </div>
  );
}

export default App;
