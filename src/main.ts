import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'dat.gui';

const sceneA = new THREE.Scene();
sceneA.background = new THREE.Color(0x123456); // color background

const sceneB = new THREE.Scene();
sceneB.background = new THREE.TextureLoader().load(
  'https://sbcode.net/img/grid.png',
); // image background

const sceneC = new THREE.Scene();
sceneC.background = new THREE.CubeTextureLoader()
  .setPath('https://sbcode.net/img/')
  .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']); // sky box background

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 1.5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial({ wireframe: true });

const cube = new THREE.Mesh(geometry, material);
sceneA.add(cube);

const stats = new Stats();
document.body.appendChild(stats.dom);

// const gui = new GUI();

// const cubeFolder = gui.addFolder('Cube');
// cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2);  // .add(target, target-value, min, max)
// cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
// cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2);
// cubeFolder.open();

// const cameraFolder = gui.addFolder('Camera');
// cameraFolder.add(camera.position, 'z', 0, 20);
// cameraFolder.open();

let activeScene = sceneA;
const setScene = {
  // functions appear as buttons in gui
  sceneA: () => {
    activeScene = sceneA;
  },
  sceneB: () => {
    activeScene = sceneB;
  },
  sceneC: () => {
    activeScene = sceneC;
  },
};

const gui = new GUI();
gui.add(setScene, 'sceneA').name('Scene A');
gui.add(setScene, 'sceneB').name('Scene B');
gui.add(setScene, 'sceneC').name('Scene C');

function animate() {
  requestAnimationFrame(animate);

  // stats.begin();  // used to measure stats of a particular animation
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  // stats.end();

  renderer.render(activeScene, camera);

  stats.update(); // whole application stats
}

animate();
