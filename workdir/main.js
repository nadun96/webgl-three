function init() {
	var scene = new THREE.Scene();

	var enableFog = false;

	if (enableFog) {
		scene.fog = new THREE.FogExp2(0xffffff, 0.2);
	}
	
	var box = getBox(1, 1, 1);
	var plane = getPlane(20);
	var pointLight = getPointLight(1);
	var sphere = getSphere(0.05); // Sphere to visualize the light position

	plane.name = 'plane-1';

	box.position.y = box.geometry.parameters.height/2;
	plane.rotation.x = Math.PI/2;
	pointLight.position.y = 2; // Adjust the y position of the point light to illuminate the scene

	scene.add(box);
	scene.add(plane);
	pointLight.add(sphere);
	scene.add(pointLight); // Add the point light to the scene

	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);

	camera.position.x = 1;
	camera.position.y = 2;
	camera.position.z = 5;

	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor('rgb(120, 120, 120)');
	document.getElementById('webgl').appendChild(renderer.domElement);
	update(renderer, scene, camera);

	return scene;
}

function getBox(w, h, d) {
	var geometry = new THREE.BoxGeometry(w, h, d);
	var material = new THREE.MeshPhongMaterial({
		color: 'rgb(120, 120, 120)'
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);

	return mesh;
}

function getPlane(size) {
	var geometry = new THREE.PlaneGeometry(size, size);
	var material = new THREE.MeshPhongMaterial({
		color: 'rgb(120, 120, 120)',
		side: THREE.DoubleSide
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);

	return mesh;
}

function getSphere(size) {
	var geometry = new THREE.SphereGeometry(size, 24, 24);
	var material = new THREE.MeshBasicMaterial({
		color: 'rgb(255, 255, 255)'
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);

	return mesh;
}

function getPointLight(intensity) {
	var light = new THREE.PointLight(0xffffff, intensity); // args are color and intensity

	return light;
}

function update(renderer, scene, camera) {
	renderer.render(
		scene,
		camera
	);

	requestAnimationFrame(function() {
		update(renderer, scene, camera);
	})
}

var scene = init();

// PointLight: A simple light type emitted from a single point in all directions, similar to a light bulb.
// Creating PointLight: The video demonstrates creating a PointLight with color and intensity parameters and adding it to the scene.
// Positioning: Initially, objects are positioned at the origin (0,0,0). Adjusting the y position of the PointLight is necessary to illuminate the scene.
// Visualizing Light Position: Adding a sphere to the light object helps visualize its position, making it easier to see the effects of lighting adjustments.