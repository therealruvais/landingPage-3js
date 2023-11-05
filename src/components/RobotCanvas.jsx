import { useGLTF, useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const RobotCanvas = () => {
  const robot = useGLTF("./eva/scene.gltf");
  const robo = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(robo.current.rotation, { y: -1 }, 2)
      .to(robo.current.position, { x: 1 }, 2)

      .to(robo.current.rotation, { y: 1 }, 6)
      .to(robo.current.position, { x: -1 }, 6)

      .to(robo.current.rotation, { y: 0 }, 11)
      .to(robo.current.rotation, { x: 1 }, 11)
      .to(robo.current.position, { x: 0 }, 11)

      .to(robo.current.rotation, { y: 0 }, 13)
      .to(robo.current.rotation, { x: -1 }, 13)
      .to(robo.current.position, { x: 0 }, 13)

      .to(robo.current.rotation, { y: 0 }, 16)
      .to(robo.current.rotation, { x: 0 }, 16)
      .to(robo.current.position, { x: 0 }, 16)

      .to(robo.current.rotation, { y: 0 }, 20)
      .to(robo.current.rotation, { x: 0 }, 20)
      .to(robo.current.position, { x: 0 }, 20);
  }, []);

  return (
    <mesh ref={robo}>
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 1, 0.5]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
        target={robot.scene}
      />

      <primitive
        object={robot.scene}
        scale={5}
        position={[0, 1, 0.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

export default RobotCanvas;
