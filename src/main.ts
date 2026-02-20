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
// camera.position.set(-2, 4, 5);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry(1, 2, 3, 4, 5, 6);
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry();

// console.log(boxGeometry);

// const material = new THREE.MeshNormalMaterial({
//   wireframe: true,
// });

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = -4;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 0;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// scene.add(icosahedron);
// sphere.position.x = 4;

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const gui = new GUI();

// const cubeData = {
//   width: 1,
//   height: 1,
//   depth: 1,
//   widthSegments: 1,
//   heightSegments: 1,
//   depthSegments: 1,
// };

// const cubeFolder = gui.addFolder('Cube');
// const cubeRotationFolder = cubeFolder.addFolder('Rotation');
// cubeRotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2, 0.01);
// cubeRotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2, 0.01);
// cubeRotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2, 0.01);
// const cubePositionFolder = cubeFolder.addFolder('Position');
// cubePositionFolder.add(cube.position, 'x', -10, 10);
// cubePositionFolder.add(cube.position, 'y', -10, 10);
// cubePositionFolder.add(cube.position, 'z', -10, 10);
// const cubeScaleFolder = cubeFolder.addFolder('Scale');
// cubeScaleFolder.add(cube.scale, 'x', -5, 5, 0.1).onFinishChange(function () {
//   console.log(cube.geometry);
// });
// cubeScaleFolder.add(cube.scale, 'y', -5, 5, 0.1);
// cubeScaleFolder.add(cube.scale, 'z', -5, 5, 0.1);
// cubeFolder
//   .add(cubeData, 'width', 1, 30)
//   .onChange(regenerateBoxGeometry)
//   .onFinishChange(function () {
//     console.log(cube.geometry);
//   });
// cubeFolder.add(cubeData, 'height', 1, 30).onChange(regenerateBoxGeometry);
// cubeFolder.add(cubeData, 'depth', 1, 30).onChange(regenerateBoxGeometry);
// cubeFolder
//   .add(cubeData, 'widthSegments', 1, 30)
//   .onChange(regenerateBoxGeometry);
// cubeFolder
//   .add(cubeData, 'heightSegments', 1, 30)
//   .onChange(regenerateBoxGeometry);
// cubeFolder
//   .add(cubeData, 'depthSegments', 1, 30)
//   .onChange(regenerateBoxGeometry);
// cubeFolder.open();

// function regenerateBoxGeometry() {
//   const newGeometry = new THREE.BoxGeometry(
//     cubeData.width,
//     cubeData.height,
//     cubeData.depth,
//     cubeData.widthSegments,
//     cubeData.heightSegments,
//     cubeData.depthSegments,
//   );
//   cube.geometry.dispose();
//   cube.geometry = newGeometry;
// }

// const sphereData = {
//   radius: 1,
//   widthSegments: 8,
//   heightSegments: 6,
//   phiStart: 0,
//   phiLength: Math.PI * 2,
//   thetaStart: 0,
//   thetaLength: Math.PI,
// };
// const sphereFolder = gui.addFolder('Sphere');
// sphereFolder
//   .add(sphereData, 'radius', 0.1, 30)
//   .onChange(regenerateSphereGeometry);
// sphereFolder
//   .add(sphereData, 'widthSegments', 1, 32)
//   .onChange(regenerateSphereGeometry);
// sphereFolder
//   .add(sphereData, 'heightSegments', 1, 16)
//   .onChange(regenerateSphereGeometry);
// sphereFolder
//   .add(sphereData, 'phiStart', 0, Math.PI * 2)
//   .onChange(regenerateSphereGeometry);
// sphereFolder
//   .add(sphereData, 'phiLength', 0, Math.PI * 2)
//   .onChange(regenerateSphereGeometry);
// sphereFolder
//   .add(sphereData, 'thetaStart', 0, Math.PI)
//   .onChange(regenerateSphereGeometry);
// sphereFolder
//   .add(sphereData, 'thetaLength', 0, Math.PI)
//   .onChange(regenerateSphereGeometry);
// sphereFolder.open();

// function regenerateSphereGeometry() {
//   const newGeometry = new THREE.SphereGeometry(
//     sphereData.radius,
//     sphereData.widthSegments,
//     sphereData.heightSegments,
//     sphereData.phiStart,
//     sphereData.phiLength,
//     sphereData.thetaStart,
//     sphereData.thetaLength,
//   );
//   sphere.geometry.dispose();
//   sphere.geometry = newGeometry;
// }

// const icosahedronData = {
//   radius: 1,
//   detail: 0,
// };
// const icosahedronFolder = gui.addFolder('Icosahedron');
// icosahedronFolder
//   .add(icosahedronData, 'radius', 0.1, 10)
//   .onChange(regenerateIcosahedronGeometry);
// icosahedronFolder
//   .add(icosahedronData, 'detail', 0, 5)
//   .step(1)
//   .onChange(regenerateIcosahedronGeometry);
// icosahedronFolder.open();

// function regenerateIcosahedronGeometry() {
//   const newGeometry = new THREE.IcosahedronGeometry(
//     icosahedronData.radius,
//     icosahedronData.detail,
//   );
//   icosahedron.geometry.dispose();
//   icosahedron.geometry = newGeometry;
// }

// const debug = document.getElementById('debug') as HTMLDivElement;

// function animate() {
//   requestAnimationFrame(animate);

//   renderer.render(scene, camera);

//   debug.innerText =
//     'Matrix\n' + cube.matrix.elements.toString().replace(/,/g, '\n');

//   stats.update();
// }

// animate();

/* MATERIALS */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.environment = new THREE.CubeTextureLoader()
//   .setPath('https://sbcode.net/img/')
//   .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// const gridHelper = new THREE.GridHelper();
// gridHelper.position.y = -1;
// scene.add(gridHelper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000,
// );
// camera.position.set(0, 2, 7);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const boxGeometry = new THREE.BoxGeometry();

// const sphereGeometry = new THREE.SphereGeometry();

// const icosahedronGeometry = new THREE.IcosahedronGeometry();

// const planeGeometry = new THREE.PlaneGeometry();

// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// const material = new THREE.MeshStandardMaterial();
// // const material = new THREE.MeshBasicMaterial();
// // const material = new THREE.MeshNormalMaterial();

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.set(5, 0, 0);
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.set(3, 0, 0);
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.set(0, 0, 0);
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.set(-2, 0, 0);
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.set(-5, 0, 0);
// scene.add(torusKnot);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };

// const gui = new GUI();

// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// materialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true; // for when material recompilation is required
// }

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* COMMON MATERIALS */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';
// // import { GUI } from 'dat.gui';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// const scene = new THREE.Scene();
// // scene.environment = new THREE.CubeTextureLoader()
// //   .setPath('https://sbcode.net/img/')
// //   .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);

// const gridHelper = new THREE.GridHelper();
// scene.add(gridHelper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(-1, 4, 2.5);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const light = new THREE.DirectionalLight(undefined, Math.PI);
// light.position.set(1, 1, 1);
// scene.add(light);

// const data = { color: 0x00ff00, labelsVisible: true };

// const plane = new THREE.Mesh(
//   new THREE.PlaneGeometry(10, 10),
//   new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
// );
// plane.rotation.x = -Math.PI / 2;
// plane.visible = false;
// scene.add(plane);

// const geometry = new THREE.IcosahedronGeometry(1, 1);

// const meshes = [
//   new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: data.color })),
//   new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({ flatShading: true })),
//   new THREE.Mesh(
//     geometry,
//     new THREE.MeshPhongMaterial({ color: data.color, flatShading: true }),
//   ),
//   new THREE.Mesh(
//     geometry,
//     new THREE.MeshStandardMaterial({ color: data.color, flatShading: true }),
//   ),
// ];

// meshes[0].position.set(-3, 1, 0);
// meshes[1].position.set(-1, 1, 0);
// meshes[2].position.set(1, 1, 0);
// meshes[3].position.set(3, 1, 0);

// scene.add(...meshes);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const gui = new GUI();

// const meshBasicMaterialFolder = gui.addFolder('MeshBasicMaterial');
// meshBasicMaterialFolder.addColor(data, 'color').onChange(() => {
//   (meshes[0].material as THREE.MeshBasicMaterial).color.set(data.color);
// });
// meshBasicMaterialFolder.add(meshes[0].material, 'wireframe');
// // meshBasicMaterialFolder.open();  // in lil-gui all folders are open by default

// const meshNormalMaterialFolder = gui.addFolder('MeshNormalMaterial');
// meshNormalMaterialFolder
//   .add(meshes[1].material as THREE.MeshNormalMaterial, 'flatShading')
//   .onChange(() => {
//     meshes[1].material.needsUpdate = true;
//   });
// meshNormalMaterialFolder.add(meshes[1].material, 'wireframe');
// // meshNormalMaterialFolder.open();

// const meshPhongMaterialFolder = gui.addFolder('MeshPhongMaterial');
// meshPhongMaterialFolder.addColor(data, 'color').onChange(() => {
//   (meshes[2].material as THREE.MeshPhongMaterial).color.set(data.color);
// });
// meshPhongMaterialFolder
//   .add(meshes[2].material as THREE.MeshPhongMaterial, 'flatShading')
//   .onChange(() => {
//     meshes[2].material.needsUpdate = true;
//   });
// meshPhongMaterialFolder.add(meshes[2].material, 'wireframe');
// // meshPhongMaterialFolder.open();

// const meshStandardMaterialFolder = gui.addFolder('MeshStandardMaterial');
// meshStandardMaterialFolder.addColor(data, 'color').onChange(() => {
//   (meshes[3].material as THREE.MeshStandardMaterial).color.set(data.color);
// });
// meshStandardMaterialFolder
//   .add(meshes[3].material as THREE.MeshStandardMaterial, 'flatShading')
//   .onChange(() => {
//     meshes[3].material.needsUpdate = true;
//   });
// meshStandardMaterialFolder.add(meshes[3].material, 'wireframe');
// // meshStandardMaterialFolder.open();

// const lightFolder = gui.addFolder('Light');
// lightFolder.add(light, 'visible');
// // lightFolder.open();
// lightFolder.close();

// const gridFolder = gui.addFolder('Grid');
// gridFolder.add(gridHelper, 'visible');
// // gridFolder.open();
// gridFolder.close();

// const labelsFolder = gui.addFolder('Labels');
// labelsFolder.add(data, 'labelsVisible');
// // labelsFolder.open();
// labelsFolder.close();

// const labels = document.querySelectorAll<HTMLDivElement>('.label');

