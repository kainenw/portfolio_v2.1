import DOMPurify from 'dompurify';

export default function Head() {
  const themeScript = `
    (function() {
      var theme = localStorage.getItem('__theme');
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.setAttribute('data-theme', theme);
    })();
  `;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(themeScript) }} />
    </>
  );
}