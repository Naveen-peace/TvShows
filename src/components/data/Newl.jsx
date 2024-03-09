

// function Newl() {

    
// const syncPointer = ({x: pointerX, y: pointerY}) =>{
//     const x= pointerX.toFixed(2)
//     const y= pointerY.toFixed(2)
//     const xp =(pointerX / window.innerWidth).toFixed(2)
//     const yp =(pointerY / window.innerHeight).toFixed(2)
//     document.documentElement.style.setProperty('--x', x)
//     document.documentElement.style.setProperty('--xp', xp)
//     document.documentElement.style.setProperty('--y', y)
//     document.documentElement.style.setProperty('--yp', yp)

  
//   }
//   document.body.addEventListener('pointermove',syncPointer)

  
//     return (
//         <div>Newl</div>
//     )
// }

// export default Newl
// .controls{
//     position: fixed;
//     top: 2rem;
//     right: 2rem;
//     }
//     button{
//         border-radius: 1rem;
//         text-transform: uppercase;
//         font-weight: bold;
//         letter-spacing: 0.1;
//         background: var(--bg);
//         border: 4px solid transparent;
//         box-shadow: 0 1px hsl(0 0% 100% / 0.15)inset;
//         cursor: pointer;
//         background: linear-gradient(var(--bg),var(--bg)padding-box,var(--glow)),
//         linear-gradient(black,black)border-box;
//         transition: background-size 0.24s;
//         touch-action: none;
//         position: relative;
//         padding: 1rem 2rem;
//     }
//     button::before{
//         content: "";
//         position: absolute;
//         inset: 0;
//         box-shadow: 0 1px hsl(0 0% 100% / 0.15)inset; 
//         background: var(--bg);
//         z-index: 2;
//         border-radius: 1rem;
    
//     }
//     button span{
//         background-color: var(--glow),black;
//         background-clip: text;
//         color: transparent;
//         height: 100%;
//         width: 100%;
//         z-index: 2;
//         position: relative;
//         inset: 0;
//     }
//     :root:has(button:active){
//         --size:300px;
//     }
//     :root{
//         --x: 0;
//         --y: 0;
//         --xp: 0;
//         --yp: 0;
//         --hue: cal(0 + (var(--xp) * 500));
//         --bg: hsl(0 0% 10%);
//         --size: 100px;
//         --glow: radial-gradient(
//             50% 50% at center,
//             hsl(var(--hue) 80% 85%),
//             hsl(var(--hue) 80% 70%),
//             transparent
//         )
//         calc((var(--x) * 1px) - (var(--size) * 0.5))
//         calc((var(--y) * 1px) - (var(--size) * 0.5)) / var(--size) var(--size) no-repeat fixed
//     }
//     button::after{
//         content: "";
//         position: absolute;
//         inset: -4px;
//         filter: blur(20px);
//         border: 4px solid transparent;
//         background: var(--glow);
//         border-radius: 1rem;
//     }