import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
//const geometry = new THREE.BoxGeometry(1, 1, 1)
//const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
//const mesh = new THREE.Mesh(geometry, material)
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
group.add(cube2)

//POSITION
//mesh.position.x = 0.7
//mesh.position.y = -0.6
//mesh.position.z = 1
//mesh.position.set(0.7, -0.6, 1)

//scene.add(mesh)

//mesh.position.normalize() //reduces vector to 1
//console.log(mesh.position.length()) //length of vector (from origin to object)

//SCALE
//mesh.scale.x = 2
//mesh.scale.y = 0.5
//mesh.scale.z = 0.5
//mesh.scale.set(2, 0.5, 0.5)

//ROTATION
//order matters!
//mesh.rotation.reorder('YXZ')
//mesh.rotation.x = Math.PI / 4
//mesh.rotation.y = Math.PI / 4 //+ is ccw, units = radians, 1/2 rotation = 3.14159 (Math.PI)

//axes helper
const axesHelper = new THREE.AxesHelper() //input is length of axis
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
//camera.position.y = 1
//camera.position.x = 1
scene.add(camera)

//camera.lookAt(new THREE.Vector3(3, 0, 0)) //rotates the object so that its -z faces the target
//camera.lookAt(mesh.position)

console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)