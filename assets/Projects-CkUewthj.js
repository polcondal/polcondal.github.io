import{r as e,j as t,p as o,C as s,l as r,B as n,a as i,P as a,D as d,b as l,S as c,L as m}from"./index-f6i3iPV7.js";const h=o=>{const s=({to:s,children:r,imgSrc:n,imgAlt:i})=>{const[a,d]=e.useState(!1),l=e.useRef();return e.useEffect((()=>{const e=new IntersectionObserver((([e])=>d(e.isIntersecting)),{threshold:.95});return l.current&&e.observe(l.current),()=>{l.current&&e.unobserve(l.current)}}),[]),t.jsxs(o,{ref:l,to:s,className:a?"hover":"",children:[t.jsx(f,{src:n,alt:i,loading:"lazy",style:{top:0,left:0}}),r]})};var r;return s.displayName=`WithIntersectionObserver(${r=o,r.displayName||r.name||"Unnamed Component"})`,s},x="0 1px 2px 1px rgba(0, 0, 0, 0.1)",p=o.div`
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
`,g=o.h2`
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
`,b=o.p`
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
`,f=o.img`
    position: absolute;
    object-fit: cover;

    width: 100%;
    height: 100%;

    top: 50px; // Reference to ProjectCardTitle

    z-index: 1;

    transition: filter 0.35s ease-out;
`,u=o.p`
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
`,j=({$date:e})=>t.jsx(u,{$date:e,children:e}),w=o.p`
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
`,y=({mode:e})=>t.jsx(w,{mode:e,children:"work"===e?"Work Project":"school"===e?"School Project":"Personal Project"}),$=o(m)`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    grid-row: span 2;
    box-sizing: border-box;
    text-decoration: none;

    overflow: hidden;
    box-shadow: ${s};
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
            color: ${r.foreground};
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
`,S=o($)`
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
`,k=o(g)`
    font-size: 1.5rem;
    color: ${e=>e.theme.text};

    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    z-index: 2;
`,v=o(b)`
    font-size: 1.1rem;
    color: ${e=>e.theme.text};
`,z=o($)`
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
`,A=h(S),P=h(z),W=()=>t.jsxs(t.Fragment,{children:[t.jsxs(n,{children:[t.jsx(i,{children:"My Projects"}),t.jsx(a,{children:"This is a list of projects I have worked on, both professional and personal."}),t.jsx(a,{children:"Here you will find devlogs, showcases, and more."}),t.jsx(a,{children:"I update this page regularly with my latest projects and updates on ongoing ones."}),t.jsx(d,{fade:!1})]}),t.jsxs(p,{children:[t.jsxs(A,{to:"/projects/weather-app",imgSrc:l.weatherapp_home,imgAlt:"YourStats web homepage",children:[t.jsxs(g,{children:["Weather App",t.jsx(j,{$date:"May 2024"})]}),t.jsx(b,{children:"A small and optimized Weather App made in NEXT.js"}),t.jsx(y,{mode:"school"})]}),t.jsxs(P,{to:"/projects/yourstats",imgSrc:l.yourstats_index,imgAlt:"YourStats web homepage",children:[t.jsxs(k,{children:["YourStats",t.jsx(j,{$date:"May 2024"})]}),t.jsx(c,{}),t.jsx(v,{children:"A full-stack web application that allows users to track their stats in a variety of games."}),t.jsx(y,{mode:"school"})]}),t.jsxs(A,{to:"/projects/skynet/ocs",imgSrc:l.ocs_index,imgAlt:"OCS Spain website image",children:[t.jsxs(g,{children:["OCS Spain - Website Creation",t.jsx(j,{$date:"March 2024"})]}),t.jsx(b,{children:"A simple vanilla website made for OCS Spain."}),t.jsx(y,{mode:"work"})]}),t.jsxs(A,{to:"/projects/portfolio",imgSrc:l.kxnzen_banner_logo,imgAlt:"A banner of my brand and logo",children:[t.jsxs(g,{children:["My Portfolio (This Page)",t.jsx(j,{$date:"Present"})]}),t.jsx(b,{children:"Some insights on how I built this website."}),t.jsx(y,{mode:"personal"})]}),t.jsxs(P,{to:"/projects/skynet",imgSrc:l.skynet_proj,imgAlt:"SkyNet Worldwide Express ES website image",children:[t.jsxs(k,{children:["SkyNet Worldwide Express - Website Redesign",t.jsx(j,{$date:"Feb 2024"})]}),t.jsx(c,{}),t.jsx(v,{children:"A complete redesign of the SkyNet Worldwide Express ES website that had been last updated back in 2017."}),t.jsx(y,{mode:"work"})]})]}),t.jsxs(a,{style:{textAlign:"center"},children:["Oh, hey, You've reached the end! ",t.jsx("br",{})]})]});export{f as ProjectCardImg,g as ProjectCardTitle,S as StyledProjectCard2,z as StyledProjectCard4,W as default};