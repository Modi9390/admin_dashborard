(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){document.body.appendChild(function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("custom-div");const n=function(){const e=document.createElement("ul");return["Home","Menu","Contact"].forEach((t=>{const n=document.createElement("li"),d=document.createElement("a");d.innerText=t,d.href="#",n.appendChild(d),e.appendChild(n)})),e}();return t.appendChild(n),e.appendChild(t),function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("grid-container");const n=document.createElement("div");n.innerText="Grid Item 1",n.classList.add("item");const d=document.createElement("div");d.innerText="Grid Item 2",d.classList.add("item");const c=document.createElement("div");c.innerText="Grid Item 3",c.classList.add("item3"),t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t)}(),function(){const e=new Image;e.src="rest.jpg",e.alt="Description of the image",document.getElementById("content").appendChild(e)}(),e}())}))})();