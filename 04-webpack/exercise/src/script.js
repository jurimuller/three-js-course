//Note Webpack is a bit different: script.js is root file & automatically added into index.html
import './style.css' //this line actually executes the css
import * as THREE from 'three' //"three" in NPM

const scene = new THREE.Scene()

//Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)
camera.position.z = 3
camera.position.x = 2
camera.position.y = 1

//Renderer
const canvas = document.querySelector('.webgl') //fetch canvas from html file
console.log(canvas)

const renderer = new THREE.WebGLRenderer({
    canvas
})

//re-size renderer
renderer.setSize(sizes.width, sizes.height) //Also sets size of canvas

//first render
renderer.render(scene, camera) //scene, camera