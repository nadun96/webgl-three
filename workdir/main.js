function init() {
	var scene = new THREE.Scene();

	var box = getBox(1, 1, 1);
	var plane = getPlane(4);

	plane.name = 'plane-1';

	box.position.y = box.geometry.parameters.height/2;
	plane.rotation.x = Math.PI/2;
	plane.position.y = 1;

	plane.add(box);
	scene.add(plane);

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
	update(renderer, scene, camera);

	return scene;
}

function getBox(w, h, d) {
	var geometry = new THREE.BoxGeometry(w, h, d);
	var material = new THREE.MeshBasicMaterial({
		color: 0x00ff00
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);

	return mesh;
}

function getPlane(size) {
	var geometry = new THREE.PlaneGeometry(size, size);
	var material = new THREE.MeshBasicMaterial({
		color: 0xff0000,
		side: THREE.DoubleSide
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);

	return mesh;
}

function update(renderer, scene, camera) {
	renderer.render(
		scene,
		camera
	);

	var plane = scene.getObjectByName('plane-1');
	plane.rotation.y += 0.001;
	plane.rotation.z += 0.001;

	scene.traverse(function(child) {
		child.scale.x += 0.001;
	})

	requestAnimationFrame(function() {
		update(renderer, scene, camera);
	})
}

var scene = init();



// Hierarchical Structure: 3D scenes in three.js are structured hierarchically, with a parent-child relationship between objects, similar to HTML elements.
// Parent-Child Relationship: Objects added to other objects share the transformations of their parent objects, which can be useful for logical grouping and transformations.
// Key Properties:
// children and parent properties help establish and navigate the hierarchy.
// name property allows naming objects for easy retrieval using the getObjectByName method.

// Traverse Method: The traverse method executes a callback function on an object and all its descendants, useful for applying transformations to multiple objects.


// Understand Hierarchical Structure:

// 3D scenes in three.js have a parent-child relationship between objects, similar to HTML elements.

// Establish Parent-Child Relationships:

// Add objects to other objects to create a hierarchy. For example, adding a box to a plane makes the box a child of the plane.
// This allows the child objects to share the transformations of their parent objects.

// Use Key Properties:

// children and parent: These properties help navigate the hierarchy.
// name: Assign names to objects for easy retrieval.

// Retrieve Objects by Name:

// Use the getObjectByName method to find objects by their name. For example, scene.getObjectByName("plane-1") retrieves the object named "plane-1".

// Apply Transformations:

// Use the traverse method to apply a callback function to an object and all its descendants. This is useful for applying transformations to multiple objects.


// By following these steps, you can effectively manage and manipulate 3D objects in a three.js scene.

// Send positive feedback

// Send negative feedback
// Video
// Adding fog to the scene
// Key takeaways for this video
// How do I remove animations from objects in Three.js?
// What is the FogExp2 object in Three.js?
