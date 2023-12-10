import { OrbitControls, Sky, ContactShadows, SpotLight, Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { useControls } from "leva";
import { BoxGeometry } from "three";

import { motion } from 'framer-motion-3d'

export const Experience = ({ section }) => {
  return (
    <>
      <mesh>
        <ambientLight intensity={1} />
        <motion.group
          position={[1.5, 2, 3]}
          scale={0.9}
          rotation-y={-Math.PI / 4}
          animate={{
            y: section == 0 ? 0 : -1,
          }}
        >
          <Office section={section}/>
        </motion.group>
      </mesh>
    </>
  );
};
