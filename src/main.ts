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

// import './style.css';
// import * as THREE from 'three';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.GridHelper());

// const camera = new THREE.OrthographicCamera(-4, 4, 4, -4, -5, 10); // left,right,top,bottom,near,far
// camera.position.set(1, 1, 1);
// camera.lookAt(0, 0.5, 0);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   //camera.aspect = window.innerWidth / window.innerHeight
//   camera.updateProjectionMatrix();
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
// cameraFolder.add(camera, 'left', -10, 0).onChange(() => {
//   camera.updateProjectionMatrix();
// });
// cameraFolder.add(camera, 'right', 0, 10).onChange(() => {
//   camera.updateProjectionMatrix();
// });
// cameraFolder.add(camera, 'top', 0, 10).onChange(() => {
//   camera.updateProjectionMatrix();
// });
// cameraFolder.add(camera, 'bottom', -10, 0).onChange(() => {
//   camera.updateProjectionMatrix();
// });
// cameraFolder.add(camera, 'near', -5, 5).onChange(() => {
//   camera.updateProjectionMatrix();
// });
// cameraFolder.add(camera, 'far', 0, 10).onChange(() => {
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

/* RENDERER LEARNING */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   // window.innerWidth / window.innerHeight,
//   2,
//   0.1,
//   1000,
// );
// camera.position.z = 1.5;

// const canvas = document.getElementById('canvas') as HTMLCanvasElement;
// const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
// renderer.setSize(400, 200);
// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // window.addEventListener('resize', () => {
// //   camera.aspect = window.innerWidth / window.innerHeight;
// //   camera.updateProjectionMatrix();
// //   renderer.setSize(window.innerWidth, window.innerHeight);
// // });

// new OrbitControls(camera, renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshNormalMaterial({ wireframe: true });

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// function animate() {
//   requestAnimationFrame(animate);

//   renderer.render(scene, camera);
// }

// animate();

/* ANIMATION LOOP */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000,
// );
// camera.position.z = 1.5;

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.render(scene, camera); // on-demand re-rendering
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.addEventListener('change', function () {
//   // on demand re-rendering (rendered once initially)
//   renderer.render(scene, camera);
// });

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshNormalMaterial({ wireframe: true });

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// // const clock = new THREE.Clock();
// // let delta; // using delta to make animations monitor frame-rate independent

// function animate() {
//   requestAnimationFrame(animate); // queues the function for another call

//   //   delta = clock.getDelta();

//   //   cube.rotation.x += delta;
//   //   cube.rotation.y += delta;

//   //   renderer.render(scene, camera); // changes made being re-rendered

//   stats.update();
// }

// animate();

// renderer.render(scene, camera);

/* OBJECT3D */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5)); // axis lines

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000,
// );
// camera.position.set(1, 2, 3);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
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
// // cube.scale.set(2, 2, 2);
// scene.add(cube);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const gui = new GUI();

// const cubeFolder = gui.addFolder('Cube');
// cubeFolder.add(cube, 'visible');
// cubeFolder.open();

// const positionFolder = cubeFolder.addFolder('Position');
// positionFolder.add(cube.position, 'x', -5, 5);
// positionFolder.add(cube.position, 'y', -5, 5);
// positionFolder.add(cube.position, 'z', -5, 5);
// positionFolder.open();

// const rotationFolder = cubeFolder.addFolder('Rotation');
// rotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2);
// rotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
// rotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2);
// rotationFolder.open();

// const scaleFolder = cubeFolder.addFolder('Scale');
// scaleFolder.add(cube.scale, 'x', -5, 5);
// scaleFolder.add(cube.scale, 'y', -5, 5);
// scaleFolder.add(cube.scale, 'z', -5, 5);
// scaleFolder.open();

// function animate() {
//   requestAnimationFrame(animate);

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* OBJECT3D HIERARCHY */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000,
// );
// camera.position.set(4, 4, 4);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.set(8, 0, 0);
// controls.update();

// const light = new THREE.PointLight(0xffffff, 400);
// light.position.set(10, 10, 10);
// scene.add(light);

// const object1 = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshPhongMaterial({ color: 0xff0000 }),
// );
// object1.position.set(4, 0, 0);
// scene.add(object1);
// object1.add(new THREE.AxesHelper(5));

