import * as THREE from "three";
import { constants } from "./constants";
import { degToRad, radToDeg } from "three/src/math/MathUtils.js";

export default class Physics {
  constructor() {}

  weightForce() {
    this.weight = constants.mass * constants.G;
    return new THREE.Vector3(0, this.weight, 0);
  }

  buoyancyForce() {
    this.buoyancy = constants.Ro * constants.G * constants.V;
    return new THREE.Vector3(0, this.buoyancy, 0);
  }
  sine(angle){
    let x=Math.sin(angle*Math.PI/180)
    return parseFloat(x.toFixed(2));
  }
  cosine(angle){
    let x=Math.cos(angle*Math.PI/180)
    return parseFloat(x.toFixed(2));
  }
  thrustForce(Ro, n, pitch, D) {
    this.thrust = Ro * n * Math.pow(pitch, 2) * Math.pow(D, 4);
    return new THREE.Vector3(this.thrust, 0, 0);
  }
  thrustForceWithAngle(Ro, n, pitch, D,angle) {
    this.thrust = Ro * n * Math.pow(pitch, 2) * Math.pow(D, 4);
    return new THREE.Vector3(this.thrust*Math.cos(angle), 0, this.thrust*Math.sin(angle));
  }
  propellerVelocity(T, P) {
    this.velocity = P / T;
    return this.velocity;
  }

  dragForce(Cd, Ro, velocity, A) {
    this.drag = 0.5 * Cd * Ro * velocity * velocity * A;
    return new THREE.Vector3(this.drag, 0, 0);
  }
  dragForceWithAngle(Cd,Ro,velocity,A,angle){
    this.drag = 0.5 * Cd * Ro * velocity * velocity * A;
      return new THREE.Vector3(this.drag*Math.cos(angle), 0, this.drag*Math.sin(angle));
  }
  rotationAccelerationOnXZ(Cd,Ro,velocity,Afin,finAngle,mass,length){
    let dragOnFin=0.5*Cd*Ro*velocity*velocity*Afin*this.cosine(finAngle);
    let alpha=0.6*length*mass/(dragOnFin);
    if(dragOnFin==0){
      alpha=0;
    }
    return alpha;
  }
}
