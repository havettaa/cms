export function loadScript(src = './script.js', type = 'module') {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = type;
      script.src = src;

      document.body.appendChild(script);

      script.addEventListener('load', () => resolve(script));
      script.addEventListener('error', () => reject(script));
  });
}