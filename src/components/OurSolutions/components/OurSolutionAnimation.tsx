/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React, {
  Suspense, useEffect, useRef, useState,
} from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { IOurSolutionAnimation } from '../interfaces/IOurSolutionsItem';

function Model({ url }: IOurSolutionAnimation) {
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef<THREE.Group>(null);
  const [mixer, setMixer] = useState<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (gltf?.animations?.length) {
      const newMixer = new THREE.AnimationMixer(gltf.scene);
      newMixer.clipAction(gltf.animations[0]).play();
      setMixer(newMixer);
    }
    return () => {
      if (mixer) {
        mixer.stopAllAction();
      }
    };
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(0.5, 0.5, 0.5);
    }
  }, [gltf]);

  return (
    // eslint-disable-next-line react/no-unknown-property
    <primitive ref={modelRef} object={gltf.scene} />
  );
}

const getPosition = (type?: number) => {
  switch (type) {
    case 1:
      return {
        scale: new THREE.Vector3(0.05, 0.05, 0.05),
        position: new THREE.Vector3(0, -1.8, 0),
        rotation: new THREE.Euler(0, 0, 0),
      };
    case 2:
      return {
        scale: new THREE.Vector3(0.35, 0.35, 0.35),
        position: new THREE.Vector3(0, -1.4, 0),
        rotation: new THREE.Euler(120, 135, 0),
      };
    case 3:
      return {
        scale: new THREE.Vector3(0.3, 0.3, 0.3),
        position: new THREE.Vector3(0, -0.5, 0),
        rotation: new THREE.Euler(120, 135, 0),
      };
    default:
      return {
        scale: new THREE.Vector3(0.5, 0.5, 0.5),
        position: new THREE.Vector3(0, 0, 0),
        rotation: new THREE.Euler(0, 0, 0),
      };
  }
};

function OurSolutionAnimation({ url, type }: IOurSolutionAnimation) {
  return (
    <Canvas
      className="h-full w-full bg-[#2D2E32]"
      camera={{ fov: 60 }}
      scene={getPosition(type)}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[50, 50, 50]}
        intensity={3}
      />
      <spotLight position={[4, 4, 4]} intensity={0.5} />

      <Suspense fallback={null}>
        <Model url={url} type={type} />
      </Suspense>
    </Canvas>
  );
}

export default OurSolutionAnimation;
