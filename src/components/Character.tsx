
import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Import THREE for Group type


interface FemaleProps {
  scale?: number;
  position?: [number, number, number];
}

const Female:React.FC<FemaleProps> =(props) => {
  const groupRef = useRef<THREE.Group | null>(null); // Correctly typed ref

  // Load GLB Model
  const { nodes, materials } = useGLTF("/animations/67afafb8f2e63fb334129e12.glb");

  // Load FBX Animation (Clapping)
  const { animations: clappingAnimation } = useFBX("/animations/clapping.fbx");

  // Use Animations
  const { actions } = useAnimations(clappingAnimation, groupRef);

  useEffect(() => {
    if (actions) {
      const firstAnimation = Object.keys(actions)[0]; // Get first animation name
      if (actions[firstAnimation]) {
        actions[firstAnimation].reset().fadeIn(0.5).play();
      }
    }
  }, [actions]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={(nodes.EyeLeft as THREE.Mesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeLeft as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.EyeLeft as THREE.Mesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.EyeLeft as THREE.Mesh).morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={(nodes.EyeRight as THREE.Mesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeRight as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.EyeRight as THREE.Mesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.EyeRight as THREE.Mesh).morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={(nodes.Wolf3D_Head as THREE.Mesh).geometry}
        material={materials.Wolf3D_Skin}
        skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.Wolf3D_Head as THREE.Mesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.Wolf3D_Head as THREE.Mesh).morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={(nodes.Wolf3D_Teeth as THREE.Mesh).geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.Wolf3D_Teeth as THREE.Mesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.Wolf3D_Teeth as THREE.Mesh).morphTargetInfluences}
      />
      <skinnedMesh
        geometry={(nodes["hair-60"] as THREE.Mesh).geometry}
        material={materials.M_Hair_60}
        skeleton={(nodes["hair-60"] as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Glasses as THREE.Mesh).geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={(nodes.Wolf3D_Glasses as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Top as THREE.Mesh).geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Bottom as THREE.Mesh).geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={(nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Footwear as THREE.Mesh).geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={(nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Body as THREE.Mesh).geometry}
        material={materials.Wolf3D_Body}
        skeleton={(nodes.Wolf3D_Body as THREE.SkinnedMesh).skeleton}
      />
    </group>
  );
};

// Preload assets
useGLTF.preload("/animations/67afafb8f2e63fb334129e12.glb");
useFBX.preload("/animations/clapping.fbx");

export default Female;
