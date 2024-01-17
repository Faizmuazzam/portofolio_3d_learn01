import { useScroll, OrbitControls, Sky, ContactShadows, SpotLight, Environment, Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { useControls } from "leva";
import { BoxGeometry } from "three";

import { motion } from 'framer-motion-3d'
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { useEffect, useRef, useState } from 'react'

import * as THREE from 'three'

import Projects from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();

  const [section, setSection] = useState(0);

  const data = useScroll();

  const camPositionX = useMotionValue();
  const camLookAtX = useMotionValue();

  useEffect(() => {
    animate(camPositionX, menuOpened ? -5 : 0, {

    })
    animate(camLookAtX, menuOpened ? 5 : 0)
  }, [menuOpened])

  const characterContainerAboutRef = useRef();

  const [charAnim, secCharAnim] = useState('Typing');

  useEffect(() => {
    secCharAnim('Falling');
    setTimeout(() => {
      secCharAnim(section === 0 ? 'Typing' : 'Standing');
    }, 600)
  }, [section])




  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3
    }

    if (curSection !== section) {
      setSection(curSection)
    }

    state.camera.position.x = camPositionX.get();

    if (state.camera) {
      state.camera.lookAt(camLookAtX.get(), 0, 0);
    }

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, 'XYZ');

    // console.log([euler.x, euler.y, euler.z]);

  })


  return (
    <>
      <mesh>
        <motion.group
          position={[1.9072935059634513, 0.135, 2.681801948466054]}
          rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
          animate={"" + section}
          transition={{
            duration: 0.5
          }}
          variants={
            {
              0: {
                scaleX: 0.9,
                scaleY: 0.9,
                scaleZ: 0.9,
              },
              1: {
                x: 0,
                y: -viewport.height + 1,
                z: 7,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
              },
              2: {
                x: -2,
                y: -viewport.height * 2 + 1,
                z: 0,
                rotateX: 0,
                rotateY: Math.PI / 2,
                rotateZ: 0,
              },
              3: {
                x: 0.3,
                y: -viewport.height * 3 + 1,
                z: 8.5,
                rotateX: 0,
                rotateY: Math.PI / -4,
                rotateZ: 0,
              }
            }
          }
        >
          <Avatar animation={charAnim} />
        </motion.group>
        <ambientLight intensity={1} />
        <motion.group
          position={[1.5, 2, 3]}
          scale={0.9}
          rotation-y={-Math.PI / 4}
          animate={{
            y: section == 0 ? 0 : -1,
          }}
        >
          <Office section={section} />
          <group
            ref={characterContainerAboutRef}
            name="CharacterSpot"
            position={[0.07, 0.15, -0.57]}
            rotation={[-Math.PI, 0.42, -Math.PI]}>
          </group>
        </motion.group>

        <motion.group
          position={[0, -1.5, -10]}
          animate={
            {
              z: section === 1 ? 0 : -10,
              y: section === 1 ? -(viewport.height + 0.5) : -1.5,
              x: section === 1 ? 2 : 0
            }
          }
        >
          {/* Skills */}
          <directionalLight position={[-5, 3, 5]} intensity={0.4} />
          <Float>
            <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
              <sphereGeometry />
              <MeshDistortMaterial
                opacity={0.8}
                transparent
                distort={0.4}
                speed={4}
                color={'red'}
              />
            </mesh>
          </Float>
          <Float>
            <mesh position={[3, 1, -18]} scale={[3, 3, 3]}>
              <sphereGeometry />
              <MeshDistortMaterial
                opacity={0.8}
                transparent
                distort={1}
                speed={5}
                color={'yellow'}
              />
            </mesh>
          </Float>
          <Float>
            <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
              <boxGeometry />
              <MeshWobbleMaterial
                opacity={0.8}
                transparent
                factor={0.4}
                speed={4}
                color={'blue'}
              />
            </mesh>
          </Float>

        </motion.group>
      </mesh>
      <Projects />
    </>
  );
};
