function init() {
	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(
		45, // Field of view in degrees
		window.innerWidth/window.innerHeight, // Aspect ratio
		1, // Near clipping plane
		1000 // Far clipping plane
	);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(
		scene,
		camera 
	);
}

init();

