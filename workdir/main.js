function init() {
	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(
		45, // Field of view in degrees
		window.innerWidth/window.innerHeight, // Aspect ratio
		1, // Near clipping plane
		1000 // Far clipping plane
	);
	var renderer = new THREE.WebGLRenderer(); // Create a WebGL renderer
	renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer to match the window dimensions
	document.getElementById('webgl').appendChild(renderer.domElement); // Append the renderer's canvas to the HTML element with id 'webgl'
	renderer.render(
		scene, // The scene to render
		camera // The camera to use for rendering
	);
}

init();

