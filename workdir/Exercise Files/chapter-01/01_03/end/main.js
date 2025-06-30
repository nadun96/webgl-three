function init() {
	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
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


// Scene Object: The scene object acts as a container for all 3D objects in your project. It represents the 3D world you are building.
// Camera: A camera is necessary to view the 3D world. It defines the point of view and requires options like field of view, aspect ratio, and near and far clipping planes.
// Renderer: The renderer converts 3D data into a 2D image. The WebGLRenderer is recommended for its performance and features like shadows and shaders.