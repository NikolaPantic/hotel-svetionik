export const THEME_KEY = "svetionik-theme";

/** Postavlja temu pre prvog iscrtavanja — bez treptanja. */
export const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t}catch(e){d.dataset.theme="light"}try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("rv-js")}}catch(e){}try{if(!sessionStorage.getItem("sv-intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("intro");sessionStorage.setItem("sv-intro","1");setTimeout(function(){d.classList.remove("intro")},2600)}}catch(e){}})();`;
