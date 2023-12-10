import { OrbitControls, Sky, ContactShadows, SpotLight, Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { useControls } from "leva";
import { BoxGeometry } from "three";

export const Experience_Bk = () => {
  const { animation } = useControls({
    animation: {
      value: 'Standing',
      options: ["Typing", "Falling", "Standing"]
    }
  })

  return (
    <>
      <mesh>

        <ambientLight intensity={1} />
        <Office />
        {/* <OrbitControls /> */}
        {/* <Sky />
        <Environment
          background
          blur={0}
          preset="sunset"
        /> */}
        {/* <group position-y={-0.5} position-x={2}> */}
        {/* <Office />
          <Avatar animation={animation} />
          <ContactShadows
            opacity={0.45}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color={'#000000'}
          /> */}
        {/* {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position={[0, 0.25, 0]}>
            <boxGeometry />
            <meshStandardMaterial color={'red'} />
          </mesh>
        )} */}

        {/* <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color={'yellow'} />
        </mesh> */}
        {/* </group> */}
        {/* <ambientLight intensity={0.5} /> */}
      </mesh>
    </>
  );
};
