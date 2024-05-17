import{p as e,m as t,j as i,L as n,I as o,H as a,K as r,T as s}from"./index-f6i3iPV7.js";const l=e(t.div)`
    position: relative;
    box-sizing: border-box;

    width: 100%;

    height: 43.5vw;
    max-height: 70%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 5em;

    margin: auto;
    overflow: hidden;

    @media (max-width : 768px) {
        height: 100vw;

        padding: 1rem 0.5rem;

    }

    transition: all 0.35s ease-in-out;
`,c=e.div`
    width: 100%;
    max-width: 1300px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${e=>e.theme.text};

    pointer-events: none;
    z-index: 2;

    gap: 5vw;


    @media (max-width : 768px) {
        height: 90%;
        gap: 5vh;
    }
`,d=e.h1`
    position: relative;
    width: 100%;

    text-align :center;
    justify-content: center;

    object-fit: cover;


    font-family: 'Inter', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: ${e=>e.theme.text};
    word-spacing: 8px;
    letter-spacing: 12.5px;


    @media (max-width : 768px) {
        letter-spacing : 1vw;
        font-size: 2rem;
    }
`;e.img`
    width: 100%;

    object-fit: cover;
    position: relative;
    top: -9.5vw;

    background-position: center;
    background-color: transparent;

    backdrop-filter: blur(1px) brightness(1);


    @media (max-width : 768px) {
        top: -17.5vw;
    }
`;const h=e.p`
    font-size: 1.25rem;
    line-height: 1.5;
    text-align: center;
    filter: invert(1);
`,m=e(l)`
    background-color: ${e=>e.theme.invTheme.background};
    font-family: "Kumbh Sans Regular", sans-serif;
`,x=e(d)`
    color: ${e=>e.theme.invTheme.text};
    font-family: "Kumbh Sans Regular", sans-serif;
`;function p(){return i.jsx(m,{children:i.jsxs(c,{children:[i.jsx(x,{children:"About Me"}),i.jsxs(h,{children:["Read more about what I do, who I am and what I am passionate about.",i.jsx("br",{}),"Or get in touch with me."]}),i.jsx(t.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:i.jsx(n,{to:"/about",onClick:()=>window.scrollTo(0,0),children:i.jsx(o,{children:"Read"})})})]})})}function f(){return i.jsxs(i.Fragment,{children:[i.jsx(a,{children:i.jsx("meta",{name:"title",content:"kxnzen - Home"})}),i.jsx(r,{}),i.jsx(s,{title:""}),i.jsx(p,{})]})}export{f as default};