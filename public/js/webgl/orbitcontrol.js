import * as THREE from "../vendor/three/build/three.module.js"
import {OrbitControls} from "../vendor/three/examples/jsm/controls/OrbitControls.js"

const s_group = new THREE.Group()

const main = () => {
  const canvas = document.querySelector("#canvas")
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(18)
  //--
  const controls = new OrbitControls(camera, canvas)
  controls.target.set(0, 0, 0)
  controls.update()
  //--
  camera.position.z = -10
  scene.add(s_group)
  //--
  const createElements = () => {
    const c_geo = new THREE.CubeGeometry()
    const c_mat = new THREE.MeshNormalMaterial()
    const c_mes = new THREE.Mesh(c_geo, c_mat)
    //--
    s_group.add(c_mes)
  }

  const animation = () => {
    requestAnimationFrame(animation)
    s_group.rotation.y += 0.02
    s_group.rotation.x += 0.01
    camera.lookAt(scene.position)
    camera.updateMatrixWorld()
    renderer.render(scene, camera)
  }

  const onWindowResize = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }

  animation()
  createElements()
  onWindowResize()

  window.addEventListener("resize", onWindowResize, false)
}

main()
