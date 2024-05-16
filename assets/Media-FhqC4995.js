import{j as e}from"./react-DNnkrXfw.js";import{p as s}from"./index-UvDYH2bK.js";const i=s.div`
    position: absolute;
    width: 100%;
    top: 75vh; // Space for the video to render in

    background-color: #222;
    grid-auto-columns: 25%;
    grid-auto-rows: 300px;

    z-index: 1;

    // Fade effect at the top
    &:before {
        content: "";
        position: absolute;
        top: -250px;
        left: 0;
        right: 0;
        height: 250px; // Adjust this to change the height of the fade effect
        background: linear-gradient(to top, #222, transparent);
        pointer-events: none; // So it doesn't interfere with clicking

        opacity: 0.85;
        z-index: 0;
    }
`,t=s.div`
    position: absolute;
    top: -75px; // Hide the popup controls from youtube
    left: 0;
    right: 0;
    bottom: 0;

    max-width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;

    pointer-events: none;
    z-index: -1;
`,r=s.iframe`
    border: 0px;
    border-style: none;

    max-width: 100%;
    min-width: 100%;
`,n=s.div`
    padding: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    justify-items: space-evenly;
    z-index: 1;
`,l=s.div`
    position: absolute;
    top: -25vh; // Space for the video to render in

    display: flex;
    width: 100%;
    text-align: center;
    justify-self: center;
    justify-content: center;

    color: white;
    font-family: 'Raleway', sans-serif;
    font-weight: 0;
    letter-spacing: 2px;
    font-size: 24px;
`,a=s.div`
    padding: 1rem;

    display: grid;
    gap: 1vw;

    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-end: 8;

    display: grid;

    grid-template-columns: repeat(auto-fit,
        minmax(min(100%/3,
        max(300px, 100%/4)),
        1fr));

    grid-template-rows: repeat(auto-fit,
        minmax(300px, 320px));
`,o=s.img`
    display: flex;
    justify-content: center;

    object-fit: cover;
    width: 100%;
    height: 100%;

    z-index: -2;

    filter: saturate(0.69);

    transition: all 450ms;
`,c=s.p`
    position: relative;
    text-shadow: 0px 1px 5px rgb(0, 0, 0);
    padding-left: 5px;
    font-family: 'Poppins', sans-serif;
    /* Ajustem el margin per a que quedi bé amb la imatge */
    margin-top: -30px;
    margin-left: 0.5%;

    z-index: 1;

    color: white;
    letter-spacing: 1px;

    transition: all 450ms;
`,d=s.p`
    position: relative;
    text-shadow: 0px 1px 4px rgb(0, 0, 0);
    padding-left: 5px;
    font-family: 'Poppins', sans-serif;
    margin-top: -55px;
    margin-left: 0.5%;

    z-index: 1;
    color: white;
    letter-spacing: 2px;

    transition: all 450ms;
`,x=s.div`
    opacity: 0;
    height: auto;
    width: 100%;
    transition: transform 450ms ease, all 450ms;
    overflow: hidden;

    transform: scale(1);


    &:hover {
        transform: scale(1.05);
        z-index: 2;


        ${c} {
            font-size: 18px;
            letter-spacing: 2px;
        }

        ${d} {
            font-size: 18px;
            letter-spacing: 2px;
        }

        ${o} {
            filter: saturate(1);
        }

    }
`,h=s.footer`
    background-color: rgb(36, 36, 36), 0.6;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    z-index: 1;
`,m=s.p`
    font-family: 'Poppins', sans-serif;
    color: white;
    letter-spacing: 2px;
    font-size: 12px;
    z-index: 1;
`;function p(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"A story of passion, love and dedication."}),e.jsx(t,{children:e.jsx(r,{width:"100%",height:"100%",src:"https://www.youtube.com/embed/xZR9_C09G2k?autoplay=1&mute=1&controls=0&loop=1&list=PLOVnTjOl-zywuswYBCQA_F0tyXiMXMlbK&showinfo=0&rel=0",allowFullScreen:!0})}),e.jsxs(i,{children:[e.jsxs(n,{children:[e.jsx("p",{children:"Watch the full experiences on YouTube:"}),e.jsx("p",{children:e.jsx("a",{href:"\r\n                        https://www.youtube.com/@kxnzen_pole2988/videos",children:e.jsx("img",{src:"./img/ico/yt.svg",alt:"",width:70,height:70})})})]}),e.jsxs(a,{children:[e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/lambo.jpg",alt:""}),e.jsx(c,{children:"Wild Watermelon"}),e.jsx(d,{children:"#FE677EAA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/growler.jpg",alt:""}),e.jsx(c,{children:"Smooth Blackberry Tart"}),e.jsx(d,{children:"#563440AA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/custom.jpg",alt:""}),e.jsx(c,{children:"Passion Candy Red"}),e.jsx(d,{children:"#DA0037AA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/obeyf.jpg",alt:""}),e.jsx(c,{children:"Faux-Black Olive"}),e.jsx(d,{children:"#40393DAA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/dominator asp.jpg",alt:""}),e.jsx(c,{children:"Pastel Reddish Pink"}),e.jsx(d,{children:"#FF6A7CAA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/rsx.jpg",alt:""}),e.jsx(c,{children:"Scarborough Variant"}),e.jsx(d,{children:"#7D9491AA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/r200.jpg",alt:""}),e.jsx(c,{children:"Mondrian Blue Variant"}),e.jsx(d,{children:"#0F4B88AA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/rxfd.jpg",alt:""}),e.jsx(c,{children:"Honeysuckle Green"}),e.jsx(d,{children:"#EAE068AA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/pigalle.jpg",alt:""}),e.jsx(c,{children:"Mojo Orange"}),e.jsx(d,{children:"#C84B31AA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/jester rr.jpg",alt:""}),e.jsx(c,{children:"Pale Copper"}),e.jsx(d,{children:"#DA8A6DAA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/penumbra.jpg",alt:""}),e.jsx(c,{children:"Cucumber Ice"}),e.jsx(d,{children:"#CED8A1AA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/s13.jpg",alt:""}),e.jsx(c,{children:"Folkstone Variant"}),e.jsx(d,{children:"#6B6360AA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/schlagen.jpg",alt:""}),e.jsx(c,{children:"Brown Rose"}),e.jsx(d,{children:"#AD736fAA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/coquette.jpg",alt:""}),e.jsx(c,{children:"Thatch Brown"}),e.jsx(d,{children:"#AE9293AA"})]}),e.jsxs(x,{className:"item",children:[e.jsx(o,{src:"img/thumbs/growler2.jpg",alt:""}),e.jsx(c,{children:"Portage Blue"}),e.jsx(d,{children:"#88ABE6AA"})]})]}),e.jsx("div",{children:e.jsx(h,{children:e.jsx(m,{children:"© kxnzen_.media | 2019 - 2023"})})})]})]})}export{p as default};