import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
console.log(gsap)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Time (METHOD 1)
//let time = Date.now() //let = var will change

// Clock (METHOD 2)
//const clock = new THREE.Clock()


// GSAP (has it's own built-in tick)
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

// Animations
const tick = () => {
    // Time
    //const currentTime = Date.now()
    //const deltaTime = currentTime - time
    //time = currentTime
    //console.log(deltaTime)

    // Clock
    //const elapsedTime = clock.getElapsedTime()
    //console.log(elapsedTime)

    // Update Objects
    //mesh.rotation.y = elapsedTime * Math.PI * 2 //one rotation per sec
    //mesh.rotation.y = Math.sin(elapsedTime)
    //mesh.rotation.y += 0.001 * deltaTime //cube will now rotate at same speed regardless of user's FPS
    //camera.position.y = Math.sin(elapsedTime)
    //camera.position.x = Math.cos(elapsedTime)

    //Render
    renderer.render(scene, camera)


    window.requestAnimationFrame(tick)
}


tick()