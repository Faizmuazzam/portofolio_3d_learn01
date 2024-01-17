import { useThree } from '@react-three/fiber';
import { Image, Text } from "@react-three/drei";
import React from 'react';

import { motion } from 'framer-motion-3d';

export const projects = [
  {
    title: "Wawatmos",
    url: "https://r3f-wawatmos-final.vercel.app/",
    image: "projects/wawatmos.jpg",
    description: "Recreating the Atmos Awwwards website with React Three Fiber",
  },
  {
    title: "Portfolio Baking",
    url: "https://www.youtube.com/watch?v=YkHqpqJgLKw",
    image: "projects/baking.jpg",
    description: "Learn how to bake a 3D model with Blender and use it in r3f",
  },
  {
    title: "3D Avatar",
    url: "https://www.youtube.com/watch?v=pGMKIyALcK0",
    image: "projects/avatar.jpg",
    description: "Learn how to use ReadyPlayerMe to create a 3D avatar",
  },
  {
    title: "Kanagame",
    url: "https://www.youtube.com/watch?v=zwNF1-lsia8",
    image: "projects/kanagame.jpg",
    description: "Use React Three Fiber to create a 3D game",
  },
  {
    title: "Loader",
    url: "https://www.youtube.com/watch?v=L12wIvuZTOY",
    image: "projects/loader.jpg",
    description: "Create a loading screen for your r3f projects",
  },
];

const Project = (props) => {
  const { project } = props;
  return (
    <group {...props}>
      <mesh
        position={[0, 0, -0.001]}
        onClick={() => window.open(project.url, "_blank")}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color={'black'} transparent opacity={0.4} />
      </mesh>
      <Image scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>

      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  )
}

const Projects = () => {
  const { viewport } = useThree();
  return (
    <group position-y={-viewport.height * 2 + 1}>
      {
        projects.map((project, index) => {
          return (
            <motion.group key={`project_${index}`} position={[index * 2.5, 0, -3]}>
              <Project project={project} />
            </motion.group>
          )
        })
      }
    </group>
  );
}

export default Projects;
