import "../_Pages.css";

function Resources() {
  return (
    <div className="Resources Page">
      <div className="non-contrast-section">
        <h1>Resources</h1>
        <p>
          Elevate Your UX Design & Web Development Skills. Discover a curated
          selection of top resources to accelerate your learning.
        </p>
      </div>

      <div className="info-group contrast-section">
        <img className="icon" src={require("../../img/mdn.webp")} alt="mdn logo" loading="lazy" />
        <div>
          <h3>Master the Fundamentals:</h3>
          <p>Bookmark the best documentation for:</p>
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                HTML (MDN)
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                CSS (MDN)
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                JavaScript (MDN)
              </a>
            </li>
            <li>
              <a href="https://www.php.net/manual/en/">PHP (PHP Manual)</a>
            </li>
            <li>
              <a href="https://devdocs.io/">DevDocs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group non-contrast-section">
        <img
          className="icon"
          src={require("../../img/nodejs.webp")}
          alt="nodejs logo"
          loading="lazy"
        />
        <div>
          <h3>Popular Frameworks & Libraries:</h3>
          <ul>
            <li>
              <a href="https://reactjs.org/">React</a>
            </li>
            <li>
              <a href="https://vuejs.org/">Vue</a>
            </li>
            <li>
              <a href="https://angular.io/">Angular</a>
            </li>
            <li>
              <a href="https://jquery.com/">jQuery</a>
            </li>
            <li>
              <a href="https://getbootstrap.com/">Bootstrap</a>
            </li>
            <li>
              <a href="https://www.expressjs.com/">Express</a>
            </li>
            <li>
              <a href="https://nodejs.org/">Node</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group contrast-section">
        <img className="icon" src={require("../../img/figma.webp")} alt="figma logo" loading="lazy" />
        <div>
          <h3>Design Powerhouses:</h3>
          <ul>
            <li>
              <a href="https://www.figma.com/">Figma</a>
            </li>
            <li>
              <a href="https://www.sketch.com/">Sketch</a>
            </li>
            <li>
              <a href="https://www.adobe.com/products/xd.html">Adobe XD</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group non-contrast-section">
        <img className="icon" src={require("../../img/git.webp")} alt="Git logo" loading="lazy" />
        <div>
          <h3>Collaboration and Version Control</h3>
          <ul>
            <li>
              <a href="https://github.com/">Github</a>
            </li>
            <li>
              <a href="https://git-scm.com/">Git</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group contrast-section">
        <img className="icon" src={require("../../img/mdn.webp")} alt="MDN logo" loading="lazy" />
        <div>
          <h3>Free Learning Paths</h3>
          <p>
            Articles, videos, courses, workshops, and projects to boost your
            expertise.
          </p>
          <ul>
            <li>
              <a href="https://www.w3schools.com/">W3Schools</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/Guide">
                MDN Web Development Guides
              </a>
            </li>
            <li>
              <a href="https://www.codecademy.com/">
                Codecademy (Free Courses)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info-group non-contrast-section">
        <img
          className="icon"
          src={require("../../img/dev.webp")}
          alt="Smashing Magazine logo"
          loading="lazy"
        />
        <div>
          <h3>Common Web Development Challenges (and How to Overcome Them)</h3>
          <ul>
            <li>
              Browser Compatibility:
              <a href="https://www.browserstack.com/">Test with BrowserStack</a>
            </li>
            <li>
              Performance Optimization:
              <a href="https://developers.google.com/web/tools/lighthouse">
                Analyze with Lighthouse
              </a>
            </li>
            <li>
              Progressive Enhancement: Build experiences that work for everyone.
            </li>
            <li>
              Accessibility Checks:{" "}
              <a href="https://wave.webaim.org/">Use WAVE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resources;
