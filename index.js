import{i as c,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(a){return a.map(({largeImageURL:r,webformatURL:s,tags:o,likes:e,views:t,comments:i,downloads:l})=>`<li class="gallery-item">
        <article class="card">
    <a class="card-link" href="${r}"><img class="card-image" src="${s}" alt="${o}"/></a>        <div class="card-container">
          <div class="card-item">
            <p class="card-title">Likes</p>
            <p class="card-count">${e}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Views</p>
            <p class="card-count">${t}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Comments</p>
            <p class="card-count">${i}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Downloads</p>
            <p class="card-count">${l}</p>
          </div>
        </div>
        </article>
          </li>`).join("")}const p="https://pixabay.com/api/?key=",m="46052576-a4ef4f0d52180e04b4399e04b",n=document.querySelector(".form");function f(a){const r=document.querySelector(".gallery"),s=document.querySelector(".loader"),o=n.elements.state.value;if(a.preventDefault(),r.innerHTML="",!o){c.error({message:"Please enter your request",position:"bottomRight"});return}s.style.display="inline-block",fetch(`${p}${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(e=>e.json()).then(e=>{if(s.style.display="none",e.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});return}const t=u(e.hits);r.insertAdjacentHTML("beforeend",t),new d(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh()}).catch(e=>{s.style.display="none",console.log(e)})}n.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
