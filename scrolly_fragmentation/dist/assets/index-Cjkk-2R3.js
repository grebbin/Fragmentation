(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const it="modulepreload",ct=function(e){return"/"+e},Ce={},De=function(t,s,o){let a=Promise.resolve();if(s&&s.length>0){let f=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");a=f(s.map(h=>{if(h=ct(h),h in Ce)return;Ce[h]=!0;const g=h.endsWith(".css"),u=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${u}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":it,g||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),g)return new Promise((b,x)=>{p.addEventListener("load",b),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return a.then(c=>{for(const l of c||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},We=[{id:"introduction",navigationLabel:"Introduction",eyebrow:"Fragmented Reality",title:"An introduction to fragmented habitats",theme:"dark",className:"intro-section"},{id:"perspective-shift",navigationLabel:"Perspective Shift",eyebrow:"Perspective Shift",title:"A landscape seen from another point of view",theme:"dark",className:"sequence-section"},{id:"route",navigationLabel:"The Route",eyebrow:"The Route",title:"Five stories of movement and interruption",theme:"light",className:"story-chapter-section"},{id:"fragmentation",navigationLabel:"Fragmentation",eyebrow:"Fragmentation",title:"The landscape does not end at the edge of the road.",theme:"dark",className:"interlude-section"},{id:"explore-data",navigationLabel:"Explore the Data",eyebrow:"Explore the Data",title:"Fragmentation across the landscape",theme:"light",className:"map-section"}],Xe=[{title:"Forest",copy:"Introduce the first habitat story here.",facts:["Fact one","Fact two"]},{title:"Highway",copy:"Introduce the highway story here.",facts:["Fact one","Fact two"]},{title:"Canal and harbour",copy:"Introduce the canal and harbour story here.",facts:["Fact one","Fact two"]},{title:"Wildlife bridge",copy:"Introduce the wildlife bridge story here.",facts:["Fact one","Fact two"]},{title:"Final forest",copy:"Introduce the final forest story here.",facts:["Fact one","Fact two"]}];function lt(){const e=document.createElement("nav");return e.className="main-nav",e.setAttribute("aria-label","Story chapters"),We.forEach((t,s)=>{const o=document.createElement("a");o.className="main-nav__item",o.href=`#${t.id}`,o.dataset.sectionLink=t.id,o.innerHTML=`
    <span class="main-nav__number">${s+1}</span>
    <span class="main-nav__label">${t.navigationLabel}</span>
  `,e.append(o)}),e}function dt(){const e=document.createElement("aside");e.className="side-nav side-nav--delayed",e.setAttribute("aria-label","Project information"),e.innerHTML=`
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
`;const t=e.querySelector(".sound-control__button"),s=e.querySelector(".side-nav__logo"),o=e.querySelector(".side-nav__logo-image"),a=()=>{if(!o)return;const u=document.querySelector(".site-shell")?.dataset.theme==="light"?"BM":"DM";o.src=`/media/Logo_${u}.png`},r=()=>{if(!o)return;const u=document.querySelector(".site-shell")?.dataset.theme==="light"?"DM":"BM";o.src=`/media/Logo_${u}.png`};window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(s?.addEventListener("pointerenter",r),s?.addEventListener("pointerleave",a),s?.addEventListener("focus",r),s?.addEventListener("blur",a)),o?.addEventListener("error",()=>{o.src.endsWith("/media/Logo_DM.png")||(o.src="/media/Logo_DM.png")}),o?.addEventListener("logothemechange",a);const l=()=>{const u=t?.querySelector("img");if(!t||!u)return;const p=t.classList.contains("is-enabled"),b=document.querySelector(".site-shell")?.dataset.theme==="light"?"BM":"DM";u.src=`/media/sound_${p?"on":"off"}_${b}.svg`},f=t?.querySelector("img");f?.addEventListener("error",()=>{const p=`/media/sound_${t?.classList.contains("is-enabled")?"on":"off"}.svg`;f.src.endsWith(p.replace("./","/"))||(f.src=p)}),t?.addEventListener("click",()=>{const u=document.querySelectorAll("video"),p=!t.classList.contains("is-enabled");if(u.forEach(b=>{b.muted=!p}),t.classList.toggle("is-enabled",p),t.setAttribute("aria-pressed",String(p)),t.setAttribute("aria-label",p?"Disable sound":"Enable sound"),l(),p){const b=Array.from(u).find(x=>{const R=x.getBoundingClientRect();return R.bottom>0&&R.top<window.innerHeight&&getComputedStyle(x).opacity!=="0"});b&&b.play().catch(()=>{})}}),t?.addEventListener("soundthemechange",l);const h=e.querySelector(".side-nav__logo"),g=()=>{e.classList.remove("is-open"),h?.setAttribute("aria-expanded","false")};return h?.addEventListener("click",u=>{if(!window.matchMedia("(max-width: 900px)").matches)return;u.preventDefault();const p=e.classList.toggle("is-open");h.setAttribute("aria-expanded",String(p))}),e.querySelectorAll(".side-nav__link").forEach(u=>{u.addEventListener("click",g)}),document.addEventListener("click",u=>{window.matchMedia("(max-width: 900px)").matches&&u.target instanceof Node&&!e.contains(u.target)&&g()}),e}function ut(e){const t=document.createElement("a");return t.className="scroll-arrow",t.href=e,t.setAttribute("aria-label","Continue to the next chapter"),t.innerHTML='<span>Scroll</span><span aria-hidden="true">↓</span>',t}function Me(e){const t=We[e],s=document.createElement("section");return s.id=t.id,s.className=`story-section ${t.className}`,s.dataset.theme=t.theme,s.dataset.section=t.id,s}function pt(){const e=Me(0);return e.innerHTML=`
  <video class="intro-section__video" autoplay playsinline preload="auto" aria-label="Introductory forest film">
    <source src="/media/start_first.webm" type="video/webm" />
  </video>
  <div class="intro-section__heading">
    <h1>Fragmented Reality</h1>
    <p>Explore forest fragmentation based on scientific data.</p>
  </div>
`,e.append(ut("#introduction-sequence")),e}function mt(){const e=Me(1);e.id="introduction-sequence",e.dataset.section="introduction";const t=Array.from({length:6},(s,o)=>{const a=o+1;return`<picture>${a===6?'<source media="(max-width: 700px)" srcset="/media/intro6_mobile.webp" />':""}<img class="sequence-section__frame${o===0?" is-revealed":""}" src="/media/intro${a}.webp" alt="" data-sequence-frame="${o}" style="--frame-layer: ${o}" /></picture>`}).join("");return e.innerHTML=`
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
`,e}function ft(){const e=document.createElement("section");e.id="perspective-shift",e.className="story-section story-chapter-section story-chapter-section--journey",e.dataset.theme="dark",e.dataset.section="perspective-shift";const t=Xe.map((s,o)=>`
    <article class="story-card" data-story-card="${o}">
      <p class="eyebrow">Story ${o+1} of ${Xe.length}</p>
      <h2>${s.title}</h2>
      <p>${s.copy}</p>
      <ul class="story-card__facts">
        ${s.facts.map(a=>`<li>${a}</li>`).join("")}
      </ul>
    </article>
  `).join("");return e.innerHTML=`
    <div class="story-chapter-section__stage">
      <div class="story-chapter-section__panel">${t}</div>
      <div class="story-chapter-section__media" aria-hidden="true">
        <img src="/media/story_placeholder.webp" alt="" />
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
  `,[e]}function ht(){const e=Me(4);return e.id="route",e.dataset.section="route",e.innerHTML=`
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
          <g class="forest-map__layer forest-map__layer--large"></g>
          <g class="forest-map__layer forest-map__layer--zoom-detail"></g>
          <g class="forest-map__layer forest-map__layer--mesh"></g>
          <g class="forest-map__layer forest-map__layer--states"></g>
          <g class="forest-map__layer forest-map__layer--mesh-labels"></g>
          <g class="forest-map__layer forest-map__layer--ranking"></g>
        </svg>
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
`,e}function gt(){const e=document.createElement("section");return e.id="explore-data",e.className="story-section explore-data-section",e.dataset.theme="light",e.dataset.section="explore-data",e}function yt(){const e=document.createElement("section");e.id="conclusion",e.className="story-section end-sequence-section",e.dataset.theme="light",e.dataset.section="explore-data";const t=Array.from({length:8},(s,o)=>{const a=`end-sequence-section__media${o===0?" is-revealed":""}`;return o===7?`
        <picture class="${a}" data-end-media="${o}" style="--end-layer: ${o}">
          <source media="(max-width: 700px)" srcset="/media/end8_mobile.webp" />
          <img src="/media/end8.webp" alt="" />
        </picture>
      `:`<img class="${a}" data-end-media="${o}" src="/media/end${o+1}.webp" alt="" style="--end-layer: ${o}" />`}).join("");return e.innerHTML=`
    <div class="end-sequence-section__stage">
      <div class="end-sequence-section__media-stack" aria-hidden="true">${t}</div>
      <div class="end-sequence-section__texts">
        <p class="end-sequence-section__text" data-end-text="0">Although the two German federal states (Bundesländer) along the lynx migration route are generally less fragmented compared to others, there are still a significant number of barriers along the route that are often impassable and constitute a major obstacle to successful movement and dispersal for animals.</p>
        <p class="end-sequence-section__text" data-end-text="1">Preserving large, unfragmented forests is essential for wildlife and the environment. Yet, modern society is under constant pressure from competing land use demands, and the expansion of infrastructure risks further severing ecological connections and increasing the barrier strength of existing corridors.</p>
        <p class="end-sequence-section__text" data-end-text="2">Mitigation measures such as wildlife bridges, carefully located solar parks, and reduced deforestation are therefore key to preventing further fragmentation, so that nature and wildlife can thrive.</p>
        <p class="end-sequence-section__text end-sequence-section__text--final" data-end-text="3">All actors with their individual needs within the interconnected synergistic natural system should be treated as equals.</p>
      </div>
    </div>
  `,e}function _t(){return[pt(),mt(),...ft(),ht(),gt(),yt()]}function vt(e,t=document){return typeof e=="string"?Array.from(t.querySelectorAll(e)):e instanceof Element?[e]:e instanceof NodeList?Array.from(e):e instanceof Array?e:[]}function bt(e){const t=document.createElement("div");t.className=`scrollama__debug-step ${e}`,t.style.position="fixed",t.style.left="0",t.style.width="100%",t.style.zIndex="9999",t.style.borderTop="2px solid black",t.style.borderBottom="2px solid black";const s=document.createElement("p");return s.style.position="absolute",s.style.left="0",s.style.height="1px",s.style.width="100%",s.style.borderTop="1px dashed black",t.appendChild(s),document.body.appendChild(t),t}function wt({id:e,step:t,marginTop:s}){const{index:o,height:a}=t,r=`scrollama__debug-step--${e}-${o}`;let c=document.querySelector(`.${r}`);c||(c=bt(r)),c.style.top=`${s*-1}px`,c.style.height=`${a}px`,c.querySelector("p").style.top=`${a/2}px`}function St(){const e="abcdefghijklmnopqrstuvwxyz",t=Date.now(),s=[];for(let o=0;o<6;o+=1){const a=e[Math.floor(Math.random()*e.length)];s.push(a)}return`${s.join("")}${t}`}function _e(e){console.error(`scrollama error: ${e}`)}function ce(e){return+e.getAttribute("data-scrollama-index")}function xt(e,t){const s=Math.ceil(e/t),o=[],a=1/s;for(let r=0;r<s+1;r+=1)o.push(r*a);return o}function $e(e){if(typeof e=="string"&&e.indexOf("px")>0){const t=+e.replace("px","");return isNaN(t)?(err("offset value must be in 'px' format. Fallback to 0.5."),{format:"percent",value:.5}):{format:"pixels",value:t}}else if(typeof e=="number"||!isNaN(+e))return e>1&&err("offset value is greater than 1. Fallback to 1."),e<0&&err("offset value is lower than 0. Fallback to 0."),{format:"percent",value:Math.min(Math.max(0,e),1)};return null}function qt(e){e.forEach(t=>t.node.setAttribute("data-scrollama-index",t.index))}function Et(e){const{top:t}=e.getBoundingClientRect(),s=window.pageYOffset,o=document.body.clientTop||0;return t+s-o}let ee,ve,X;function Ue(e){const t=e?e.scrollTop:window.pageYOffset;ee!==t&&(ee=t,ee>ve?X="down":ee<ve&&(X="up"),ve=ee)}function Lt(e){ee=0,ve=0,document.addEventListener("scroll",()=>Ue(e))}function le(){let e={},t=St(),s=[],o,a,r,c=0,l=!1,f=!1,h=!1,g=!1,u=[];function p(){e={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},u=[]}function b(n){n&&!l&&C(),!n&&l&&Z(),l=n}function x(n,y){const m=ce(n),_=s[m];y!==void 0&&(_.progress=y);const E={element:n,index:m,progress:y,direction:X};_.state==="enter"&&e.stepProgress(E)}function R(n,y=!0){const m=ce(n),_=s[m],E={element:n,index:m,direction:X};_.direction=X,_.state="enter",u[m]||e.stepEnter(E),g&&(u[m]=!0)}function Y(n,y=!0){const m=ce(n),_=s[m];if(!_.state)return!1;const E={element:n,index:m,direction:X};f&&(X==="down"&&_.progress<1?x(n,1):X==="up"&&_.progress>0&&x(n,0)),_.direction=X,_.state="exit",e.stepExit(E)}function P([n]){const y=ce(n.target),m=s[y],_=n.target.offsetHeight;_!==m.height&&(m.height=_,H(m),J(m),te(m))}function B([n]){Ue(a);const{isIntersecting:y,target:m}=n;y?R(m):Y(m)}function K([n]){const y=ce(n.target),m=s[y],{isIntersecting:_,intersectionRatio:E,target:N}=n;_&&m.state==="enter"&&x(N,E)}function H({observers:n}){Object.keys(n).map(y=>{n[y].disconnect()})}function Z(){s.forEach(H)}function te(n){const y=new ResizeObserver(P);y.observe(n.node),n.observers.resize=y}function ue(){s.forEach(te)}function J(n){const y=window.innerHeight,m=n.offset||o,_=m.format==="pixels"?1:y,E=m.value*_,N=n.height/2-E,V=n.height/2-(y-E),A={rootMargin:`${N}px 0px ${V}px 0px`,threshold:.5,root:r},Q=new IntersectionObserver(B,A);Q.observe(n.node),n.observers.step=Q,h&&wt({id:t,step:n,marginTop:N})}function se(){s.forEach(J)}function q(n){const y=window.innerHeight,m=n.offset||o,_=m.format==="pixels"?1:y,E=m.value*_,N=-E+n.height,V=E-y,G=`${N}px 0px ${V}px 0px`,W=xt(n.height,c),$={rootMargin:G,threshold:W},A=new IntersectionObserver(K,$);A.observe(n.node),n.observers.progress=A}function z(){s.forEach(q)}function C(){Z(),ue(),se(),f&&z()}const i={};return i.setup=({step:n,parent:y,offset:m=.5,threshold:_=4,progress:E=!1,once:N=!1,debug:V=!1,container:G=void 0,root:W=null})=>(Lt(G),s=vt(n,y).map(($,A)=>({index:A,direction:void 0,height:$.offsetHeight,node:$,observers:{},offset:$e($.dataset.offset),top:Et($),progress:0,state:void 0})),s.length?(f=E,g=N,h=V,c=Math.max(1,+_),o=$e(m),a=G,r=W,p(),qt(s),b(!0),i):(_e("no step elements"),i)),i.enable=()=>(b(!0),i),i.disable=()=>(b(!1),i),i.destroy=()=>(b(!1),p(),i),i.resize=()=>(C(),i),i.offset=n=>n==null?o.value:(o=$e(n),C(),i),i.onStepEnter=n=>(typeof n=="function"?e.stepEnter=n:_e("onStepEnter requires a function"),i),i.onStepExit=n=>(typeof n=="function"?e.stepExit=n:_e("onStepExit requires a function"),i),i.onStepProgress=n=>(typeof n=="function"?e.stepProgress=n:_e("onStepProgress requires a function"),i),i}const v=(e,t=0,s=1)=>Math.min(s,Math.max(t,e)),S=(e,t,s)=>e+(t-e)*s;let Ke=()=>{};function $t(e){Ke=e}let je=!1;function Ze(){if(je)return;je=!0,document.querySelector(".side-nav")?.classList.remove("side-nav--delayed"),document.querySelector(".intro-section .scroll-arrow")?.classList.add("is-visible"),document.querySelector(".intro-section__heading")?.classList.add("is-visible");const e=document.querySelector(".sound-control__hint");e?.classList.add("is-visible"),window.setTimeout(()=>e?.classList.remove("is-visible"),5e3)}function kt(e){const t=document.querySelectorAll("[data-section]"),s=document.querySelectorAll("[data-section-link]"),o=a=>{e.dataset.theme=a.dataset.theme??"dark",document.querySelector(".sound-control__button")?.dispatchEvent(new Event("soundthemechange")),document.querySelector(".side-nav__logo-image")?.dispatchEvent(new Event("logothemechange")),s.forEach(r=>{const c=r.dataset.sectionLink===a.dataset.section;r.classList.toggle("is-active",c),r.setAttribute("aria-current",c?"location":"false")})};if(typeof le=="function"){const a=le();a.setup({step:"[data-section]",offset:.5,order:!0}).onStepEnter(({element:r})=>o(r)),window.addEventListener("resize",()=>a.resize()),window.__sectionScroller=a}else{const a=new IntersectionObserver(r=>{const c=r.filter(l=>l.isIntersecting).sort((l,f)=>f.intersectionRatio-l.intersectionRatio)[0];c&&o(c.target)},{rootMargin:"-35% 0px -35% 0px",threshold:[0,.25,.5,.75,1]});t.forEach(r=>a.observe(r))}window.setTimeout(Ze,4e3)}const Mt=4+18/30,At=8;function Ae(e){const t=e.getBoundingClientRect(),s=e.offsetHeight-window.innerHeight;return s<=0?0:v(-t.top/s)}function Ft(e){const t=e.getBoundingClientRect();return v((window.innerHeight-t.top)/(window.innerHeight*.75))}function Tt(){const e=document.querySelector("#introduction"),t=document.querySelector(".main-nav");if(!e||!t)return;const s=e.getBoundingClientRect(),o=v(-s.top/(window.innerHeight*.72));o>.005&&Ze(),t.style.setProperty("--nav-reveal",o.toFixed(3)),t.classList.toggle("is-visible",o>.02)}function Rt(){const e=document.querySelector("#introduction"),t=document.querySelector(".intro-section__video");if(!e||!t)return;const s=()=>{t.play().catch(()=>{})};t.addEventListener("loadeddata",s,{once:!0}),document.addEventListener("pointerdown",s,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=At&&(t.currentTime=Mt,s())}),window.addEventListener("scroll",()=>{const o=e.getBoundingClientRect();o.bottom>0&&o.top<window.innerHeight?s():t.pause()},{passive:!0}),s()}function Pt(){const e=document.querySelector(".sequence-section");if(!e)return;const t=Ae(e),s=e.getBoundingClientRect();s.bottom>0&&s.top<window.innerHeight;const o=e.querySelectorAll("[data-sequence-frame]"),a=v(t/.6),r=Math.min(o.length-1,Math.floor(a*o.length));o.forEach((l,f)=>l.classList.toggle("is-revealed",f<=r)),e.querySelectorAll("[data-sequence-text]").forEach((l,f)=>{const g=[.14,.42,.7][f]??.5,p=(1-v((t-(g-.17))/.34)*2)*window.innerHeight;l.style.opacity="1",l.style.transform=`translateY(${p}px)`})}function Ht(){const e=document.querySelector(".story-chapter-section--journey");if(!e)return;const t=e.querySelectorAll("[data-story-card]"),s=.72,o=s/t.length,a=Ae(e),r=v((Ft(e)-.15)/.6),c=o*.5,l=r*c+a*(1-c);t.forEach((x,R)=>{const Y=v((l-R*o)/o),P=v((Y-.3)/.2),B=v((.9-Y)/.15);x.style.opacity="1",x.style.transform=`translateY(${(1-Y*2)*100}%)`,x.style.setProperty("--story-copy-offset","0px"),x.style.setProperty("--facts-reveal",Math.min(P,B).toFixed(3))});const f=e.querySelector(".story-chapter-section__media img"),h=v(l/(o*.5)),g=v((l-s)/.1);f&&(f.style.opacity=(h*(1-g)).toFixed(3));const u=document.querySelector(".story-outro__image"),p=document.querySelector(".story-outro__text"),b=document.querySelector(".story-outro__arrow");u&&(u.style.opacity=g.toFixed(3)),p&&(p.style.transform=`translateY(${(1-g)*100}vh)`),b?.classList.toggle("is-visible",l>=.86)}let Je=0;function ke(e,t=1){const s=document.querySelector(".map-section"),o=document.querySelector(".map-section__step--barriers"),a=document.querySelector(".map-section__title-row"),r=document.querySelector(".map-section__forest-title"),c=document.querySelector(".map-section__step--intro"),l=document.querySelector(".map-section__step--detail"),f=document.querySelector(".map-section__step--pseudo"),h=document.querySelector(".map-section__stub-copy"),g=document.querySelector(".map-section__pseudo-facts-copy"),u=document.querySelector(".map-section__step--mesh"),p=document.querySelector(".map-section__mesh-title"),b=document.querySelector(".map-section__mesh-intro-copy"),x=document.querySelector(".map-section__mesh-fact--intro"),R=document.querySelector(".map-section__mesh-animation"),Y=document.querySelector(".map-section__mesh-fact--outro"),P=document.querySelector(".map-section__mesh-route-copy"),B=document.querySelector(".map-section__mesh-bayern-copy"),K=document.querySelector(".map-section__mesh-thueringen-copy"),H=document.querySelector(".map-section__mesh-diagonal-step"),Z=H?.querySelector(":scope > .map-section__reveal-text"),te=H?.querySelector(".map-section__diagonal-animation"),ue=H?.querySelector(":scope > .map-section__facts"),J=document.querySelector(".map-section__mesh-bayern-time"),se=document.querySelector(".map-section__mesh-thueringen-time"),q=document.querySelector(".forest-map"),z=document.querySelector(".forest-map__svg"),C=document.querySelector(".forest-map__layer--barriers");if(!s||!o||!a||!r||!c||!l||!f||!h||!g||!u||!p||!b||!x||!R||!Y||!P||!B||!K||!H||!Z||!te||!ue||!J||!se||!q||!z||!C)return;Je=e;const i=v((t-.18)/.58),n=d=>`${d*window.innerHeight}px`,y=e<-2?1:e===-2?1-i:e===-1?0:e===0?-i:-1,m=e<-2?0:e===-2?i:e===-1?1:e===0?1-i:0,_=e<0?0:e===0?i:1,E=e===0?1-i:e===1?0:e===2?-i:-1,N=e<1?1:e===1?1-i:e===2?-i:-1,V=e<2?1:e===2?1-i:e<6?0:e===6?-i:-1,G=e<6?1:e===6?1-i:0,W=e<1?0:e===1?i:1,$=e<2?0:e===2?i:e<6?1:e===6?1-i:0,A=e<3?0:e===3?i:1,Q=e<4?0:e===4?i:1,Te=e<6?0:e===6?i:1,be=e<7?0:e===7?i:1,oe=window.matchMedia("(max-width: 900px)").matches,we=!oe||e<7.5?0:e===7.5?i:1,Ie=e<6?0:e===6?i:1,U=e<8?0:e===8?i:1,j=e<9?0:e===9?i:1,ae=e<10?0:e===10?i:1,ne=e<11?0:e===11?i:1,pe=e<12?0:e===12?i:1,Re=e<13?0:e===13?i:1,me=U,Se=window.matchMedia("(max-width: 700px)").matches?60:window.matchMedia("(max-width: 900px)").matches?250:0,et=v(me/.12),I=v((me-.12)/.88),Pe=v(be/.55),He=v((be-.18)/.55),Ne=oe?we:v((be-.36)/.55),xe=oe?we*(b.offsetHeight+24):0,fe=oe?pe*(Z.offsetHeight+24):0;a.style.opacity="1",a.style.transform="none",r.style.opacity="1",o.style.transform=`translateY(${n(y)})`,c.style.transform=`translateY(${n(E)})`,l.style.transform=`translateY(${n(N)})`,f.style.transform=`translateY(${n(V)})`,u.style.transform=`translateY(${n(G)})`,P.style.top=`${p.offsetHeight}px`,b.style.opacity=((1-U)*(1-we)).toFixed(3),x.style.opacity=(Pe*(1-U)).toFixed(3),x.style.transform=`translateY(${(1-Pe)*40-xe}px)`,R.style.opacity=(He*(1-U)).toFixed(3),R.style.transform=`translateY(${(1-He)*40-xe}px)`,Y.style.opacity=(Ne*(1-U)).toFixed(3),Y.style.transform=`translateY(${(1-Ne)*40-xe}px)`,P.style.opacity=(U*(1-ne)).toFixed(3),P.style.transform=`translateY(${(1-U)*window.innerHeight}px)`,B.style.top=`${p.offsetHeight+P.offsetHeight+16}px`,B.style.opacity=(j*(1-ne)).toFixed(3),B.style.transform=`translateY(${(1-j)*window.innerHeight}px)`,K.style.top=`${p.offsetHeight+P.offsetHeight+B.offsetHeight+32}px`,K.style.opacity=(ae*(1-ne)).toFixed(3),K.style.transform=`translateY(${(1-ae)*window.innerHeight}px)`,H.style.top=`${p.offsetHeight}px`,H.style.opacity=ne.toFixed(3),H.style.transform=`translateY(${(1-ne)*window.innerHeight}px)`,Z.style.opacity=(oe?1-pe:1).toFixed(3),te.style.transform=`translateY(${-fe}px)`,ue.style.transform=`translateY(${-fe}px)`,J.style.opacity=pe.toFixed(3),J.style.transform=`translateY(${(1-pe)*window.innerHeight-fe}px)`,se.style.opacity=Re.toFixed(3),se.style.transform=`translateY(${(1-Re)*window.innerHeight-fe}px)`,h.style.opacity=A.toFixed(3),h.style.transform=`translateY(${(1-A)*window.innerHeight}px)`,g.style.opacity=Q.toFixed(3),g.style.transform=`translateY(${(1-Q)*40}px)`,q.style.opacity=(e===-2?i:1).toFixed(3),q.style.setProperty("--barrier-reveal",m.toFixed(3)),q.style.setProperty("--forest-stage-reveal",_.toFixed(3)),q.style.setProperty("--large-forest-reveal",W.toFixed(3)),q.style.setProperty("--forest-zoom-detail",v(($-.35)/.65).toFixed(3)),q.style.setProperty("--pseudorelief-reveal",(A*(1-Te)).toFixed(3)),q.style.setProperty("--pseudorelief-exit",Te.toFixed(3)),q.style.setProperty("--mesh-reveal",Ie.toFixed(3)),q.style.setProperty("--ranking-reveal",et.toFixed(3)),q.style.setProperty("--ranking-travel",I.toFixed(3)),q.classList.toggle("is-ranking",me>0),q.closest(".map-section__media")?.classList.toggle("is-ranking",me>0),document.querySelectorAll(".forest-map__ranking-state").forEach(d=>{const w=Number(d.dataset.centerX),k=Number(d.dataset.centerY),O=Number(d.dataset.targetX),D=Number(d.dataset.targetY),M=Number(d.dataset.targetScale),F=S(w,O,I)-100*j,L=S(k,D-Se,I),T=S(1,M,I);d.setAttribute("transform",`translate(${F} ${L}) scale(${T}) translate(${-w} ${-k})`);const ge=d.dataset.stateCode==="09"?1:1-.8*j,ye=d.dataset.stateCode==="16"?S(ge,1,ae):ge;d.style.opacity=ye.toFixed(3)}),document.querySelectorAll(".forest-map__ranking-label").forEach(d=>{const w=d.dataset.stateCode==="09"?1:1-.8*j,k=d.dataset.stateCode==="16"?S(w,1,ae):w,O=Number(d.dataset.targetX),M=Number(d.dataset.labelY)-Se,F=O-100*j,L=d.dataset.stateCode==="12"?Math.max(24,F):F;d.style.opacity=(I*k).toFixed(3),d.setAttribute("x",L),d.setAttribute("y",M),d.setAttribute("transform",`rotate(-55 ${L} ${M})`),d.querySelectorAll("tspan").forEach(T=>T.setAttribute("x",L))});const qe=z.getScreenCTM(),he=q.getBoundingClientRect();qe&&(document.querySelectorAll(".forest-map__mesh-label-html").forEach(d=>{const w=z.createSVGPoint();w.x=Number(d.dataset.anchorX),w.y=Number(d.dataset.anchorY);const k=w.matrixTransform(qe);d.style.left=`${k.x-he.left}px`,d.style.top=`${k.y-he.top}px`}),document.querySelectorAll(".forest-map__ranking-label-html").forEach(d=>{const w=d.dataset.stateCode==="09"?1:1-.8*j,k=d.dataset.stateCode==="16"?S(w,1,ae):w,O=Number(d.dataset.targetX),D=Number(d.dataset.labelY)-Se,M=O-100*j,F=d.dataset.stateCode==="12"?Math.max(24,M):M,L=z.createSVGPoint();L.x=F,L.y=D;const T=L.matrixTransform(qe);d.style.left=`${T.x-he.left}px`,d.style.top=`${T.y-he.top}px`,d.style.opacity=(I*k).toFixed(3)})),q.classList.toggle("is-large-forest-only",W>=.99),z.style.transform="none";const Oe=Number(C.dataset.boundsX),Ye=Number(C.dataset.boundsY),Ee=Number(C.dataset.boundsWidth),Le=Number(C.dataset.boundsHeight);if([Oe,Ye,Ee,Le].every(Number.isFinite)){const d=z.getBoundingClientRect(),w=d.width/Math.max(d.height,1),k=ze=>{let re=Ee*ze,ie=Le*ze;return re/ie<w?re=ie*w:ie=re/w,{x:Oe+Ee/2-re/2,y:Ye+Le/2-ie/2,width:re,height:ie}},O=k(.38),D=k(.82),M=e<=0,F=e<-1?0:e===-1?i:1,L=e<0?0:e===0?i:1,T={x:S(O.x,D.x,F),y:S(O.y,D.y,F),width:S(O.width,D.width,F),height:S(O.height,D.height,F)},ge=87.5,ye=87.5,tt=456.25,st=456.25+100/Math.max(d.height,1)*ye,ot=M?S(T.x,0,L):S(0,tt,$),at=M?S(T.y,0,L):S(0,st,$),nt=M?S(T.width,1e3,L):S(1e3,ge,$),rt=M?S(T.height,1e3,L):S(1e3,ye,$);z.setAttribute("viewBox",`${ot} ${at} ${nt} ${rt}`)}const Be=e<0?"route":"fragmentation";s.dataset.section=Be,document.querySelectorAll("[data-section-link]").forEach(d=>{const w=d.dataset.sectionLink===Be;d.classList.toggle("is-active",w),d.setAttribute("aria-current",w?"location":"false")}),Ke(Q,A)}function Nt(){const e=document.querySelector(".end-sequence-section");if(!e)return;const t=Ae(e),s=e.querySelectorAll("[data-end-media]"),o=v(t/.88),a=Math.min(s.length-1,Math.floor(o*s.length));s.forEach((c,l)=>{c.classList.toggle("is-revealed",l<=a)});const r=[.14,.36,.58,.82];e.querySelectorAll("[data-end-text]").forEach((c,l)=>{if(l===3){const g=v((t-.64)/.16),u=(1-g)*window.innerHeight-g*window.innerHeight*.22;c.style.transform=`translateY(${u}px)`;return}const f=r[l]??.82,h=v((t-(f-.16))/.32);c.style.transform=`translateY(${(1-h*2)*window.innerHeight}px)`})}function Ot(){Rt(),document.querySelectorAll(".map-section__mark").forEach(a=>{a.addEventListener("error",()=>a.classList.add("has-error"))}),new Map([["route",-2],["fragmentation",0]]).forEach((a,r)=>{document.querySelectorAll(`.main-nav__item[data-section-link="${r}"]`).forEach(c=>{c.addEventListener("click",l=>{const f=document.querySelector(`.map-scroll-step[data-map-step="${a}"]`);if(!f)return;l.preventDefault(),history.pushState(null,"",`#${r}`);const u=window.scrollY+f.getBoundingClientRect().top+f.offsetHeight*.82-window.innerHeight*.5;window.scrollTo({top:Math.max(0,u),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})})})}),document.querySelectorAll('.scroll-arrow[href^="#"]').forEach(a=>{a.addEventListener("click",r=>{const c=document.querySelector(a.getAttribute("href"));c&&(r.preventDefault(),history.pushState(null,"",a.getAttribute("href")),c.scrollIntoView({behavior:"smooth",block:"start"}))})}),document.querySelectorAll(".sequence-section__frame").forEach(a=>{a.addEventListener("error",()=>a.classList.add("has-error"))});const t=()=>{Tt(),Pt(),Ht(),Nt()};let s=!1;const o=()=>{s||(s=!0,requestAnimationFrame(()=>{t(),s=!1}))};if(typeof le=="function"){const a=le();a.setup({step:".map-scroll-step",offset:.5,progress:!0,threshold:4,order:!0}).onStepEnter(({element:c,progress:l})=>{ke(Number(c.dataset.mapStep),l??0)}).onStepProgress(({element:c,progress:l})=>{const f=Number(c.dataset.mapStep);ke(f,l)});const r=le();r.setup({step:".intro-section, .sequence-section, .story-chapter-section, .interlude-section, .route-section, .map-section, .end-sequence-section",offset:.9,progress:!0,threshold:4,order:!0}).onStepEnter(o).onStepProgress(o).onStepExit(o),window.addEventListener("resize",()=>{a.resize(),r.resize(),o()}),window.__mapScroller=a,window.__sceneScroller=r}else window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o);t()}function Ve(){ke(Je,1)}const Qe=document.querySelector("#app");if(!Qe)throw new Error("App root not found");const de=document.createElement("div");de.className="site-shell";de.dataset.theme="dark";const Fe=document.createElement("main");Fe.id="main-content";Fe.append(..._t());de.append(lt(),dt(),Fe);Qe.append(de);document.querySelectorAll("video").forEach(e=>{e.muted=!1});kt(de);Ot();let Ge=!1;const Yt=async()=>{if(Ge)return;Ge=!0;const[{setupForestMap:e},t]=await Promise.all([De(()=>import("./forest-map-arMsgahw.js"),[]),De(()=>import("./pseudorelief-model-DguXl_D_.js"),[])]);$t(t.updatePseudorelief),t.setupPseudoreliefModel(),e(Ve),Ve()};Yt();export{v as c};