// const object2 = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshPhongMaterial({ color: 0x00ff00 }),
// );
// object2.position.set(4, 0, 0);
// object1.add(object2);
// object2.add(new THREE.AxesHelper(5));

// const object3 = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshPhongMaterial({ color: 0x0000ff }),
// );
// object3.position.set(4, 0, 0);
// object2.add(object3);
// object3.add(new THREE.AxesHelper(5));

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const gui = new GUI();
// const object1Folder = gui.addFolder('Object1 (Red Ball)');
// object1Folder.add(object1.position, 'x', 0, 10, 0.01).name('X Position');
// object1Folder
//   .add(object1.rotation, 'x', 0, Math.PI * 2, 0.01)
//   .name('X Rotation');
// object1Folder.add(object1.scale, 'x', 0, 2, 0.01).name('X Scale');
// object1Folder.add(object1, 'visible', 0, 2, 0.01).name('Visible');
// object1Folder.open();
// const object2Folder = gui.addFolder('Object2 (Green Ball)');
// object2Folder.add(object2.position, 'x', 0, 10, 0.01).name('X Position');
// object2Folder
//   .add(object2.rotation, 'x', 0, Math.PI * 2, 0.01)
//   .name('X Rotation');
// object2Folder.add(object2.scale, 'x', 0, 2, 0.01).name('X Scale');
// object2Folder.add(object2, 'visible', 0, 2, 0.01).name('Visible');
// object2Folder.open();
// const object3Folder = gui.addFolder('Object3 (Blue Ball)');
// object3Folder.add(object3.position, 'x', 0, 10, 0.01).name('X Position');
// object3Folder
//   .add(object3.rotation, 'x', 0, Math.PI * 2, 0.01)
//   .name('X Rotation');
// object3Folder.add(object3.scale, 'x', 0, 2, 0.01).name('X Scale');
// object3Folder.add(object3, 'visible', 0, 2, 0.01).name('Visible');
// object3Folder.open();

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const debug = document.getElementById('debug') as HTMLDivElement;

// function animate() {
//   requestAnimationFrame(animate);

//   renderer.render(scene, camera);

//   const object1WorldPosition = new THREE.Vector3();
//   object1.getWorldPosition(object1WorldPosition);
//   const object2WorldPosition = new THREE.Vector3();
//   object2.getWorldPosition(object2WorldPosition);
//   const object3WorldPosition = new THREE.Vector3();
//   object3.getWorldPosition(object3WorldPosition);

//   debug.innerText =
//     'Red\n' +
//     'Local Pos X : ' +
//     object1.position.x.toFixed(2) +
//     '\n' +
//     'World Pos X : ' +
//     object1WorldPosition.x.toFixed(2) +
//     '\n' +
//     '\nGreen\n' +
//     'Local Pos X : ' +
//     object2.position.x.toFixed(2) +
//     '\n' +
//     'World Pos X : ' +
//     object2WorldPosition.x.toFixed(2) +
//     '\n' +
//     '\nBlue\n' +
//     'Local Pos X : ' +
//     object3.position.x.toFixed(2) +
//     '\n' +
//     'World Pos X : ' +
//     object3WorldPosition.x.toFixed(2) +
//     '\n';

//   stats.update();
// }

// animate();

/* GEOMETRIES */

import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'dat.gui';

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5));

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(-2, 4, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const boxGeometry = new THREE.BoxGeometry(1, 2, 3, 4, 5, 6);
const sphereGeometry = new THREE.SphereGeometry();
const icosahedronGeometry = new THREE.IcosahedronGeometry();

console.log(boxGeometry);

const material = new THREE.MeshNormalMaterial({
  wireframe: true,
});

const cube = new THREE.Mesh(boxGeometry, material);
cube.position.x = -4;
scene.add(cube);

const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.x = 0;
scene.add(sphere);

const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
scene.add(icosahedron);
sphere.position.x = 4;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const stats = new Stats();
document.body.appendChild(stats.dom);

const gui = new GUI();

const cubeData = {
  width: 1,
  height: 1,
  depth: 1,
  widthSegments: 1,
  heightSegments: 1,
  depthSegments: 1,
};

const cubeFolder = gui.addFolder('Cube');
const cubeRotationFolder = cubeFolder.addFolder('Rotation');
cubeRotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2, 0.01);
cubeRotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2, 0.01);
cubeRotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2, 0.01);
const cubePositionFolder = cubeFolder.addFolder('Position');
cubePositionFolder.add(cube.position, 'x', -10, 10);
cubePositionFolder.add(cube.position, 'y', -10, 10);
cubePositionFolder.add(cube.position, 'z', -10, 10);
const cubeScaleFolder = cubeFolder.addFolder('Scale');
cubeScaleFolder.add(cube.scale, 'x', -5, 5, 0.1).onFinishChange(function () {
  console.log(cube.geometry);
});
cubeScaleFolder.add(cube.scale, 'y', -5, 5, 0.1);
cubeScaleFolder.add(cube.scale, 'z', -5, 5, 0.1);
cubeFolder
  .add(cubeData, 'width', 1, 30)
  .onChange(regenerateBoxGeometry)
  .onFinishChange(function () {
    console.log(cube.geometry);
  });
