self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', (event) => {
  // Puedes personalizar para cachear archivos y funcionar offline
});
