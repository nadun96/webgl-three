function init() {
	var scene = new THREE.Scene();
	var stats = new Stats();
	document.body.appendChild(stats.dom);

	// camera
	var camera = new THREE.PerspectiveCamera(
		45, // field of view
		window.innerWidth / window.innerHeight, // aspect ratio
		1, // near clipping plane
		1000 // far clipping plane
	);
	camera.position.z = 30;
	camera.position.x = 0;
	camera.position.y = 20;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var particleMat = new THREE.PointsMaterial({
		color: 'rgb(255, 255, 255)',
		size: 0.25,
		map: new THREE.TextureLoader().load('/assets/textures/particle.jpg'),
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false
	});

	var particleGeo = new THREE.SphereGeometry(10, 64, 64);

	particleGeo.vertices.forEach(function (vertex) {
		vertex.x += (Math.random() - 0.5);
		vertex.y += (Math.random() - 0.5);
		vertex.z += (Math.random() - 0.5);
	});

	var particleSystem = new THREE.Points(
		particleGeo,
		particleMat
	);
	particleSystem.name = 'particleSystem';

	scene.add(particleSystem);

	// renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	renderer.setClearColor('rgb(20, 20, 20)');

	var controls = new THREE.OrbitControls(camera, renderer.domElement);

	document.getElementById('webgl').appendChild(renderer.domElement);

	update(renderer, scene, camera, controls, stats);

	return scene;
}


function update(renderer, scene, camera, controls, stats) {
	controls.update();
	stats.update();

	renderer.render(scene, camera);

	var particleSystem = scene.getObjectByName('particleSystem');
	particleSystem.rotation.y += 0.005;

	requestAnimationFrame(function () {
		update(renderer, scene, camera, controls, stats);
	});
}

var scene = init();




// Monitoring Performance: The video discusses using the stats.js library to monitor the performance of 3D scenes by displaying the frames per second (FPS).
// Implementation Steps: It covers how to include the stats.js library in your project, instantiate it, and append its DOM element to the HTML body.
// Usage in Update Function: The video explains how to integrate stats.js into the update function to continuously monitor and display the FPS, helping identify performance issues in your three.js scenes.