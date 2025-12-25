"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

interface ThreeViewerProps {
  obj: string;
  mtl: string;
  name: string;
}

export default function ThreeViewer({ obj, mtl, name }: ThreeViewerProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  const centerObject = (object: THREE.Object3D) => {
    // ... resto del código
    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    object.position.x -= center.x;
    object.position.y -= center.y;
    object.position.z -= center.z;
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 600;
    const height = mountRef.current.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x888888, 1));
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const mtlLoader = new MTLLoader();
    mtlLoader.load(mtl, (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(obj, (object) => {
        centerObject(object);
        scene.add(object);
      });
    });

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, [obj, mtl]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bolder mb-4">{name}</h2>
      <div ref={mountRef} className="shadow-lg rounded" />
    </div>
  );
}
