import * as THREE from "./three.js-r161/build/three.module.js";

export class Canvas {
  constructor(div, name) {
    this._div = div;

    this._name = name;

    Canvas.I = this;
    this.createCanvas(this._div);
  }

  createCanvas(div) {
    const width = window.innerWidth,
      height = window.innerHeight;

    Canvas.I.camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
    Canvas.I.camera.position.z = 1;

    Canvas.I.scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    Canvas.I.mesh = new THREE.Mesh(geometry, material);
    Canvas.I.scene.add(Canvas.I.mesh);

    Canvas.I.renderer = new THREE.WebGLRenderer({ antialias: true });
    Canvas.I.renderer.setSize(width, height);
    Canvas.I.renderer.setAnimationLoop(this.animation);
    div.appendChild(Canvas.I.renderer.domElement);
  }

  // animation
  animation(time) {
    Canvas.I.mesh.rotation.x = time / 2000;
    Canvas.I.mesh.rotation.y = time / 1000;

    Canvas.I.renderer.render(Canvas.I.scene, Canvas.I.camera);
  }
}
