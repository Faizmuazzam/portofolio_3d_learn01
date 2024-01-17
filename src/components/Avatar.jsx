/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/modelAvatar.glb -r public 
*/

import React, { useRef, useEffect } from 'react'
import { ContactShadows, useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { Vector3 } from 'three';

export function Avatar(props) {

  const { animation } = props;

  const { nodes, materials } = useGLTF('/models/modelAvatar.glb');

  const { headFollow, cursorFollow, wireframe} = useControls({
    // headFollow: false,
    // cursorFollow: false,
    // wireframe: false
  })

  const group = useRef();

  const { animations: typingAnimation } = useFBX('/animations/Typing.fbx');
  const { animations: fallingAnimation } = useFBX('/animations/FallingIdle.fbx');
  const { animations: standingAnimation } = useFBX('/animations/StandingBriefcase.fbx');


  typingAnimation[0].name = 'Typing';
  fallingAnimation[0].name = 'Falling';
  standingAnimation[0].name = 'Standing';

  const { actions } = useAnimations([typingAnimation[0], fallingAnimation[0], standingAnimation[0]],  group);

  useFrame((state) => {

    // console.log(state);
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }

    if (cursorFollow) {
      const target = new Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
    }
  })

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    }
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    })
  }, [wireframe])

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
        <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
        <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
        <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
        <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
        <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
        <skinnedMesh
          name="EyeLeft"
          frustumCulled={false}
          geometry={nodes.EyeLeft.geometry}
          material={nodes.EyeLeft.material}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          frustumCulled={false}
          geometry={nodes.EyeRight.geometry}
          material={nodes.EyeRight.material}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          frustumCulled={false}
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          frustumCulled={false}
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/modelAvatar.glb')
