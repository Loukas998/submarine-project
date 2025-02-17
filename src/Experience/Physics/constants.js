
import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils.js";
export const constants = {
  startExperimenting: false,
  Diving: false,
  Float: false,
  startFloat:false,
  startDiving:false,
  Go: false,
  Rotate: false,
  G: 9.8,
  Beam: 13,
  length: 170,
  Ro: 997,
  segma:500000000,
  tWall:0.5,
  Dinternal:12,
  massSubmarine: 16764000,
  mass: 16764000,
  massTanks: 2011680,
  massTotlal: 16764000 + 2011680,
  nTanks:0,
  VTank:0,
  V: 16814,
  VTanks: 2000,
  VTotlal: 22500 - 2000,
  VSubmarine: 22500,
  Vadd:0,
  VSurface:0,
  deltaV:0,
  deltamass:0,
  balancemass:0,
  VCurrent: 0,
  eTime:0,
  massadd:0,
  massCurrent: 0,
  speed: new THREE.Vector3(0,0,0),
  speed1: new THREE.Vector3(0,0,0),
  acceleration: new THREE.Vector3(0,0,0),
  resultY:  new THREE.Vector3(0,0,0),
  massSurface:0,
  velocity:new THREE.Vector3(0,0,0),
  theta:degToRad(45),
  Cd:0.4,
  A:1820,
  h0:0,
  h:0,
  hMax:0,
  /* Thrust */
  power: 1500000000,
  n: 0,
  D: 4,
  pitch: 4,
  resultZ: new THREE.Vector3(0, 0, 0),
  speedZ: new THREE.Vector3(0, 0, 0),
  /* */
  /* Drag */
  Cd: 0.82,
  A: 10,
  /* */
  /*angle of rotation for submarine on XZ*/
  finArea : 1100,
  angle : 90,
  Yangle : 0,
  finAngle : 0,
  finAngleUpDown : 0,
  rotationAccelerationOnXZ: 0 ,
  rotationSpeedXZ: 0
};
