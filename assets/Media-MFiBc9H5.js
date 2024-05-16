import{p as e,j as s}from"./index-FIHZQoSJ.js";import"./react-BvwDac9z.js";const i=e.div`
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
`,t=e.div`
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
`,r=e.iframe`
    border: 0px;
    border-style: none;

    max-width: 100%;
    min-width: 100%;
`,n=e.div`
    padding: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    justify-items: space-evenly;
    z-index: 1;
`,l=e.div`
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
`,a=e.div`
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
`,o=e.img`
    display: flex;
    justify-content: center;

    object-fit: cover;
    width: 100%;
    height: 100%;

    z-index: -2;

    filter: saturate(0.69);

    transition: all 450ms;
`,c=e.p`
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
`,d=e.p`
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
`,x=e.div`
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
`,h=e.footer`
    background-color: rgb(36, 36, 36), 0.6;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    z-index: 1;
`,m=e.p`
    font-family: 'Poppins', sans-serif;
    color: white;
    letter-spacing: 2px;
    font-size: 12px;
    z-index: 1;
`;function p(){return s.jsxs(s.Fragment,{children:[s.jsx(l,{children:"A story of passion, love and dedication."}),s.jsx(t,{children:s.jsx(r,{width:"100%",height:"100%",src:"https://www.youtube.com/embed/xZR9_C09G2k?autoplay=1&mute=1&controls=0&loop=1&list=PLOVnTjOl-zywuswYBCQA_F0tyXiMXMlbK&showinfo=0&rel=0",allowFullScreen:!0})}),s.jsxs(i,{children:[s.jsxs(n,{children:[s.jsx("p",{children:"Watch the full experiences on YouTube:"}),s.jsx("p",{children:s.jsx("a",{href:"\r\n                        https://www.youtube.com/@kxnzen_pole2988/videos",children:s.jsx("img",{src:"./img/ico/yt.svg",alt:"",width:70,height:70})})})]}),s.jsxs(a,{children:[s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/lambo.jpg",alt:""}),s.jsx(c,{children:"Wild Watermelon"}),s.jsx(d,{children:"#FE677EAA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/growler.jpg",alt:""}),s.jsx(c,{children:"Smooth Blackberry Tart"}),s.jsx(d,{children:"#563440AA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/custom.jpg",alt:""}),s.jsx(c,{children:"Passion Candy Red"}),s.jsx(d,{children:"#DA0037AA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/obeyf.jpg",alt:""}),s.jsx(c,{children:"Faux-Black Olive"}),s.jsx(d,{children:"#40393DAA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/dominator asp.jpg",alt:""}),s.jsx(c,{children:"Pastel Reddish Pink"}),s.jsx(d,{children:"#FF6A7CAA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/rsx.jpg",alt:""}),s.jsx(c,{children:"Scarborough Variant"}),s.jsx(d,{children:"#7D9491AA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/r200.jpg",alt:""}),s.jsx(c,{children:"Mondrian Blue Variant"}),s.jsx(d,{children:"#0F4B88AA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/rxfd.jpg",alt:""}),s.jsx(c,{children:"Honeysuckle Green"}),s.jsx(d,{children:"#EAE068AA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/pigalle.jpg",alt:""}),s.jsx(c,{children:"Mojo Orange"}),s.jsx(d,{children:"#C84B31AA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/jester rr.jpg",alt:""}),s.jsx(c,{children:"Pale Copper"}),s.jsx(d,{children:"#DA8A6DAA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/penumbra.jpg",alt:""}),s.jsx(c,{children:"Cucumber Ice"}),s.jsx(d,{children:"#CED8A1AA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/s13.jpg",alt:""}),s.jsx(c,{children:"Folkstone Variant"}),s.jsx(d,{children:"#6B6360AA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/schlagen.jpg",alt:""}),s.jsx(c,{children:"Brown Rose"}),s.jsx(d,{children:"#AD736fAA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/coquette.jpg",alt:""}),s.jsx(c,{children:"Thatch Brown"}),s.jsx(d,{children:"#AE9293AA"})]}),s.jsxs(x,{className:"item",children:[s.jsx(o,{src:"img/thumbs/growler2.jpg",alt:""}),s.jsx(c,{children:"Portage Blue"}),s.jsx(d,{children:"#88ABE6AA"})]})]}),s.jsx("div",{children:s.jsx(h,{children:s.jsx(m,{children:"© kxnzen_.media | 2019 - 2023"})})})]})]})}export{p as default};