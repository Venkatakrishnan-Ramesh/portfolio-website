import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const mount = document.querySelector('[data-hero-3d]');

if (mount) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  mount.appendChild(renderer.domElement);

  const group = new THREE.Group();
  scene.add(group);

  const geometry = new THREE.IcosahedronGeometry(1.45, 2);
  const material = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    metalness: 0.25,
    roughness: 0.38,
    wireframe: true
  });
  const mesh = new THREE.Mesh(geometry, material);
  group.add(mesh);

  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 220;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 7;
    positions[i3 + 1] = (Math.random() - 0.5) * 5;
    positions[i3 + 2] = (Math.random() - 0.5) * 5;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xa78bfa,
    size: 0.025,
    transparent: true,
    opacity: 0.8
  });
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  const keyLight = new THREE.PointLight(0x38bdf8, 2.8, 20);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0xa78bfa, 1.8, 20);
  fillLight.position.set(-4, -2, 3);
  scene.add(fillLight);

  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  const resize = () => {
    const width = mount.clientWidth || 360;
    const height = mount.clientHeight || 360;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const animate = () => {
    mesh.rotation.x += 0.003;
    mesh.rotation.y += 0.005;
    particles.rotation.y -= 0.0008;
    group.rotation.z = Math.sin(Date.now() * 0.0005) * 0.08;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  window.addEventListener('resize', resize, { passive: true });
  resize();
  animate();
}
