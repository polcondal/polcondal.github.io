import{j as e,p as t,C as o,l as s,B as r,a as n,P as i,D as a,b as d,S as c}from"./index-FIHZQoSJ.js";import{r as l,L as m}from"./react-BvwDac9z.js";const h=t=>{const o=({to:o,children:s,imgSrc:r,imgAlt:n})=>{const[i,a]=l.useState(!1),d=l.useRef();return l.useEffect((()=>{const e=new IntersectionObserver((([e])=>a(e.isIntersecting)),{threshold:.95});return d.current&&e.observe(d.current),()=>{d.current&&e.unobserve(d.current)}}),[]),e.jsxs(t,{ref:d,to:o,className:i?"hover":"",children:[e.jsx(f,{src:r,alt:n,loading:"lazy",style:{top:0,left:0}}),s]})};var s;return o.displayName=`WithIntersectionObserver(${s=t,s.displayName||s.name||"Unnamed Component"})`,o},x="0 1px 2px 1px rgba(0, 0, 0, 0.1)",p=t.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.5em;
    padding: 1vw 5vw;
    margin: 5rem 0;

    width: 90%;

    box-sizing: border-box;

    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      padding: 1vw 0;
    }
`,g=t.h2`
    position: absolute;
    top: 0;
    left: 0;

    font-size: 1.3rem;
    color: ${e=>e.theme.text};

    text-align: center;
    padding: 1rem 0;

    width: 100%;
    max-height: 50px;

    background-color: ${e=>e.theme.content};
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    box-shadow: ${x};
    transition: color 0.35s ease-out,
        opacity 0.35s ease-out,
        letter-spacing 0.15s ease;

    box-sizing: border-box;

    z-index: 1;
`,b=t.p`
    position: absolute;
    bottom: 0;
    right: 0;

    font-size: 1rem;
    padding: 0.5rem;

    font-family: "Kumbh Sans Regular", sans-serif;

    color: ${e=>e.theme.text};
    background-color: ${e=>e.theme.background};

    box-sizing: border-box;

    text-align: center;
    box-shadow: ${x};

    transform: translateY(100%);
    transition: color 0.35s ease-out,
        opacity 0.35s ease-out,
        transform 220ms ease-out;

    opacity: 0;
    z-index: 1;
`,f=t.img`
    position: absolute;
    object-fit: cover;

    width: 100%;
    height: 100%;

    top: 50px; // Reference to ProjectCardTitle

    z-index: 1;

    transition: filter 0.35s ease-out;
`,u=t.p`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    right: 0;
    top: 0;

    font-size: 1rem;
    letter-spacing: 0.5px;

    padding: 1vw;
    min-width: 8em;
    min-height: 56px;

    color: ${e=>e.theme.text};

    text-align: center;
    box-sizing: border-box;

    transition: transform 220ms ease-out, color 250ms ease-out;
    z-index: 2;
`,j=({$date:t})=>e.jsx(u,{$date:t,children:t}),w=t.p`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    left: 0;
    bottom: 0;

    font-size: 14px;
    letter-spacing: 0.5px;

    padding: 0.75em;
    min-width: 9em;

    ${e=>"work"===e.mode?"background-color: #ffbaba; color: #ffbaba;":"school"===e.mode?"background-color: #baffc9; color: #baffc9;":"background-color: #c2d1ff; color: #c2d1ff;"};

    text-align: center;
    box-sizing: border-box;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);

    transform: translateY(40%);
    transition: transform 220ms ease-out, color 250ms ease-out;

    z-index: 2;
`,y=({mode:t})=>e.jsx(w,{mode:t,children:"work"===t?"Work Project":"school"===t?"School Project":"Personal Project"}),$=t(m)`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    grid-row: span 2;
    box-sizing: border-box;
    text-decoration: none;

    overflow: hidden;
    box-shadow: ${o};
    font-family: "Kumbh Sans Regular", sans-serif;

    width: 100%;
    min-height: 37vh;
    height: 100%;
    max-height: 100%;

    transition: background-color 0.35s ease-out,
        color 0.35s ease-out,
        transform 0.1s ease-out;

    contain: content;
    z-index: 1;

    &.hover,
    &:hover {
        transform: scale(1.01);

        ${b} {
            opacity: 1;
            transform: translateY(0);

        }

        ${w} {
            color: ${s.foreground};
            transform: translateY(0);
        }

        ${f} {
            filter: brightness(0.8);
        }

        ${g} {
            letter-spacing: 1px;
        }
    }

    &:active {
        transform: scale(0.98);
    }
