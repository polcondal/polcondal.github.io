import{p as e,j as t,t as s,a as o,b as n,L as i}from"./index-f6i3iPV7.js";const r=e.div`
    display: flex;
    flex-direction: row wrap;
    justify-content: space-evenly;
    align-items: center;

    width: 90%;
    height: 100%;

    box-sizing: border-box;
`,a=e(i)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    min-width: 450px;
    width: 35vw;
    height: 100%;

    box-sizing: border-box;

    background-color: ${e=>e.theme.content};


    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    transition: background-color 0.35s ease-out,
        box-shadow 0.35s ease-out;

    text-decoration: none;
    color: ${e=>e.theme.text};
`,h=e.img`

    top: 0;
    width: 100%;

    max-height: 15vh;

    object-fit: cover;
    z-index: 0;
`,c=e.h2`
    font-size: 2rem;
    color: ${e=>e.theme.text};
    letter-spacing: 1px;

    padding: 1rem;


    text-align: center;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    transition: color 0.35s ease-out,
        opacity 0.35s ease-out;

    z-index: 1;
`,d=()=>t.jsxs(t.Fragment,{children:[t.jsx(s,{children:t.jsx(o,{children:"Garage Legends Devblog"})}),t.jsxs(r,{children:[t.jsxs(a,{to:"/garagelegends/2",children:[t.jsx(h,{src:n.prowler_bg}),t.jsx(c,{children:"Initial Post - Catch up"})]}),t.jsxs(a,{to:"/garagelegends/1",children:[t.jsx(h,{src:n.prowler_bg}),t.jsx(c,{children:"Initial Post - Catch up"})]})]}),t.jsx("p",{children:"This resulted in breaking down this project into subprojects, each one with it's own purpose, challenge and learning experience."}),t.jsx("p",{children:"I have been working on this vision on and off for the past year, withvarying degrees of intensity, these past five or so months though, progress has been completely on a halt for me to focus on school and work, but now that this phase has ended, I am extremely eager to continue this project."}),t.jsx("p",{children:"And this time, I have decided to share my experiences, thoughts and progress with the world, including some tips, concept art, feedback, and maybe even code snippets :)."}),t.jsx("p",{children:"So far, I have succesfully built a strong backend infrastructure and have been able to consume it with an extremely basic game client."}),t.jsx("p",{children:"In order to help you guys catch up with everything that has happened so far, I will be posting a series of articles about past parts of the project, until we reach the current state it."})]});export{d as GarageLegendsDevblog,d as default};