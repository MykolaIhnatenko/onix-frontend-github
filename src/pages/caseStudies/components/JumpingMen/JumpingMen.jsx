import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import Image from 'next/image';

import ShaderVS from './ShaderVS';
import ShaderFS from './ShaderFS';

import jumpingMenStyles from './sass/JumpingMen.module.scss';

function JumpingMen() {
  const [animationWidth, setAnimationWidth] = useState(0);
  const [emptyImage] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
  const [state, setState] = useState({});

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const animWidth = window.innerWidth > 1000 ? window.innerWidth / 2 : window.innerWidth;
    setAnimationWidth(animWidth);
    setState({
      camera: new THREE.PerspectiveCamera(50, animWidth / window.innerHeight, 1, 10000),
      mouse: new THREE.Vector3(0, 0, 1),
      center: new THREE.Vector3(),
      renderer: new THREE.WebGLRenderer(),
      scene: new THREE.Scene(),
      geometry: new THREE.BufferGeometry(),
    });
  }, []);

  const initAnimation = (container) => {
    const {
      camera, renderer, mouse, center, geometry, scene,
    } = state;
    const video = document.createElement('video');
    const onWindowResize = () => {
      setAnimationWidth(window.innerWidth > 1000 ? window.innerWidth / 2 : window.innerWidth);

      camera.aspect = animationWidth / Math.max(600, window.innerHeight);
      camera.updateProjectionMatrix();

      renderer.setSize(animationWidth, Math.max(600, window.innerHeight));
    };
    const onDocumentMouseMove = (event) => {
      mouse.x = (event.clientX - animationWidth) * 8;
      mouse.y = (event.clientY - window.innerHeight / 2) * 8;
      camera.updateProjectionMatrix();
    };

    camera.position.set(0, 0, 2200);
    center.z = -2000;

    video.addEventListener(
      'loadedmetadata',
      () => {
        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.NearestFilter;
        texture.format = THREE.RGBFormat;

        const width = 640;
        const height = 480;
        const nearClipping = 1000;
        const farClipping = 6000;
        const vertices = new Float32Array(width * height * 3);

        for (let i = 0, j = 0, l = vertices.length; i < l; i += 3, j += 1) {
          vertices[i] = j % width;
          vertices[i + 1] = Math.floor(j / width);
        }

        geometry.addAttribute(
          'position',
          new THREE.BufferAttribute(vertices, 3),
        );

        const material = new THREE.ShaderMaterial({
          uniforms: {
            map: { value: texture },
            width: { value: width },
            height: { value: height },
            nearClipping: { value: nearClipping },
            farClipping: { value: farClipping },

            pointSize: { value: 2 },
            zOffset: { value: 2000 },
          },
          vertexShader: ShaderVS,
          fragmentShader: ShaderFS,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          depthWrite: false,
          transparent: true,
        });

        const mesh = new THREE.Points(geometry, material);

        scene.add(mesh);
      },
      false,
    );

    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.src = '/static/video/Anim_07.mp4';
    video.setAttribute('webkit-playsinline', 'webkit-playsinline');
    video.play();

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(animationWidth, window.innerHeight);
    renderer.setClearColor(0x050e49, 1);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);

    container.replaceWith(renderer.domElement);
  };

  const renderAnimation = () => {
    const {
      camera, mouse, center, renderer, scene,
    } = state;
    camera.position.x += (mouse.x - camera.position.x) * 0.05;
    camera.position.y += (-mouse.y - camera.position.y) * 0.05;
    camera.lookAt(center);

    renderer.render(scene, camera);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    renderAnimation();
  };

  const handleLoadImage = (event) => {
    initAnimation(event.target);
    animate();
  };

  return (
    <div className={jumpingMenStyles.jumpingMenAnimation}>
      {isMounted && (
        <Image
          src={emptyImage}
          onLoad={(event) => handleLoadImage(event)}
          alt="jumping men"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}

export default JumpingMen;