// let x, y;
// const v = new THREE.Vector3();

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   for (let i = 0; i < 4; i++) {
//     v.copy(meshes[i].position);
//     v.project(camera);

//     x = ((1 + v.x) / 2) * innerWidth - 50;
//     y = ((1 - v.y) / 2) * innerHeight;

//     labels[i].style.left = x + 'px';
//     labels[i].style.top = y + 'px';
//     labels[i].style.display = data.labelsVisible ? 'block' : 'none';
//   }

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* LIGHTING */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// const scene = new THREE.Scene();

// const gridHelper = new THREE.GridHelper();
// scene.add(gridHelper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(-1, 4, 2.5);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const plane = new THREE.Mesh(
//   new THREE.PlaneGeometry(10, 10),
//   new THREE.MeshStandardMaterial(),
// );
// plane.rotation.x = -Math.PI / 2;
// scene.add(plane);

// const data = { color: 0x00ff00, lightColor: 0xffffff };

// const geometry = new THREE.IcosahedronGeometry(1, 1);

// const meshes = [
//   new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: data.color })),
//   new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({ flatShading: true })),
//   new THREE.Mesh(
//     geometry,
//     new THREE.MeshPhongMaterial({ color: data.color, flatShading: true }),
//   ),
//   new THREE.Mesh(
//     geometry,
//     new THREE.MeshStandardMaterial({ color: data.color, flatShading: true }),
//   ),
// ];

// meshes[0].position.set(-3, 1, 0);
// meshes[1].position.set(-1, 1, 0);
// meshes[2].position.set(1, 1, 0);
// meshes[3].position.set(3, 1, 0);

// scene.add(...meshes);

// const gui = new GUI();

// // #region AmbientLight

// const ambientLight = new THREE.AmbientLight(data.lightColor, Math.PI);
// ambientLight.visible = false;
// scene.add(ambientLight);

// const ambientLightFolder = gui.addFolder('AmbientLight');
// ambientLightFolder.add(ambientLight, 'visible');
// ambientLightFolder.addColor(data, 'lightColor').onChange(() => {
//   ambientLight.color.set(data.lightColor);
// });
// ambientLightFolder.add(ambientLight, 'intensity', 0, Math.PI);

// // #endregion

// // #region DirectionalLight

// const directionalLight = new THREE.DirectionalLight(data.lightColor, Math.PI);
// directionalLight.position.set(1, 1, 1);
// scene.add(directionalLight);

// const directionalLightHelper = new THREE.DirectionalLightHelper(
//   directionalLight,
// );
// directionalLightHelper.visible = false;
// scene.add(directionalLightHelper);

// const directionalLightFolder = gui.addFolder('DirectionalLight');
// directionalLightFolder.add(directionalLight, 'visible');
// directionalLightFolder.addColor(data, 'lightColor').onChange(() => {
//   directionalLight.color.set(data.lightColor);
// });
// directionalLightFolder.add(directionalLight, 'intensity', 0, Math.PI * 10);

// const directionalLightFolderControls =
//   directionalLightFolder.addFolder('Controls');
// directionalLightFolderControls
//   .add(directionalLight.position, 'x', -1, 1, 0.001)
//   .onChange(() => {
//     directionalLightHelper.update();
//   });
// directionalLightFolderControls
//   .add(directionalLight.position, 'y', -1, 1, 0.001)
//   .onChange(() => {
//     directionalLightHelper.update();
//   });
// directionalLightFolderControls
//   .add(directionalLight.position, 'z', -1, 1, 0.001)
//   .onChange(() => {
//     directionalLightHelper.update();
//   });
// directionalLightFolderControls
//   .add(directionalLightHelper, 'visible')
//   .name('Helper Visible');
// directionalLightFolderControls.close();

// // #endregion

// // #region Pointlight

// const pointLight = new THREE.PointLight(data.lightColor, Math.PI);
// pointLight.position.set(2, 0, 0);
// pointLight.visible = false;
// scene.add(pointLight);

// const pointLightHelper = new THREE.PointLightHelper(pointLight);
// pointLightHelper.visible = false;
// scene.add(pointLightHelper);

// const pointLightFolder = gui.addFolder('Pointlight');
// pointLightFolder.add(pointLight, 'visible');
// pointLightFolder.addColor(data, 'lightColor').onChange(() => {
//   pointLight.color.set(data.lightColor);
// });
// pointLightFolder.add(pointLight, 'intensity', 0, Math.PI * 10);

// const pointLightFolderControls = pointLightFolder.addFolder('Controls');
// pointLightFolderControls.add(pointLight.position, 'x', -10, 10);
// pointLightFolderControls.add(pointLight.position, 'y', -10, 10);
// pointLightFolderControls.add(pointLight.position, 'z', -10, 10);
// pointLightFolderControls.add(pointLight, 'distance', 0, 20).onChange(() => {
//   spotLightHelper.update();
// });
// pointLightFolderControls.add(pointLight, 'decay', 0, 10).onChange(() => {
//   spotLightHelper.update();
// });
// pointLightFolderControls
//   .add(pointLightHelper, 'visible')
//   .name('Helper Visible');
// pointLightFolderControls.close();

// // #endregion

// // #region Spotlight

// const spotLight = new THREE.SpotLight(data.lightColor, Math.PI);
// spotLight.position.set(3, 2.5, 1);
// spotLight.visible = false;
// spotLight.target.position.set(5, 0, -5);
// scene.add(spotLight);

// const spotLightHelper = new THREE.SpotLightHelper(spotLight);
// spotLightHelper.visible = false;
// scene.add(spotLightHelper);

// const spotLightFolder = gui.addFolder('Spotlight');
// spotLightFolder.add(spotLight, 'visible');
// spotLightFolder.addColor(data, 'lightColor').onChange(() => {
//   spotLight.color.set(data.lightColor);
// });
// spotLightFolder.add(spotLight, 'intensity', 0, Math.PI * 10);

// const spotLightFolderControls = spotLightFolder.addFolder('Controls');
// spotLightFolderControls.add(spotLight.position, 'x', -10, 10).onChange(() => {
//   spotLightHelper.update();
// });
// spotLightFolderControls.add(spotLight.position, 'y', -10, 10).onChange(() => {
//   spotLightHelper.update();
// });
// spotLightFolderControls.add(spotLight.position, 'z', -10, 10).onChange(() => {
//   spotLightHelper.update();
// });
// spotLightFolderControls.add(spotLight, 'distance', 0, 20).onChange(() => {
//   spotLightHelper.update();
// });
// spotLightFolderControls.add(spotLight, 'decay', 0, 10).onChange(() => {
//   spotLightHelper.update();
// });
// spotLightFolderControls.add(spotLight, 'angle', 0, 1).onChange(() => {
//   spotLightHelper.update();
// });
// spotLightFolderControls.add(spotLight, 'penumbra', 0, 1, 0.001).onChange(() => {
//   spotLightHelper.update();
// });
// spotLightFolderControls.add(spotLightHelper, 'visible').name('Helper Visible');
// spotLightFolderControls.close();

// // #endregion

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const labels = document.querySelectorAll<HTMLDivElement>('.label');

// let x, y;
// const v = new THREE.Vector3();

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   for (let i = 0; i < 4; i++) {
//     v.copy(meshes[i].position);
//     v.project(camera);

//     x = ((1 + v.x) / 2) * innerWidth - 50;
//     y = ((1 - v.y) / 2) * innerHeight;

//     labels[i].style.left = x + 'px';
//     labels[i].style.top = y + 'px';
//   }

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* SHADOWS */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// const scene = new THREE.Scene();

// scene.add(new THREE.GridHelper());

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(-1, 4, 2.5);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.shadowMap.type = THREE.PCFShadowMap; // (default)
// //renderer.shadowMap.type = THREE.PCFSoftShadowMap
// //renderer.shadowMap.type = THREE.BasicShadowMap
// //renderer.shadowMap.type = THREE.VSMShadowMap
// renderer.shadowMap.enabled = true; // needed to turn on shadows; by default - false
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const plane = new THREE.Mesh(
//   new THREE.PlaneGeometry(100, 100),
//   new THREE.MeshStandardMaterial({ color: 0xffffff }),
// );
// plane.rotation.x = -Math.PI / 2;
// plane.receiveShadow = true;
// plane.castShadow = true; // needed to turn on shadows; by default - false
// scene.add(plane);

// const data = {
//   color: 0x00ff00,
//   lightColor: 0xffffff,
//   shadowMapSizeWidth: 512, // basically how smooth shadows are (by incr or decr the size)
//   shadowMapSizeHeight: 512, // basically how smooth shadows are (by incr or decr the size)
// };

// const geometry = new THREE.IcosahedronGeometry(1, 1);

// const meshes = [
//   new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: data.color })),
//   new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({ flatShading: true })),
//   new THREE.Mesh(
//     geometry,
//     new THREE.MeshPhongMaterial({ color: data.color, flatShading: true }),
//   ),
//   new THREE.Mesh(
//     geometry,
//     new THREE.MeshStandardMaterial({ color: data.color, flatShading: true }),
//   ),
// ];

// meshes[0].position.set(-3, 1, 0);
// meshes[1].position.set(-1, 1, 0);
// meshes[2].position.set(1, 1, 0);
// meshes[3].position.set(3, 1, 0);

// meshes.map((m) => {
//   m.castShadow = true; // needed to turn on shadows; by default - false
//   m.receiveShadow = true;
// });

// scene.add(...meshes);

// const gui = new GUI();

// // #region DirectionalLight

// const directionalLight = new THREE.DirectionalLight(data.lightColor, Math.PI);
// directionalLight.position.set(1, 1, 1);
// directionalLight.castShadow = true; // needed to turn on shadows; by default - false
// directionalLight.shadow.camera.near = 0;
// directionalLight.shadow.camera.far = 10;
// directionalLight.shadow.mapSize.width = data.shadowMapSizeWidth;
// directionalLight.shadow.mapSize.height = data.shadowMapSizeHeight;
// scene.add(directionalLight);

// // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)
// const directionalLightHelper = new THREE.CameraHelper( // better to use to understand the shadows
//   directionalLight.shadow.camera, // and pass the shadow camera here
// );
// directionalLightHelper.visible = false;
// scene.add(directionalLightHelper);

// const directionalLightFolder = gui.addFolder('DirectionalLight');
// directionalLightFolder.add(directionalLight, 'visible');
// directionalLightFolder.addColor(data, 'lightColor').onChange(() => {
//   directionalLight.color.set(data.lightColor);
// });
// directionalLightFolder.add(directionalLight, 'intensity', 0, Math.PI * 10);
// directionalLightFolder
//   .add(directionalLight.position, 'x', -5, 5, 0.001)
//   .onChange(() => {
//     directionalLightHelper.update();
//   });
// directionalLightFolder
//   .add(directionalLight.position, 'y', -5, 5, 0.001)
//   .onChange(() => {
//     directionalLightHelper.update();
//   });
// directionalLightFolder
//   .add(directionalLight.position, 'z', -5, 5, 0.001)
//   .onChange(() => {
//     directionalLightHelper.update();
//   });
// directionalLightFolder
//   .add(directionalLightHelper, 'visible')
//   .name('Helper Visible');
// directionalLightFolder
//   .add(directionalLight.shadow.camera, 'left', -10, -1, 0.1)
//   .onChange(() => {
//     directionalLight.shadow.camera.updateProjectionMatrix();
//     directionalLightHelper.update();
//   });
// directionalLightFolder
//   .add(directionalLight.shadow.camera, 'right', 1, 10, 0.1)
//   .onChange(() => {
//     directionalLight.shadow.camera.updateProjectionMatrix();
//     directionalLightHelper.update();
//   });
// directionalLightFolder
//   .add(directionalLight.shadow.camera, 'top', 1, 10, 0.1)
//   .onChange(() => {
//     directionalLight.shadow.camera.updateProjectionMatrix();
//     directionalLightHelper.update();
//   });
// directionalLightFolder
//   .add(directionalLight.shadow.camera, 'bottom', -10, -1, 0.1)
//   .onChange(() => {
//     directionalLight.shadow.camera.updateProjectionMatrix();
//     directionalLightHelper.update();
//   });
// directionalLightFolder
//   .add(directionalLight.shadow.camera, 'near', 0, 100)
//   .onChange(() => {
//     directionalLight.shadow.camera.updateProjectionMatrix();
//     directionalLightHelper.update();
//   });
// directionalLightFolder
//   .add(directionalLight.shadow.camera, 'far', 0.1, 100)
//   .onChange(() => {
//     directionalLight.shadow.camera.updateProjectionMatrix();
//     directionalLightHelper.update();
//   });
// directionalLightFolder
//   .add(data, 'shadowMapSizeWidth', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateDirectionalLightShadowMapSize());
// directionalLightFolder
//   .add(data, 'shadowMapSizeHeight', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateDirectionalLightShadowMapSize());
// directionalLightFolder
//   .add(directionalLight.shadow, 'radius', 1, 10, 1)
//   .name('radius (PCF | VSM)'); // PCFShadowMap or VSMShadowMap
// directionalLightFolder
//   .add(directionalLight.shadow, 'blurSamples', 1, 20, 1)
//   .name('blurSamples (VSM)'); // VSMShadowMap only
// directionalLightFolder.open();

// function updateDirectionalLightShadowMapSize() {
//   directionalLight.shadow.mapSize.width = data.shadowMapSizeWidth;
//   directionalLight.shadow.mapSize.height = data.shadowMapSizeHeight;
//   directionalLight.shadow.map = null;
// }
// // #endregion

// // #region Pointlight

// const pointLight = new THREE.PointLight(data.lightColor, Math.PI);
// pointLight.position.set(2, 1, 0);
// pointLight.visible = false;
// pointLight.castShadow = true;
// scene.add(pointLight);

// const pointLightHelper = new THREE.PointLightHelper(pointLight);
// // const pointLightHelper = new THREE.CameraHelper(pointLight.shadow.camera);
// pointLightHelper.visible = false;
// scene.add(pointLightHelper);

// const pointLightFolder = gui.addFolder('Pointlight');
// pointLightFolder.add(pointLight, 'visible');
// pointLightFolder.addColor(data, 'lightColor').onChange(() => {
//   pointLight.color.set(data.lightColor);
// });
// pointLightFolder.add(pointLight, 'intensity', 0, Math.PI * 10);
// pointLightFolder.add(pointLight.position, 'x', -10, 10);
// pointLightFolder.add(pointLight.position, 'y', -10, 10);
// pointLightFolder.add(pointLight.position, 'z', -10, 10);
// pointLightFolder.add(pointLight, 'distance', 0.01, 20);
// pointLightFolder.add(pointLight, 'decay', 0, 10);
// pointLightFolder.add(pointLightHelper, 'visible').name('Helper Visible');
// pointLightFolder
//   .add(pointLight.shadow.camera, 'near', 0.01, 100)
//   .onChange(() => {
//     pointLight.shadow.camera.updateProjectionMatrix();
//     pointLightHelper.update();
//   });
// pointLightFolder.add(pointLight.shadow.camera, 'far', 0.1, 100).onChange(() => {
//   pointLight.shadow.camera.updateProjectionMatrix();
//   pointLightHelper.update();
// });
// pointLightFolder
//   .add(data, 'shadowMapSizeWidth', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updatePointLightShadowMapSize());
// pointLightFolder
//   .add(data, 'shadowMapSizeHeight', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updatePointLightShadowMapSize());
// pointLightFolder
//   .add(pointLight.shadow, 'radius', 1, 10, 1)
//   .name('radius (PCF | VSM)'); // PCFShadowMap or VSMShadowMap
// pointLightFolder
//   .add(pointLight.shadow, 'blurSamples', 1, 20, 1)
//   .name('blurSamples (VSM)'); // VSMShadowMap only
// pointLightFolder.close();

// function updatePointLightShadowMapSize() {
//   pointLight.shadow.mapSize.width = data.shadowMapSizeWidth;
//   pointLight.shadow.mapSize.height = data.shadowMapSizeHeight;
//   pointLight.shadow.map = null;
// }

// // #endregion

// // #region Spotlight

// const spotLight = new THREE.SpotLight(data.lightColor, Math.PI);
// spotLight.position.set(3, 2.5, 1);
// spotLight.visible = false;
// //spotLight.target.position.set(5, 0, -5)
// spotLight.castShadow = true;
// scene.add(spotLight);

// //const spotLightHelper = new THREE.SpotLightHelper(spotLight)
// const spotLightHelper = new THREE.CameraHelper(spotLight.shadow.camera);
// spotLightHelper.visible = false;
// scene.add(spotLightHelper);

// const spotLightFolder = gui.addFolder('Spotlight');
// spotLightFolder.add(spotLight, 'visible');
// spotLightFolder.addColor(data, 'lightColor').onChange(() => {
//   spotLight.color.set(data.lightColor);
// });
// spotLightFolder.add(spotLight, 'intensity', 0, Math.PI * 10);
// spotLightFolder.add(spotLight.position, 'x', -10, 10).onChange(() => {
//   spotLight.shadow.camera.updateProjectionMatrix();
//   spotLightHelper.update();
// });
// spotLightFolder.add(spotLight.position, 'y', -10, 10).onChange(() => {
//   spotLight.shadow.camera.updateProjectionMatrix();
//   spotLightHelper.update();
// });
// spotLightFolder.add(spotLight.position, 'z', -10, 10).onChange(() => {
//   spotLight.shadow.camera.updateProjectionMatrix();
//   spotLightHelper.update();
// });
// spotLightFolder.add(spotLight, 'distance', 0.01, 100).onChange(() => {
//   spotLight.shadow.camera.updateProjectionMatrix();
//   spotLightHelper.update();
// });
// spotLightFolder.add(spotLight, 'decay', 0, 10).onChange(() => {
//   spotLight.shadow.camera.updateProjectionMatrix();
//   spotLightHelper.update();
// });
// spotLightFolder.add(spotLight, 'angle', 0, 1).onChange(() => {
//   spotLight.shadow.camera.updateProjectionMatrix();
//   spotLightHelper.update();
// });
// spotLightFolder.add(spotLight, 'penumbra', 0, 1, 0.001).onChange(() => {
//   spotLight.shadow.camera.updateProjectionMatrix();
//   spotLightHelper.update();
// });
// spotLightFolder.add(spotLightHelper, 'visible').name('Helper Visible');
// spotLightFolder.add(spotLight.shadow.camera, 'near', 0.01, 100).onChange(() => {
//   spotLight.shadow.camera.updateProjectionMatrix();
//   spotLightHelper.update();
// });
// spotLightFolder
//   .add(data, 'shadowMapSizeWidth', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateSpotLightShadowMapSize());
// spotLightFolder
//   .add(data, 'shadowMapSizeHeight', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateSpotLightShadowMapSize());
// spotLightFolder
//   .add(spotLight.shadow, 'radius', 1, 10, 1)
//   .name('radius (PCF | VSM)'); // PCFShadowMap or VSMShadowMap
// spotLightFolder
//   .add(spotLight.shadow, 'blurSamples', 1, 20, 1)
//   .name('blurSamples (VSM)'); // VSMShadowMap only
// spotLightFolder.close();

// function updateSpotLightShadowMapSize() {
//   spotLight.shadow.mapSize.width = data.shadowMapSizeWidth;
//   spotLight.shadow.mapSize.height = data.shadowMapSizeHeight;
//   spotLight.shadow.map = null;
// }

// // #endregion

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const labels = document.querySelectorAll<HTMLDivElement>('.label');

// let x, y;
// const v = new THREE.Vector3();

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   for (let i = 0; i < 4; i++) {
//     v.copy(meshes[i].position);
//     v.project(camera);

//     x = ((1 + v.x) / 2) * innerWidth - 50;
//     y = ((1 - v.y) / 2) * innerHeight;

//     labels[i].style.left = x + 'px';
//     labels[i].style.top = y + 'px';
//   }

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* ENVIRONMENT MAPS */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { HDRLoader } from 'three/addons/loaders/HDRLoader.js'; // Since Threejs r179. `RGBELoader` has been renamed to `HDRLoader`.
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// const scene = new THREE.Scene();

// // const environmentTexture = new THREE.CubeTextureLoader()
// //   .setPath('https://sbcode.net/img/')
// //   .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
// // scene.environment = environmentTexture;
// // scene.background = environmentTexture;

// // const hdr = 'https://sbcode.net/img/rustig_koppie_puresky_1k.hdr';
// // const hdr = 'https://sbcode.net/img/venice_sunset_1k.hdr';
// const hdr = 'https://sbcode.net/img/spruit_sunrise_1k.hdr';

// let environmentTexture: THREE.DataTexture;

// new HDRLoader().load(hdr, (texture) => {
//   environmentTexture = texture;
//   environmentTexture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = environmentTexture;
//   scene.background = environmentTexture;
//   scene.environmentIntensity = 1; // added in Three r163
// });

// const directionallight = new THREE.DirectionalLight(0xebfeff, Math.PI);
// directionallight.position.set(1, 0.1, 1);
// directionallight.visible = false;
// scene.add(directionallight);

// const ambientLight = new THREE.AmbientLight(0xebfeff, Math.PI / 16);
// ambientLight.visible = false;
// scene.add(ambientLight);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(-2, 0.5, 2);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.toneMapping = THREE.ACESFilmicToneMapping; // if using hdr mapping, likely to have this setting in projects
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const texture = new THREE.TextureLoader().load(
//   'https://sbcode.net/img/grid.png',
// );
// texture.colorSpace = THREE.SRGBColorSpace;

// const material = new THREE.MeshPhysicalMaterial();
// material.side = THREE.DoubleSide;
// material.envMapIntensity = 0.7;
// material.roughness = 0.17;
// material.metalness = 0.07;
// material.clearcoat = 0.43;
// material.iridescence = 1;
// material.transmission = 1;
// material.thickness = 5.12;
// material.ior = 1.78;

// const plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), material);
// plane.rotation.x = -Math.PI / 2;
// plane.position.y = -1;
// plane.visible = false;
// scene.add(plane);

// new GLTFLoader().load(
//   'https://sbcode.net/models/suzanne_no_material.glb',
//   (gltf) => {
//     gltf.scene.traverse((child) => {
//       (child as THREE.Mesh).material = material;
//     });
//     scene.add(gltf.scene);
//   },
// );

// const data = {
//   environment: true,
//   background: true,
//   mapEnabled: false,
//   planeVisible: false,
// };

// const gui = new GUI();

// gui.add(data, 'environment').onChange(() => {
//   if (data.environment) {
//     scene.environment = environmentTexture;
//     directionallight.visible = false;
//     ambientLight.visible = false;
//   } else {
//     scene.environment = null;
//     directionallight.visible = true;
//     ambientLight.visible = true;
//   }
// });

// gui.add(scene, 'environmentIntensity', 0, 2, 0.01); // new in Three r163. Can be used instead of `renderer.toneMapping` with `renderer.toneMappingExposure`

// gui.add(renderer, 'toneMappingExposure', 0, 2, 0.01);

// gui.add(data, 'background').onChange(() => {
//   if (data.background) {
//     scene.background = environmentTexture;
//   } else {
//     scene.background = null;
//   }
// });

// gui.add(scene, 'backgroundBlurriness', 0, 1, 0.01);

// gui.add(data, 'mapEnabled').onChange(() => {
//   if (data.mapEnabled) {
//     material.map = texture;
//   } else {
//     material.map = null;
//   }
//   material.needsUpdate = true;
// });

// gui.add(data, 'planeVisible').onChange((v) => {
//   plane.visible = v;
// });

// const materialFolder = gui.addFolder('meshPhysicalMaterial');
// materialFolder.add(material, 'envMapIntensity', 0, 1.0, 0.01).onChange(() => {
//   // Since r163, `envMap` is no longer copied from `scene.environment`. You will need to manually copy it, if you want to modify `envMapIntensity`
//   if (!material.envMap) {
//     material.envMap = scene.environment;
//   }
// }); // from meshStandardMaterial
// materialFolder.add(material, 'roughness', 0, 1.0, 0.01); // from meshStandardMaterial
// materialFolder.add(material, 'metalness', 0, 1.0, 0.01); // from meshStandardMaterial
// materialFolder.add(material, 'clearcoat', 0, 1.0, 0.01);
// materialFolder.add(material, 'iridescence', 0, 1.0, 0.01);
// materialFolder.add(material, 'transmission', 0, 1.0, 0.01);
// materialFolder.add(material, 'thickness', 0, 10.0, 0.01);
// materialFolder.add(material, 'ior', 1.0, 2.333, 0.01);
// materialFolder.close();

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* LOADING ASSETS */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';
// // import hdr from './img/venice_sunset_1k.hdr'
// // import image from './img/grid.png'
// // import model from './models/suzanne_no_material.glb'

// const scene = new THREE.Scene();

// // we can load assets in three ways
// // 1. assets hosted on another server
// // const hdr = 'https://sbcode.net/img/venice_sunset_1k.hdr';
// // const image = 'https://sbcode.net/img/grid.png';
// // const model = 'https://sbcode.net/models/suzanne_no_material.glb';

// // 2. assets on any platform through cdn
// // const hdr =
// //   'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/equirectangular/venice_sunset_1k.hdr';
// // const image =
// //   'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/uv_grid_opengl.jpg';
// // const model =
// //   'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/Xbot.glb';

// // 3. locally hosted assets
// const hdr = 'img/venice_sunset_1k.hdr';
// const image = 'img/grid.png';
// const model = 'models/suzanne_no_material.glb';

// new HDRLoader().load(hdr, (texture) => {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = texture;
//   scene.background = texture;
// });

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(-2, 0.5, 2);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const material = new THREE.MeshStandardMaterial();
// material.map = new THREE.TextureLoader().load(image);
// material.map.colorSpace = THREE.SRGBColorSpace;

// const plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), material);
// plane.rotation.x = -Math.PI / 2;
// plane.position.y = -1;
// scene.add(plane);

// new GLTFLoader().load(model, (gltf) => {
//   gltf.scene.traverse((child) => {
//     (child as THREE.Mesh).material = material;
//   });
//   scene.add(gltf.scene);
// });

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* LOADING MULTIPLE ASSETS */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const scene = new THREE.Scene();

// await new HDRLoader().loadAsync('img/venice_sunset_1k.hdr').then((texture) => {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = texture;
//   scene.background = texture;
//   scene.backgroundBlurriness = 1.0;
// });

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(2, 1, -2);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.y = 0.75;
// controls.enableDamping = true;

// // different ways to load dependent models:

// // const loader = new GLTFLoader();
// // let suvBody: THREE.Object3D;
// // loader.load('models/suv_body.glb', (gltf) => {
// //   suvBody = gltf.scene;

// //   // this way dependent models are loaded safely(no errors) only after the parent model has loaded
// //   loader.load('models/suv_wheel.glb', (gltf) => {
// //     gltf.scene.position.set(-0.65, 0.2, -0.77);
// //     suvBody.add(gltf.scene); // to make this model a child of suvBody model
// //   });
// //   loader.load('models/suv_wheel.glb', (gltf) => {
// //     gltf.scene.position.set(0.65, 0.2, -0.77);
// //     gltf.scene.rotateY(Math.PI);
// //     suvBody.add(gltf.scene);
// //   });
// //   loader.load('models/suv_wheel.glb', (gltf) => {
// //     gltf.scene.position.set(-0.65, 0.2, 0.57);
// //     suvBody.add(gltf.scene);
// //   });
// //   loader.load('models/suv_wheel.glb', (gltf) => {
// //     gltf.scene.position.set(0.65, 0.2, 0.57);
// //     gltf.scene.rotateY(Math.PI);
// //     suvBody.add(gltf.scene);
// //   });

// //   scene.add(suvBody);
// // });

// // const loader = new GLTFLoader();
// // loader.load('models/suv_body.glb', (gltf) => {
// //   const suvBody = gltf.scene;
// //   // instead of calling loader.load multiple times for the same model we can use the .clone() method of gltf.scene
// //   loader.load('models/suv_wheel.glb', function (gltf) {
// //     const wheels = [
// //       gltf.scene,
// //       gltf.scene.clone(), // creates a new instance of the same model
// //       gltf.scene.clone(),
// //       gltf.scene.clone(),
// //     ];
// //     wheels[0].position.set(-0.65, 0.2, -0.77);
// //     wheels[1].position.set(0.65, 0.2, -0.77);
// //     wheels[1].rotateY(Math.PI);
// //     wheels[2].position.set(-0.65, 0.2, 0.57);
// //     wheels[3].position.set(0.65, 0.2, 0.57);
// //     wheels[3].rotateY(Math.PI);
// //     suvBody.add(...wheels);
// //   });
// //   scene.add(suvBody);
// // });

// // const loader = new GLTFLoader();
// // let suvBody: THREE.Object3D;
// // // using async/await to first wait and complete the loading of main model and then loading the child models
// // await loader.loadAsync('models/suv_body.glb').then((gltf) => {
// //   suvBody = gltf.scene;
// // });
// // loader.load('models/suv_wheel.glb', function (gltf) {
// //   const wheels = [
// //     gltf.scene,
// //     gltf.scene.clone(),
// //     gltf.scene.clone(),
// //     gltf.scene.clone(),
// //   ];
// //   wheels[0].position.set(-0.65, 0.2, -0.77);
// //   wheels[1].position.set(0.65, 0.2, -0.77);
// //   wheels[1].rotateY(Math.PI);
// //   wheels[2].position.set(-0.65, 0.2, 0.57);
// //   wheels[3].position.set(0.65, 0.2, 0.57);
// //   wheels[3].rotateY(Math.PI);
// //   suvBody.add(...wheels);
// //   scene.add(suvBody);
// // });

// async function loadCar() {
//   const loader = new GLTFLoader();
//   // code will not run next lines until and unless everything inside Promise.all is finished
//   const [...model] = await Promise.all([
//     loader.loadAsync('models/suv_body.glb'),
//     loader.loadAsync('models/suv_wheel.glb'),
//   ]);

//   const suvBody = model[0].scene;
//   const wheels = [
//     model[1].scene,
//     model[1].scene.clone(),
//     model[1].scene.clone(),
//     model[1].scene.clone(),
//   ];

//   wheels[0].position.set(-0.65, 0.2, -0.77);
//   wheels[1].position.set(0.65, 0.2, -0.77);
//   wheels[1].rotateY(Math.PI);
//   wheels[2].position.set(-0.65, 0.2, 0.57);
//   wheels[3].position.set(0.65, 0.2, 0.57);
//   wheels[3].rotateY(Math.PI);
//   suvBody.add(...wheels);

//   scene.add(suvBody);
// }
// await loadCar();

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* GLTF LOADER */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';
// import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';

// const scene = new THREE.Scene();

// // const light = new THREE.SpotLight(undefined, Math.PI * 1000);
// // light.position.set(5, 5, 5);
// // light.angle = Math.PI / 16;
// // light.castShadow = true;
// // scene.add(light);

// // const helper = new THREE.SpotLightHelper(light);
// // scene.add(helper);

// new HDRLoader().load('img/venice_sunset_1k.hdr', (texture) => {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = texture;
//   scene.background = texture;
//   scene.backgroundBlurriness = 0.15;
// });

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(1.5, 0.75, 2);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 0.8;
// renderer.shadowMap.enabled = true;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// // const textureLoader = new THREE.TextureLoader();
// // const textureFlare0 = textureLoader.load(
// //   'https://cdn.jsdelivr.net/gh/Sean-Bradley/First-Car-Shooter@main/dist/client/img/lensflare0.png',
// // );

// // const lensflare = new Lensflare();
// // lensflare.addElement(new LensflareElement(textureFlare0, 1000, 0));
// // light.add(lensflare);

// new GLTFLoader().load('models/suzanne_scene.glb', (gltf) => {
//   console.log(gltf);

//   const suzanne = gltf.scene.getObjectByName('Suzanne') as THREE.Mesh;
//   suzanne.castShadow = true;

//   // (
//   //   (suzanne.material as THREE.MeshStandardMaterial).map as THREE.Texture
//   // ).colorSpace = THREE.LinearSRGBColorSpace;

//   // @ts-ignore
//   suzanne.material.map.colorSpace = THREE.LinearSRGBColorSpace;

//   const plane = gltf.scene.getObjectByName('Plane') as THREE.Mesh;
//   plane.receiveShadow = true;

//   const spotLight = gltf.scene.getObjectByName('Spot') as THREE.SpotLight;
//   spotLight.intensity /= 500;
//   spotLight.castShadow = true;

//   const textureLoader = new THREE.TextureLoader();
//   const textureFlare0 = textureLoader.load(
//     'https://cdn.jsdelivr.net/gh/Sean-Bradley/First-Car-Shooter@main/dist/client/img/lensflare0.png',
//   );

//   const lensflare = new Lensflare();
//   lensflare.addElement(new LensflareElement(textureFlare0, 1000, 0));
//   spotLight.add(lensflare);

//   scene.add(gltf.scene);
// });

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* RAYCASTER */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const scene = new THREE.Scene();

// new HDRLoader().load('img/venice_sunset_1k.hdr', (texture) => {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = texture;
//   scene.background = texture;
//   scene.backgroundBlurriness = 0.5;
// });

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(0, 0, 3);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 0.8;
// renderer.shadowMap.enabled = true;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const raycaster = new THREE.Raycaster();
// const pickables: THREE.Mesh[] = [];
// const mouse = new THREE.Vector2();

// const arrowHelper = new THREE.ArrowHelper();
// arrowHelper.setLength(0.5);
// scene.add(arrowHelper);

// renderer.domElement.addEventListener('mousemove', (e) => {
//   mouse.set(
//     (e.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(e.clientY / renderer.domElement.clientHeight) * 2 + 1,
//   );

//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects(pickables, false);

//   if (intersects.length) {
//     // console.log(intersects);
//     // console.log(intersects[0].point);
//     // console.log(intersects[0].object.name + ' ' + intersects[0].distance);
//     // console.log((intersects[0].face as THREE.Face).normal);

//     const n = new THREE.Vector3();
//     n.copy((intersects[0].face as THREE.Face).normal);
//     n.transformDirection(intersects[0].object.matrixWorld);
//     arrowHelper.setDirection(n);
//     arrowHelper.position.copy(intersects[0].point);
//   }
// });

// renderer.domElement.addEventListener('dblclick', (e) => {
//   mouse.set(
//     (e.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(e.clientY / renderer.domElement.clientHeight) * 2 + 1,
//   );

//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects(pickables, false);

//   if (intersects.length) {
//     const n = new THREE.Vector3();
//     n.copy((intersects[0].face as THREE.Face).normal);
//     n.transformDirection(intersects[0].object.matrixWorld);

//     const cube = new THREE.Mesh(
//       new THREE.BoxGeometry(0.2, 0.2, 0.2),
//       new THREE.MeshStandardMaterial(),
//     );
//     cube.lookAt(n);
//     cube.position.copy(intersects[0].point);
//     cube.position.addScaledVector(n, 0.1001);
//     cube.castShadow = true;

//     scene.add(cube);
//     pickables.push(cube);
//   }
// });

// new GLTFLoader().load('models/suzanne_scene.glb', (gltf) => {
//   const suzanne = gltf.scene.getObjectByName('Suzanne') as THREE.Mesh;
//   suzanne.castShadow = true;
//   // @ts-ignore
//   suzanne.material.map.colorSpace = THREE.LinearSRGBColorSpace;
//   pickables.push(suzanne);

//   const plane = gltf.scene.getObjectByName('Plane') as THREE.Mesh;
//   plane.receiveShadow = true;
//   pickables.push(plane);

//   const spotLight = gltf.scene.getObjectByName('Spot') as THREE.SpotLight;
//   spotLight.intensity /= 500;
//   spotLight.castShadow = true;

//   scene.add(gltf.scene);
// });

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* ORBIT CONTROLS */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const scene = new THREE.Scene();

// const gridHelper = new THREE.GridHelper();
// gridHelper.position.y = -0.5;
// scene.add(gridHelper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.z = 2;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const info = document.createElement('div');
// info.style.cssText =
//   'position:absolute;bottom:10px;left:10px;color:white;font-family:monospace;font-size: 17px;filter: drop-shadow(1px 1px 1px #000000);';
// document.body.appendChild(info);

// const controls = new OrbitControls(camera, renderer.domElement);

// // camera.lookAt(0.5, 0.5, 0.5);
// // controls.target.set(0.5, 0.5, 0.5);
// // controls.update();

// controls.addEventListener(
//   'change',
//   () =>
//     (info.innerText =
//       'Polar Angle : ' +
//       ((controls.getPolarAngle() / -Math.PI) * 180 + 90).toFixed(2) +
//       '°\nAzimuth Angle : ' +
//       ((controls.getAzimuthalAngle() / Math.PI) * 180).toFixed(2) +
//       '°'),
// );
// // controls.addEventListener('start', () => console.log('Controls Start Event'));
// // controls.addEventListener('end', () => console.log('Controls End Event'));
// // controls.autoRotate = true;
// // controls.autoRotateSpeed = 10;
// // controls.enableDamping = true;
// // controls.dampingFactor = 0.01;
// // controls.listenToKeyEvents(window);
// // controls.keys = {
// //   LEFT: 'KeyA', // default 'ArrowLeft'
// //   UP: 'KeyW', // default 'ArrowUp'
// //   RIGHT: 'KeyD', // default 'ArrowRight'
// //   BOTTOM: 'KeyS', // default 'ArrowDown'
// // };
// // controls.mouseButtons = {
// //     LEFT: THREE.MOUSE.ROTATE,
// //     MIDDLE: THREE.MOUSE.DOLLY,
// //     RIGHT: THREE.MOUSE.PAN
// // }
// // controls.touches = {
// //     ONE: THREE.TOUCH.ROTATE,
// //     TWO: THREE.TOUCH.DOLLY_PAN
// // }
// // controls.screenSpacePanning = true;
// // controls.minAzimuthAngle = 0;
// // controls.maxAzimuthAngle = Math.PI / 2;
// // controls.minPolarAngle = Math.PI / 4;
// // controls.maxPolarAngle = Math.PI - Math.PI / 4;
// // controls.maxDistance = 4;
// // controls.minDistance = 1.5;
// // controls.enabled = false
// // controls.enablePan = false
// // controls.enableRotate = false
// // controls.enableZoom = false

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshNormalMaterial({ wireframe: true });

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   //   info.innerText =
//   //     'Polar Angle : ' +
//   //     ((controls.getPolarAngle() / -Math.PI) * 180 + 90).toFixed(2) +
//   //     '°\nAzimuth Angle : ' +
//   //     ((controls.getAzimuthalAngle() / Math.PI) * 180).toFixed(2) +
//   //     '°';

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* LERP */

// import './style.css';
// import {
//   Mesh,
//   Color,
//   MeshStandardMaterial,
//   BufferGeometry,
//   Raycaster,
//   Scene,
//   SpotLight,
//   PerspectiveCamera,
//   WebGLRenderer,
//   VSMShadowMap,
//   BoxGeometry,
//   CylinderGeometry,
//   TetrahedronGeometry,
//   PlaneGeometry,
//   Vector2,
//   Clock,
//   EquirectangularReflectionMapping,
//   MeshPhongMaterial,
//   Vector3,
//   MathUtils,
// } from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';

// function lerp(from: number, to: number, speed: number) {
//   const amount = (1 - speed) * from + speed * to;
//   return Math.abs(from - to) < 0.001 ? to : amount;
// }

// class Pickable extends Mesh {
//   // extended default mesh with custom props
//   hovered = false;
//   clicked = false;
//   colorTo: Color;
//   defaultColor: Color;
//   geometry: BufferGeometry;
//   material: MeshStandardMaterial;
//   v = new Vector3();

//   constructor(
//     geometry: BufferGeometry,
//     material: MeshStandardMaterial,
//     colorTo: Color,
//   ) {
//     super();
//     this.geometry = geometry;
//     this.material = material;
//     this.colorTo = colorTo;
//     this.defaultColor = material.color.clone();
//     this.castShadow = true;
//   }

//   // can use in-built lerp function of obj, or default lerp function from math utils, or custom lerp function
//   update(delta: number) {
//     //this.rotation.x += delta / 2
//     //this.rotation.y += delta / 2

//     // this.clicked
//     //   ? (this.position.y = MathUtils.lerp(this.position.y, 1, delta * 5))
//     //   : (this.position.y = MathUtils.lerp(this.position.y, 0, delta * 5));

//     //console.log(this.position.y)

//     this.clicked
//       ? (this.position.y = lerp(this.position.y, 1, delta * 5))
//       : (this.position.y = lerp(this.position.y, 0, delta * 5));

//     // this.hovered
//     //   ? this.material.color.lerp(this.colorTo, delta * 10)
//     //   : this.material.color.lerp(this.defaultColor, delta * 10);

//     this.hovered
//       ? (this.material.color.lerp(this.colorTo, delta * 10), // material.color has its own lerp also
//         (this.material.roughness = lerp(
//           this.material.roughness,
//           0,
//           delta * 10,
//         )),
//         (this.material.metalness = lerp(
//           this.material.metalness,
//           1,
//           delta * 10,
//         )))
//       : (this.material.color.lerp(this.defaultColor, delta),
//         (this.material.roughness = lerp(this.material.roughness, 1, delta)),
//         (this.material.metalness = lerp(this.material.metalness, 0, delta)));

//     // this.clicked
//     //   ? this.scale.set(
//     //       MathUtils.lerp(this.scale.x, 1.5, delta * 5),
//     //       MathUtils.lerp(this.scale.y, 1.5, delta * 5),
//     //       MathUtils.lerp(this.scale.z, 1.5, delta * 5),
//     //     )
//     //   : this.scale.set(
//     //       MathUtils.lerp(this.scale.x, 1.0, delta),
//     //       MathUtils.lerp(this.scale.y, 1.0, delta),
//     //       MathUtils.lerp(this.scale.z, 1.0, delta),
//     //     );

//     // this.clicked
//     //   ? this.scale.set(
//     //       lerp(this.scale.x, 1.5, delta * 5),
//     //       lerp(this.scale.y, 1.5, delta * 5),
//     //       lerp(this.scale.z, 1.5, delta * 5),
//     //     )
//     //   : this.scale.set(
//     //       lerp(this.scale.x, 1.0, delta),
//     //       lerp(this.scale.y, 1.0, delta),
//     //       lerp(this.scale.z, 1.0, delta),
//     //     );

//     this.clicked ? this.v.set(1.5, 1.5, 1.5) : this.v.set(1.0, 1.0, 1.0);
//     this.scale.lerp(this.v, delta * 5);
//   }
// }

// const scene = new Scene();

// const spotLight = new SpotLight(0xffffff, 500);
// spotLight.position.set(5, 5, 5);
// spotLight.angle = 0.3;
// spotLight.penumbra = 0.5;
// spotLight.castShadow = true;
// spotLight.shadow.radius = 20;
// spotLight.shadow.blurSamples = 20;
// spotLight.shadow.camera.far = 20;
// spotLight.shadow.bias = -0.002;
// scene.add(spotLight);

// await new HDRLoader().loadAsync('img/venice_sunset_1k.hdr').then((texture) => {
//   texture.mapping = EquirectangularReflectionMapping;
//   scene.environment = texture;
// });

// const camera = new PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(0, 2, 4);

// const renderer = new WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = VSMShadowMap;
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.maxPolarAngle = Math.PI / 2 + Math.PI / 16; // ~ 100 degrees

// const raycaster = new Raycaster();
// const pickables: Pickable[] = []; // used in the raycaster intersects methods
// let intersects;
// const mouse = new Vector2();

// renderer.domElement.addEventListener('pointerdown', (e) => {
//   mouse.set(
//     (e.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(e.clientY / renderer.domElement.clientHeight) * 2 + 1,
//   );

//   raycaster.setFromCamera(mouse, camera);

//   intersects = raycaster.intersectObjects(pickables, false);

//   // toggles `clicked` property for only the Pickable closest to the camera
//   intersects.length &&
//     ((intersects[0].object as Pickable).clicked = !(
//       intersects[0].object as Pickable
//     ).clicked);

//   // toggles `clicked` property for all overlapping Pickables detected by the raycaster at the same time
//   // intersects.forEach((i) => {
//   //   ;(i.object as Pickable).clicked = !(i.object as Pickable).clicked
//   // })
// });

// renderer.domElement.addEventListener('mousemove', (e) => {
//   mouse.set(
//     (e.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(e.clientY / renderer.domElement.clientHeight) * 2 + 1,
//   );

//   raycaster.setFromCamera(mouse, camera);

//   intersects = raycaster.intersectObjects(pickables, false);

//   pickables.forEach((p) => (p.hovered = false));

//   intersects.length && ((intersects[0].object as Pickable).hovered = true);
// });

// const cylinder = new Pickable(
//   new CylinderGeometry(0.66, 0.66),
//   new MeshStandardMaterial({ color: 0x888888 }),
//   new Color(0x008800),
// );
// scene.add(cylinder);
// pickables.push(cylinder);

// const cube = new Pickable(
//   new BoxGeometry(),
//   new MeshStandardMaterial({ color: 0x888888 }),
//   new Color(0xff2200),
// );
// cube.position.set(-2, 0, 0);
// scene.add(cube);
// pickables.push(cube);

// const pyramid = new Pickable(
//   new TetrahedronGeometry(),
//   new MeshStandardMaterial({ color: 0x888888 }),
//   new Color(0x0088ff),
// );
// pyramid.position.set(2, 0, 0);
// scene.add(pyramid);
// pickables.push(pyramid);

// const floor = new Mesh(new PlaneGeometry(20, 20), new MeshPhongMaterial());
// floor.rotateX(-Math.PI / 2);
// floor.position.y = -1.25;
// floor.receiveShadow = true;
// //floor.material.envMapIntensity = 0
// scene.add(floor);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const clock = new Clock();
// let delta = 0;

// function animate() {
//   requestAnimationFrame(animate);

//   delta = clock.getDelta();

//   pickables.forEach((p) => {
//     p.update(delta);
//   });

//   controls.update();

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* JEASINGS */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';
// import JEASINGS from 'jeasings';

// const scene = new THREE.Scene();

// const gridHelper = new THREE.GridHelper();
// gridHelper.position.y = -1;
// scene.add(gridHelper);

// await new HDRLoader().loadAsync('img/venice_sunset_1k.hdr').then((texture) => {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = texture;
// });

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(0, 1, 4);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 0.8;
// renderer.shadowMap.enabled = true;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   //render() //this line is unnecessary if you are re-rendering within the animation loop
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// //controls.addEventListener('change', render) //this line is unnecessary if you are re-rendering within the animation loop

// let suzanne: THREE.Mesh, plane: THREE.Mesh;

// new GLTFLoader().load('models/suzanne_scene.glb', (gltf) => {
//   suzanne = gltf.scene.getObjectByName('Suzanne') as THREE.Mesh;
//   suzanne.castShadow = true;
//   (
//     (suzanne.material as THREE.MeshStandardMaterial).map as THREE.Texture
//   ).colorSpace = THREE.LinearSRGBColorSpace;

//   plane = gltf.scene.getObjectByName('Plane') as THREE.Mesh;
//   plane.scale.set(50, 1, 50);
//   (plane.material as THREE.MeshStandardMaterial).envMap = scene.environment; // since three@163, we need to set `envMap` before changing `envMapIntensity` has any effect.
//   (plane.material as THREE.MeshStandardMaterial).envMapIntensity = 0.05;
//   plane.receiveShadow = true;

//   const spotLight = gltf.scene.getObjectByName('Spot') as THREE.SpotLight;
//   spotLight.intensity /= 500;
//   spotLight.castShadow = true;
//   spotLight.target = suzanne;

//   scene.add(gltf.scene);

//   //render()
// });

// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// renderer.domElement.addEventListener('dblclick', (e) => {
//   mouse.set(
//     (e.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(e.clientY / renderer.domElement.clientHeight) * 2 + 1,
//   );

//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObject(plane, false);

//   if (intersects.length) {
//     const p = intersects[0].point;

//     bounceTo(p);
//   }
// });

// const bounceTo = (p: THREE.Vector3) => {
//   // JEasing the controls.target
//   // new JEASINGS.JEasing(controls.target)
//   //   .to(
//   //     {
//   //       x: p.x,
//   //       y: p.y,
//   //       z: p.z,
//   //     },
//   //     500,
//   //   )
//   //   //.delay(1000)
//   //   //.easing(JEASINGS.Quintic.InOut)
//   //   //.onUpdate(() => render())
//   //   .start();

//   // slding x,z
//   new JEASINGS.JEasing(suzanne.position)
//     .to(
//       {
//         x: p.x,
//         z: p.z,
//       },
//       500,
//     )
//     .start();

//   // going up
//   new JEASINGS.JEasing(suzanne.position)
//     .to(
//       {
//         y: p.y + 3,
//       },
//       250,
//     )
//     .easing(JEASINGS.Cubic.Out)
//     .start()
//     .onComplete(() => {
//       // going down
//       new JEASINGS.JEasing(suzanne.position)
//         .to(
//           {
//             y: p.y + 1,
//           },
//           250,
//         )
//         //.delay(250)
//         .easing(JEASINGS.Bounce.Out)
//         .start();
//     });
// };

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   JEASINGS.update();

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

/* GLTF ANIMATIONS */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';

// const scene = new THREE.Scene();

// const gridHelper = new THREE.GridHelper(100, 100);
// scene.add(gridHelper);

// new HDRLoader().load('img/venice_sunset_1k.hdr', (texture) => {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = texture;
//   scene.background = texture;
//   scene.backgroundBlurriness = 1;
// });

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(0.1, 1, 1);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.set(0, 0.75, 0);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function lerp(from: number, to: number, speed: number) {
//   const amount = (1 - speed) * from + speed * to;
//   return Math.abs(from - to) < 0.001 ? to : amount;
// }

// let mixer: THREE.AnimationMixer;
// let animationActions: { [key: string]: THREE.AnimationAction } = {};
// let activeAction: THREE.AnimationAction;
// let speed = 0,
//   toSpeed = 0;

// // new GLTFLoader().load('models/ninja$@walk.glb', (gltf) => {
// //   mixer = new THREE.AnimationMixer(gltf.scene);

// //   mixer.clipAction(gltf.animations[1]).play();

// //   scene.add(gltf.scene);
// // });

// async function loadEve() {
//   const loader = new GLTFLoader();
//   const [ninja, idle, run] = await Promise.all([
//     loader.loadAsync('models/ninja$@walk.glb'),
//     loader.loadAsync('models/ninja@idle.glb'),
//     loader.loadAsync('models/ninja@run.glb'),
//   ]);

//   mixer = new THREE.AnimationMixer(ninja.scene); // new animation mixer for each different model you use

//   //   mixer.clipAction(idle.animations[0]).play();

//   animationActions['idle'] = mixer.clipAction(idle.animations[0]);
//   animationActions['walk'] = mixer.clipAction(ninja.animations[1]);
//   animationActions['run'] = mixer.clipAction(run.animations[0]);

//   animationActions['idle'].play();
//   activeAction = animationActions['idle'];

//   scene.add(ninja.scene);
// }
// await loadEve();

// const keyMap: { [key: string]: boolean } = {};

// const onDocumentKey = (e: KeyboardEvent) => {
//   keyMap[e.code] = e.type === 'keydown';
// };
// document.addEventListener('keydown', onDocumentKey, false);
// document.addEventListener('keyup', onDocumentKey, false);

// const clock = new THREE.Clock();
// let delta = 0;

// function animate() {
//   requestAnimationFrame(animate);

//   delta = clock.getDelta();

//   controls.update();

//   mixer.update(delta);

//   if (keyMap['KeyW']) {
//     if (keyMap['ShiftLeft']) {
//       //run
//       if (activeAction != animationActions['run']) {
//         activeAction.fadeOut(0.5);
//         animationActions['run'].reset().fadeIn(0.25).play();
//         activeAction = animationActions['run'];
//         toSpeed = 4;
//       }
//     } else {
//       //walk
//       if (activeAction != animationActions['walk']) {
//         activeAction.fadeOut(0.5);
//         animationActions['walk'].reset().fadeIn(0.25).play();
//         activeAction = animationActions['walk'];
//         toSpeed = 1;
//       }
//     }
//   } else {
//     //idle
//     if (activeAction != animationActions['idle']) {
//       activeAction.fadeOut(0.5);
//       animationActions['idle'].reset().fadeIn(0.25).play();
//       activeAction = animationActions['idle'];
//       toSpeed = 0;
//     }
//   }

//   speed = lerp(speed, toSpeed, delta * 10);
//   gridHelper.position.z -= speed * delta;
//   gridHelper.position.z = gridHelper.position.z % 10;

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* DRACO LOADER */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';

// class CharacterController {
//   keyMap: { [key: string]: boolean } = {};
//   wait = false;
//   animationActions: { [key: string]: THREE.AnimationAction };
//   activeAction = '';
//   speed = 0;

//   constructor(animationActions: { [key: string]: THREE.AnimationAction }) {
//     this.animationActions = animationActions;
//     document.addEventListener('keydown', this.onDocumentKey);
//     document.addEventListener('keyup', this.onDocumentKey);
//   }

//   onDocumentKey = (e: KeyboardEvent) => {
//     this.keyMap[e.code] = e.type === 'keydown';
//   };

//   dispose() {
//     document.removeEventListener('keydown', this.onDocumentKey);
//     document.removeEventListener('keyup', this.onDocumentKey);
//   }

//   setAction(action: string) {
//     if (this.activeAction != action) {
//       this.animationActions[this.activeAction].fadeOut(0.25);
//       this.animationActions[action].reset().fadeIn(0.25).play();
//       this.activeAction = action;

//       switch (action) {
//         case 'walk':
//           this.speed = 1;
//           break;
//         case 'run':
//         case 'jump':
//           this.speed = 4;
//           break;
//         case 'pose':
//         case 'idle':
//           this.speed = 0;
//           break;
//       }
//     }
//   }

//   update() {
//     if (!this.wait) {
//       let actionAssigned = false;

//       if (this.keyMap['Space']) {
//         this.setAction('jump');
//         actionAssigned = true;
//         this.wait = true; // blocks further actions until jump is finished
//         setTimeout(() => (this.wait = false), 1000);
//       }

//       if (!actionAssigned && this.keyMap['KeyW'] && this.keyMap['ShiftLeft']) {
//         this.setAction('run');
//         actionAssigned = true;
//       }

//       if (!actionAssigned && this.keyMap['KeyW']) {
//         this.setAction('walk');
//         actionAssigned = true;
//       }

//       if (!actionAssigned && this.keyMap['KeyQ']) {
//         this.setAction('pose');
//         actionAssigned = true;
//       }

//       !actionAssigned && this.setAction('idle');
//     }
//   }
// }

// class Grid {
//   gridHelper = new THREE.GridHelper(100, 100);
//   speed = 0;

//   constructor(scene: THREE.Scene) {
//     scene.add(this.gridHelper);
//   }

//   lerp(from: number, to: number, speed: number) {
//     const amount = (1 - speed) * from + speed * to;
//     return Math.abs(from - to) < 0.001 ? to : amount;
//   }

//   update(delta: number, toSpeed: number) {
//     this.speed = this.lerp(this.speed, toSpeed, delta * 10);
//     this.gridHelper.position.z -= this.speed * delta;
//     this.gridHelper.position.z = this.gridHelper.position.z % 10;
//   }
// }

// const scene = new THREE.Scene();

// new HDRLoader().load('img/venice_sunset_1k.hdr', (texture) => {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = texture;
//   scene.background = texture;
//   scene.backgroundBlurriness = 1;
// });

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(0.1, 1, 1);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.set(0, 0.75, 0);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// let mixer: THREE.AnimationMixer;
// let animationActions: { [key: string]: THREE.AnimationAction } = {};

// const characterController = new CharacterController(animationActions);
// const grid = new Grid(scene);

// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/'); // loading from a CDN
// //dracoLoader.setDecoderPath('jsm/libs/draco/') // loading from own webserver(put in public folder)

// const glTFLoader = new GLTFLoader();
// glTFLoader.setDRACOLoader(dracoLoader);

// // glTFLoader.load('models/ninja$@walk_compressed.glb', (gltf) => {
// //   mixer = new THREE.AnimationMixer(gltf.scene);

// //   mixer.clipAction(gltf.animations[0]).play();

// //   scene.add(gltf.scene);
// // });

// async function loadEve() {
//   const [ninja, idle, run, jump, pose] = await Promise.all([
//     glTFLoader.loadAsync('models/ninja$@walk_compressed.glb'),
//     glTFLoader.loadAsync('models/ninja@idle.glb'),
//     glTFLoader.loadAsync('models/ninja@run.glb'),
//     glTFLoader.loadAsync('models/ninja@jump.glb'),
//     glTFLoader.loadAsync('models/ninja@pose.glb'),
//   ]);

//   mixer = new THREE.AnimationMixer(ninja.scene);

//   animationActions['idle'] = mixer.clipAction(idle.animations[0]);
//   animationActions['walk'] = mixer.clipAction(ninja.animations[1]);
//   animationActions['run'] = mixer.clipAction(run.animations[0]);
//   animationActions['jump'] = mixer.clipAction(jump.animations[0]);
//   animationActions['pose'] = mixer.clipAction(pose.animations[0]);

//   animationActions['idle'].play();
//   characterController.activeAction = 'idle';

//   scene.add(ninja.scene);
// }
// await loadEve();

// const clock = new THREE.Clock();
// let delta = 0;

// function animate() {
//   requestAnimationFrame(animate);

//   delta = clock.getDelta();

//   controls.update();

//   characterController.update();

//   mixer && mixer.update(delta);

//   grid.update(delta, characterController.speed);

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* RAPIER W/DEBUG */

// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// import RAPIER from '@dimforge/rapier3d-compat';

// class RapierDebugRenderer {
//   mesh;
//   world;
//   enabled = true;

//   constructor(scene: THREE.Scene, world: RAPIER.World) {
//     this.world = world;
//     this.mesh = new THREE.LineSegments(
//       new THREE.BufferGeometry(),
//       new THREE.LineBasicMaterial({ color: 0xffffff, vertexColors: true }),
//     );
//     this.mesh.frustumCulled = false;
//     scene.add(this.mesh);
//   }

//   update() {
//     if (this.enabled) {
//       const { vertices, colors } = this.world.debugRender();
//       this.mesh.geometry.setAttribute(
//         'position',
//         new THREE.BufferAttribute(vertices, 3),
//       );
//       this.mesh.geometry.setAttribute(
//         'color',
//         new THREE.BufferAttribute(colors, 4),
//       );
//       this.mesh.visible = true;
//     } else {
//       this.mesh.visible = false;
//     }
//   }
// }

// class Car {
//   dynamicBodies: [THREE.Object3D, RAPIER.RigidBody][] = [];

//   constructor() {
//     // now calling `loadCar` outside of constructor, since async await won't wait if called in a constructor.
//   }

//   async loadCar(scene: THREE.Scene, position: [number, number, number]) {
//     await new GLTFLoader().loadAsync('models/sedan.glb').then((gltf) => {
//       // console.log(gltf);
//       const carMesh = gltf.scene.getObjectByName('body') as THREE.Group;
//       carMesh.position.set(0, 0, 0);
//       carMesh.traverse((o) => {
//         o.castShadow = true;
//       });

//       const wheelBLMesh = gltf.scene.getObjectByName(
//         'wheel-back-left',
//       ) as THREE.Group;
//       const wheelBRMesh = gltf.scene.getObjectByName(
//         'wheel-back-right',
//       ) as THREE.Group;
//       const wheelFLMesh = gltf.scene.getObjectByName(
//         'wheel-front-left',
//       ) as THREE.Group;
//       const wheelFRMesh = gltf.scene.getObjectByName(
//         'wheel-front-right',
//       ) as THREE.Group;
//       wheelBLMesh.position.set(0, 0, 0);
//       wheelBRMesh.position.set(0, 0, 0);
//       wheelFLMesh.position.set(0, 0, 0);
//       wheelFRMesh.position.set(0, 0, 0);

//       //scene.add(gltf.scene)
//       scene.add(carMesh, wheelBLMesh, wheelBRMesh, wheelFLMesh, wheelFRMesh);

//       const carBody = world.createRigidBody(
//         RAPIER.RigidBodyDesc.dynamic()
//           .setTranslation(...position)
//           .setCanSleep(false),
//       );
//       const wheelBLBody = world.createRigidBody(
//         RAPIER.RigidBodyDesc.dynamic()
//           .setTranslation(-1 + position[0], 1 + position[1], 1 + position[2])
//           .setCanSleep(false),
//       );
//       const wheelBRBody = world.createRigidBody(
//         RAPIER.RigidBodyDesc.dynamic()
//           .setTranslation(1 + position[0], 1 + position[1], 1 + position[2])
//           .setCanSleep(false),
//       );
//       const wheelFLBody = world.createRigidBody(
//         RAPIER.RigidBodyDesc.dynamic()
//           .setTranslation(-1 + position[0], 1 + position[1], -1 + position[2])
//           .setCanSleep(false),
//       );
//       const wheelFRBody = world.createRigidBody(
//         RAPIER.RigidBodyDesc.dynamic()
//           .setTranslation(1 + position[0], 1 + position[1], -1 + position[2])
//           .setCanSleep(false),
//       );

//       // create a convexhull from all meshes in the carMesh group
//       const v = new THREE.Vector3();
//       let positions: number[] = [];
//       carMesh.updateMatrixWorld(true); // ensure world matrix is up to date
//       carMesh.traverse((o) => {
//         if (o.type === 'Mesh') {
//           const positionAttribute = (o as THREE.Mesh).geometry.getAttribute(
//             'position',
//           );
//           for (let i = 0, l = positionAttribute.count; i < l; i++) {
//             v.fromBufferAttribute(positionAttribute, i);
//             v.applyMatrix4((o.parent as THREE.Object3D).matrixWorld);
//             positions.push(...v);
//           }
//         }
//       });

//       // create shapes for carBody and wheelBodies
//       const carShape = (
//         RAPIER.ColliderDesc.convexHull(
//           new Float32Array(positions),
//         ) as RAPIER.ColliderDesc
//       )
//         .setMass(1)
//         .setRestitution(0.5);
//       const wheelBLShape = RAPIER.ColliderDesc.cylinder(0.1, 0.3)
//         .setRotation(
//           new THREE.Quaternion().setFromAxisAngle(
//             new THREE.Vector3(0, 0, 1),
//             -Math.PI / 2,
//           ),
//         )
//         .setTranslation(-0.2, 0, 0)
//         .setRestitution(0.5);
//       const wheelBRShape = RAPIER.ColliderDesc.cylinder(0.1, 0.3)
//         .setRotation(
//           new THREE.Quaternion().setFromAxisAngle(
//             new THREE.Vector3(0, 0, 1),
//             Math.PI / 2,
//           ),
//         )
//         .setTranslation(0.2, 0, 0)
//         .setRestitution(0.5);
//       const wheelFLShape = RAPIER.ColliderDesc.cylinder(0.1, 0.3)
//         .setRotation(
//           new THREE.Quaternion().setFromAxisAngle(
//             new THREE.Vector3(0, 0, 1),
//             Math.PI / 2,
//           ),
//         )
//         .setTranslation(-0.2, 0, 0)
//         .setRestitution(0.5);
//       const wheelFRShape = RAPIER.ColliderDesc.cylinder(0.1, 0.3)
//         .setRotation(
//           new THREE.Quaternion().setFromAxisAngle(
//             new THREE.Vector3(0, 0, 1),
//             Math.PI / 2,
//           ),
//         )
//         .setTranslation(0.2, 0, 0)
//         .setRestitution(0.5);

//       // create world collider
//       world.createCollider(carShape, carBody);
//       world.createCollider(wheelBLShape, wheelBLBody);
//       world.createCollider(wheelBRShape, wheelBRBody);
//       world.createCollider(wheelFLShape, wheelFLBody);
//       world.createCollider(wheelFRShape, wheelFRBody);

//       // attach wheels to car using Rapier revolute joints
//       world.createImpulseJoint(
//         RAPIER.JointData.revolute(
//           new RAPIER.Vector3(-0.55, 0, 0.63),
//           new RAPIER.Vector3(0, 0, 0),
//           new RAPIER.Vector3(-1, 0, 0),
//         ),
//         carBody,
//         wheelBLBody,
//         true,
//       );
//       world.createImpulseJoint(
//         RAPIER.JointData.revolute(
//           new RAPIER.Vector3(0.55, 0, 0.63),
//           new RAPIER.Vector3(0, 0, 0),
//           new RAPIER.Vector3(1, 0, 0),
//         ),
//         carBody,
//         wheelBRBody,
//         true,
//       );
//       world.createImpulseJoint(
//         RAPIER.JointData.revolute(
//           new RAPIER.Vector3(-0.55, 0, -0.63),
//           new RAPIER.Vector3(0, 0, 0),
//           new RAPIER.Vector3(-1, 0, 0),
//         ),
//         carBody,
//         wheelFLBody,
//         true,
//       );
//       world.createImpulseJoint(
//         RAPIER.JointData.revolute(
//           new RAPIER.Vector3(0.55, 0, -0.63),
//           new RAPIER.Vector3(0, 0, 0),
//           new RAPIER.Vector3(1, 0, 0),
//         ),
//         carBody,
//         wheelFRBody,
//         true,
//       );

//       // update local dynamicBodies so mesh positions and quaternions are updated with the physics world info
//       this.dynamicBodies.push([carMesh, carBody]);
//       this.dynamicBodies.push([wheelBLMesh, wheelBLBody]);
//       this.dynamicBodies.push([wheelBRMesh, wheelBRBody]);
//       this.dynamicBodies.push([wheelFLMesh, wheelFLBody]);
//       this.dynamicBodies.push([wheelFRMesh, wheelFRBody]);
//     });
//   }

//   update() {
//     for (let i = 0, n = this.dynamicBodies.length; i < n; i++) {
//       this.dynamicBodies[i][0].position.copy(
//         this.dynamicBodies[i][1].translation(),
//       );
//       this.dynamicBodies[i][0].quaternion.copy(
//         this.dynamicBodies[i][1].rotation(),
//       );
//     }
//   }
// }

// await RAPIER.init(); // This line is only needed if using the compat version
// const gravity = new RAPIER.Vector3(0.0, -9.81, 0.0);
// const world = new RAPIER.World(gravity);
// const dynamicBodies: [THREE.Object3D, RAPIER.RigidBody][] = [];

// const scene = new THREE.Scene();

// const rapierDebugRenderer = new RapierDebugRenderer(scene, world);

// const light1 = new THREE.SpotLight(undefined, Math.PI * 10);
// light1.position.set(2.5, 5, 5);
// light1.angle = Math.PI / 3;
// light1.penumbra = 0.5;
// light1.castShadow = true;
// light1.shadow.blurSamples = 10;
// light1.shadow.radius = 5;
// light1.shadow.bias = -0.002;
// scene.add(light1);

// const light2 = light1.clone();
// light2.position.set(-2.5, 5, 5);
// scene.add(light2);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// camera.position.set(0, 2, 5);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.VSMShadowMap;
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.y = 1;

// // Cuboid Collider
// const cubeMesh = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshNormalMaterial(),
// );
// cubeMesh.castShadow = true;
// scene.add(cubeMesh);
// const cubeBody = world.createRigidBody(
//   RAPIER.RigidBodyDesc.dynamic().setTranslation(-5, 5, 0).setCanSleep(false),
// );
// const cubeShape = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5)
//   .setMass(1)
//   .setRestitution(0.5);
// world.createCollider(cubeShape, cubeBody);
// dynamicBodies.push([cubeMesh, cubeBody]);

// // Ball Collider
// const sphereMesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial(),
// );
// sphereMesh.castShadow = true;
// scene.add(sphereMesh);
// const sphereBody = world.createRigidBody(
//   RAPIER.RigidBodyDesc.dynamic().setTranslation(-2.5, 5, 0).setCanSleep(false),
// );
// const sphereShape = RAPIER.ColliderDesc.ball(1).setMass(1).setRestitution(0.5);
// world.createCollider(sphereShape, sphereBody);
// dynamicBodies.push([sphereMesh, sphereBody]);

// // Cylinder Collider
// const cylinderMesh = new THREE.Mesh(
//   new THREE.CylinderGeometry(1, 1, 2, 16),
//   new THREE.MeshNormalMaterial(),
// );
// cylinderMesh.castShadow = true;
// scene.add(cylinderMesh);
// const cylinderBody = world.createRigidBody(
//   RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 5, 0).setCanSleep(false),
// );
// const cylinderShape = RAPIER.ColliderDesc.cylinder(1, 1)
//   .setMass(1)
//   .setRestitution(0.5);
// world.createCollider(cylinderShape, cylinderBody);
// dynamicBodies.push([cylinderMesh, cylinderBody]);

// // ConvexHull Collider
// const icosahedronMesh = new THREE.Mesh(
//   new THREE.IcosahedronGeometry(1, 0),
//   new THREE.MeshNormalMaterial(),
// );
// icosahedronMesh.castShadow = true;
// scene.add(icosahedronMesh);
// const icosahedronBody = world.createRigidBody(
//   RAPIER.RigidBodyDesc.dynamic().setTranslation(2.5, 5, 0).setCanSleep(false),
// );
// const points = new Float32Array(
//   icosahedronMesh.geometry.attributes.position.array,
// );
// const icosahedronShape = (
//   RAPIER.ColliderDesc.convexHull(points) as RAPIER.ColliderDesc
// )
//   .setMass(1)
//   .setRestitution(0.5);
// world.createCollider(icosahedronShape, icosahedronBody);
// dynamicBodies.push([icosahedronMesh, icosahedronBody]);

// // Trimesh Collider
// const torusKnotMesh = new THREE.Mesh(
//   new THREE.TorusKnotGeometry(),
//   new THREE.MeshNormalMaterial(),
// );
// torusKnotMesh.castShadow = true;
// scene.add(torusKnotMesh);
// const torusKnotBody = world.createRigidBody(
//   RAPIER.RigidBodyDesc.dynamic().setTranslation(5, 5, 0),
// );
// const vertices = new Float32Array(
//   torusKnotMesh.geometry.attributes.position.array,
// );
// let indices = new Uint32Array(
//   (torusKnotMesh.geometry.index as THREE.BufferAttribute).array,
// );
// const torusKnotShape = (
//   RAPIER.ColliderDesc.trimesh(vertices, indices) as RAPIER.ColliderDesc
// )
//   .setMass(1)
//   .setRestitution(0.5);
// world.createCollider(torusKnotShape, torusKnotBody);
// dynamicBodies.push([torusKnotMesh, torusKnotBody]);

// // the floor (using a cuboid)
// const floorMesh = new THREE.Mesh(
//   new THREE.BoxGeometry(50, 1, 50),
//   new THREE.MeshPhongMaterial(),
// );
// floorMesh.receiveShadow = true;
// floorMesh.position.y = -1;
// scene.add(floorMesh);
// const floorBody = world.createRigidBody(
//   RAPIER.RigidBodyDesc.fixed().setTranslation(0, -1, 0),
// );
// const floorShape = RAPIER.ColliderDesc.cuboid(25, 0.5, 25);
// world.createCollider(floorShape, floorBody);

// // creating a shape from a loaded geometry. (Using OBJLoader)
// new OBJLoader().loadAsync('models/suzanne.obj').then((object) => {
//   //console.log(object)
//   scene.add(object);
//   const suzanneMesh = object.getObjectByName('Suzanne') as THREE.Mesh;
//   suzanneMesh.material = new THREE.MeshNormalMaterial();
//   suzanneMesh.castShadow = true;

//   const suzanneBody = world.createRigidBody(
//     RAPIER.RigidBodyDesc.dynamic().setTranslation(-1, 10, 0).setCanSleep(false),
//   );
//   const points = new Float32Array(
//     suzanneMesh.geometry.attributes.position.array,
//   );
//   const suzanneShape = (
//     RAPIER.ColliderDesc.convexHull(points) as RAPIER.ColliderDesc
//   )
//     .setMass(1)
//     .setRestitution(0.5);
//   world.createCollider(suzanneShape, suzanneBody);
//   dynamicBodies.push([suzanneMesh, suzanneBody]);
// });

// const car = new Car();
// await car.loadCar(scene, [0, 2, -5]); // now calling `loadCar` outside of constructor, since async await won't wait if called in a constructor

// // const car2 = new Car();
// // await car2.loadCar(scene, [0, 2, -2]);

// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// renderer.domElement.addEventListener('click', (e) => {
//   mouse.set(
//     (e.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(e.clientY / renderer.domElement.clientHeight) * 2 + 1,
//   );

//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects(
//     dynamicBodies.flatMap((a) => a[0]),
//     false,
//   );

//   if (intersects.length) {
//     dynamicBodies.forEach((b) => {
//       b[0] === intersects[0].object &&
//         b[1].applyImpulse(new RAPIER.Vector3(0, 10, 0), true);
//     });
//   }
// });

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const gui = new GUI();
// gui.add(rapierDebugRenderer, 'enabled').name('Rapier Degug Renderer');

// const physicsFolder = gui.addFolder('Physics');
// physicsFolder.add(world.gravity, 'x', -10.0, 10.0, 0.1);
// physicsFolder.add(world.gravity, 'y', -10.0, 10.0, 0.1);
// physicsFolder.add(world.gravity, 'z', -10.0, 10.0, 0.1);

// const timer = new THREE.Timer();
// let delta;

// function animate() {
//   requestAnimationFrame(animate);

//   delta = timer.update().getDelta();
//   world.timestep = Math.min(delta, 0.1);
//   world.step();

//   for (let i = 0, n = dynamicBodies.length; i < n; i++) {
//     dynamicBodies[i][0].position.copy(dynamicBodies[i][1].translation());
//     dynamicBodies[i][0].quaternion.copy(dynamicBodies[i][1].rotation());
//   }

//   car.update();
//   //car2.update()

//   rapierDebugRenderer.update();

//   controls.update();

//   renderer.render(scene, camera);

//   stats.update();
// }

// animate();

/* POINTER LOCK CONTROLS */

import './style.css';
import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(0, 1, 2);

const light = new THREE.DirectionalLight(0xebfeff, Math.PI);
light.castShadow = true;
light.shadow.camera.far = 250;
light.shadow.camera.left = -50;
light.shadow.camera.right = 50;
light.shadow.camera.top = 50;
light.shadow.camera.bottom = -50;
light.shadow.blurSamples = 10;
light.shadow.radius = 5;
light.target = camera;
scene.add(light);

const lightOffset = new THREE.Vector3(100, 30, 70);

const lightHelper = new THREE.CameraHelper(light.shadow.camera);
lightHelper.visible = false;
scene.add(lightHelper);

const textureLoader = new THREE.TextureLoader();
const textureFlare0 = textureLoader.load('img/lensflare0.png');
const textureFlare3 = textureLoader.load('img/lensflare3.png');

const lensflare = new Lensflare();
lensflare.addElement(new LensflareElement(textureFlare0, 1000, 0));
lensflare.addElement(new LensflareElement(textureFlare3, 500, 0.2));
lensflare.addElement(new LensflareElement(textureFlare3, 250, 0.8));
lensflare.addElement(new LensflareElement(textureFlare3, 125, 0.6));
lensflare.addElement(new LensflareElement(textureFlare3, 62.5, 0.4));
light.add(lensflare);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.7;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
document.body.appendChild(renderer.domElement);

await new HDRLoader().loadAsync('img/venice_sunset_1k.hdr').then((texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  scene.environmentIntensity = 0.1;
  scene.background = scene.environment;
  scene.backgroundIntensity = 0.25;
  scene.backgroundBlurriness = 0.3;
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
});

const menuPanel = document.getElementById('menuPanel') as HTMLDivElement;

const startButton = document.getElementById('startButton') as HTMLButtonElement;
startButton.addEventListener(
  'click',
  () => {
    controls.lock();
  },
  false,
);

const controls = new PointerLockControls(camera, renderer.domElement);
controls.addEventListener('change', () => {
  console.log('pointerlock change');
});
controls.addEventListener('lock', () => (menuPanel.style.display = 'none'));
controls.addEventListener('unlock', () => (menuPanel.style.display = 'block'));

const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
const material = new THREE.MeshStandardMaterial();
const plane = new THREE.Mesh(planeGeometry, material);
plane.rotateX(-Math.PI / 2);
plane.receiveShadow = true;
scene.add(plane);

let geometries: THREE.BufferGeometry[] = [];
for (let i = 0; i < 1000; i++) {
  const g = new THREE.BoxGeometry(
    Math.random() * 4 + 1,
    Math.random() * 29 + 1,
    Math.random() * 4 + 1,
  );
  g.computeBoundingBox();
  g.translate(
    Math.random() * 500 - 250,
    ((g as any).boundingBox.max.y - (g as any).boundingBox.min.y) / 2,
    Math.random() * 500 - 250,
  );
  geometries.push(g);
}

// merge geometries
const mergedGeometries = BufferGeometryUtils.mergeGeometries(geometries);

const cubeMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.12,
  metalness: 0.9,
});
const buildings = new THREE.Mesh(mergedGeometries, cubeMaterial);
buildings.castShadow = true;
buildings.receiveShadow = true;
scene.add(buildings);

const keyMap: { [key: string]: boolean } = {};
const onDocumentKey = (e: KeyboardEvent) => {
  keyMap[e.code] = e.type === 'keydown';
};
document.addEventListener('keydown', onDocumentKey, false);
document.addEventListener('keyup', onDocumentKey, false);

const stats = new Stats();
document.body.appendChild(stats.dom);

const gui = new GUI({ width: 400 }).close();

const rendererFolder = gui.addFolder('Renderer');
rendererFolder.add(renderer, 'toneMappingExposure', 0, 2, 0.01);

const backgroundFolder = gui.addFolder('Background');
backgroundFolder.add(scene, 'backgroundIntensity', 0, 2, 0.01);
backgroundFolder.add(scene, 'backgroundBlurriness', 0, 2, 0.01);

const environmentFolder = gui.addFolder('Environnment');
environmentFolder.add(scene, 'environmentIntensity', 0, 2, 0.01);

const materialFolder = gui.addFolder('cubeMaterial');
materialFolder.add(cubeMaterial, 'roughness', 0, 1.0, 0.01);
materialFolder.add(cubeMaterial, 'metalness', 0, 1.0, 0.01);

const lightFolder = gui.addFolder('Light Helper');
lightFolder.add(lightHelper, 'visible');

const timer = new THREE.Timer();
let delta;

function animate() {
  requestAnimationFrame(animate);

  delta = timer.update().getDelta();

  //controls.update() // PointerLockControls doesn't have an update method, unlike OrbitControls.

  if (keyMap['KeyW'] || keyMap['ArrowUp']) {
    controls.moveForward(delta * 25);
  }
  if (keyMap['KeyS'] || keyMap['ArrowDown']) {
    controls.moveForward(-delta * 25);
  }
  if (keyMap['KeyA'] || keyMap['ArrowLeft']) {
    controls.moveRight(-delta * 25);
  }
  if (keyMap['KeyD'] || keyMap['ArrowRight']) {
    controls.moveRight(delta * 25);
  }

  light.position.copy(camera.position).add(lightOffset);

  render();
  //console.log( renderer.info.render.calls );

  stats.update();
}

function render() {
  renderer.render(scene, camera);
}

animate();
