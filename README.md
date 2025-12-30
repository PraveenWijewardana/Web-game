<h1 data-path-to-node="3">🏃 Adventure Run: Web Edition</h1>
<p data-path-to-node="4">A fast-paced, 2D side-scrolling runner game built using <strong data-path-to-node="4" data-index-in-node="56">HTML5, CSS3, and JavaScript</strong>. Dodge obstacles, time your jumps, and survive as long as you can!</p>
<h2 data-path-to-node="5">🎮 Game Preview</h2>
<p data-path-to-node="6">The game features a dynamic parallax background, a smooth frame-based animation system for the main character, and procedurally generated obstacles.</p>
<ul data-path-to-node="7">
<li>
<p data-path-to-node="7,0,0"><strong data-path-to-node="7,0,0" data-index-in-node="0">Character:</strong> Animated runner using 8-frame sprite cycles.</p>
</li>
<li>
<p data-path-to-node="7,1,0"><strong data-path-to-node="7,1,0" data-index-in-node="0">Obstacles:</strong> Fire pits and environmental hazards.</p>
</li>
<li>
<p data-path-to-node="7,2,0"><strong data-path-to-node="7,2,0" data-index-in-node="0">Controls:</strong> Simple keyboard interactions.</p>
</li>
</ul>
<hr data-path-to-node="8" />
<h2 data-path-to-node="9">🚀 Features</h2>
<ul data-path-to-node="10">
<li>
<p data-path-to-node="10,0,0"><strong data-path-to-node="10,0,0" data-index-in-node="0">Sprite Animation:</strong> Uses a sequence of images (<code data-path-to-node="10,0,0" data-index-in-node="45">run1.png</code> to <code data-path-to-node="10,0,0" data-index-in-node="57">run8.png</code>) to create fluid movement.</p>
</li>
<li>
<p data-path-to-node="10,1,0"><strong data-path-to-node="10,1,0" data-index-in-node="0">Collision Detection:</strong> Real-time hit-box calculation between the player and fire obstacles.</p>
</li>
<li>
<p data-path-to-node="10,2,0"><strong data-path-to-node="10,2,0" data-index-in-node="0">Audio Integration:</strong> Background music and sound effects (<code data-path-to-node="10,2,0" data-index-in-node="55">run.mp3</code>) for an immersive experience.</p>
</li>
<li>
<p data-path-to-node="10,3,0"><strong data-path-to-node="10,3,0" data-index-in-node="0">Responsive Design:</strong> Styled with CSS to fit various screen sizes.</p>
</li>
</ul>
<hr data-path-to-node="11" />
<h2 data-path-to-node="12">🛠️ Built With</h2>
<ul data-path-to-node="13">
<li>
<p data-path-to-node="13,0,0"><strong data-path-to-node="13,0,0" data-index-in-node="0">HTML5 Canvas:</strong> For rendering the game world and character.</p>
</li>
<li>
<p data-path-to-node="13,1,0"><strong data-path-to-node="13,1,0" data-index-in-node="0">CSS3:</strong> For layout, styling, and UI overlays.</p>
</li>
<li>
<p data-path-to-node="13,2,0"><strong data-path-to-node="13,2,0" data-index-in-node="0">JavaScript:</strong> The engine behind the physics, gravity, and game logic.</p>
</li>
</ul>



</div>
</div>
</div>
<hr data-path-to-node="17" />
<h2 data-path-to-node="18">🕹️ How to Play</h2>
<ol start="1" data-path-to-node="19">
<li>
<p data-path-to-node="19,0,0"><strong data-path-to-node="19,0,0" data-index-in-node="0">Download/Clone</strong> this repository to your local machine.</p>
</li>
<li>
<p data-path-to-node="19,1,0">Open <code data-path-to-node="19,1,0" data-index-in-node="5">index.html</code> in any modern web browser (Chrome, Firefox, Edge).</p>
</li>
<li>
<p data-path-to-node="19,2,0"><strong data-path-to-node="19,2,0" data-index-in-node="0">Controls:</strong></p>
<ul data-path-to-node="19,2,1">
  <li><p data-path-to-node="19,2,1,1,0"><strong data-path-to-node="19,2,1,1,0" data-index-in-node="0">Start:</strong> Press Enter</p></li>
<li>
<p data-path-to-node="19,2,1,0,0"><strong data-path-to-node="19,2,1,0,0" data-index-in-node="0">Spacebar / Up Arrow:</strong> Jump over the fire obstacles.</p>
</li>
<li>
<p data-path-to-node="19,2,1,1,0"><strong data-path-to-node="19,2,1,1,0" data-index-in-node="0">Objective:</strong> Survive the longest distance to get a high score!</p>
</li>
</ul>
</li>
</ol>
<hr data-path-to-node="20" />
<h2 data-path-to-node="21">🧠 Technical Highlights: Animation Logic</h2>
<p data-path-to-node="22">The animation is handled by a JavaScript loop that cycles through the <code data-path-to-node="22" data-index-in-node="70">run</code> image array based on the game's frame rate:</p>
<div class="code-block ng-tns-c554500580-177 ng-animate-disabled ng-trigger ng-trigger-codeBlockRevealAnimation" data-hveid="0" data-ved="0CAAQhtANahgKEwjQ1KmW0eSRAxUAAAAAHQAAAAAQlAQ">
<div class="code-block-decoration header-formatted gds-title-s ng-tns-c554500580-177 ng-star-inserted"><span class="ng-tns-c554500580-177">JavaScript</span>
<div class="buttons ng-tns-c554500580-177 ng-star-inserted">&nbsp;</div>
</div>
<div class="formatted-code-block-internal-container ng-tns-c554500580-177">
<div class="animated-opacity ng-tns-c554500580-177">
<pre class="ng-tns-c554500580-177"><code class="code-container formatted ng-tns-c554500580-177" data-test-id="code-content"><span class="hljs-comment">// Simple logic example</span>
<span class="hljs-keyword">let</span> frameIndex = <span class="hljs-number">1</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">animate</span>() </span>{
    character.src = <span class="hljs-string">`run<span class="hljs-subst">${frameIndex}</span>.png`</span>;
    frameIndex = (frameIndex % <span class="hljs-number">8</span>) + <span class="hljs-number">1</span>; <span class="hljs-comment">// Cycles 1 through 8</span>
}
</code></pre>
</div>
</div>
</div>
<hr data-path-to-node="24" />
<h2 data-path-to-node="25">📜 License</h2>
<p data-path-to-node="26">This project is open source. Feel free to use the code to learn or build your own levels!</p>
