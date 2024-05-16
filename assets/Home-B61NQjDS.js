import{m as e,j as t,L as i,H as n}from"./react-DNnkrXfw.js";import{p as o,I as r,K as a,T as s}from"./index-UvDYH2bK.js";const l=o(e.div)`
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
`,c=o.div`
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
`,d=o.h1`
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
`;o.img`
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
`;const h=o.p`
    font-size: 1.25rem;
    line-height: 1.5;
    text-align: center;
    filter: invert(1);
`,m=o(l)`
    background-color: ${e=>e.theme.invTheme.background};
    font-family: "Kumbh Sans Regular", sans-serif;
`,x=o(d)`
    color: ${e=>e.theme.invTheme.text};
    font-family: "Kumbh Sans Regular", sans-serif;
`;function p(){return t.jsx(m,{children:t.jsxs(c,{children:[t.jsx(x,{children:"About Me"}),t.jsxs(h,{children:["Read more about what I do, who I am and what I am passionate about.",t.jsx("br",{}),"Or get in touch with me."]}),t.jsx(e.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(i,{to:"/about",onClick:()=>window.scrollTo(0,0),children:t.jsx(r,{children:"Read"})})})]})})}function f(){return t.jsxs(t.Fragment,{children:[t.jsx(n,{children:t.jsx("meta",{name:"title",content:"kxnzen - Home"})}),t.jsx(a,{}),t.jsx(s,{title:""}),t.jsx(p,{})]})}export{f as default};