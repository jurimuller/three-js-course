console.log(THREE)

//Creating a Scene {objects, camera, renderer}
//Scene: Like a container. We ask Three.js to render it.
//Objects: {Primitive geometries, imported models, particles, lights, etc.} -> Red cube for ex.
//Mesh: Geometry + Material -> Start w/ BoxGeometry and a MeshBasicMaterial

const scene = new THREE.Scene() //plug-ins can create issues here

//Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Camera (just a PoV, different types, render from 1)
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //fov (deg), aspect (width/height), near, far
scene.add(camera)
camera.position.z = 3
camera.position.x = 2
camera.position.y = 1

//Renderer (many options)
const canvas = document.querySelector('.webgl') //fetch canvas from html file
console.log(canvas)

const renderer = new THREE.WebGLRenderer({
    canvas //Note: this is short-hand for "canvas: canvasVarHere"
})

//need to re-size renderer
renderer.setSize(sizes.width, sizes.height) //Also sets size of canvas

//first render
renderer.render(scene, camera) //scene, camera

//can't see anything yet b/c everything is at (0,0,0) -> black screen (not red -> by default, can only see inside of the triangles)
//to move objects: position, rotation, or scale properties
//Let's move the camera. position {x, y, z} where +z = "towards us", +y = up, +x = right (IN THREE.JS)
//camera.position.z = 3 (added above)