`,S=t($)`
    padding: 2rem;
    grid-row: span 2;

    background-color: ${e=>e.theme.content};

    @media (max-width: 768px) {
        grid-column: span 2;
    }

    ${g} {
        text-align: center;
    }

    ${b} {
        min-width: 60%;
        max-width: 60%;
    }
`,k=t(g)`
    font-size: 1.5rem;
    color: ${e=>e.theme.text};

    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    z-index: 2;
`,v=t(b)`
    font-size: 1.1rem;
    color: ${e=>e.theme.text};
`,z=t($)`
    min-height: 60vh;
    padding: 2rem;

    grid-column: span 2;
    grid-row: span 2;

    background-color: ${e=>e.theme.content};

    ${k} {
        text-align: center;
    }

    ${b} {
        min-width: 80%;
        max-width: 80%;
    }
`,A=h(S),P=h(z),W=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"My Projects"}),e.jsx(i,{children:"This is a list of projects I have worked on, both professional and personal."}),e.jsx(i,{children:"Here you will find devlogs, showcases, and more."}),e.jsx(i,{children:"I update this page regularly with my latest projects and updates on ongoing ones."}),e.jsx(a,{fade:!1})]}),e.jsxs(p,{children:[e.jsxs(A,{to:"/projects/weather-app",imgSrc:d.weatherapp_home,imgAlt:"YourStats web homepage",children:[e.jsxs(g,{children:["Weather App",e.jsx(j,{$date:"May 2024"})]}),e.jsx(b,{children:"A small and optimized Weather App made in NEXT.js"}),e.jsx(y,{mode:"school"})]}),e.jsxs(P,{to:"/projects/yourstats",imgSrc:d.yourstats_index,imgAlt:"YourStats web homepage",children:[e.jsxs(k,{children:["YourStats",e.jsx(j,{$date:"May 2024"})]}),e.jsx(c,{}),e.jsx(v,{children:"A full-stack web application that allows users to track their stats in a variety of games."}),e.jsx(y,{mode:"school"})]}),e.jsxs(A,{to:"/projects/ocs",imgSrc:d.ocs_index,imgAlt:"OCS Spain website image",children:[e.jsxs(g,{children:["OCS Spain - Website Creation",e.jsx(j,{$date:"March 2024"})]}),e.jsx(b,{children:"A simple vanilla website made for OCS Spain."}),e.jsx(y,{mode:"work"})]}),e.jsxs(A,{to:"/projects/portfolio",imgSrc:d.kxnzen_banner_logo,imgAlt:"A banner of my brand and logo",children:[e.jsxs(g,{children:["My Portfolio (This Page)",e.jsx(j,{$date:"Present"})]}),e.jsx(b,{children:"Some insights on how I built this website."}),e.jsx(y,{mode:"personal"})]}),e.jsxs(P,{to:"/projects/skynet",imgSrc:d.skynet_proj,imgAlt:"SkyNet Worldwide Express ES website image",children:[e.jsxs(k,{children:["SkyNet Worldwide Express - Website Redesign",e.jsx(j,{$date:"Feb 2024"})]}),e.jsx(c,{}),e.jsx(v,{children:"A complete redesign of the SkyNet Worldwide Express ES website that had been last updated back in 2017."}),e.jsx(y,{mode:"work"})]})]}),e.jsxs(i,{style:{textAlign:"center"},children:["Oh, hey, You've reached the end! ",e.jsx("br",{})]})]});export{f as ProjectCardImg,g as ProjectCardTitle,S as StyledProjectCard2,z as StyledProjectCard4,W as default};