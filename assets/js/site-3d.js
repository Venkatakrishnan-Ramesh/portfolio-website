import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const root = document.createElement('div');
root.setAttribute('aria-hidden', 'true');
root.style.position = 'fixed';
root.style.inset = '0';
root.style.zIndex = '0';
root.style.pointerEvents = 'none';
root.style.opacity = prefersReducedMotion ? '0.16' : '0.58';
root.style.transition = 'opacity 320ms ease, transform 420ms ease';
document.body.prepend(root);

document.querySelectorAll('header, main, footer').forEach((node) => {
  node.style.position = 'relative';
  node.style.zIndex = '2';
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 7);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
renderer.setClearColor(0x000000, 0);
root.appendChild(renderer.domElement);

const pointer = { x: 0, y: 0 };
const targetPointer = { x: 0, y: 0 };

const nodeGeometry = new THREE.BufferGeometry();
const nodeCount = 520;
const positions = new Float32Array(nodeCount * 3);
const basePositions = new Float32Array(nodeCount * 3);

for (let i = 0; i < nodeCount; i++) {
  const i3 = i * 3;
  const radius = 2.2 + Math.random() * 3.8;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos((Math.random() * 2) - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  positions[i3] = x;
  positions[i3 + 1] = y;
  positions[i3 + 2] = z;
  basePositions[i3] = x;
  basePositions[i3 + 1] = y;
  basePositions[i3 + 2] = z;
}

nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const nodeMaterial = new THREE.PointsMaterial({
  color: 0x38bdf8,
  size: 0.018,
  transparent: true,
  opacity: 0.78,
  depthWrite: false
});
const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
scene.add(nodes);

const ringGroup = new THREE.Group();
scene.add(ringGroup);

const rings = [1.35, 1.95, 2.55].map((radius, index) => {
  const geometry = new THREE.TorusGeometry(radius, 0.004, 8, 96);
  const material = new THREE.MeshBasicMaterial({
    color: index === 1 ? 0xa78bfa : 0x38bdf8,
    transparent: true,
    opacity: 0.34
  });
  const ring = new THREE.Mesh(geometry, material);
  ring.rotation.x = Math.PI / 2 + index * 0.42;
  ring.rotation.y = index * 0.72;
  ringGroup.add(ring);
  return ring;
});

const wireGeometry = new THREE.IcosahedronGeometry(1.15, 2);
const wireMaterial = new THREE.MeshBasicMaterial({
  color: 0xa78bfa,
  wireframe: true,
  transparent: true,
  opacity: 0.2
});
const wire = new THREE.Mesh(wireGeometry, wireMaterial);
ringGroup.add(wire);

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', resize, { passive: true });
window.addEventListener('pointermove', (event) => {
  targetPointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
  targetPointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
}, { passive: true });

function setupPageTransition() {
  const links = Array.from(document.querySelectorAll('a[href]'));
  links.forEach((link) => {
    const href = link.getAttribute('href');
    const isInternalPage = href && href.endsWith('.html') && !href.startsWith('http');
    if (!isInternalPage) return;

    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      root.style.opacity = '0.95';
      root.style.transform = 'scale(1.08) rotateZ(0.5deg)';
      document.body.style.transition = 'opacity 220ms ease, transform 260ms ease';
      document.body.style.opacity = '0.88';
      document.body.style.transform = 'translateY(4px)';
      window.setTimeout(() => {
        window.location.href = href;
      }, 180);
    });
  });
}

function animate() {
  pointer.x += (targetPointer.x - pointer.x) * 0.035;
  pointer.y += (targetPointer.y - pointer.y) * 0.035;

  const elapsed = performance.now() * 0.001;
  const positionArray = nodeGeometry.attributes.position.array;

  for (let i = 0; i < nodeCount; i++) {
    const i3 = i * 3;
    positionArray[i3] = basePositions[i3] + Math.sin(elapsed * 0.7 + i * 0.17) * 0.035;
    positionArray[i3 + 1] = basePositions[i3 + 1] + Math.cos(elapsed * 0.6 + i * 0.11) * 0.035;
    positionArray[i3 + 2] = basePositions[i3 + 2] + Math.sin(elapsed * 0.5 + i * 0.13) * 0.035;
  }

  nodeGeometry.attributes.position.needsUpdate = true;

  nodes.rotation.y = elapsed * 0.035 + pointer.x * 0.08;
  nodes.rotation.x = pointer.y * 0.08;
  ringGroup.rotation.y = elapsed * 0.16 + pointer.x * 0.16;
  ringGroup.rotation.x = elapsed * 0.08 + pointer.y * 0.12;

  rings.forEach((ring, index) => {
    ring.rotation.z = elapsed * (0.08 + index * 0.04);
  });

  camera.position.x += (pointer.x * 0.45 - camera.position.x) * 0.035;
  camera.position.y += (-pointer.y * 0.35 - camera.position.y) * 0.035;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
  if (!prefersReducedMotion) requestAnimationFrame(animate);
}

resize();
setupPageTransition();
renderer.render(scene, camera);
if (!prefersReducedMotion) animate();
