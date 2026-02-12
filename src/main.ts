/* BASIC BOILERPLATE */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'dat.gui';

// const sceneA = new THREE.Scene();
// sceneA.background = new THREE.Color(0x123456); // color background

// const sceneB = new THREE.Scene();
// sceneB.background = new THREE.TextureLoader().load(
//   'https://sbcode.net/img/grid.png',
// ); // image background

// const sceneC = new THREE.Scene();
// sceneC.background = new THREE.CubeTextureLoader()
//   .setPath('https://sbcode.net/img/')
//   .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']); // sky box background

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000,
// );
// camera.position.z = 1.5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// new OrbitControls(camera, renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshNormalMaterial({ wireframe: true });

// const cube = new THREE.Mesh(geometry, material);
// sceneA.add(cube);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// // const gui = new GUI();

// // const cubeFolder = gui.addFolder('Cube');
// // cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2);  // .add(target, target-value, min, max)
// // cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
// // cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2);
// // cubeFolder.open();

// // const cameraFolder = gui.addFolder('Camera');
// // cameraFolder.add(camera.position, 'z', 0, 20);
// // cameraFolder.open();

// let activeScene = sceneA;
// const setScene = {
//   // functions appear as buttons in gui
//   sceneA: () => {
//     activeScene = sceneA;
//   },
//   sceneB: () => {
//     activeScene = sceneB;
//   },
//   sceneC: () => {
//     activeScene = sceneC;
//   },
// };

// const gui = new GUI();
// gui.add(setScene, 'sceneA').name('Scene A');
// gui.add(setScene, 'sceneB').name('Scene B');
// gui.add(setScene, 'sceneC').name('Scene C');

// function animate() {
//   requestAnimationFrame(animate);

//   // stats.begin();  // used to measure stats of a particular animation
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;
//   // stats.end();

//   renderer.render(activeScene, camera);

//   stats.update(); // whole application stats
// }

// animate();

/* PERSPECTIVE CAMERA LEARNING */

// import './style.css';
// import * as THREE from 'three';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.GridHelper());

// const camera = new THREE.PerspectiveCamera(
//   75, // fov
//   window.innerWidth / window.innerHeight, // aspect ratio
//   0.1, // near plane
//   1000, // far plane
// );
// camera.position.set(0, 2, 3); // initial position
// camera.lookAt(0, 0.5, 0); // initial pointing position

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   // maintain correct aspect when window size changes
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix(); // need to update if any basic prop changes
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshNormalMaterial({ wireframe: true });

// const cube = new THREE.Mesh(geometry, material);
// cube.position.y = 0.5;
// scene.add(cube);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const gui = new GUI();

// const cameraFolder = gui.addFolder('Camera');
// cameraFolder.add(camera.position, 'x', -10, 10);
// cameraFolder.add(camera.position, 'y', -10, 10);
// cameraFolder.add(camera.position, 'z', -10, 10);
// cameraFolder.add(camera, 'fov', 0, 180, 0.01).onChange(() => {
//   camera.updateProjectionMatrix();
// });
// cameraFolder.add(camera, 'aspect', 0.00001, 10).onChange(() => {
//   camera.updateProjectionMatrix();
// });
// cameraFolder.add(camera, 'near', 0.01, 10).onChange(() => {
//   camera.updateProjectionMatrix();
// });
// cameraFolder.add(camera, 'far', 0.01, 10).onChange(() => {
//   camera.updateProjectionMatrix();
// });
// cameraFolder.open();

// function animate() {
//   requestAnimationFrame(animate);

//   camera.lookAt(0, 0.5, 0);

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* ORTHOGRAPHIC CAMERA LEARNING */

import './style.css';
import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'dat.gui';

const scene = new THREE.Scene();
scene.add(new THREE.GridHelper());

const camera = new THREE.OrthographicCamera(-4, 4, 4, -4, -5, 10); // left,right,top,bottom,near,far
camera.position.set(1, 1, 1);
camera.lookAt(0, 0.5, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  //camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial({ wireframe: true });

const cube = new THREE.Mesh(geometry, material);
cube.position.y = 0.5;
scene.add(cube);

const stats = new Stats();
document.body.appendChild(stats.dom);

const gui = new GUI();

const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'x', -10, 10);
cameraFolder.add(camera.position, 'y', -10, 10);
cameraFolder.add(camera.position, 'z', -10, 10);
cameraFolder.add(camera, 'left', -10, 0).onChange(() => {
  camera.updateProjectionMatrix();
});
cameraFolder.add(camera, 'right', 0, 10).onChange(() => {
  camera.updateProjectionMatrix();
});
cameraFolder.add(camera, 'top', 0, 10).onChange(() => {
  camera.updateProjectionMatrix();
});
cameraFolder.add(camera, 'bottom', -10, 0).onChange(() => {
  camera.updateProjectionMatrix();
});
cameraFolder.add(camera, 'near', -5, 5).onChange(() => {
  camera.updateProjectionMatrix();
});
cameraFolder.add(camera, 'far', 0, 10).onChange(() => {
  camera.updateProjectionMatrix();
});
cameraFolder.open();

function animate() {
  requestAnimationFrame(animate);

  camera.lookAt(0, 0.5, 0);

  renderer.render(scene, camera);

  stats.update();
}

animate();
