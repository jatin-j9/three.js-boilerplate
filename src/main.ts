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

import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js'; // Since Threejs r179. `RGBELoader` has been renamed to `HDRLoader`.
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const scene = new THREE.Scene();

// const environmentTexture = new THREE.CubeTextureLoader()
//   .setPath('https://sbcode.net/img/')
//   .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
// scene.environment = environmentTexture;
// scene.background = environmentTexture;

// const hdr = 'https://sbcode.net/img/rustig_koppie_puresky_1k.hdr';
// const hdr = 'https://sbcode.net/img/venice_sunset_1k.hdr';
const hdr = 'https://sbcode.net/img/spruit_sunrise_1k.hdr';

let environmentTexture: THREE.DataTexture;

new HDRLoader().load(hdr, (texture) => {
  environmentTexture = texture;
  environmentTexture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = environmentTexture;
  scene.background = environmentTexture;
  scene.environmentIntensity = 1; // added in Three r163
});

const directionallight = new THREE.DirectionalLight(0xebfeff, Math.PI);
directionallight.position.set(1, 0.1, 1);
directionallight.visible = false;
scene.add(directionallight);

const ambientLight = new THREE.AmbientLight(0xebfeff, Math.PI / 16);
ambientLight.visible = false;
scene.add(ambientLight);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.set(-2, 0.5, 2);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.toneMapping = THREE.ACESFilmicToneMapping; // if using hdr mapping, likely to have this setting in projects
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const texture = new THREE.TextureLoader().load(
  'https://sbcode.net/img/grid.png',
);
texture.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.MeshPhysicalMaterial();
material.side = THREE.DoubleSide;
material.envMapIntensity = 0.7;
material.roughness = 0.17;
material.metalness = 0.07;
material.clearcoat = 0.43;
material.iridescence = 1;
material.transmission = 1;
material.thickness = 5.12;
material.ior = 1.78;

const plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), material);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;
plane.visible = false;
scene.add(plane);

new GLTFLoader().load(
  'https://sbcode.net/models/suzanne_no_material.glb',
  (gltf) => {
    gltf.scene.traverse((child) => {
      (child as THREE.Mesh).material = material;
    });
    scene.add(gltf.scene);
  },
);

const data = {
  environment: true,
  background: true,
  mapEnabled: false,
  planeVisible: false,
};

const gui = new GUI();

gui.add(data, 'environment').onChange(() => {
  if (data.environment) {
    scene.environment = environmentTexture;
    directionallight.visible = false;
    ambientLight.visible = false;
  } else {
    scene.environment = null;
    directionallight.visible = true;
    ambientLight.visible = true;
  }
});

gui.add(scene, 'environmentIntensity', 0, 2, 0.01); // new in Three r163. Can be used instead of `renderer.toneMapping` with `renderer.toneMappingExposure`

gui.add(renderer, 'toneMappingExposure', 0, 2, 0.01);

gui.add(data, 'background').onChange(() => {
  if (data.background) {
    scene.background = environmentTexture;
  } else {
    scene.background = null;
  }
});

gui.add(scene, 'backgroundBlurriness', 0, 1, 0.01);

gui.add(data, 'mapEnabled').onChange(() => {
  if (data.mapEnabled) {
    material.map = texture;
  } else {
    material.map = null;
  }
  material.needsUpdate = true;
});

gui.add(data, 'planeVisible').onChange((v) => {
  plane.visible = v;
});

const materialFolder = gui.addFolder('meshPhysicalMaterial');
materialFolder.add(material, 'envMapIntensity', 0, 1.0, 0.01).onChange(() => {
  // Since r163, `envMap` is no longer copied from `scene.environment`. You will need to manually copy it, if you want to modify `envMapIntensity`
  if (!material.envMap) {
    material.envMap = scene.environment;
  }
}); // from meshStandardMaterial
materialFolder.add(material, 'roughness', 0, 1.0, 0.01); // from meshStandardMaterial
materialFolder.add(material, 'metalness', 0, 1.0, 0.01); // from meshStandardMaterial
materialFolder.add(material, 'clearcoat', 0, 1.0, 0.01);
materialFolder.add(material, 'iridescence', 0, 1.0, 0.01);
materialFolder.add(material, 'transmission', 0, 1.0, 0.01);
materialFolder.add(material, 'thickness', 0, 10.0, 0.01);
materialFolder.add(material, 'ior', 1.0, 2.333, 0.01);
materialFolder.close();

const stats = new Stats();
document.body.appendChild(stats.dom);

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);

  stats.update();
}

animate();
