function init() {
	var scene = new THREE.Scene();

	var box = getBox(1, 1, 1);

	scene.add(box);

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
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(
		scene,
		camera 
	);
}

function getBox(w, h, d) {
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({
		color: 0x00ff00
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);

	return mesh;
}

init();


// Creating 3D Objects: 3D objects in Three.js are made up of geometry (shape) and material (surface quality). These combine to form a mesh.
// Positioning Objects: Objects are created at the 0, 0, 0 coordinate by default. To make them visible, you need to adjust the camera or object position.
// Camera Adjustment: Move the camera along the z-axis (and optionally x and y axes) to view the object. Use the lookAt method to center the object in the frame