import * as THREE from 'three';
import React, {
  Suspense, useEffect, useRef, useState,
} from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import ImageComponent from '../../../components/Image/Image';
import ImageAnimate from '../../../assets/images/noisyNeighborCasePage/mainBlock/img_3d.webp';

import styles from '../sass/noisyNeighborMainBlock.module.scss';

function Model() {
  const modelUrl = '/static/3dModels/noisy_neighbor_scene.glb';
  const gltf = useLoader(GLTFLoader, modelUrl);
  const modelRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: MouseEvent) => {
    setMouse({
      x: (event.clientX / window.innerWidth),
      y: -(event.clientY / window.innerHeight),
    });
  };

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = mouse.x / 8;
      modelRef.current.rotation.x = -(mouse.y / 16);
    }
  });

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // eslint-disable-next-line react/no-unknown-property
    <primitive ref={modelRef} object={gltf.scene} />
  );
}

function NoisyNeighbor3DScene() {
  return (
    <Suspense fallback={(
      <ImageComponent
        src={ImageAnimate}
        alt="image"
        priority
        className={`${styles.imageAnimate} ${styles.fallbackImage}`}
      />
    )}
    >
      <Canvas
        camera={{ fov: 45, position: [4.2, 2, 6.8] }}
        scene={{ scale: [1.6, 1.58, 1.70], position: [0.2, -2, 0], rotation: [0, 0.0, 0] }}
      >
        <Model />
      </Canvas>
    </Suspense>
  );
}

export default NoisyNeighbor3DScene;
