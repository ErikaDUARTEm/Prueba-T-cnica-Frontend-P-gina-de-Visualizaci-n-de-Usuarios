(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=c(t);fetch(t.href,a)}})();const S=(e,n)=>{const c=new Date(e.dob.date),o={year:"numeric",month:"long",day:"numeric"},t=c.toLocaleDateString("es-ES",o);return`
    <article class="card">
    <div class="card-imagen">
      <img src="${e.picture.medium}">
      <button class="btnCerrar btnOculto">x</button>
    </div>
    <div class="card-body-title">
      <div>
          <p>Nombre completo: <span class="contenido">${e.name.title}. ${e.name.first} ${e.name.last}</span></p>
          <p>Edad: <span class="contenido">${e.dob.age}</span></p>
          <p>Dirección: <span class="contenido">${e.location.city}</span></p>
      </div>
      <div>
          <p>Género: <span class="contenido">${e.gender}</span></p>
          <p>Fecha de nacimiento: <span class="contenido">${t}</span></p>
          <p>Email: <span class="contenido">${e.email}</span></p>
      </div>
    </div>
    <div class="container-btnInfo">
          <button class="btnInfo" data-id="${n}">+</button>
    </div>      
    </article>`},T=async()=>{try{const e="3sDUnI0c2sIVepXQgacATS8dz2XiKMXtJvlzPAfV",n=`https://quotes.rest/qod?language=en?api_key=${e}`,o=await(await fetch(n,{headers:{"X-TheySaidSo-Api-Secret":e,Accept:"application/json"}})).json();return console.log(o),o}catch(e){console.error("Error al obtener la cita aleatoria:",e)}},$=e=>{const n=new Date(e.dob.date),c={year:"numeric",month:"long",day:"numeric"},o=n.toLocaleDateString("es-ES",c);return`
    <article class="modal close">
    
        <div class="modal-imagen">
            <img src="${e.picture.thumbnail}">
            <button class="btnCerrar">x</button>
        </div>
        <div class="modal-body-title">
            <div>
                <p>Nombre completo: <span class="contenido">${e.name.title}. ${e.name.first} ${e.name.last}</span></p>
                <p>Edad: <span class="contenido">${e.dob.age}</span></p>
                <p>Dirección: <span class="contenido">${e.location.city}</span></p>
            </div>
            <div>
                <p>Género: <span class="contenido">${e.gender}</span></p>
                <p>Fecha de nacimiento: <span class="contenido">${o}</span></p>
                <p>Email: <span class="contenido">${e.email}</span></p>
            </div>
            <div>
                <p>Id: <span class="contenido">${e.id.name}${e.id.value}</span></p>
                <p>Username: <span class="contenido">${e.login.username}</span></p>
                <p>Phone: <span class="contenido">${e.phone}</span></p>
            </div>
            <span>${T()}</span>
            <span style="z-index:50;font-size:0.9em; font-weight: bold;">
                <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
                <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style="color: #ccc; margin-left: 4px; vertical-align: middle;">
        They Said So®</a>
            </span>
        </div> 
       
</article>`};let l=[];function v(e){setTimeout(function(){window.location.href="/"},e)}const A=async(e,n,c,o,t)=>{const a=document.querySelector(".loader-container");try{l.length===0&&(a.style.display="flex",l=(await(await fetch(e)).json()).results,l.length>0&&(a.style.display="none")),l.forEach((r,s)=>{n.insertAdjacentHTML("beforeend",c(r,s+1))}),n.querySelectorAll(".btnInfo").forEach(r=>{r.addEventListener("click",()=>{const s=l[parseInt(r.dataset.id)-1];t.innerHTML=$(s);const g=document.querySelector(".modal");g.classList.remove("close"),g.classList.add("open"),$&&document.querySelectorAll(".btnCerrar").forEach(O=>O.addEventListener("click",()=>{v(0)}))})});const h=o.value.toLowerCase();if(h!=null&&h.trim()!==""){const r=l.filter(s=>s.name.first.toLowerCase()===h);if(r.length>0){n.innerHTML="",r.forEach(i=>n.insertAdjacentHTML("beforeend",c(i)));const s=document.querySelectorAll(".btnCerrar");s.forEach(i=>i.classList.toggle("btnOculto")),document.querySelectorAll(".container-btnInfo").forEach(i=>i.classList.add("btnOculto")),s.forEach(i=>i.addEventListener("click",()=>{v(0)}))}else n.innerHTML="",n.innerHTML=`<h2>No se encontraron resultados para el buscador...<br><br>En unos segundos volverás a la página principal</h2> 
        `,v(3e3)}}catch(d){console.error(`Ha ocurrido un error con la Api ${d}`)}},f=document.querySelector("#app"),C="https://randomuser.me/api/?results=200",L=document.createElement("div");L.classList.add("loader-container");const w=document.createElement("div");w.classList.add("loader");L.appendChild(w);const q=document.createElement("header"),E=document.createElement("div");E.classList.add("contenedorSearch");const m=document.createElement("label");m.setAttribute("for","search");m.classList.add("label");const b=document.createElement("input");b.setAttribute("id","input");b.classList.add("input");b.setAttribute("placeholder","Introduce el nombre del usuario");const u=document.createElement("button");u.setAttribute("id","search");u.setAttribute("value","search");u.classList.add("buttonSearch");u.textContent="Buscar";m.appendChild(b);m.appendChild(u);E.appendChild(m);q.appendChild(E);f.appendChild(q);const p=document.querySelector(".input"),P=document.querySelector(".buttonSearch");f.appendChild(L);const I=document.createElement("section");I.classList.add("sectionListado");f.appendChild(I);const y=document.createElement("section");y.classList.add("modal-content");f.appendChild(y);const M=document.querySelector(".sectionListado");window.addEventListener("load",function(e){e&&A(C,M,S,p,y)});P.addEventListener("click",()=>{p.value.includes(" ")&&(p.value=p.value.replace(/\s/g,"")),A(C,M,S,p,y)});
