function init() {
    var scene = new THREE.Scene(); // scene is the container for all 3D objects, lights, and cameras in Three.js. It holds everything that will be rendered.

	var box = getBox(1, 1, 1); // box is a 3D object created using the getBox function, which returns a mesh combining geometry and material.

	scene.add(box); // Adding the box to the scene makes it part of the 3D world that will be rendered.

	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	); // camera is a perspective camera that simulates the way the human eye sees. It has a field of view of 45 degrees, an aspect ratio based on the window size, and defines the near and far clipping planes.

	camera.position.x = 1;
	camera.position.y = 2;
	camera.position.z = 5;// Setting the camera's position in 3D space. The x, y, and z coordinates determine where the camera is located relative to the scene.
	
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // The lookAt method orients the camera to point towards the specified vector, which in this case is the origin (0, 0, 0). This ensures that the camera is focused on the box.

	var renderer = new THREE.WebGLRenderer(); // renderer is responsible for rendering the scene using WebGL, which allows for high-performance graphics in the browser.
	renderer.setSize(window.innerWidth, window.innerHeight); // Setting the size of the renderer to match the window dimensions ensures that the rendered output fills the entire viewport.
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(
		scene,
		camera 
	); // The render method draws the scene from the perspective of the camera, producing the final image that is displayed in the browser.
}

function getBox(w, h, d) {
    var geometry = new THREE.BoxGeometry(1, 1, 1); // Creating a box geometry with width, height, and depth of 1 unit each
    // geometry is the shape of the object, defined by its vertices and faces
	var material = new THREE.MeshBasicMaterial({
		color: 0x00ff00
    }); // Creating a basic material with a green color
    // material defines the surface appearance of the object, such as color and texture
	var mesh = new THREE.Mesh(
		geometry,
		material 
    );
    // mesh combines the geometry and material to create a 3D object

	return mesh;
}

init();