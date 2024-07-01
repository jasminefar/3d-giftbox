// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Gift box creation
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const giftBox = new THREE.Mesh(geometry, material);

scene.add(giftBox);

camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotation for the 3D effect
    giftBox.rotation.x += 0.01;
    giftBox.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Responsive resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
