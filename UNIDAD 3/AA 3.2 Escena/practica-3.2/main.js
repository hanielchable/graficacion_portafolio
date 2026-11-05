
import * as THREE from 'three';

// ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

// CÁMARA
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(7, 5, 10);
camera.lookAt(0, 1, 0);

// WEBGL
const canvasElement = document.querySelector('#escena3d');

const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// GRUPO DE LA CASA
const casaGrupo = new THREE.Group();
scene.add(casaGrupo);

// JARDÍN
const jardin = new THREE.Mesh(
    new THREE.BoxGeometry(12, 0.2, 10),
    new THREE.MeshStandardMaterial({ color: 0x4CAF50 })
);
jardin.position.y = -0.1;
scene.add(jardin);

// CUERPO DE LA CASA
const cuerpoCasa = new THREE.Mesh(
    new THREE.BoxGeometry(4, 3, 3),
    new THREE.MeshStandardMaterial({ color: 0xF5DEB3 })
);
cuerpoCasa.position.y = 1.5;
casaGrupo.add(cuerpoCasa);

// TECHO
const techo = new THREE.Mesh(
    new THREE.ConeGeometry(3, 2, 4),
    new THREE.MeshStandardMaterial({ color: 0xB22222 })
);
techo.position.y = 4;
techo.rotation.y = Math.PI / 4;
casaGrupo.add(techo);

// PUERTA
const puerta = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 1.8, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 })
);
puerta.position.set(0, 0.9, 1.55);
casaGrupo.add(puerta);

// VENTANA IZQUIERDA
const ventana1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.8, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x00BFFF })
);
ventana1.position.set(-1.3, 2, 1.55);
casaGrupo.add(ventana1);

// VENTANA DERECHA
const ventana2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.8, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x00BFFF })
);
ventana2.position.set(1.3, 2, 1.55);
casaGrupo.add(ventana2);

// ÁRBOL 1
const tronco1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.2, 1.5, 16),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 })
);
tronco1.position.set(-4, 0.75, 0);
scene.add(tronco1);

const hojas1 = new THREE.Mesh(
    new THREE.SphereGeometry(1, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0x228B22 })
);
hojas1.position.set(-4, 2, 0);
scene.add(hojas1);

// ÁRBOL 2
const tronco2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.2, 1.5, 16),
    new THREE.MeshStandardMaterial({ color: 0x8B4513 })
);
tronco2.position.set(4, 0.75, 0);
scene.add(tronco2);

const hojas2 = new THREE.Mesh(
    new THREE.SphereGeometry(1, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0x228B22 })
);
hojas2.position.set(4, 2, 0);
scene.add(hojas2);

// SOL
const sol = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0xFFFF00 })
);
sol.position.set(-4, 5, -3);
scene.add(sol);

// ILUMINACIÓN
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 8, 5);
scene.add(directionalLight);

// ANIMACIÓN
function animate() {
    requestAnimationFrame(animate);

    casaGrupo.rotation.y += 0.002;

    renderer.render(scene, camera);
}

animate();

// RESPONSIVIDAD
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
