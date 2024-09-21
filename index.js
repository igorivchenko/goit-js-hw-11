import{i as l,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(o){return o.map(({largeImageURL:t,webformatURL:s,tags:i,likes:e,views:r,comments:c,downloads:n})=>`<li class="gallery-item">
        <article class="card">
    <a class="card-link" href="${t}"><img class="card-image" src="${s}" alt="${i}"/></a>        <div class="card-container">
          <div class="card-item">
            <p class="card-title">Likes</p>
            <p class="card-count">${e}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Views</p>
            <p class="card-count">${r}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Comments</p>
            <p class="card-count">${c}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Downloads</p>
            <p class="card-count">${n}</p>
          </div>
        </div>
        </article>
          </li>`).join("")}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.form.addEventListener("submit",p);function p(o){const s=o.currentTarget.elements.state.value;if(o.preventDefault(),a.gallery.innerHTML="",!s){l.error({message:"Please enter your request",position:"bottomRight"});return}y(s),a.loader.style.display="inline-block"}const f="https://pixabay.com/api/?key=",m="46052576-a4ef4f0d52180e04b4399e04b";function y(o){fetch(`${f}${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(t=>t.json()).then(t=>{if(a.loader.style.display="none",t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});return}const s=u(t.hits);a.gallery.insertAdjacentHTML("beforeend",s),new d(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh()}).catch(t=>{a.loader.style.display="none",console.log(t)})}
//# sourceMappingURL=index.js.map
