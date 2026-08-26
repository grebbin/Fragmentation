const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./forest-map-JxI9ZN6D.js","./feature-B7oSjD0j.js","./explore-data-B91STRcI.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const Ot="modulepreload",Dt=function(e,t){return new URL(e,t).href},it={},Ye=function(t,a,s){let r=Promise.resolve();if(a&&a.length>0){let f=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};const l=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),p=i?.nonce||i?.getAttribute("nonce");r=f(a.map(m=>{if(m=Dt(m,s),m in it)return;it[m]=!0;const g=m.endsWith(".css"),c=g?'[rel="stylesheet"]':"";if(s)for(let y=l.length-1;y>=0;y--){const $=l[y];if($.href===m&&(!g||$.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${c}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":Ot,g||(u.as="script"),u.crossOrigin="",u.href=m,p&&u.setAttribute("nonce",p),document.head.appendChild(u),g)return new Promise((y,$)=>{u.addEventListener("load",y),u.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${m}`)))})}))}function n(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return r.then(l=>{for(const i of l||[])i.status==="rejected"&&n(i.reason);return t().catch(n)})},ft=[{id:"introduction",navigationLabel:"Introduction",eyebrow:"Fragmented Reality",title:"An introduction to fragmented habitats",theme:"dark",className:"intro-section"},{id:"perspective-shift",navigationLabel:"Perspective Shift",eyebrow:"Perspective Shift",title:"A landscape seen from another point of view",theme:"dark",className:"sequence-section"},{id:"route",navigationLabel:"The Route",eyebrow:"The Route",title:"Five stories of movement and interruption",theme:"light",className:"story-chapter-section"},{id:"fragmentation",navigationLabel:"Fragmentation",eyebrow:"Fragmentation",title:"The landscape does not end at the edge of the road.",theme:"dark",className:"interlude-section"},{id:"explore-data",navigationLabel:"Explore the Data",eyebrow:"Explore the Data",title:"Fragmentation across the landscape",theme:"light",className:"map-section"}],S={detail:{heading:"Explore the Data",introCopy:"Explore and interact with your state’s unfragmented forests.",introCopyRanking:"You may now explore the ranking and explore <strong><em>the unfragmented forests.</em></strong><br /><br />or finish the <strong><em>story</em></strong>",continueLabel:"Finish the Story",backLabel:"All States",loadingStatus:"Loading state data…",errorStatus:"Data for this state could not be loaded.",overviewSizeLabel:"Forest size",overviewCaptionSuffix:"The purple square shows the mesh size at true scale, drawn to match the same real-world size as the forest behind it.",noForestCopy:"This state has no unfragmented forest patches larger than 50 km².",overviewPrevLabel:"Show the previous forest patch",overviewNextLabel:"Show the next forest patch",statePrevLabel:"Show the previous state",stateNextLabel:"Show the next state",walkingTimeTooltip:"The mesh walking time is based on the mesh size for this state, converted to a square patch and measured corner to corner (the longest way across), assuming a walking speed of 5 km/h.",cardLabels:{mesh_size:"Mesh size",walking_time:"Walking Time per Mesh patch",pct_unfragmented:"Unfragmented forests ≥50 km² ",unfragmented_km2:"Total unfragmented forest (km²)"},legend:{mesh:"Mesh size",patch:"Forest Patch (>50 km²)"}},ranking:{scaleHigh:"High Mesh Size",scaleLow:"Low Mesh Size",prevLabel:"Show the previous states",nextLabel:"Show the next states"}},te={aboutHeading:"About the project",aboutParagraphs:["This data visualization project was created during the summer semester of 2026 as part of the seminar “Visualizing Sustainability Models” supervised by Dr. Francesca Morini and Erik Weiss, at the University of Applied Sciences Potsdam.","A project by Gregor Fiedler, Jenny Lermander, Natalia Pawlik.","Published in one of the hottest summer – 2026."],creditsHeading:"Credits",creditsCopy:"Thanks to Tobias Krüger at Leibniz Institute of Ecological Urban and Regional Development for providing the data and for helpful conversations and input.",learnMoreHeading:"Would you like to learn more?",learnMoreLinks:[{label:"Leibniz Institute of Ecological Urban and Regional Development",url:""},{label:"IÖR Monitor",url:"https://monitor.ioer.de/"}],legalLinks:[{label:"Datenschutzhinweis",url:"https://www.fh-potsdam.de/datenschutz"},{label:"Impressum",url:"https://www.fh-potsdam.de/impressum"}]},lt={heading:"References",items:['Märtz, J., & Brieger, F. (2025, October 23). When the road contributes to the hunting bag. Waldwissen.net. <a href="https://www.waldwissen.net/en/forest-ecology/forest-and-game/game-management/documentation-of-wildlife-accidents#c122747" target="_blank" rel="noreferrer">https://www.waldwissen.net/en/forest-ecology/forest-and-game/game-management/documentation-of-wildlife-accidents#c122747</a>','Tierpark Hellabrunn. (n.d.). Eurasian lynx. Retrieved June 14, 2026, from <a href="https://www.hellabrunn.de/en/animals/europe/eurasian-lynx" target="_blank" rel="noreferrer">https://www.hellabrunn.de/en/animals/europe/eurasian-lynx</a>','Duquette, C. A., Loss, S. R., & Hovick, T. J. (2021). A meta-analysis of the influence of anthropogenic noise on terrestrial wildlife communication strategies. Journal of Applied Ecology, 58(6), 1112–1121. <a href="https://doi.org/10.1111/1365-2664.13880" target="_blank" rel="noreferrer">https://doi.org/10.1111/1365-2664.13880</a>','Kok, A. C. M., Berkhout, B. W., Carlson, N. V., Evans, N. P., Khan, N., Potvin, D. A., et al. (2023). How chronic anthropogenic noise can affect wildlife communities. Frontiers in Ecology and Evolution, 11, Article 1130075. <a href="https://doi.org/10.3389/fevo.2023.1130075" target="_blank" rel="noreferrer">https://doi.org/10.3389/fevo.2023.1130075</a>',"Zheltuchin, A. (1992). Distribution and numbers of lynx in the Soviet Union. In Council of Europe (Ed.), The situation, conservation needs and reintroduction of lynx in Europe (Environmental Encounters No. 11, pp. 19–29). Council of Europe Press.",'Walz, U., Schumacher, U., & Krüger, T. (2023). Landschaftszerschneidung und Waldfragmentierung in Deutschland—Ergebnisse aus einem Monitoring im Kontext von Schutzgebieten und Hemerobie. Naturschutz und Landschaftsplanung. <a href="https://doi.org/10.19217/NUL2022-02-04" target="_blank" rel="noreferrer">https://doi.org/10.19217/NUL2022-02-04</a>',"Gräfe, A. (2023). GIS-gestützte Erfassung von Grünbrücken in Deutschland [Master’s thesis, Hochschule für Technik und Wirtschaft Dresden]."]},ct={heading:"Data Sources",items:['Bund für Umwelt und Naturschutz Deutschland (BUND). (n.d.) Gefahren für den Luchs: Verkehr, Jagd, Krankheit. <a href="https://www.bund.net/themen/tiere-pflanzen/luchs/gefahren/" target="_blank" rel="noreferrer">https://www.bund.net/themen/tiere-pflanzen/luchs/gefahren/</a>','Bund für Umwelt und Naturschutz Deutschland (BUND). (2018, 8. März). Schon wieder zwei Luchse im Bayerischen Wald überfahren. <a href="https://www.bund.net/themen/aktuelles/detail-aktuelles/news/schon-wieder-zwei-luchse-im-bayerischen-wald-ueberfahren/" target="_blank" rel="noreferrer">https://www.bund.net/themen/aktuelles/detail-aktuelles/news/schon-wieder-zwei-luchse-im-bayerischen-wald-ueberfahren/</a>','Leibniz-Institut für ökologische Raumentwicklung (IÖR). (2024). Monitor der Siedlungs- und Freiraumentwicklung (IÖR-Monitor) [Interaktive Karte]. <a href="https://monitor.ioer.de/" target="_blank" rel="noreferrer">https://monitor.ioer.de/</a>',"Walz, U., Krüger, T., & Schumacher, U. (2011). Landschaftszerschneidung und Waldfragmentierung – Neue Indikatoren des IÖR-Monitors. In G. Meinel & U. Schumacher (Hrsg.), Flächennutzungsmonitoring III: Erhebung – Analyse – Bewertung (IÖR Schriften 58, S. 163–170). Rhombos.",'Walz, U., Krüger, T., & Schumacher, U. (2013). Fragmentierung von Wäldern in Deutschland—Neue Indikatoren zur Flächennutzung. 0028-0615, 88(3), 118–127. <a href="https://doi.org/10.17433/3.2013.50153211.118-127" target="_blank" rel="noreferrer">https://doi.org/10.17433/3.2013.50153211.118-127</a>','Walz, U., Krüger, T., & Schumacher, U. (2021). Landschaftszerschneidung und Waldfragmentierung in Deutschland: Analyseergebnisse aus dem IÖR-Monitor (pp. 127–137). Rhombos-Verlag, Berlin. <a href="https://doi.org/10.26084/13DFNS-P012" target="_blank" rel="noreferrer">https://doi.org/10.26084/13DFNS-P012</a>']},T=[{title:"",copy:"You start your journey from the Bavarian forest and reach a small road. Traffic is light, but you still wait before crossing. One wrong decision could end your journey before it begins.",facts:["Roads may seem like minor barriers, but they pose a significant mortality risk. The German Hunting Association estimates around 1 million wildlife-vehicle collisions go unrecorded every year, while some researchers estimate that road traffic kills up to 3 million wild animals annually in Germany."],image:"media/story_placeholder.webp",animation:{src:"media/story.webm",start:0,end:5},audio:{src:"media/story_sound.aac",start:0,end:30,loopStart:5},scrollOffset:.55},{title:"",copy:"Back under the trees, you should feel safe. Instead, long before the highway comes into view, you can already hear it. You search for signs of another lynx, but the forest feels empty and frightening.",facts:["The black tufts on a lynx’s ears help collect and amplify sound.<sup>2</sup> Anthropogenic noise can affect entire ecosystems.<sup>3,4</sup> This forest has also been heavily altered. In areas where approximately 80 % of the forest was clear-cut, lynx signs were found about 15 times less frequently than in forests with much higher mature forest cover.<sup>5</sup>",""],image:"media/story_placeholder.webp",animation:{src:"media/story.webm",start:5,end:10},audio:{src:"media/story_sound.aac",start:30,end:60,loopStart:35},scrollOffset:.55},{title:"",copy:"You move on. A multi-lane highway stretches across the landscape. Beside it stands a fenced solar park. Together they leave almost no safe route forward.",facts:["Highways are among the strongest barriers for terrestrial wildlife. Fencing, traffic, noise, and artificial light all reduce landscape connectivity. Renewable energy infrastructure is essential for climate goals, but can add to habitat fragmentation and restrict wildlife movement.",""],image:"media/story_placeholder.webp",animation:{src:"media/story.webm",start:10,end:17},audio:{src:"media/story_sound.aac",start:60,end:90,loopStart:65},scrollOffset:.55},{title:"",copy:"A canal blocks your path. Ships move through the water while harbor lights reflect across the surface. You begin to swim. The reflections blind you on your course.",facts:["A Eurasian lynx’s eyes are approximately six times more sensitive than human eyes, allowing excellent night vision.<sup>2</sup> However, artificial lighting can disrupt natural darkness. Light pollution around ports, roads, and settlements alters habitats and can affect the behaviour of many nocturnal species.",""],image:"media/story_placeholder.webp",animation:{src:"media/story.webm",start:17,end:23},audio:{src:"media/story_sound.aac",start:90,end:120,loopStart:95},scrollOffset:.55},{title:"",copy:"Just when the barriers seems impossible to cross, you find a wildlife bridge. Trees and shrubs cover the structure, making it feel like part of the forest. You cross safely above the traffic still roaring underneath you.",facts:["Wildlife crossings reconnect habitats separated by infrastructure and reduce wildlife-vehicle collisions. Germany has constructed more than 100 wildlife crossings, helping animals to move between fragmented habitats.<sup>7</sup>",""],image:"media/story_placeholder.webp",animation:{src:"media/story.webm",start:23,end:29},audio:{src:"media/story_sound.aac",start:120,end:150,loopStart:125},scrollOffset:.55},{title:"",copy:"The air smells different here. The scent of traffic fades, replaced by damp soil, trees, and moss. For the first time, finding another lynx seems possible.",facts:["",""],image:"media/story_placeholder.webp",animation:{src:"media/story.webm",start:29,end:33},audio:{src:"media/story_sound.aac",start:150,end:180,loopStart:null},scrollOffset:.55}],gt=["about","references","sources"];function Yt(){return`
    <div class="info-section__grid">
      <div class="info-section__column">
        <h2>${te.aboutHeading}</h2>
        ${te.aboutParagraphs.map(e=>`<p>${e}</p>`).join("")}
      </div>
      <div class="info-section__column">
        <h2>${te.creditsHeading}</h2>
        <p>${te.creditsCopy}</p>
        <h2>${te.learnMoreHeading}</h2>
        <ul class="info-section__links">
          ${te.learnMoreLinks.map(e=>e.url?`<li><a href="${e.url}" target="_blank" rel="noreferrer">${e.label}</a></li>`:`<li>${e.label}</li>`).join("")}
        </ul>
        <div class="info-section__legal">
          ${te.legalLinks.map(e=>`<a href="${e.url||"#"}">${e.label}</a>`).join("")}
        </div>
      </div>
    </div>
    <img class="info-section__watermark" src="media/Fragmented%20Reality_end.svg" alt="" aria-hidden="true" />
  `}function Bt(){return`
    <h2>${lt.heading}</h2>
    <ol class="info-section__list">
      ${lt.items.map(e=>`<li>${e}</li>`).join("")}
    </ol>
  `}function Ct(){return`
    <h2>${ct.heading}</h2>
    <div class="info-section__list info-section__list--unnumbered">
      ${ct.items.map(e=>`<p>${e}</p>`).join("")}
    </div>
  `}const jt={about:Yt,references:Bt,sources:Ct};function Ut(){const e=document.createElement("div");return e.className="info-overlay",e.dataset.theme="light",e.setAttribute("aria-hidden","true"),e.innerHTML=`
    <button type="button" class="info-overlay__close">
      <span class="info-overlay__close-arrow" aria-hidden="true">&larr;</span>
      <span>Back to story</span>
    </button>
    ${gt.map(t=>`
      <section id="${t}" class="info-overlay__panel info-section" data-info-page="${t}">
        ${jt[t]()}
      </section>
    `).join("")}
  `,e}let fe=null,yt=0,Be=null;function Ce(e){return gt.includes(e)}function je(){return fe!==null}function Ue(e,t,{pushState:a=!0,focusTrigger:s=null}={}){if(!Ce(t))return;const r=fe!==null;r||(yt=window.scrollY,Be=s,document.body.classList.add("has-info-overlay-open")),fe=t,e.setAttribute("aria-hidden","false"),e.classList.add("is-open"),e.querySelectorAll(".info-overlay__panel").forEach(n=>{n.classList.toggle("is-active",n.dataset.infoPage===t)}),e.scrollTop=0,a&&location.hash!==`#${t}`&&history.pushState({infoPage:t},"",`#${t}`),document.querySelectorAll("[data-side-nav-link]").forEach(n=>{n.classList.toggle("is-active",n.dataset.sideNavLink===t)}),r||e.querySelector(".info-overlay__close")?.focus()}function Le(e,{pushState:t=!0}={}){fe!==null&&(fe=null,e.setAttribute("aria-hidden","true"),e.classList.remove("is-open"),document.body.classList.remove("has-info-overlay-open"),document.querySelectorAll("[data-side-nav-link]").forEach(a=>a.classList.remove("is-active")),t&&history.pushState(null,"",`${location.pathname}${location.search}`),window.scrollTo({top:yt,left:0,behavior:"instant"}),(Be??document.body).focus?.(),Be=null)}function Wt(e){e.querySelector(".info-overlay__close")?.addEventListener("click",()=>Le(e)),document.addEventListener("keydown",a=>{a.key==="Escape"&&je()&&Le(e)}),window.addEventListener("popstate",()=>{const a=location.hash.slice(1);Ce(a)?Ue(e,a,{pushState:!1}):je()&&Le(e,{pushState:!1})});const t=location.hash.slice(1);Ce(t)&&Ue(e,t,{pushState:!1})}function Gt(){const e=document.createElement("nav");return e.className="main-nav",e.setAttribute("aria-label","Story chapters"),ft.forEach((t,a)=>{const s=document.createElement("a");s.className="main-nav__item",s.href=`#${t.id}`,s.dataset.sectionLink=t.id,s.innerHTML=`
    <span class="main-nav__number">${a+1}</span>
    <span class="main-nav__label">${t.navigationLabel}</span>
  `,e.append(s)}),e}function It(e){const t=document.createElement("aside");t.className="side-nav side-nav--delayed",t.setAttribute("aria-label","Project information"),t.innerHTML=`
  <a class="side-nav__logo" href="#introduction" aria-label="Fragmented Reality home">
    <img class="side-nav__logo-image" src="media/Logo_DM.png" alt="" />
  </a>
  <nav class="side-nav__links" aria-label="Additional information">
    <a class="side-nav__link side-nav__link--brand" href="#introduction">Fragmented Reality</a>
    <a class="side-nav__link" href="#about" data-side-nav-link="about">About</a>
    <a class="side-nav__link" href="#references" data-side-nav-link="references">References</a>
    <a class="side-nav__link" href="#sources" data-side-nav-link="sources">Sources</a>
  </nav>
  <div class="sound-control">
    <button class="sound-control__button is-enabled" type="button" aria-label="Disable sound" aria-pressed="true">
      <img src="media/sound_on_DM.svg" alt="" />
    </button>
    <p class="sound-control__hint">This website uses sound.<br />You can disable it here.</p>
  </div>
`;const a=t.querySelector(".sound-control__button"),s=t.querySelector(".side-nav__logo"),r=t.querySelector(".side-nav__logo-image"),n=()=>{if(!r)return;const c=document.querySelector(".site-shell")?.dataset.theme==="light"?"BM":"DM";r.src=`media/Logo_${c}.png`},l=()=>{if(!r)return;const c=document.querySelector(".site-shell")?.dataset.theme==="light"?"DM":"BM";r.src=`media/Logo_${c}.png`};window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(s?.addEventListener("pointerenter",l),s?.addEventListener("pointerleave",n),s?.addEventListener("focus",l),s?.addEventListener("blur",n)),r?.addEventListener("error",()=>{r.src.endsWith("/media/Logo_DM.png")||(r.src="media/Logo_DM.png")}),r?.addEventListener("logothemechange",n);const p=()=>{const c=a?.querySelector("img");if(!a||!c)return;const u=a.classList.contains("is-enabled"),y=document.querySelector(".site-shell")?.dataset.theme==="light"?"BM":"DM";c.src=`media/sound_${u?"on":"off"}_${y}.svg`},f=a?.querySelector("img");f?.addEventListener("error",()=>{const u=`media/sound_${a?.classList.contains("is-enabled")?"on":"off"}.svg`;f.src.endsWith(u.replace("./","/"))||(f.src=u)}),a?.addEventListener("click",()=>{const c=document.querySelectorAll("video:not([data-story-shared-animation])"),u=!a.classList.contains("is-enabled");if(c.forEach(y=>{y.muted=!u}),a.classList.toggle("is-enabled",u),a.setAttribute("aria-pressed",String(u)),a.setAttribute("aria-label",u?"Disable sound":"Enable sound"),p(),a.dispatchEvent(new CustomEvent("soundchange",{detail:{enabled:u}})),u){const y=Array.from(c).find($=>{const R=$.getBoundingClientRect();return R.bottom>0&&R.top<window.innerHeight&&getComputedStyle($).opacity!=="0"});y&&y.play().catch(()=>{})}}),a?.addEventListener("soundthemechange",p);const m=t.querySelector(".side-nav__logo"),g=()=>{t.classList.remove("is-open"),m?.setAttribute("aria-expanded","false")};return m?.addEventListener("click",c=>{if(!window.matchMedia("(max-width: 900px)").matches)return;c.preventDefault();const u=t.classList.toggle("is-open");m.setAttribute("aria-expanded",String(u))}),t.querySelectorAll(".side-nav__link").forEach(c=>{c.addEventListener("click",g)}),t.querySelectorAll("[data-side-nav-link]").forEach(c=>{c.addEventListener("click",u=>{u.defaultPrevented||(u.preventDefault(),Ue(e,c.dataset.sideNavLink,{focusTrigger:c}))})}),t.querySelectorAll('a[href^="#"]:not([data-side-nav-link])').forEach(c=>{c.addEventListener("click",u=>{if(u.defaultPrevented)return;const y=document.querySelector(c.getAttribute("href"));y&&(u.preventDefault(),je()&&Le(e,{pushState:!1}),window.dispatchEvent(new Event("explore-data:leave")),history.pushState(null,"",c.getAttribute("href")),y.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}))})}),document.addEventListener("click",c=>{window.matchMedia("(max-width: 900px)").matches&&c.target instanceof Node&&!t.contains(c.target)&&g()}),t}function Vt(e){const t=document.createElement("a");return t.className="scroll-arrow",t.href=e,t.setAttribute("aria-label","Continue to the next chapter"),t.innerHTML='<span>Scroll</span><span aria-hidden="true">↓</span>',t}function Ve(e){const t=ft[e],a=document.createElement("section");return a.id=t.id,a.className=`story-section ${t.className}`,a.dataset.theme=t.theme,a.dataset.section=t.id,a}function Xt(){const e=Ve(0);return e.innerHTML=`
  <video class="intro-section__video" autoplay playsinline preload="auto" aria-label="Introductory forest film">
    <source src="media/start_first.webm" type="video/webm" />
  </video>
  <div class="intro-section__heading">
    <h1>Fragmented Reality</h1>
    <p>Explore forest fragmentation based on scientific data.</p>
  </div>
`,e.append(Vt("#introduction-sequence")),e}function Kt(){const e=Ve(1);e.id="introduction-sequence",e.dataset.section="introduction";const t=Array.from({length:6},(a,s)=>{const r=s+1;return`<picture>${r===6?'<source media="(max-width: 700px)" srcset="media/intro6_mobile.webp" />':""}<img class="sequence-section__frame${s===0?" is-revealed":""}" src="media/intro${r}.webp" alt="" data-sequence-frame="${s}" style="--frame-layer: ${s}" /></picture>`}).join("");return e.innerHTML=`
  <div class="sequence-section__stage">
    <div class="sequence-section__media" aria-hidden="true">
      ${t}
    </div>
    <div class="sequence-section__texts">
      <div class="sequence-section__text" data-sequence-text="0">
        <p>These are the two perspectives on land fragmentation, which describes the disruption of natural ecological connections caused by humans.</p>
      </div>
      <div class="sequence-section__text" data-sequence-text="1">
        <p>Let’s experience fragmentation through the eyes of the lynx on their route from the Bavarian Forest to the Harz Mountains.</p>
      </div>
      <div class="sequence-section__text" data-sequence-text="2">
        <p>The lynx populations in these areas of Germany are so isolated from one another that natural genetic exchange is virtually impossible, which increases the risk of inbreeding and genetic erosion.</p>
      </div>
    </div>
  </div>
`,e}function Jt(){const e=document.createElement("section");e.id="perspective-shift",e.className="story-section story-chapter-section story-chapter-section--journey",e.dataset.theme="dark",e.dataset.section="perspective-shift";const t=T.map((l,i)=>`
    <article class="story-card" data-story-card="${i}">
      <p class="eyebrow">Story ${i+1} of ${T.length}</p>
      <h2>${l.title}</h2>
      <p>${l.copy}</p>
      <ul class="story-card__facts">
        ${l.facts.map(p=>`<li>${p}</li>`).join("")}
      </ul>
    </article>
  `).join(""),a=T.find(l=>l.animation?.src)?.animation.src,s=T.map((l,i)=>{const p=`<img class="story-chapter-section__visual" src="${l.image}" alt="" />`,f=l.audio?.src?`<audio data-story-audio="${i}" src="${l.audio.src}" preload="auto"></audio>`:"";return`<div class="story-chapter-section__media-item" data-story-media="${i}">${p}${f}</div>`}).join(""),r=88,n=T.map((l,i)=>`
    <div class="story-scroll-trigger" data-story-trigger="${i}" data-offset="${l.scrollOffset??.55}" style="--story-trigger-start: ${i*(r/T.length)}%; --story-trigger-size: ${r/T.length}%;" aria-hidden="true"></div>
  `).join("");return e.innerHTML=`
    <div class="story-chapter-section__stage">
      <div class="story-chapter-section__panel">${t}</div>
      <div class="story-chapter-section__media" aria-hidden="true">
        ${s}
        ${a?`<video class="story-chapter-section__visual story-chapter-section__shared-animation" data-story-shared-animation src="${a}" poster="${T[0]?.image??""}" muted playsinline preload="auto" fetchpriority="high" aria-label="Story animation"></video>`:""}
      </div>
      <div class="story-outro">
        <picture>
          <source media="(max-width: 700px)" srcset="media/intro8_mobile.webp" />
          <img class="story-outro__image" src="media/intro8.webp" alt="" aria-hidden="true" />
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
    ${n}
  `,[e]}function Zt(){const e=Ve(4);return e.id="route",e.dataset.section="route",e.innerHTML=`
  <div class="map-section__stage">
    <div class="map-section__copy">
      <div class="map-section__step map-section__step--barriers">
        <div class="map-section__title-row">
          <h2>
            <span class="map-section__marks" aria-hidden="true">
              <img class="map-section__mark" src="media/route.svg" alt="" />
              <img class="map-section__mark" src="media/bar_types.svg" alt="" />
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
          <h2><span class="map-section__marks" aria-hidden="true"><img class="map-section__mark" src="media/forests.svg" alt="" /></span><span class="map-section__title-text">Germany’s Federal States: Forests</span></h2>
        </div>
        <div class="map-section__intro-copy">
          <p>To explore the whole picture of fragmentation in Germany, we first look at the different indicators.</p>
          <p>A ‘good forest’, which is essential for biodiversity, is considered to be an area above 50 km².</p>
        </div>
      </div>
      <div class="map-section__step map-section__step--detail">
        <p class="map-section__reveal-text">If we only consider forests larger than 50 km², this is what the total area looks like.</p>
        <p class="map-section__facts">The indicator measures the Percentage of Undivided Forests relative to Total Land Area.</p>
      </div>
      <div class="map-section__step map-section__step--pseudo">
        <div class="map-section__title-row map-section__pseudo-title">
          <h2><span class="map-section__marks" aria-hidden="true"><img class="map-section__mark" src="media/stubroads.svg" alt="" /></span><span class="map-section__title-text">Hidden fragmentation: Stub roads and Pseudo-relief</span></h2>
        </div>
        <p class="map-section__reveal-text">It’s not just the forest size that matters; shape has an impact too.</p>
        <p class="map-section__reveal-text map-section__stub-copy">So-called stub roads are not classified as fragmentation, yet they significantly reduce the depth of quiet, unfragmented core areas.</p>
        <p class="map-section__facts map-section__pseudo-facts-copy">Pseudo-relief and mean distance to the nearest fragmented area are used to better capture the effect of stub roads. High pseudo-volume (white) marks a compact area with a large, deep core far from human disturbance. Low pseudo-volume (red) marks an area that is either narrow or “punctured” by stub roads.</p>
      </div>
      <div class="map-section__step map-section__step--mesh">
        <div class="map-section__title-row map-section__mesh-title">
          <h2><span class="map-section__marks" aria-hidden="true"><img class="map-section__mark" src="media/diagonal.svg" alt="" /><img class="map-section__mark" src="media/meshsize.svg" alt="" /></span><span class="map-section__title-text">Mesh size</span></h2>
        </div>
        <p class="map-section__reveal-text map-section__mesh-intro-copy">To gain a fuller picture of fragmentation, scientists use the indicator mesh sizes. This makes it easier to compare states.</p>
        <p class="map-section__facts map-section__mesh-fact map-section__mesh-fact--intro">Effective mesh size quantifies landscape fragmentation by estimating the probability that two randomly chosen points remain within the same contiguous habitat patch.</p>
        <video class="map-section__mesh-animation" src="media/meshsize.mp4" autoplay muted loop playsinline aria-label="Mesh-size animation"></video>
        <p class="map-section__facts map-section__mesh-fact map-section__mesh-fact--outro">Larger mesh sizes indicate lower fragmentation, greater ecological connectivity, and better conditions for wildlife movement.</p>
        <p class="map-section__reveal-text map-section__mesh-route-copy">The original route of the lynx passes through two federal states which are among the least fragmented regions.</p>
        <p class="map-section__reveal-text map-section__mesh-bayern-copy">Bayern, with a mesh size of <strong>8,47</strong> km².</p>
        <p class="map-section__reveal-text map-section__mesh-thueringen-copy">Thüringen, with a mesh size of <strong>7,38</strong> km².</p>
        <div class="map-section__mesh-diagonal-step">
          <p class="map-section__reveal-text">To make this number of km² more relatable, imagine walking the distance diagonally, as this is the longest distance in a square-shaped geometry.</p>
          <video class="map-section__diagonal-animation" src="media/diagonal.mp4" autoplay muted loop playsinline aria-label="Diagonal walking-distance animation"></video>
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
          <desc id="forest-map-description">An SVG map showing Germany’s federal states and forest areas. Scrolling changes the display from all forests to forests larger than 50 square kilometres.</desc>
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
        <div class="forest-map__mesh-labels-html" aria-hidden="true"></div>
        <div class="forest-map__ranking-labels-html" aria-hidden="true"></div>
        <div class="forest-map__mesh-legend" aria-label="Mesh-size scale from highest to lowest">
          <div class="forest-map__mesh-legend-row">
            <div class="forest-map__mesh-legend-title">
              <img src="media/meshsize-purple.svg" alt="" />
              <span>Mesh size</span>
            </div>
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
      <div class="barrier-breakdown" aria-label="Barrier types along the route: 79 streets, 48 settlements, 13 railways, and 2 airports.">
        <div class="barrier-breakdown__item barrier-breakdown__item--streets" tabindex="0" style="--barrier-share: 56" title="79 Streets (56 %)">
          <span>79 Streets</span><strong>(56 %)</strong>
        </div>
        <div class="barrier-breakdown__item barrier-breakdown__item--settlements" tabindex="0" style="--barrier-share: 34" title="48 Settlements (34 %)">
          <span>48 Settlements</span><strong>(34 %)</strong>
        </div>
        <div class="barrier-breakdown__item barrier-breakdown__item--railways" tabindex="0" style="--barrier-share: 9" title="13 Railways (9 %)">
          <span>13 Railways</span><strong>(9 %)</strong>
        </div>
        <div class="barrier-breakdown__item barrier-breakdown__item--airports" tabindex="0" style="--barrier-share: 1" title="2 Airports (1 %)">
          <span>2 Airports</span><strong>(1 %)</strong>
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
    <div class="map-scroll-step map-scroll-step--hold" data-map-step="14"></div>
  </div>
`,e}function Qt(){const e=document.createElement("section");return e.id="explore-data",e.className="story-section explore-data-section",e.dataset.theme="light",e.dataset.section="explore-data",e.innerHTML=`
    <div class="explore-data" aria-live="polite">
      <div class="explore-data__stage">
        <div class="explore-data__copy">
          <div class="explore-data__title-row">
            <h2>
              <span class="explore-data__marks" aria-hidden="true">
                <img class="explore-data__mark" src="media/explore.svg" alt="" />
              </span><span class="explore-data__title-text">${S.detail.heading}</span>
            </h2>
          </div>
          <p class="explore-data__intro-copy">${S.detail.introCopy}</p>
          <p class="explore-data__overview-caption"></p>
          <div class="explore-data__overview">
            <div class="explore-data__overview-zoom">
              <img class="explore-data__overview-image" alt="" />
              <div class="explore-data__overview-square" aria-hidden="true"></div>
            </div>
          </div>
          <div class="explore-data__overview-nav">
            <button type="button" class="explore-data__overview-prev" aria-label="${S.detail.overviewPrevLabel}"><img src="media/arrow_left.svg" alt="" /></button>
            <button type="button" class="explore-data__overview-next" aria-label="${S.detail.overviewNextLabel}"><img src="media/arrow_right.svg" alt="" /></button>
          </div>
        </div>
        <div class="explore-data__media">
          <div class="explore-data__header">
            <button type="button" class="explore-data__header-back">
              <span class="explore-data__header-back-arrow" aria-hidden="true">&larr;</span>
              <span>${S.detail.backLabel}</span>
            </button>
            <div class="explore-data__header-state">
              <span class="explore-data__state-name">—</span>
            </div>
          </div>
          <div class="explore-data__cards">
            <div class="explore-data__card" data-card="mesh_size">
              <span class="explore-data__card-label">${S.detail.cardLabels.mesh_size}</span>
              <span class="explore-data__card-value">—</span>
            </div>
            <div class="explore-data__card" data-card="walking_time">
              <span class="explore-data__card-label">${S.detail.cardLabels.walking_time}<span class="explore-data__info-icon" tabindex="0" role="button" aria-label="${S.detail.walkingTimeTooltip}">
                  <svg class="explore-data__info-icon-svg" viewBox="0 0 16 16" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.3" />
                    <circle cx="8" cy="4.8" r="0.9" fill="currentColor" />
                    <rect x="7.25" y="7" width="1.5" height="5" rx="0.75" fill="currentColor" />
                  </svg>
                  <span class="explore-data__tooltip" role="tooltip">${S.detail.walkingTimeTooltip}</span>
                </span></span>
              <span class="explore-data__card-value">—</span>
            </div>
            <div class="explore-data__card" data-card="pct_unfragmented">
              <span class="explore-data__card-label">${S.detail.cardLabels.pct_unfragmented}</span>
              <span class="explore-data__card-value">—</span>
            </div>
            <div class="explore-data__card explore-data__card--highlight" data-card="unfragmented_km2">
              <span class="explore-data__card-label">${S.detail.cardLabels.unfragmented_km2}</span>
              <span class="explore-data__card-value">—</span>
            </div>
          </div>
          <div class="explore-data__ranking-scale">
            <span>${S.ranking.scaleHigh}</span>
            <span class="explore-data__ranking-scale-arrow" aria-hidden="true">→</span>
            <span>${S.ranking.scaleLow}</span>
          </div>
          <div class="explore-data__legend">
            <span class="explore-data__legend-item"><i class="explore-data__legend-swatch explore-data__legend-swatch--mesh"></i>${S.detail.legend.mesh}</span>
            <span class="explore-data__legend-item"><i class="explore-data__legend-swatch explore-data__legend-swatch--patch"></i>${S.detail.legend.patch}</span>
          </div>
          <div class="explore-data__map-wrap">
            <svg class="explore-data__map-svg" viewBox="0 0 760 480" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="explore-data-map-title">
              <title id="explore-data-map-title">Mesh size and large forest patches</title>
              <defs class="explore-data__mesh-defs"></defs>
              <g class="explore-data__layer explore-data__layer--boundary"></g>
              <g class="explore-data__layer explore-data__layer--patches"></g>
            </svg>
            <p class="explore-data__status">${S.detail.loadingStatus}</p>
          </div>
          <div class="explore-data__state-nav">
            <button type="button" class="explore-data__state-prev" aria-label="${S.detail.statePrevLabel}"><img src="media/arrow_left.svg" alt="" /></button>
            <button type="button" class="explore-data__state-next" aria-label="${S.detail.stateNextLabel}"><img src="media/arrow_right.svg" alt="" /></button>
          </div>
          <div class="explore-data__ranking-wrap">
            <div class="explore-data__ranking-scroll" tabindex="0" role="region" aria-label="All German states ranked by mesh size, scroll to see more">
              <svg class="explore-data__ranking-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="explore-data-ranking-title">
                <title id="explore-data-ranking-title">All German states ranked by mesh size</title>
                <defs class="explore-data__ranking-mesh-defs"></defs>
                <g class="explore-data__ranking-states"></g>
              </svg>
            </div>
            <div class="explore-data__ranking-nav">
              <button type="button" class="explore-data__ranking-prev" aria-label="${S.ranking.prevLabel}"><img src="media/arrow_left.svg" alt="" /></button>
              <button type="button" class="explore-data__ranking-next" aria-label="${S.ranking.nextLabel}"><img src="media/arrow_right.svg" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
      <a class="explore-data__continue" href="#conclusion" aria-label="Finish the story">
        <span>${S.detail.continueLabel}</span>
        <span aria-hidden="true">&darr;</span>
      </a>
    </div>
  `,e}function ea(){const e=document.createElement("section");e.id="conclusion",e.className="story-section end-sequence-section",e.dataset.theme="light",e.dataset.section="explore-data";const t=Array.from({length:8},(a,s)=>{const r=`end-sequence-section__media${s===0?" is-revealed":""}`;return s===7?`
        <picture class="${r}" data-end-media="${s}" style="--end-layer: ${s}">
          <source media="(max-width: 700px)" srcset="media/end8_mobile.webp" />
          <img src="media/end8.webp" alt="" />
        </picture>
      `:`<img class="${r}" data-end-media="${s}" src="media/end${s+1}.webp" alt="" style="--end-layer: ${s}" />`}).join("");return e.innerHTML=`
    <div class="end-sequence-section__stage">
      <div class="end-sequence-section__media-stack" aria-hidden="true">${t}</div>
      <div class="end-sequence-section__texts">
        <p class="end-sequence-section__text" data-end-text="0">Although the two German federal states (Bundesländer) along the lynx migration route are generally less fragmented compared to others, there are still a significant number of barriers along the route that are often impassable and constitute a major obstacle to successful movement and dispersal for animals.</p>
        <p class="end-sequence-section__text" data-end-text="1">Preserving large, unfragmented forests is essential for wildlife and the environment. Yet, modern society is under constant pressure from competing land use demands, and the expansion of infrastructure risks further severing ecological connections and increasing the barrier strength of existing corridors.</p>
        <p class="end-sequence-section__text" data-end-text="2">Mitigation measures such as wildlife bridges, carefully located solar parks, and reduced deforestation are therefore key to preventing further fragmentation, so that nature and wildlife can thrive.</p>
        <p class="end-sequence-section__text end-sequence-section__text--final" data-end-text="3">All actors with their individual needs within the interconnected synergistic natural system should be treated as equals.</p>
      </div>
    </div>
  `,e}function ta(){return[Xt(),Kt(),...Jt(),Zt(),Qt(),ea()]}function aa(e,t=document){return typeof e=="string"?Array.from(t.querySelectorAll(e)):e instanceof Element?[e]:e instanceof NodeList?Array.from(e):e instanceof Array?e:[]}function sa(e){const t=document.createElement("div");t.className=`scrollama__debug-step ${e}`,t.style.position="fixed",t.style.left="0",t.style.width="100%",t.style.zIndex="9999",t.style.borderTop="2px solid black",t.style.borderBottom="2px solid black";const a=document.createElement("p");return a.style.position="absolute",a.style.left="0",a.style.height="1px",a.style.width="100%",a.style.borderTop="1px dashed black",t.appendChild(a),document.body.appendChild(t),t}function ra({id:e,step:t,marginTop:a}){const{index:s,height:r}=t,n=`scrollama__debug-step--${e}-${s}`;let l=document.querySelector(`.${n}`);l||(l=sa(n)),l.style.top=`${a*-1}px`,l.style.height=`${r}px`,l.querySelector("p").style.top=`${r/2}px`}function oa(){const e="abcdefghijklmnopqrstuvwxyz",t=Date.now(),a=[];for(let s=0;s<6;s+=1){const r=e[Math.floor(Math.random()*e.length)];a.push(r)}return`${a.join("")}${t}`}function Ee(e){console.error(`scrollama error: ${e}`)}function he(e){return+e.getAttribute("data-scrollama-index")}function na(e,t){const a=Math.max(1,Math.ceil(e/t)),s=[],r=1/a;for(let n=0;n<a+1;n+=1)s.push(n*r);return s}function He(e){if(typeof e=="string"&&e.indexOf("px")>0){const t=+e.replace("px","");return isNaN(t)?(err("offset value must be in 'px' format. Fallback to 0.5."),{format:"percent",value:.5}):{format:"pixels",value:t}}else if(typeof e=="number"||!isNaN(+e))return e>1&&err("offset value is greater than 1. Fallback to 1."),e<0&&err("offset value is lower than 0. Fallback to 0."),{format:"percent",value:Math.min(Math.max(0,e),1)};return null}function ia(e){e.forEach(t=>t.node.setAttribute("data-scrollama-index",t.index))}function la(e){const{top:t}=e.getBoundingClientRect(),a=window.pageYOffset,s=document.body.clientTop||0;return t+a-s}let ne,$e,I;function vt(e){const t=e?e.scrollTop:window.pageYOffset;ne!==t&&(ne=t,ne>$e?I="down":ne<$e&&(I="up"),$e=ne)}function ca(e){ne=0,$e=0,document.addEventListener("scroll",()=>vt(e))}function ie(){let e={},t=oa(),a=[],s,r,n,l=0,i=!1,p=!1,f=!1,m=!1,g=[];function c(){e={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},g=[]}function u(o){o&&!i&&j(),!o&&i&&V(),i=o}function y(o,v){const h=he(o),b=a[h];v!==void 0&&(b.progress=v);const x={element:o,index:h,progress:v,direction:I};b.state==="enter"&&e.stepProgress(x)}function $(o,v=!0){const h=he(o),b=a[h],x={element:o,index:h,direction:I};b.direction=I,b.state="enter",g[h]||e.stepEnter(x),m&&(g[h]=!0)}function R(o,v=!0){const h=he(o),b=a[h];if(!b.state)return!1;const x={element:o,index:h,direction:I};p&&(I==="down"&&b.progress<1?y(o,1):I==="up"&&b.progress>0&&y(o,0)),b.direction=I,b.state="exit",e.stepExit(x)}function O([o]){const v=he(o.target),h=a[v],b=o.target.offsetHeight;b!==h.height&&(h.height=b,A(h),se(h),J(h))}function q([o]){vt(r);const{isIntersecting:v,target:h}=o;v?$(h):R(h)}function D([o]){const v=he(o.target),h=a[v],{isIntersecting:b,intersectionRatio:x,target:Y}=o;b&&h.state==="enter"&&y(Y,x)}function A({observers:o}){Object.keys(o).map(v=>{o[v].disconnect()})}function V(){a.forEach(A)}function J(o){const v=new ResizeObserver(O);v.observe(o.node),o.observers.resize=v}function ye(){a.forEach(J)}function se(o){const v=window.innerHeight,h=o.offset||s,b=h.format==="pixels"?1:v,x=h.value*b,Y=o.height/2-x,Z=o.height/2-(v-x),W={rootMargin:`${Y}px 0px ${Z}px 0px`,threshold:.5,root:n},X=new IntersectionObserver(q,W);X.observe(o.node),o.observers.step=X,f&&ra({id:t,step:o,marginTop:Y})}function le(){a.forEach(se)}function L(o){const v=window.innerHeight,h=o.offset||s,b=h.format==="pixels"?1:v,x=h.value*b,Y=-x+o.height,Z=x-v,Q=`${Y}px 0px ${Z}px 0px`,re=na(o.height,l),U={rootMargin:Q,threshold:re},W=new IntersectionObserver(D,U);W.observe(o.node),o.observers.progress=W}function C(){a.forEach(L)}function j(){V(),ye(),le(),p&&C()}const _={};return _.setup=({step:o,parent:v,offset:h=.5,threshold:b=4,progress:x=!1,once:Y=!1,debug:Z=!1,container:Q=void 0,root:re=null})=>(ca(Q),a=aa(o,v).map((U,W)=>({index:W,direction:void 0,height:U.offsetHeight,node:U,observers:{},offset:He(U.dataset.offset),top:la(U),progress:0,state:void 0})),a.length?(p=x,m=Y,f=Z,l=Math.max(1,+b),s=He(h),r=Q,n=re,c(),ia(a),u(!0),_):(Ee("no step elements"),_)),_.enable=()=>(u(!0),_),_.disable=()=>(u(!1),_),_.destroy=()=>(u(!1),c(),_),_.resize=()=>(j(),_),_.offset=o=>o==null?s.value:(s=He(o),j(),_),_.onStepEnter=o=>(typeof o=="function"?e.stepEnter=o:Ee("onStepEnter requires a function"),_),_.onStepExit=o=>(typeof o=="function"?e.stepExit=o:Ee("onStepExit requires a function"),_),_.onStepProgress=o=>(typeof o=="function"?e.stepProgress=o:Ee("onStepProgress requires a function"),_),_}const w=(e,t=0,a=1)=>Math.min(a,Math.max(t,e)),E=(e,t,a)=>e+(t-e)*a;let _t=()=>{},z=-1,ae=null,Xe=!1;function bt(){return document.querySelector(".sound-control__button")?.classList.contains("is-enabled")??!1}function wt(e){const t=T[e]?.animation;return!!(t?.src&&Number.isFinite(t.start)&&Number.isFinite(t.end)&&t.end>t.start)}function da(e){const t=T[e]?.audio;return!!(t?.src&&Number.isFinite(t.start)&&Number.isFinite(t.end)&&t.end>t.start&&(t.loopStart==null||Number.isFinite(t.loopStart)&&t.loopStart>=t.start&&t.loopStart<t.end))}function St(e){e.pause(),e.currentTime=0,e.volume=1,delete e.dataset.storyAudioPhase}function xt(){ae!=null&&cancelAnimationFrame(ae),ae=null}function We(){if(ae!=null)return;xt();const e=document.querySelector(`[data-story-audio="${z}"]`);if(!e||e.paused)return;const t=performance.now(),a=450,s=r=>{const n=Math.min((r-t)/a,1);if(e.volume=1-n,n<1){ae=requestAnimationFrame(s);return}St(e),z=-1,ae=null};ae=requestAnimationFrame(s)}function ua(e,t,{restart:a=!0}={}){if(xt(),e.volume=1,!bt()){e.pause();return}(a||!e.dataset.storyAudioPhase)&&(e.dataset.storyAudioPhase="full",e.currentTime=t.start),e.play().catch(()=>{})}function kt(e,{restartAnimation:t=!0}={}){const a=document.querySelector(".story-chapter-section--journey");if(!a||!Number.isFinite(e))return;z=e,a.querySelectorAll("[data-story-media]").forEach(l=>{const i=Number(l.dataset.storyMedia)===e;l.classList.toggle("is-active",i);const p=l.querySelector("audio[data-story-audio]");p&&(i&&da(e)&&!Xe?ua(p,T[e].audio,{restart:t}):i||St(p))});const s=T[e]?.animation,r=a.querySelector("[data-story-shared-animation]"),n=!!(r&&wt(e));r&&(n?(r.muted=!0,r.dataset.storyAnimationEnd=String(s.end),t&&(r.currentTime=s.start),r.play().catch(()=>{})):(r.pause(),delete r.dataset.storyAnimationEnd)),Lt()}function pa({enabled:e}){z>=0&&kt(z,{restartAnimation:!1}),e||document.querySelectorAll("audio[data-story-audio]").forEach(t=>t.pause())}function ma(){document.querySelectorAll("audio[data-story-audio]").forEach(e=>{e.addEventListener("timeupdate",()=>{const t=Number(e.dataset.storyAudio),a=T[t]?.audio;if(!a||z!==t||!bt())return;const s=a.loopStart??a.start;e.dataset.storyAudioPhase==="full"&&e.currentTime>=a.end?(e.dataset.storyAudioPhase="loop",e.currentTime=s,e.play().catch(()=>{})):e.dataset.storyAudioPhase==="loop"&&e.currentTime>=a.end&&(e.currentTime=s,e.play().catch(()=>{}))})})}function ha(){const e=document.querySelector("[data-story-shared-animation]");e&&(e.preload="auto",e.load(),e.addEventListener("timeupdate",()=>{const t=Number(e.dataset.storyAnimationEnd);Number.isFinite(t)&&e.currentTime>=t&&(e.currentTime=t,e.pause())}))}function fa(e){_t=e}let dt=!1;function Et(){if(dt)return;dt=!0,document.querySelector(".side-nav")?.classList.remove("side-nav--delayed"),document.querySelector(".intro-section .scroll-arrow")?.classList.add("is-visible"),document.querySelector(".intro-section__heading")?.classList.add("is-visible");const e=document.querySelector(".sound-control__hint");e?.classList.add("is-visible"),window.setTimeout(()=>e?.classList.remove("is-visible"),5e3)}function ga(e){const t=document.querySelectorAll("[data-section]"),a=document.querySelectorAll("[data-section-link]"),s=r=>{e.dataset.theme=r.dataset.theme??"dark",document.querySelector(".sound-control__button")?.dispatchEvent(new Event("soundthemechange")),document.querySelector(".side-nav__logo-image")?.dispatchEvent(new Event("logothemechange")),a.forEach(n=>{const l=n.dataset.sectionLink===r.dataset.section;n.classList.toggle("is-active",l),n.setAttribute("aria-current",l?"location":"false")}),r.id==="explore-data"&&location.hash!=="#explore-data"&&history.replaceState(null,"","#explore-data")};if(typeof ie=="function"){const r=ie();r.setup({step:"[data-section]",offset:.5,order:!0}).onStepEnter(({element:n})=>s(n)),window.addEventListener("resize",()=>r.resize()),window.__sectionScroller=r}else{const r=new IntersectionObserver(n=>{const l=n.filter(i=>i.isIntersecting).sort((i,p)=>p.intersectionRatio-i.intersectionRatio)[0];l&&s(l.target)},{rootMargin:"-35% 0px -35% 0px",threshold:[0,.25,.5,.75,1]});t.forEach(n=>r.observe(n))}window.setTimeout(Et,4e3)}const ya=4+18/30,va=8;function Ke(e){const t=e.getBoundingClientRect(),a=e.offsetHeight-window.innerHeight;return a<=0?0:w(-t.top/a)}function _a(e){const t=e.getBoundingClientRect();return w((window.innerHeight-t.top)/(window.innerHeight*.75))}function ba(){const e=document.querySelector("#introduction"),t=document.querySelector(".main-nav");if(!e||!t)return;const a=e.getBoundingClientRect(),s=w(-a.top/(window.innerHeight*.72));s>.005&&Et(),t.style.setProperty("--nav-reveal",s.toFixed(3)),t.classList.toggle("is-visible",s>.02)}function wa(){const e=document.querySelector("#introduction"),t=document.querySelector(".intro-section__video");if(!e||!t)return;const a=()=>{t.play().catch(()=>{})};t.addEventListener("loadeddata",a,{once:!0}),document.addEventListener("pointerdown",a,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=va&&(t.currentTime=ya,a())}),window.addEventListener("scroll",()=>{const s=e.getBoundingClientRect();s.bottom>0&&s.top<window.innerHeight?a():t.pause()},{passive:!0}),a()}function Sa(){const e=document.querySelector(".sequence-section");if(!e)return;const t=Ke(e),a=e.getBoundingClientRect();a.bottom>0&&a.top<window.innerHeight;const s=e.querySelectorAll("[data-sequence-frame]"),r=w(t/.6),n=Math.min(s.length-1,Math.floor(r*s.length));s.forEach((i,p)=>i.classList.toggle("is-revealed",p<=n)),e.querySelectorAll("[data-sequence-text]").forEach((i,p)=>{const m=[.14,.42,.7][p]??.5,c=(1-w((t-(m-.17))/.34)*2)*window.innerHeight;i.style.opacity="1",i.style.transform=`translateY(${c}px)`})}function Lt(){const e=document.querySelector(".story-chapter-section--journey");if(!e)return;const t=e.getBoundingClientRect();(t.bottom<=0||t.top>=window.innerHeight)&&(z>=0&&We(),Xe=!1);const s=e.querySelectorAll("[data-story-card]"),r=.88,n=r/s.length,l=Ke(e),i=w((_a(e)-.15)/.6),p=n*.35,f=i*p+l*(1-p),m=w((f-r)/.045);m>.02&&z>=0&&We(),s.forEach((q,D)=>{const A=w((f-D*n)/n),V=w((A-.3)/.2),J=w((.9-A)/.15);q.style.opacity="1",q.style.transform=`translateY(${(1-A*2)*100}%)`,q.style.setProperty("--story-copy-offset","0px"),q.style.setProperty("--facts-reveal",Math.min(V,J).toFixed(3))});const c=(w(f/(n*.5))*(1-m)).toFixed(3),u=e.querySelector("[data-story-shared-animation]"),y=wt(z);e.querySelectorAll("[data-story-media]").forEach(q=>{const D=Number(q.dataset.storyMedia)===z&&!y;q.style.opacity=D?c:"0"}),u&&(u.style.opacity=y?c:"0");const $=document.querySelector(".story-outro__image"),R=document.querySelector(".story-outro__text"),O=document.querySelector(".story-outro__arrow");$&&($.style.opacity=m.toFixed(3)),R&&(R.style.transform=`translateY(${(1-m)*100}vh)`),O?.classList.toggle("is-visible",f>=.93)}let $t=-2;function qt(e,t=1){const a=document.querySelector(".map-section"),s=document.querySelector(".map-section__step--barriers"),r=document.querySelector(".map-section__title-row"),n=document.querySelector(".map-section__forest-title"),l=document.querySelector(".map-section__step--intro"),i=document.querySelector(".map-section__step--detail"),p=document.querySelector(".map-section__step--pseudo"),f=document.querySelector(".map-section__stub-copy"),m=document.querySelector(".map-section__pseudo-facts-copy"),g=document.querySelector(".map-section__step--mesh"),c=document.querySelector(".map-section__mesh-title"),u=document.querySelector(".map-section__mesh-intro-copy"),y=document.querySelector(".map-section__mesh-fact--intro"),$=document.querySelector(".map-section__mesh-animation"),R=document.querySelector(".map-section__mesh-fact--outro"),O=document.querySelector(".map-section__mesh-route-copy"),q=document.querySelector(".map-section__mesh-bayern-copy"),D=document.querySelector(".map-section__mesh-thueringen-copy"),A=document.querySelector(".map-section__mesh-diagonal-step"),V=A?.querySelector(":scope > .map-section__reveal-text"),J=A?.querySelector(".map-section__diagonal-animation"),ye=A?.querySelector(":scope > .map-section__facts"),se=document.querySelector(".map-section__mesh-bayern-time"),le=document.querySelector(".map-section__mesh-thueringen-time"),L=document.querySelector(".forest-map"),C=document.querySelector(".forest-map__svg"),j=document.querySelector(".forest-map__layer--barriers"),_=document.querySelector(".barrier-breakdown");if(!a||!s||!r||!n||!l||!i||!p||!f||!m||!g||!c||!u||!y||!$||!R||!O||!q||!D||!A||!V||!J||!ye||!se||!le||!L||!C||!j)return;$t=e;const o=w((t-.18)/.58),v=w((t+.12)/.24),h=d=>`${d*window.innerHeight}px`,b=e<-2?1:e<=-1?0:e===0?-o:-1,x=e<-2?0:e===-2?v:e===-1?1:e===0?1-o:0,Y=e<0?0:e===0?o:1,Z=e<0?1:e===0?1-o:e===1?0:e===2?-o:-1,Q=e<1?1:e===1?1-o:e===2?-o:-1,re=e<2?1:e===2?1-o:e<6?0:e===6?-o:-1,U=e<6?1:e===6?1-o:0,W=e<1?0:e===1?o:1,X=e<2?0:e===2?o:e<6?1:e===6?1-o:0,ve=e<3?0:e===3?o:1,qe=e<4?0:e===4?o:1,Ze=e<6?0:e===6?o:1,Ae=e<7?0:e===7?o:1,ce=window.matchMedia("(max-width: 900px)").matches,Me=!ce||e<7.5?0:e===7.5?o:1,Mt=e<6?0:e===6?o:1,ee=e<8?0:e===8?o:1,K=e<9?0:e===9?o:1,de=e<10?0:e===10?o:1,ue=e<11?0:e===11?o:1,_e=e<12?0:e===12?o:1,Qe=e<13?0:e===13?o:1,be=ee,Te=window.matchMedia("(max-width: 700px)").matches?60:window.matchMedia("(max-width: 900px)").matches?250:0,Tt=w(be/.12),oe=w((be-.12)/.88),et=w(Ae/.55),tt=w((Ae-.18)/.55),at=ce?Me:w((Ae-.36)/.55),Pe=ce?Me*(u.offsetHeight+24):0,we=ce?_e*(V.offsetHeight+24):0;r.style.opacity="1",r.style.transform="none",n.style.opacity="1",s.style.transform=`translateY(${h(b)})`,l.style.transform=`translateY(${h(Z)})`,i.style.transform=`translateY(${h(Q)})`,p.style.transform=`translateY(${h(re)})`,g.style.transform=`translateY(${h(U)})`,O.style.top=`${c.offsetHeight}px`,u.style.opacity=((1-ee)*(1-Me)).toFixed(3),y.style.opacity=(et*(1-ee)).toFixed(3),y.style.transform=`translateY(${(1-et)*40-Pe}px)`,$.style.opacity=(tt*(1-ee)).toFixed(3),$.style.transform=`translateY(${(1-tt)*40-Pe}px)`,R.style.opacity=(at*(1-ee)).toFixed(3),R.style.transform=`translateY(${(1-at)*40-Pe}px)`,O.style.opacity=(ee*(1-ue)).toFixed(3),O.style.transform=`translateY(${(1-ee)*window.innerHeight}px)`,q.style.top=`${c.offsetHeight+O.offsetHeight+16}px`,q.style.opacity=(K*(1-ue)).toFixed(3),q.style.transform=`translateY(${(1-K)*window.innerHeight}px)`,D.style.top=`${c.offsetHeight+O.offsetHeight+q.offsetHeight+32}px`,D.style.opacity=(de*(1-ue)).toFixed(3),D.style.transform=`translateY(${(1-de)*window.innerHeight}px)`,A.style.top=`${c.offsetHeight}px`,A.style.opacity=ue.toFixed(3),A.style.transform=`translateY(${(1-ue)*window.innerHeight}px)`,V.style.opacity=(ce?1-_e:1).toFixed(3),J.style.transform=`translateY(${-we}px)`,ye.style.transform=`translateY(${-we}px)`,se.style.opacity=_e.toFixed(3),se.style.transform=`translateY(${(1-_e)*window.innerHeight-we}px)`,le.style.opacity=Qe.toFixed(3),le.style.transform=`translateY(${(1-Qe)*window.innerHeight-we}px)`,f.style.opacity=ve.toFixed(3),f.style.transform=`translateY(${(1-ve)*window.innerHeight}px)`,m.style.opacity=qe.toFixed(3),m.style.transform=`translateY(${(1-qe)*40}px)`,L.style.opacity=(e===-2?v:1).toFixed(3),L.style.setProperty("--barrier-reveal",x.toFixed(3)),_&&(_.style.opacity=x.toFixed(3),_.style.pointerEvents=x>.01?"auto":"none"),L.style.setProperty("--forest-stage-reveal",Y.toFixed(3)),L.style.setProperty("--large-forest-reveal",W.toFixed(3)),L.style.setProperty("--forest-zoom-detail",w((X-.35)/.65).toFixed(3)),L.style.setProperty("--pseudorelief-reveal",(ve*(1-Ze)).toFixed(3)),L.style.setProperty("--pseudorelief-exit",Ze.toFixed(3)),L.style.setProperty("--mesh-reveal",Mt.toFixed(3)),L.style.setProperty("--ranking-reveal",Tt.toFixed(3)),L.style.setProperty("--ranking-travel",oe.toFixed(3)),L.classList.toggle("is-ranking",be>0),L.closest(".map-section__media")?.classList.toggle("is-ranking",be>0),document.querySelectorAll(".forest-map__ranking-state").forEach(d=>{const k=Number(d.dataset.centerX),P=Number(d.dataset.centerY),B=Number(d.dataset.targetX),G=Number(d.dataset.targetY),F=Number(d.dataset.targetScale),N=E(k,B,oe)-100*K,M=E(P,G-Te,oe),H=E(1,F,oe);d.setAttribute("transform",`translate(${N} ${M}) scale(${H}) translate(${-k} ${-P})`);const xe=d.dataset.stateCode==="09"?1:1-.8*K,ke=d.dataset.stateCode==="16"?E(xe,1,de):xe;d.style.opacity=ke.toFixed(3)}),document.querySelectorAll(".forest-map__ranking-label").forEach(d=>{const k=d.dataset.stateCode==="09"?1:1-.8*K,P=d.dataset.stateCode==="16"?E(k,1,de):k,B=Number(d.dataset.targetX),F=Number(d.dataset.labelY)-Te,N=B-100*K,M=d.dataset.stateCode==="12"?Math.max(24,N):N;d.style.opacity=(oe*P).toFixed(3),d.setAttribute("x",M),d.setAttribute("y",F),d.setAttribute("transform",`rotate(-55 ${M} ${F})`),d.querySelectorAll("tspan").forEach(H=>H.setAttribute("x",M))});const Fe=C.getScreenCTM(),Se=L.getBoundingClientRect();Fe&&(document.querySelectorAll(".forest-map__mesh-label-html").forEach(d=>{const k=C.createSVGPoint();k.x=Number(d.dataset.anchorX),k.y=Number(d.dataset.anchorY);const P=k.matrixTransform(Fe);d.style.left=`${P.x-Se.left}px`,d.style.top=`${P.y-Se.top}px`}),document.querySelectorAll(".forest-map__ranking-label-html").forEach(d=>{const k=d.dataset.stateCode==="09"?1:1-.8*K,P=d.dataset.stateCode==="16"?E(k,1,de):k,B=Number(d.dataset.targetX),G=Number(d.dataset.labelY)-Te,F=B-100*K,N=d.dataset.stateCode==="12"?Math.max(24,F):F,M=C.createSVGPoint();M.x=N,M.y=G;const H=M.matrixTransform(Fe);d.style.left=`${H.x-Se.left}px`,d.style.top=`${H.y-Se.top}px`,d.style.opacity=(oe*P).toFixed(3)})),L.classList.toggle("is-large-forest-only",W>=.99),C.style.transform="none";const st=Number(j.dataset.boundsX),rt=Number(j.dataset.boundsY),Re=Number(j.dataset.boundsWidth),Ne=Number(j.dataset.boundsHeight);if([st,rt,Re,Ne].every(Number.isFinite)){const d=C.getBoundingClientRect(),k=d.width/Math.max(d.height,1),P=nt=>{let pe=Re*nt,me=Ne*nt;return pe/me<k?pe=me*k:me=pe/k,{x:st+Re/2-pe/2,y:rt+Ne/2-me/2,width:pe,height:me}},B=P(.38),G=P(.82),F=e<=0,N=e<-2?0:e===-2?w(t)*.5:e===-1?.5+w(t)*.5:1,M=e<0?0:e===0?o:1,H={x:E(B.x,G.x,N),y:E(B.y,G.y,N),width:E(B.width,G.width,N),height:E(B.height,G.height,N)},xe=87.5,ke=87.5,Pt=456.25,Ft=456.25+100/Math.max(d.height,1)*ke,Rt=F?E(H.x,0,M):E(0,Pt,X),Nt=F?E(H.y,0,M):E(0,Ft,X),Ht=F?E(H.width,1e3,M):E(1e3,xe,X),zt=F?E(H.height,1e3,M):E(1e3,ke,X);C.setAttribute("viewBox",`${Rt} ${Nt} ${Ht} ${zt}`)}const ot=e<0?"route":"fragmentation";a.dataset.section=ot,document.querySelectorAll("[data-section-link]").forEach(d=>{const k=d.dataset.sectionLink===ot;d.classList.toggle("is-active",k),d.setAttribute("aria-current",k?"location":"false")}),_t(qe,ve)}function xa(){const e=document.querySelector(".end-sequence-section");if(!e)return;const t=Ke(e),a=e.querySelectorAll("[data-end-media]"),s=w(t/.88),r=Math.min(a.length-1,Math.floor(s*a.length));a.forEach((l,i)=>{l.classList.toggle("is-revealed",i<=r)});const n=[.14,.36,.58,.82];e.querySelectorAll("[data-end-text]").forEach((l,i)=>{if(i===3){const m=w((t-.64)/.16),g=(1-m)*window.innerHeight-m*window.innerHeight*.22;l.style.transform=`translateY(${g}px)`;return}const p=n[i]??.82,f=w((t-(p-.16))/.32);l.style.transform=`translateY(${(1-f*2)*window.innerHeight}px)`})}function ka(){ha(),ma(),document.querySelector(".sound-control__button")?.addEventListener("soundchange",i=>{pa(i.detail??{})}),wa(),document.querySelectorAll('.main-nav__item[href^="#"]').forEach(i=>{i.addEventListener("click",()=>{z<0||i.getAttribute("href")==="#perspective-shift"||(Xe=!0,We())})}),document.querySelectorAll(".map-section__mark").forEach(i=>{i.addEventListener("error",()=>i.classList.add("has-error"))}),new Map([["route",-2],["fragmentation",0]]).forEach((i,p)=>{document.querySelectorAll(`.main-nav__item[data-section-link="${p}"]`).forEach(f=>{f.addEventListener("click",m=>{const g=document.querySelector(`.map-scroll-step[data-map-step="${i}"]`);if(!g)return;m.preventDefault(),history.pushState(null,"",`#${p}`);const y=window.scrollY+g.getBoundingClientRect().top+g.offsetHeight*.82-window.innerHeight*.5;window.scrollTo({top:Math.max(0,y),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})})})}),document.querySelectorAll('.scroll-arrow[href^="#"]').forEach(i=>{i.addEventListener("click",p=>{const f=document.querySelector(i.getAttribute("href"));f&&(p.preventDefault(),history.pushState(null,"",i.getAttribute("href")),f.scrollIntoView({behavior:"smooth",block:"start"}))})}),document.querySelectorAll(".sequence-section__frame").forEach(i=>{i.addEventListener("error",()=>i.classList.add("has-error"))});const t=()=>{ba(),Sa(),Lt(),xa()};let a=!1;const s=()=>{a||(a=!0,requestAnimationFrame(()=>{t(),a=!1}))};let r=null,n=!1;const l=(i,p)=>{r=[i,p],!n&&(n=!0,requestAnimationFrame(()=>{n=!1,qt(...r)}))};if(typeof ie=="function"){const i=new URLSearchParams(window.location.search).has("scrollama-debug");ie().setup({step:"[data-story-trigger]",offset:.55,order:!0,debug:i}).onStepEnter(({element:g})=>kt(Number(g.dataset.storyTrigger)));const f=ie();f.setup({step:".map-scroll-step",offset:.5,progress:!0,threshold:4,order:!0}).onStepEnter(({element:g,progress:c})=>{l(Number(g.dataset.mapStep),c??0)}).onStepProgress(({element:g,progress:c})=>{l(Number(g.dataset.mapStep),c)});const m=ie();m.setup({step:".intro-section, .sequence-section, .story-chapter-section, .interlude-section, .route-section, .map-section, .end-sequence-section",offset:.9,progress:!0,threshold:4,order:!0}).onStepEnter(s).onStepProgress(s).onStepExit(s),window.addEventListener("resize",()=>{f.resize(),m.resize(),s()}),window.__mapScroller=f,window.__sceneScroller=m}else window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s);t()}function ut(){qt($t,1)}const At=document.querySelector("#app");if(!At)throw new Error("App root not found");const ge=document.createElement("div");ge.className="site-shell";ge.dataset.theme="dark";const Je=document.createElement("main");Je.id="main-content";Je.append(...ta());const Ge=Ut();ge.append(Gt(),It(Ge),Je,Ge);At.append(ge);Wt(Ge);document.querySelectorAll("video:not([data-story-shared-animation])").forEach(e=>{e.muted=!1});ga(ge);ka();let Ie=!1,ze=!1,Oe=!1,De=!1;const Ea=async()=>{if(!(Ie||ze)){ze=!0;try{const[{setupForestMap:e},t]=await Promise.all([Ye(()=>import("./forest-map-JxI9ZN6D.js"),__vite__mapDeps([0,1]),import.meta.url),Ye(()=>import("./pseudorelief-model-DA64iFjf.js"),[],import.meta.url)]);Oe||(await e(ut),Oe=!0),De||(fa(t.updatePseudorelief),t.setupPseudoreliefModel(),De=!0),ut(),Ie=Oe&&De}catch(e){console.error("Unable to load the route visualizations",e)}finally{ze=!1}}},pt=document.querySelector("#route");if(pt){const e=new IntersectionObserver(t=>{t.some(a=>a.isIntersecting)&&Ea().then(()=>{Ie&&e.disconnect()})},{rootMargin:"100% 0px"});e.observe(pt)}let mt=!1;const ht=document.querySelector("#explore-data");if(ht){const e=new IntersectionObserver(t=>{mt||!t.some(a=>a.isIntersecting)||(mt=!0,e.disconnect(),Ye(async()=>{const{setupExploreData:a}=await import("./explore-data-B91STRcI.js");return{setupExploreData:a}},__vite__mapDeps([2,1]),import.meta.url).then(({setupExploreData:a})=>a()))},{rootMargin:"50% 0px"});e.observe(ht)}export{w as c,S as e};
