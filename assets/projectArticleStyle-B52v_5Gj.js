import{p as e,C as i,j as t,P as n,a}from"./index-HOfhyFBc.js";const l=e.img`
    position: relative;

    width: 60%;
    object-fit: cover;
    border-radius: 5px;
    z-index: 4;
    transition: transform 0.35s ease-out;
    box-shadow: ${i};

    &:hover {
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`,r=e.div`
    position: relative;
    display: flex;
    flex-flow: row nowrap;

    justify-content: inherit;
    align-items: inherit;

    @media screen and (max-width: 768px) {
        flex-flow: column nowrap;
        gap: 1rem;
    }
`,s=e(n)`
    font-size: 1.5rem;
    height: 100%;
    margin: auto !important;
    font-style: italic;
`,o=e=>t.jsxs(r,{children:[e.text&&"right"!==e.align?t.jsx(s,{children:e.text}):null,t.jsx(l,{src:e.imgSrc,alt:e.imgAlt,loading:"lazy"}),e.text&&"right"===e.align?t.jsx(s,{children:e.text}):null]}),x=e.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: ${e=>"right"===e.align?"flex-end":"left"===e.align?"flex-start":"center"};
    align-items:  ${e=>"right"===e.align?"flex-end":"left"===e.align?"flex-start":"center"};
    text-align: ${e=>e.align||"center"};

    margin: 1rem 0;

    width: 80%;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 90%;
    }

    ${n}, ${a}, ${l} {
    	text-align: ${e=>e.align||"center"};
        align-self: ${e=>"right"===e.align?"flex-end":"left"===e.align?"flex-start":"center"};
        margin: 2rem 0;
    }
`;export{x as A,o as a};