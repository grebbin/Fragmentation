(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const ft="modulepreload",ht=function(e){return"/"+e},We={},Ge=function(t,s,a){let o=Promise.resolve();if(s&&s.length>0){let m=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),c=n?.nonce||n?.getAttribute("nonce");o=m(s.map(f=>{if(f=ht(f),f in We)return;We[f]=!0;const g=f.endsWith(".css"),u=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${u}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":ft,g||(p.as="script"),p.crossOrigin="",p.href=f,c&&p.setAttribute("nonce",c),document.head.appendChild(p),g)return new Promise((b,E)=>{p.addEventListener("load",b),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(n){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=n,window.dispatchEvent(c),!c.defaultPrevented)throw n}return o.then(n=>{for(const c of n||[])c.status==="rejected"&&r(c.reason);return t().catch(r)})},Qe=[{id:"introduction",navigationLabel:"Introduction",eyebrow:"Fragmented Reality",title:"An introduction to fragmented habitats",theme:"dark",className:"intro-section"},{id:"perspective-shift",navigationLabel:"Perspective Shift",eyebrow:"Perspective Shift",title:"A landscape seen from another point of view",theme:"dark",className:"sequence-section"},{id:"route",navigationLabel:"The Route",eyebrow:"The Route",title:"Six stories of movement and interruption",theme:"light",className:"story-chapter-section"},{id:"fragmentation",navigationLabel:"Fragmentation",eyebrow:"Fragmentation",title:"The landscape does not end at the edge of the road.",theme:"dark",className:"interlude-section"},{id:"explore-data",navigationLabel:"Explore the Data",eyebrow:"Explore the Data",title:"Fragmentation across the landscape",theme:"light",className:"map-section"}],z=[{title:"Forest",copy:"Introduce the first habitat story here.",facts:["Fact one","Fact two"],image:"/media/story_placeholder.webp",animation:{src:"/media/story.webm",start:0,end:5},loopSound:"",onceSound:"",scrollOffset:.55},{title:"Small Forest Patch",copy:"Introduce the small forest patch story here.",facts:["Fact one","Fact two"],image:"/media/story_placeholder.webp",animation:{src:"/media/story.webm",start:5,end:10},loopSound:"",onceSound:"",scrollOffset:.55},{title:"Highway",copy:"Introduce the highway story here.",facts:["Fact one","Fact two"],image:"/media/story_placeholder.webp",animation:{src:"/media/story.webm",start:10,end:17},loopSound:"",onceSound:"",scrollOffset:.55},{title:"Canal and harbour",copy:"Introduce the canal and harbour story here.",facts:["Fact one","Fact two"],image:"/media/story_placeholder.webp",animation:{src:"/media/story.webm",start:17,end:23},loopSound:"",onceSound:"",scrollOffset:.55},{title:"Wildlife bridge",copy:"Introduce the wildlife bridge story here.",facts:["Fact one","Fact two"],image:"/media/story_placeholder.webp",animation:{src:"/media/story.webm",start:23,end:29},loopSound:"",onceSound:"",scrollOffset:.55},{title:"Final forest",copy:"Introduce the final forest story here.",facts:["Fact one","Fact two"],image:"/media/story_placeholder.webp",animation:{src:"/media/story.webm",start:29,end:33},loopSound:"",onceSound:"",scrollOffset:.55}];function yt(){const e=document.createElement("nav");return e.className="main-nav",e.setAttribute("aria-label","Story chapters"),Qe.forEach((t,s)=>{const a=document.createElement("a");a.className="main-nav__item",a.href=`#${t.id}`,a.dataset.sectionLink=t.id,a.innerHTML=`
    <span class="main-nav__number">${s+1}</span>
    <span class="main-nav__label">${t.navigationLabel}</span>
  `,e.append(a)}),e}function gt(){const e=document.createElement("aside");e.className="side-nav side-nav--delayed",e.setAttribute("aria-label","Project information"),e.innerHTML=`
  <a class="side-nav__logo" href="#introduction" aria-label="Fragmented Reality home">
    <img class="side-nav__logo-image" src="/media/Logo_DM.png" alt="" />
  </a>
  <nav class="side-nav__links" aria-label="Additional information">
    <a class="side-nav__link side-nav__link--brand" href="#introduction">Fragmented Reality</a>
    <a class="side-nav__link" href="#about">About</a>
    <a class="side-nav__link" href="#references">References</a>
    <a class="side-nav__link" href="#sources">Sources</a>
  </nav>
  <div class="sound-control">
    <button class="sound-control__button is-enabled" type="button" aria-label="Disable sound" aria-pressed="true">
      <img src="/media/sound_on_DM.svg" alt="" />
    </button>
    <p class="sound-control__hint">This website uses sound.<br />You can disable it here.</p>
  </div>
`;const t=e.querySelector(".sound-control__button"),s=e.querySelector(".side-nav__logo"),a=e.querySelector(".side-nav__logo-image"),o=()=>{if(!a)return;const u=document.querySelector(".site-shell")?.dataset.theme==="light"?"BM":"DM";a.src=`/media/Logo_${u}.png`},r=()=>{if(!a)return;const u=document.querySelector(".site-shell")?.dataset.theme==="light"?"DM":"BM";a.src=`/media/Logo_${u}.png`};window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(s?.addEventListener("pointerenter",r),s?.addEventListener("pointerleave",o),s?.addEventListener("focus",r),s?.addEventListener("blur",o)),a?.addEventListener("error",()=>{a.src.endsWith("/media/Logo_DM.png")||(a.src="/media/Logo_DM.png")}),a?.addEventListener("logothemechange",o);const c=()=>{const u=t?.querySelector("img");if(!t||!u)return;const p=t.classList.contains("is-enabled"),b=document.querySelector(".site-shell")?.dataset.theme==="light"?"BM":"DM";u.src=`/media/sound_${p?"on":"off"}_${b}.svg`},m=t?.querySelector("img");m?.addEventListener("error",()=>{const p=`/media/sound_${t?.classList.contains("is-enabled")?"on":"off"}.svg`;m.src.endsWith(p.replace("./","/"))||(m.src=p)}),t?.addEventListener("click",()=>{const u=document.querySelectorAll("video"),p=!t.classList.contains("is-enabled");if(u.forEach(b=>{b.muted=!p}),t.classList.toggle("is-enabled",p),t.setAttribute("aria-pressed",String(p)),t.setAttribute("aria-label",p?"Disable sound":"Enable sound"),c(),window.dispatchEvent(new CustomEvent("soundstatechange",{detail:{enabled:p}})),p){const b=Array.from(u).find(E=>{const T=E.getBoundingClientRect();return T.bottom>0&&T.top<window.innerHeight&&getComputedStyle(E).opacity!=="0"});b&&b.play().catch(()=>{})}}),t?.addEventListener("soundthemechange",c);const f=e.querySelector(".side-nav__logo"),g=()=>{e.classList.remove("is-open"),f?.setAttribute("aria-expanded","false")};return f?.addEventListener("click",u=>{if(!window.matchMedia("(max-width: 900px)").matches)return;u.preventDefault();const p=e.classList.toggle("is-open");f.setAttribute("aria-expanded",String(p))}),e.querySelectorAll(".side-nav__link").forEach(u=>{u.addEventListener("click",g)}),document.addEventListener("click",u=>{window.matchMedia("(max-width: 900px)").matches&&u.target instanceof Node&&!e.contains(u.target)&&g()}),e}function _t(e){const t=document.createElement("a");return t.className="scroll-arrow",t.href=e,t.setAttribute("aria-label","Continue to the next chapter"),t.innerHTML='<span>Scroll</span><span aria-hidden="true">↓</span>',t}function Te(e){const t=Qe[e],s=document.createElement("section");return s.id=t.id,s.className=`story-section ${t.className}`,s.dataset.theme=t.theme,s.dataset.section=t.id,s}function vt(){const e=Te(0);return e.innerHTML=`
  <video class="intro-section__video" autoplay playsinline preload="auto" aria-label="Introductory forest film">
    <source src="/media/start_first.webm" type="video/webm" />
  </video>
  <div class="intro-section__heading">
    <h1>Fragmented Reality</h1>
    <p>Explore forest fragmentation based on scientific data.</p>
  </div>
`,e.append(_t("#introduction-sequence")),e}function bt(){const e=Te(1);e.id="introduction-sequence",e.dataset.section="introduction";const t=Array.from({length:6},(s,a)=>{const o=a+1;return`<picture>${o===6?'<source media="(max-width: 700px)" srcset="/media/intro6_mobile.webp" />':""}<img class="sequence-section__frame${a===0?" is-revealed":""}" src="/media/intro${o}.webp" alt="" data-sequence-frame="${a}" style="--frame-layer: ${a}" /></picture>`}).join("");return e.innerHTML=`
  <div class="sequence-section__stage">
    <div class="sequence-section__media" aria-hidden="true">
      ${t}
    </div>
    <div class="sequence-section__texts">
      <div class="sequence-section__text" data-sequence-text="0">
        <p>These are the two perspectives on land fragmentation, which describes the disruption of natural ecological connections caused by humans.</p>
      </div>
      <div class="sequence-section__text" data-sequence-text="1">
        <p>Let's experience fragmentation through the eyes of the lynx on their route from the Bavarian Forest to the Harz Mountains.</p>
      </div>
      <div class="sequence-section__text" data-sequence-text="2">
        <p>The lynx populations in these areas of Germany are so isolated from one another that natural genetic exchange is virtually impossible, which increases the risk of inbreeding and genetic erosion.</p>
      </div>
    </div>
  </div>
`,e}function wt(){const e=document.createElement("section");e.id="perspective-shift",e.className="story-section story-chapter-section story-chapter-section--journey",e.dataset.theme="dark",e.dataset.section="perspective-shift";const t=z.map((r,n)=>`
    <article class="story-card" data-story-card="${n}">
      <p class="eyebrow">Story ${n+1} of ${z.length}</p>
      <h2>${r.title}</h2>
      <p>${r.copy}</p>
      <ul class="story-card__facts">
        ${r.facts.map(c=>`<li>${c}</li>`).join("")}
      </ul>
    </article>
  `).join(""),s=z.find(r=>r.animation?.src)?.animation.src,a=z.map((r,n)=>{const c=`<img class="story-chapter-section__visual" src="${r.image}" alt="" />`,m=r.loopSound?`<audio data-story-loop="${n}" src="${r.loopSound}" loop preload="metadata"></audio>`:"",f=r.onceSound?`<audio data-story-once="${n}" src="${r.onceSound}" preload="metadata"></audio>`:"";return`<div class="story-chapter-section__media-item" data-story-media="${n}">${c}${m}${f}</div>`}).join(""),o=z.map((r,n)=>`
    <div class="story-scroll-trigger" data-story-trigger="${n}" data-offset="${r.scrollOffset??.55}" style="--story-trigger-start: ${n*(72/z.length)}%; --story-trigger-size: ${72/z.length}%;" aria-hidden="true"></div>
  `).join("");return e.innerHTML=`
    <div class="story-chapter-section__stage">
      <div class="story-chapter-section__panel">${t}</div>
      <div class="story-chapter-section__media" aria-hidden="true">
        ${a}
        ${s?`<video class="story-chapter-section__visual story-chapter-section__shared-animation" data-story-shared-animation src="${s}" poster="${z[0]?.image??""}" muted playsinline preload="auto" fetchpriority="high" aria-label="Story animation"></video>`:""}
      </div>
      <div class="story-outro">
        <picture>
          <source media="(max-width: 700px)" srcset="/media/intro8_mobile.webp" />
          <img class="story-outro__image" src="/media/intro8.webp" alt="" aria-hidden="true" />
        </picture>
        <p class="story-outro__text">
          Your journey is completed.<br />
          You reached the other side.<br />
          But in reality, many lynx never do.
        </p>
        <a class="scroll-arrow story-outro__arrow" href="#route" aria-label="Explore the data in the next part">
          <span>Explore the data in the next part</span>
          <span aria-hidden="true">&darr;</span>
        </a>
      </div>
    </div>
    ${o}
  `,[e]}function St(){const e=Te(4);return e.id="route",e.dataset.section="route",e.innerHTML=`
  <div class="map-section__stage">
    <div class="map-section__copy">
      <div class="map-section__step map-section__step--barriers">
        <div class="map-section__title-row">
          <h2>
            <span class="map-section__marks" aria-hidden="true">
              <img class="map-section__mark" src="/media/route.svg" alt="" />
              <img class="map-section__mark" src="/media/bar_types.svg" alt="" />
            </span><span class="map-section__title-text">The Route: Barrier Types</span>
          </h2>
        </div>
        <div class="map-section__intro-copy">
          <p>During your journey, you encountered various types and barrier strengths, each affecting your movement and perception in different ways.</p>
          <p>In reality, however, a dispersing lynx would face many more barriers.</p>
        </div>
      </div>
      <div class="map-section__step map-section__step--intro map-section__intro">
        <div class="map-section__title-row map-section__forest-title">
          <h2><span class="map-section__marks" aria-hidden="true"><img class="map-section__mark" src="/media/forests.svg" alt="" /></span><span class="map-section__title-text">Germany's Federal States: Forests</span></h2>
        </div>
        <div class="map-section__intro-copy">
          <p>To explore the whole picture of fragmentation in Germany, we first look at the different indicators.</p>
          <p>A 'good forest', which is essential for biodiversity, is considered to be an area above 50 km².</p>
        </div>
      </div>
      <div class="map-section__step map-section__step--detail">
        <p class="map-section__reveal-text">If we only consider forests larger than 50 km², this is what the total area looks like.</p>
        <p class="map-section__facts">The indicator measures the Percentage of Undivided Forests relative to Total Land Area.</p>
      </div>
      <div class="map-section__step map-section__step--pseudo">
        <div class="map-section__title-row map-section__pseudo-title">
          <h2><span class="map-section__marks" aria-hidden="true"><img class="map-section__mark" src="/media/stubroads.svg" alt="" /></span><span class="map-section__title-text">Hidden fragmentation: Stub roads and Pseudo-relief</span></h2>
        </div>
        <p class="map-section__reveal-text">It's not just the forest size that matters; shape has an impact too.</p>
        <p class="map-section__reveal-text map-section__stub-copy">So-called stub roads are not classified as fragmentation, yet they significantly reduce the depth of quiet, unfragmented core areas.</p>
        <p class="map-section__facts map-section__pseudo-facts-copy">Pseudo-relief and mean distance to the nearest fragmented area are used to better capture the effect of stub roads. High pseudo-volume (white) marks a compact area with a large, deep core far from human disturbance. Low pseudo-volume (red) marks an area that is either narrow or "punctured" by stub roads.</p>
      </div>
      <div class="map-section__step map-section__step--mesh">
        <div class="map-section__title-row map-section__mesh-title">
          <h2><span class="map-section__marks" aria-hidden="true"><img class="map-section__mark" src="/media/diagonal.svg" alt="" /><img class="map-section__mark" src="/media/meshsize.svg" alt="" /></span><span class="map-section__title-text">Mesh size</span></h2>
        </div>
        <p class="map-section__reveal-text map-section__mesh-intro-copy">To gain a fuller picture of fragmentation, scientists use the indicator mesh sizes. This makes it easier to compare states.</p>
        <p class="map-section__facts map-section__mesh-fact map-section__mesh-fact--intro">Effective mesh size quantifies landscape fragmentation by estimating the probability that two randomly chosen points remain within the same contiguous habitat patch.</p>
        <video class="map-section__mesh-animation" src="/media/meshsize.mp4" autoplay muted loop playsinline aria-label="Mesh-size animation"></video>
        <p class="map-section__facts map-section__mesh-fact map-section__mesh-fact--outro">Larger mesh sizes indicate lower fragmentation, greater ecological connectivity, and better conditions for wildlife movement.</p>
        <p class="map-section__reveal-text map-section__mesh-route-copy">The original route of the lynx passes through two federal states which are among the least fragmented regions.</p>
        <p class="map-section__reveal-text map-section__mesh-bayern-copy">Bayern, with a mesh size of <strong>8,47</strong> km².</p>
        <p class="map-section__reveal-text map-section__mesh-thueringen-copy">Thüringen, with a mesh size of <strong>7,38</strong> km².</p>
        <div class="map-section__mesh-diagonal-step">
          <p class="map-section__reveal-text">To make this number of km² more relatable, imagine walking the distance diagonally, as this is the longest distance in a square-shaped geometry.</p>
          <video class="map-section__diagonal-animation" src="/media/diagonal.mp4" autoplay muted loop playsinline aria-label="Diagonal walking-distance animation"></video>
          <p class="map-section__facts">The walking pace used for the calculation<br class="mobile-only-break" /> is 5 km/h.</p>
          <p class="map-section__reveal-text map-section__mesh-bayern-time">It would take around <strong>49</strong> minutes to walk undisturbed in Bayern without encountering any fragmentation barriers.</p>
          <p class="map-section__reveal-text map-section__mesh-thueringen-time">In Thüringen it would take around <strong>46</strong> minutes.</p>
        </div>
      </div>
    </div>
    <div class="map-section__media">
      <div class="forest-map" aria-live="polite">
        <p class="forest-map__status">Loading forest data…</p>
        <svg class="forest-map__svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="forest-map-title forest-map-description">
          <title id="forest-map-title">Forests in Germany</title>
          <desc id="forest-map-description">An SVG map showing Germany's federal states and forest areas. Scrolling changes the display from all forests to forests larger than 50 square kilometres.</desc>
          <defs class="forest-map__mesh-defs"></defs>
          <g class="forest-map__layer forest-map__layer--barriers"></g>
          <g class="forest-map__layer forest-map__layer--all"></g>
          <g class="forest-map__layer forest-map__layer--route"></g>
          <g class="forest-map__layer forest-map__layer--large"></g>
          <g class="forest-map__layer forest-map__layer--zoom-detail"></g>
          <g class="forest-map__layer forest-map__layer--mesh"></g>
          <g class="forest-map__layer forest-map__layer--states"></g>
          <g class="forest-map__layer forest-map__layer--mesh-labels"></g>
          <g class="forest-map__layer forest-map__layer--ranking"></g>
        </svg>
        <div class="forest-map__barrier-summary" aria-label="Barriers encountered along the route">
          <div class="forest-map__barrier-category forest-map__barrier-category--streets" style="--barrier-share: 56" tabindex="0" title="79 streets (56%)">
            <strong>79 streets</strong>
            <span>56%</span>
          </div>
          <div class="forest-map__barrier-category forest-map__barrier-category--settlements" style="--barrier-share: 34" tabindex="0" title="48 settlements (34%)">
            <strong>48 settlements</strong>
            <span>34%</span>
          </div>
          <div class="forest-map__barrier-category forest-map__barrier-category--railways" style="--barrier-share: 9" tabindex="0" title="13 railways (9%)">
            <strong>13 railways</strong>
            <span>9%</span>
          </div>
          <div class="forest-map__barrier-category forest-map__barrier-category--airports" style="--barrier-share: 1" tabindex="0" title="2 airports (1%)">
            <strong>2 airports</strong>
            <span>1%</span>
          </div>
        </div>
        <div class="forest-map__mesh-labels-html" aria-hidden="true"></div>
        <div class="forest-map__ranking-labels-html" aria-hidden="true"></div>
        <div class="forest-map__mesh-legend" aria-label="Mesh-size scale from highest to lowest">
          <div class="forest-map__mesh-legend-title">
            <img src="/media/meshsize-purple.svg" alt="" />
            <span>Mesh size</span>
          </div>
          <div class="forest-map__mesh-legend-scale">
            <span>Highest mesh size</span>
            <span class="forest-map__mesh-legend-arrow" aria-hidden="true">→</span>
            <span>Lowest mesh size</span>
          </div>
        </div>
        <div class="pseudorelief-model" aria-label="Rotating three-dimensional pseudorelief model"></div>
        <span class="pseudorelief-callout__label">Stub roads</span>
        <svg class="pseudorelief-callout" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <g class="pseudorelief-callout__leader pseudorelief-callout__leader--one">
            <path data-stub-path="0" d="M 8 15 L 28 15 L 54 27" />
            <circle data-stub-dot="0" cx="54" cy="27" r="0.45" />
          </g>
          <g class="pseudorelief-callout__leader pseudorelief-callout__leader--two">
            <path data-stub-path="1" d="M 28 15 L 42 36" />
            <circle data-stub-dot="1" cx="42" cy="36" r="0.45" />
          </g>
          <g class="pseudorelief-callout__leader pseudorelief-callout__leader--three">
            <path data-stub-path="2" d="M 28 15 L 38 27" />
            <circle data-stub-dot="2" cx="38" cy="27" r="0.45" />
          </g>
        </svg>
        <div class="pseudorelief-calibration" hidden>
          <strong>Stub-road anchors</strong>
          <span>Click three locations on the top model.</span>
          <button type="button" data-reset-stub-anchors>Reset points</button>
        </div>
        <div class="pseudorelief-annotation pseudorelief-annotation--low">
          <strong>Low pseudo volume</strong>
          <span>High potential of human disturbance</span>
        </div>
        <div class="pseudorelief-annotation pseudorelief-annotation--high">
          <strong>High pseudo volume</strong>
          <span>Far from human disturbance</span>
        </div>
      </div>
    </div>
  </div>
  <div class="map-section__triggers" aria-hidden="true">
    <div class="map-scroll-step" data-map-step="-2"></div>
    <div class="map-scroll-step" data-map-step="-1"></div>
    <div id="fragmentation" class="map-scroll-step" data-map-step="0"></div>
    <div class="map-scroll-step" data-map-step="1"></div>
    <div class="map-scroll-step" data-map-step="2"></div>
    <div class="map-scroll-step" data-map-step="3"></div>
    <div class="map-scroll-step" data-map-step="4"></div>
    <div class="map-scroll-step map-scroll-step--hold" data-map-step="5"></div>
    <div class="map-scroll-step" data-map-step="6"></div>
    <div class="map-scroll-step" data-map-step="7"></div>
    ${window.matchMedia("(max-width: 900px)").matches?'<div class="map-scroll-step map-scroll-step--mobile-mesh-detail" data-map-step="7.5"></div>':""}
    <div class="map-scroll-step" data-map-step="8"></div>
    <div class="map-scroll-step" data-map-step="9"></div>
    <div class="map-scroll-step" data-map-step="10"></div>
    <div class="map-scroll-step" data-map-step="11"></div>
    <div class="map-scroll-step" data-map-step="12"></div>
    <div class="map-scroll-step" data-map-step="13"></div>
  </div>
`,e}function xt(){const e=document.createElement("section");return e.id="explore-data",e.className="story-section explore-data-section",e.dataset.theme="light",e.dataset.section="explore-data",e}function qt(){const e=document.createElement("section");e.id="conclusion",e.className="story-section end-sequence-section",e.dataset.theme="light",e.dataset.section="explore-data";const t=Array.from({length:8},(s,a)=>{const o=`end-sequence-section__media${a===0?" is-revealed":""}`;return a===7?`
        <picture class="${o}" data-end-media="${a}" style="--end-layer: ${a}">
          <source media="(max-width: 700px)" srcset="/media/end8_mobile.webp" />
          <img src="/media/end8.webp" alt="" />
        </picture>
      `:`<img class="${o}" data-end-media="${a}" src="/media/end${a+1}.webp" alt="" style="--end-layer: ${a}" />`}).join("");return e.innerHTML=`
    <div class="end-sequence-section__stage">
      <div class="end-sequence-section__media-stack" aria-hidden="true">${t}</div>
      <div class="end-sequence-section__texts">
        <p class="end-sequence-section__text" data-end-text="0">Although the two German federal states (Bundesländer) along the lynx migration route are generally less fragmented compared to others, there are still a significant number of barriers along the route that are often impassable and constitute a major obstacle to successful movement and dispersal for animals.</p>
        <p class="end-sequence-section__text" data-end-text="1">Preserving large, unfragmented forests is essential for wildlife and the environment. Yet, modern society is under constant pressure from competing land use demands, and the expansion of infrastructure risks further severing ecological connections and increasing the barrier strength of existing corridors.</p>
        <p class="end-sequence-section__text" data-end-text="2">Mitigation measures such as wildlife bridges, carefully located solar parks, and reduced deforestation are therefore key to preventing further fragmentation, so that nature and wildlife can thrive.</p>
        <p class="end-sequence-section__text end-sequence-section__text--final" data-end-text="3">All actors with their individual needs within the interconnected synergistic natural system should be treated as equals.</p>
      </div>
    </div>
  `,e}function Et(){return[vt(),bt(),...wt(),St(),xt(),qt()]}function $t(e,t=document){return typeof e=="string"?Array.from(t.querySelectorAll(e)):e instanceof Element?[e]:e instanceof NodeList?Array.from(e):e instanceof Array?e:[]}function Lt(e){const t=document.createElement("div");t.className=`scrollama__debug-step ${e}`,t.style.position="fixed",t.style.left="0",t.style.width="100%",t.style.zIndex="9999",t.style.borderTop="2px solid black",t.style.borderBottom="2px solid black";const s=document.createElement("p");return s.style.position="absolute",s.style.left="0",s.style.height="1px",s.style.width="100%",s.style.borderTop="1px dashed black",t.appendChild(s),document.body.appendChild(t),t}function At({id:e,step:t,marginTop:s}){const{index:a,height:o}=t,r=`scrollama__debug-step--${e}-${a}`;let n=document.querySelector(`.${r}`);n||(n=Lt(r)),n.style.top=`${s*-1}px`,n.style.height=`${o}px`,n.querySelector("p").style.top=`${o/2}px`}function kt(){const e="abcdefghijklmnopqrstuvwxyz",t=Date.now(),s=[];for(let a=0;a<6;a+=1){const o=e[Math.floor(Math.random()*e.length)];s.push(o)}return`${s.join("")}${t}`}function ve(e){console.error(`scrollama error: ${e}`)}function me(e){return+e.getAttribute("data-scrollama-index")}function Ft(e,t){const s=Math.ceil(e/t),a=[],o=1/s;for(let r=0;r<s+1;r+=1)a.push(r*o);return a}function ke(e){if(typeof e=="string"&&e.indexOf("px")>0){const t=+e.replace("px","");return isNaN(t)?(err("offset value must be in 'px' format. Fallback to 0.5."),{format:"percent",value:.5}):{format:"pixels",value:t}}else if(typeof e=="number"||!isNaN(+e))return e>1&&err("offset value is greater than 1. Fallback to 1."),e<0&&err("offset value is lower than 0. Fallback to 0."),{format:"percent",value:Math.min(Math.max(0,e),1)};return null}function Mt(e){e.forEach(t=>t.node.setAttribute("data-scrollama-index",t.index))}function Tt(e){const{top:t}=e.getBoundingClientRect(),s=window.pageYOffset,a=document.body.clientTop||0;return t+s-a}let oe,be,X;function Ie(e){const t=e?e.scrollTop:window.pageYOffset;oe!==t&&(oe=t,oe>be?X="down":oe<be&&(X="up"),be=oe)}function Rt(e){oe=0,be=0,document.addEventListener("scroll",()=>Ie(e))}function ae(){let e={},t=kt(),s=[],a,o,r,n=0,c=!1,m=!1,f=!1,g=!1,u=[];function p(){e={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},u=[]}function b(i){i&&!c&&D(),!i&&c&&W(),c=i}function E(i,y){const h=me(i),_=s[h];y!==void 0&&(_.progress=y);const q={element:i,index:h,progress:y,direction:X};_.state==="enter"&&e.stepProgress(q)}function T(i,y=!0){const h=me(i),_=s[h],q={element:i,index:h,direction:X};_.direction=X,_.state="enter",u[h]||e.stepEnter(q),g&&(u[h]=!0)}function V(i,y=!0){const h=me(i),_=s[h];if(!_.state)return!1;const q={element:i,index:h,direction:X};m&&(X==="down"&&_.progress<1?E(i,1):X==="up"&&_.progress>0&&E(i,0)),_.direction=X,_.state="exit",e.stepExit(q)}function H([i]){const y=me(i.target),h=s[y],_=i.target.offsetHeight;_!==h.height&&(h.height=_,L(h),ee(h),U(h))}function $([i]){Ie(o);const{isIntersecting:y,target:h}=i;y?T(h):V(h)}function O([i]){const y=me(i.target),h=s[y],{isIntersecting:_,intersectionRatio:q,target:Y}=i;_&&h.state==="enter"&&E(Y,q)}function L({observers:i}){Object.keys(i).map(y=>{i[y].disconnect()})}function W(){s.forEach(L)}function U(i){const y=new ResizeObserver(H);y.observe(i.node),i.observers.resize=y}function fe(){s.forEach(U)}function ee(i){const y=window.innerHeight,h=i.offset||a,_=h.format==="pixels"?1:y,q=h.value*_,Y=i.height/2-q,K=i.height/2-(y-q),R={rootMargin:`${Y}px 0px ${K}px 0px`,threshold:.5,root:r},te=new IntersectionObserver($,R);te.observe(i.node),i.observers.step=te,f&&At({id:t,step:i,marginTop:Y})}function ne(){s.forEach(ee)}function w(i){const y=window.innerHeight,h=i.offset||a,_=h.format==="pixels"?1:y,q=h.value*_,Y=-q+i.height,K=q-y,Z=`${Y}px 0px ${K}px 0px`,J=Ft(i.height,n),A={rootMargin:Z,threshold:J},R=new IntersectionObserver(O,A);R.observe(i.node),i.observers.progress=R}function C(){s.forEach(w)}function D(){W(),fe(),ne(),m&&C()}const l={};return l.setup=({step:i,parent:y,offset:h=.5,threshold:_=4,progress:q=!1,once:Y=!1,debug:K=!1,container:Z=void 0,root:J=null})=>(Rt(Z),s=$t(i,y).map((A,R)=>({index:R,direction:void 0,height:A.offsetHeight,node:A,observers:{},offset:ke(A.dataset.offset),top:Tt(A),progress:0,state:void 0})),s.length?(m=q,g=Y,f=K,n=Math.max(1,+_),a=ke(h),o=Z,r=J,p(),Mt(s),b(!0),l):(ve("no step elements"),l)),l.enable=()=>(b(!0),l),l.disable=()=>(b(!1),l),l.destroy=()=>(b(!1),p(),l),l.resize=()=>(D(),l),l.offset=i=>i==null?a.value:(a=ke(i),D(),l),l.onStepEnter=i=>(typeof i=="function"?e.stepEnter=i:ve("onStepEnter requires a function"),l),l.onStepExit=i=>(typeof i=="function"?e.stepExit=i:ve("onStepExit requires a function"),l),l.onStepProgress=i=>(typeof i=="function"?e.stepProgress=i:ve("onStepProgress requires a function"),l),l}const v=(e,t=0,s=1)=>Math.min(s,Math.max(t,e)),x=(e,t,s)=>e+(t-e)*s;let et=()=>{},re=-1;const Ue=new Set;function Fe(){return document.querySelector(".sound-control__button")?.classList.contains("is-enabled")??!1}function tt(e){const t=z[e]?.animation;return!!(t?.src&&Number.isFinite(t.start)&&Number.isFinite(t.end)&&t.end>t.start)}function Re(e,{restartAnimation:t=!0}={}){const s=document.querySelector(".story-chapter-section--journey");if(!s||!Number.isFinite(e))return;re=e,s.querySelectorAll("[data-story-media]").forEach(n=>{const c=Number(n.dataset.storyMedia)===e;n.classList.toggle("is-active",c);const m=n.querySelector("audio[data-story-loop]");m&&(c&&Fe()?m.play().catch(()=>{}):(m.pause(),c||(m.currentTime=0)))});const a=z[e]?.animation,o=s.querySelector("[data-story-shared-animation]"),r=!!(o&&tt(e));if(o&&(r?(o.muted=!Fe(),o.dataset.storyAnimationEnd=String(a.end),t&&(o.currentTime=a.start),o.play().catch(()=>{})):(o.pause(),delete o.dataset.storyAnimationEnd)),Fe()&&!Ue.has(e)){const n=s.querySelector(`[data-story-once="${e}"]`);n&&(n.currentTime=0,n.play().then(()=>Ue.add(e)).catch(()=>{}))}ot()}function Pt({enabled:e}){re>=0&&Re(re,{restartAnimation:!1}),e||document.querySelectorAll("audio[data-story-once]").forEach(t=>t.pause())}function Nt(){const e=document.querySelector("[data-story-shared-animation]");e&&(e.preload="auto",e.load(),e.addEventListener("timeupdate",()=>{const t=Number(e.dataset.storyAnimationEnd);Number.isFinite(t)&&e.currentTime>=t&&(e.currentTime=t,e.pause())}))}function Ht(e){et=e}let Ke=!1;function st(){if(Ke)return;Ke=!0,document.querySelector(".side-nav")?.classList.remove("side-nav--delayed"),document.querySelector(".intro-section .scroll-arrow")?.classList.add("is-visible"),document.querySelector(".intro-section__heading")?.classList.add("is-visible");const e=document.querySelector(".sound-control__hint");e?.classList.add("is-visible"),window.setTimeout(()=>e?.classList.remove("is-visible"),5e3)}function Ot(e){const t=document.querySelectorAll("[data-section]"),s=document.querySelectorAll("[data-section-link]"),a=o=>{e.dataset.theme=o.dataset.theme??"dark",document.querySelector(".sound-control__button")?.dispatchEvent(new Event("soundthemechange")),document.querySelector(".side-nav__logo-image")?.dispatchEvent(new Event("logothemechange")),s.forEach(r=>{const n=r.dataset.sectionLink===o.dataset.section;r.classList.toggle("is-active",n),r.setAttribute("aria-current",n?"location":"false")})};if(typeof ae=="function"){const o=ae();o.setup({step:"[data-section]",offset:.5,order:!0}).onStepEnter(({element:r})=>a(r)),window.addEventListener("resize",()=>o.resize()),window.__sectionScroller=o}else{const o=new IntersectionObserver(r=>{const n=r.filter(c=>c.isIntersecting).sort((c,m)=>m.intersectionRatio-c.intersectionRatio)[0];n&&a(n.target)},{rootMargin:"-35% 0px -35% 0px",threshold:[0,.25,.5,.75,1]});t.forEach(r=>o.observe(r))}window.setTimeout(st,4e3)}const Yt=4+18/30,Bt=8;function Pe(e){const t=e.getBoundingClientRect(),s=e.offsetHeight-window.innerHeight;return s<=0?0:v(-t.top/s)}function zt(e){const t=e.getBoundingClientRect();return v((window.innerHeight-t.top)/(window.innerHeight*.75))}function Ct(){const e=document.querySelector("#introduction"),t=document.querySelector(".main-nav");if(!e||!t)return;const s=e.getBoundingClientRect(),a=v(-s.top/(window.innerHeight*.72));a>.005&&st(),t.style.setProperty("--nav-reveal",a.toFixed(3)),t.classList.toggle("is-visible",a>.02)}function Dt(){const e=document.querySelector("#introduction"),t=document.querySelector(".intro-section__video");if(!e||!t)return;const s=()=>{t.play().catch(()=>{})};t.addEventListener("loadeddata",s,{once:!0}),document.addEventListener("pointerdown",s,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=Bt&&(t.currentTime=Yt,s())}),window.addEventListener("scroll",()=>{const a=e.getBoundingClientRect();a.bottom>0&&a.top<window.innerHeight?s():t.pause()},{passive:!0}),s()}function jt(){const e=document.querySelector(".sequence-section");if(!e)return;const t=Pe(e),s=e.getBoundingClientRect();s.bottom>0&&s.top<window.innerHeight;const a=e.querySelectorAll("[data-sequence-frame]"),o=v(t/.6),r=Math.min(a.length-1,Math.floor(o*a.length));a.forEach((c,m)=>c.classList.toggle("is-revealed",m<=r)),e.querySelectorAll("[data-sequence-text]").forEach((c,m)=>{const g=[.14,.42,.7][m]??.5,p=(1-v((t-(g-.17))/.34)*2)*window.innerHeight;c.style.opacity="1",c.style.transform=`translateY(${p}px)`})}function ot(){const e=document.querySelector(".story-chapter-section--journey");if(!e)return;const t=e.getBoundingClientRect(),s=t.top<window.innerHeight&&t.bottom>0;re<0&&s&&Re(0);const a=e.querySelectorAll("[data-story-card]"),o=.72,r=o/a.length,n=Pe(e),c=v((zt(e)-.15)/.6),m=r*.5,f=c*m+n*(1-m);a.forEach(($,O)=>{const L=v((f-O*r)/r),W=v((L-.3)/.2),U=v((.9-L)/.15);$.style.opacity="1",$.style.transform=`translateY(${(1-L*2)*100}%)`,$.style.setProperty("--story-copy-offset","0px"),$.style.setProperty("--facts-reveal",Math.min(W,U).toFixed(3))});const g=v(f/(r*.5)),u=v((f-o)/.1),p=re>=0?re:0,b=tt(p);e.querySelectorAll("[data-story-media]").forEach($=>{const O=Number($.dataset.storyMedia)===p;$.style.opacity=O?(g*(1-u)).toFixed(3):"0"});const E=e.querySelector("[data-story-shared-animation]");E&&(E.style.opacity=b?(g*(1-u)).toFixed(3):"0");const T=document.querySelector(".story-outro__image"),V=document.querySelector(".story-outro__text"),H=document.querySelector(".story-outro__arrow");T&&(T.style.opacity=u.toFixed(3)),V&&(V.style.transform=`translateY(${(1-u)*100}vh)`),H?.classList.toggle("is-visible",f>=.86)}let at=0;function Me(e,t=1){const s=document.querySelector(".map-section"),a=document.querySelector(".map-section__step--barriers"),o=document.querySelector(".map-section__title-row"),r=document.querySelector(".map-section__forest-title"),n=document.querySelector(".map-section__step--intro"),c=document.querySelector(".map-section__step--detail"),m=document.querySelector(".map-section__step--pseudo"),f=document.querySelector(".map-section__stub-copy"),g=document.querySelector(".map-section__pseudo-facts-copy"),u=document.querySelector(".map-section__step--mesh"),p=document.querySelector(".map-section__mesh-title"),b=document.querySelector(".map-section__mesh-intro-copy"),E=document.querySelector(".map-section__mesh-fact--intro"),T=document.querySelector(".map-section__mesh-animation"),V=document.querySelector(".map-section__mesh-fact--outro"),H=document.querySelector(".map-section__mesh-route-copy"),$=document.querySelector(".map-section__mesh-bayern-copy"),O=document.querySelector(".map-section__mesh-thueringen-copy"),L=document.querySelector(".map-section__mesh-diagonal-step"),W=L?.querySelector(":scope > .map-section__reveal-text"),U=L?.querySelector(".map-section__diagonal-animation"),fe=L?.querySelector(":scope > .map-section__facts"),ee=document.querySelector(".map-section__mesh-bayern-time"),ne=document.querySelector(".map-section__mesh-thueringen-time"),w=document.querySelector(".forest-map"),C=document.querySelector(".forest-map__svg"),D=document.querySelector(".forest-map__layer--barriers");if(!s||!a||!o||!r||!n||!c||!m||!f||!g||!u||!p||!b||!E||!T||!V||!H||!$||!O||!L||!W||!U||!fe||!ee||!ne||!w||!C||!D)return;at=e;const l=v((t-.18)/.58),i=d=>`${d*window.innerHeight}px`,y=e<-2?1:e===-2?1-l:e===-1?0:e===0?-l:-1,h=e<-2?0:e===-2?l:e===-1?1:e===0?1-l:0,_=e<0?0:e===0?l:1,q=e===0?1-l:e===1?0:e===2?-l:-1,Y=e<1?1:e===1?1-l:e===2?-l:-1,K=e<2?1:e===2?1-l:e<6?0:e===6?-l:-1,Z=e<6?1:e===6?1-l:0,J=e<1?0:e===1?l:1,A=e<2?0:e===2?l:e<6?1:e===6?1-l:0,R=e<3?0:e===3?l:1,te=e<4?0:e===4?l:1,He=e<6?0:e===6?l:1,we=e<7?0:e===7?l:1,ie=window.matchMedia("(max-width: 900px)").matches,Se=!ie||e<7.5?0:e===7.5?l:1,nt=e<6?0:e===6?l:1,Q=e<8?0:e===8?l:1,G=e<9?0:e===9?l:1,ce=e<10?0:e===10?l:1,le=e<11?0:e===11?l:1,he=e<12?0:e===12?l:1,Oe=e<13?0:e===13?l:1,ye=Q,xe=window.matchMedia("(max-width: 700px)").matches?60:window.matchMedia("(max-width: 900px)").matches?250:0,it=v(ye/.12),se=v((ye-.12)/.88),Ye=v(we/.55),Be=v((we-.18)/.55),ze=ie?Se:v((we-.36)/.55),qe=ie?Se*(b.offsetHeight+24):0,ge=ie?he*(W.offsetHeight+24):0;o.style.opacity="1",o.style.transform="none",r.style.opacity="1",a.style.transform=`translateY(${i(y)})`,n.style.transform=`translateY(${i(q)})`,c.style.transform=`translateY(${i(Y)})`,m.style.transform=`translateY(${i(K)})`,u.style.transform=`translateY(${i(Z)})`,H.style.top=`${p.offsetHeight}px`,b.style.opacity=((1-Q)*(1-Se)).toFixed(3),E.style.opacity=(Ye*(1-Q)).toFixed(3),E.style.transform=`translateY(${(1-Ye)*40-qe}px)`,T.style.opacity=(Be*(1-Q)).toFixed(3),T.style.transform=`translateY(${(1-Be)*40-qe}px)`,V.style.opacity=(ze*(1-Q)).toFixed(3),V.style.transform=`translateY(${(1-ze)*40-qe}px)`,H.style.opacity=(Q*(1-le)).toFixed(3),H.style.transform=`translateY(${(1-Q)*window.innerHeight}px)`,$.style.top=`${p.offsetHeight+H.offsetHeight+16}px`,$.style.opacity=(G*(1-le)).toFixed(3),$.style.transform=`translateY(${(1-G)*window.innerHeight}px)`,O.style.top=`${p.offsetHeight+H.offsetHeight+$.offsetHeight+32}px`,O.style.opacity=(ce*(1-le)).toFixed(3),O.style.transform=`translateY(${(1-ce)*window.innerHeight}px)`,L.style.top=`${p.offsetHeight}px`,L.style.opacity=le.toFixed(3),L.style.transform=`translateY(${(1-le)*window.innerHeight}px)`,W.style.opacity=(ie?1-he:1).toFixed(3),U.style.transform=`translateY(${-ge}px)`,fe.style.transform=`translateY(${-ge}px)`,ee.style.opacity=he.toFixed(3),ee.style.transform=`translateY(${(1-he)*window.innerHeight-ge}px)`,ne.style.opacity=Oe.toFixed(3),ne.style.transform=`translateY(${(1-Oe)*window.innerHeight-ge}px)`,f.style.opacity=R.toFixed(3),f.style.transform=`translateY(${(1-R)*window.innerHeight}px)`,g.style.opacity=te.toFixed(3),g.style.transform=`translateY(${(1-te)*40}px)`,w.style.opacity=(e===-2?l:1).toFixed(3),w.style.setProperty("--barrier-reveal",h.toFixed(3)),w.style.setProperty("--forest-stage-reveal",_.toFixed(3)),w.style.setProperty("--large-forest-reveal",J.toFixed(3)),w.style.setProperty("--forest-zoom-detail",v((A-.35)/.65).toFixed(3)),w.style.setProperty("--pseudorelief-reveal",(R*(1-He)).toFixed(3)),w.style.setProperty("--pseudorelief-exit",He.toFixed(3)),w.style.setProperty("--mesh-reveal",nt.toFixed(3)),w.style.setProperty("--ranking-reveal",it.toFixed(3)),w.style.setProperty("--ranking-travel",se.toFixed(3)),w.classList.toggle("is-ranking",ye>0),w.closest(".map-section__media")?.classList.toggle("is-ranking",ye>0),document.querySelectorAll(".forest-map__ranking-state").forEach(d=>{const S=Number(d.dataset.centerX),k=Number(d.dataset.centerY),B=Number(d.dataset.targetX),j=Number(d.dataset.targetY),F=Number(d.dataset.targetScale),P=x(S,B,se)-100*G,M=x(k,j-xe,se),N=x(1,F,se);d.setAttribute("transform",`translate(${P} ${M}) scale(${N}) translate(${-S} ${-k})`);const I=d.dataset.stateCode==="09"?1:1-.8*G,Ae=d.dataset.stateCode==="16"?x(I,1,ce):I;d.style.opacity=Ae.toFixed(3)}),document.querySelectorAll(".forest-map__ranking-label").forEach(d=>{const S=d.dataset.stateCode==="09"?1:1-.8*G,k=d.dataset.stateCode==="16"?x(S,1,ce):S,B=Number(d.dataset.targetX),F=Number(d.dataset.labelY)-xe,P=B-100*G,M=d.dataset.stateCode==="12"?Math.max(24,P):P;d.style.opacity=(se*k).toFixed(3),d.setAttribute("x",M),d.setAttribute("y",F),d.setAttribute("transform",`rotate(-55 ${M} ${F})`),d.querySelectorAll("tspan").forEach(N=>N.setAttribute("x",M))});const Ee=C.getScreenCTM(),_e=w.getBoundingClientRect();Ee&&(document.querySelectorAll(".forest-map__mesh-label-html").forEach(d=>{const S=C.createSVGPoint();S.x=Number(d.dataset.anchorX),S.y=Number(d.dataset.anchorY);const k=S.matrixTransform(Ee);d.style.left=`${k.x-_e.left}px`,d.style.top=`${k.y-_e.top}px`}),document.querySelectorAll(".forest-map__ranking-label-html").forEach(d=>{const S=d.dataset.stateCode==="09"?1:1-.8*G,k=d.dataset.stateCode==="16"?x(S,1,ce):S,B=Number(d.dataset.targetX),j=Number(d.dataset.labelY)-xe,F=B-100*G,P=d.dataset.stateCode==="12"?Math.max(24,F):F,M=C.createSVGPoint();M.x=P,M.y=j;const N=M.matrixTransform(Ee);d.style.left=`${N.x-_e.left}px`,d.style.top=`${N.y-_e.top}px`,d.style.opacity=(se*k).toFixed(3)})),w.classList.toggle("is-large-forest-only",J>=.99),C.style.transform="none";const Ce=Number(D.dataset.boundsX),De=Number(D.dataset.boundsY),$e=Number(D.dataset.boundsWidth),Le=Number(D.dataset.boundsHeight);if([Ce,De,$e,Le].every(Number.isFinite)){const d=C.getBoundingClientRect(),S=d.width/Math.max(d.height,1),k=Ve=>{let de=$e*Ve,ue=Le*Ve;return de/ue<S?de=ue*S:ue=de/S,{x:Ce+$e/2-de/2,y:De+Le/2-ue/2,width:de,height:ue}},B=k(.52),j=k(.82),F=e<=0,P=e<-1?0:e===-1?l:1,M=h;w.style.setProperty("--barrier-summary-reveal",M.toFixed(3)),w.classList.toggle("has-barrier-summary",M>.01);const N=e<0?0:e===0?l:1,I={x:x(B.x,j.x,P),y:x(B.y,j.y,P),width:x(B.width,j.width,P),height:x(B.height,j.height,P)},Ae=87.5,Xe=87.5,ct=456.25,lt=456.25+100/Math.max(d.height,1)*Xe,dt=F?x(I.x,0,N):x(0,ct,A),ut=F?x(I.y,0,N):x(0,lt,A),mt=F?x(I.width,1e3,N):x(1e3,Ae,A),pt=F?x(I.height,1e3,N):x(1e3,Xe,A);C.setAttribute("viewBox",`${dt} ${ut} ${mt} ${pt}`)}const je=e<0?"route":"fragmentation";s.dataset.section=je,document.querySelectorAll("[data-section-link]").forEach(d=>{const S=d.dataset.sectionLink===je;d.classList.toggle("is-active",S),d.setAttribute("aria-current",S?"location":"false")}),et(te,R)}function Xt(){const e=document.querySelector(".end-sequence-section");if(!e)return;const t=Pe(e),s=e.querySelectorAll("[data-end-media]"),a=v(t/.88),o=Math.min(s.length-1,Math.floor(a*s.length));s.forEach((n,c)=>{n.classList.toggle("is-revealed",c<=o)});const r=[.14,.36,.58,.82];e.querySelectorAll("[data-end-text]").forEach((n,c)=>{if(c===3){const g=v((t-.64)/.16),u=(1-g)*window.innerHeight-g*window.innerHeight*.22;n.style.transform=`translateY(${u}px)`;return}const m=r[c]??.82,f=v((t-(m-.16))/.32);n.style.transform=`translateY(${(1-f*2)*window.innerHeight}px)`})}function Vt(){Nt(),Dt(),document.querySelectorAll(".map-section__mark").forEach(o=>{o.addEventListener("error",()=>o.classList.add("has-error"))}),new Map([["route",-2],["fragmentation",0]]).forEach((o,r)=>{document.querySelectorAll(`.main-nav__item[data-section-link="${r}"]`).forEach(n=>{n.addEventListener("click",c=>{const m=document.querySelector(`.map-scroll-step[data-map-step="${o}"]`);if(!m)return;c.preventDefault(),history.pushState(null,"",`#${r}`);const u=window.scrollY+m.getBoundingClientRect().top+m.offsetHeight*.82-window.innerHeight*.5;window.scrollTo({top:Math.max(0,u),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})})})}),document.querySelectorAll('.scroll-arrow[href^="#"]').forEach(o=>{o.addEventListener("click",r=>{const n=document.querySelector(o.getAttribute("href"));n&&(r.preventDefault(),history.pushState(null,"",o.getAttribute("href")),n.scrollIntoView({behavior:"smooth",block:"start"}))})}),document.querySelectorAll(".sequence-section__frame").forEach(o=>{o.addEventListener("error",()=>o.classList.add("has-error"))});const t=()=>{Ct(),jt(),ot(),Xt()};let s=!1;const a=()=>{s||(s=!0,requestAnimationFrame(()=>{t(),s=!1}))};if(typeof ae=="function"){const o=ae();o.setup({step:"[data-story-trigger]",offset:.55,order:!0}).onStepEnter(({element:c})=>Re(Number(c.dataset.storyTrigger)));const r=ae();r.setup({step:".map-scroll-step",offset:.5,progress:!0,threshold:4,order:!0}).onStepEnter(({element:c,progress:m})=>{Me(Number(c.dataset.mapStep),m??0)}).onStepProgress(({element:c,progress:m})=>{const f=Number(c.dataset.mapStep);Me(f,m)});const n=ae();n.setup({step:".intro-section, .sequence-section, .story-chapter-section, .interlude-section, .route-section, .map-section, .end-sequence-section",offset:.9,progress:!0,threshold:4,order:!0}).onStepEnter(a).onStepProgress(a).onStepExit(a),window.addEventListener("resize",()=>{o.resize(),r.resize(),n.resize(),a()}),window.__mapScroller=r,window.__storyScroller=o,window.__sceneScroller=n}else window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a);window.addEventListener("soundstatechange",o=>Pt(o.detail)),t()}function Ze(){Me(at,1)}const rt=document.querySelector("#app");if(!rt)throw new Error("App root not found");const pe=document.createElement("div");pe.className="site-shell";pe.dataset.theme="dark";const Ne=document.createElement("main");Ne.id="main-content";Ne.append(...Et());pe.append(yt(),gt(),Ne);rt.append(pe);document.querySelectorAll("video").forEach(e=>{e.muted=!1});Ot(pe);Vt();let Je=!1;const Wt=async()=>{if(Je)return;Je=!0;const[{setupForestMap:e},t]=await Promise.all([Ge(()=>import("./forest-map-m5XB-Asb.js"),[]),Ge(()=>import("./pseudorelief-model-Bd0jQ7wX.js"),[])]);Ht(t.updatePseudorelief),t.setupPseudoreliefModel(),e(Ze),Ze()};Wt();export{v as c};