cubeFolder.add(cubeData, 'height', 1, 30).onChange(regenerateBoxGeometry);
cubeFolder.add(cubeData, 'depth', 1, 30).onChange(regenerateBoxGeometry);
cubeFolder
  .add(cubeData, 'widthSegments', 1, 30)
  .onChange(regenerateBoxGeometry);
cubeFolder
  .add(cubeData, 'heightSegments', 1, 30)
  .onChange(regenerateBoxGeometry);
cubeFolder
  .add(cubeData, 'depthSegments', 1, 30)
  .onChange(regenerateBoxGeometry);
cubeFolder.open();

function regenerateBoxGeometry() {
  const newGeometry = new THREE.BoxGeometry(
    cubeData.width,
    cubeData.height,
    cubeData.depth,
    cubeData.widthSegments,
    cubeData.heightSegments,
    cubeData.depthSegments,
  );
  cube.geometry.dispose();
  cube.geometry = newGeometry;
}

const sphereData = {
  radius: 1,
  widthSegments: 8,
  heightSegments: 6,
  phiStart: 0,
  phiLength: Math.PI * 2,
  thetaStart: 0,
  thetaLength: Math.PI,
};
const sphereFolder = gui.addFolder('Sphere');
sphereFolder
  .add(sphereData, 'radius', 0.1, 30)
  .onChange(regenerateSphereGeometry);
sphereFolder
  .add(sphereData, 'widthSegments', 1, 32)
  .onChange(regenerateSphereGeometry);
sphereFolder
  .add(sphereData, 'heightSegments', 1, 16)
  .onChange(regenerateSphereGeometry);
sphereFolder
  .add(sphereData, 'phiStart', 0, Math.PI * 2)
  .onChange(regenerateSphereGeometry);
sphereFolder
  .add(sphereData, 'phiLength', 0, Math.PI * 2)
  .onChange(regenerateSphereGeometry);
sphereFolder
  .add(sphereData, 'thetaStart', 0, Math.PI)
  .onChange(regenerateSphereGeometry);
sphereFolder
  .add(sphereData, 'thetaLength', 0, Math.PI)
  .onChange(regenerateSphereGeometry);
sphereFolder.open();

function regenerateSphereGeometry() {
  const newGeometry = new THREE.SphereGeometry(
    sphereData.radius,
    sphereData.widthSegments,
    sphereData.heightSegments,
    sphereData.phiStart,
    sphereData.phiLength,
    sphereData.thetaStart,
    sphereData.thetaLength,
  );
  sphere.geometry.dispose();
  sphere.geometry = newGeometry;
}

const icosahedronData = {
  radius: 1,
  detail: 0,
};
const icosahedronFolder = gui.addFolder('Icosahedron');
icosahedronFolder
  .add(icosahedronData, 'radius', 0.1, 10)
  .onChange(regenerateIcosahedronGeometry);
icosahedronFolder
  .add(icosahedronData, 'detail', 0, 5)
  .step(1)
  .onChange(regenerateIcosahedronGeometry);
icosahedronFolder.open();

function regenerateIcosahedronGeometry() {
  const newGeometry = new THREE.IcosahedronGeometry(
    icosahedronData.radius,
    icosahedronData.detail,
  );
  icosahedron.geometry.dispose();
  icosahedron.geometry = newGeometry;
}

const debug = document.getElementById('debug') as HTMLDivElement;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  debug.innerText =
    'Matrix\n' + cube.matrix.elements.toString().replace(/,/g, '\n');

  stats.update();
}

animate();
