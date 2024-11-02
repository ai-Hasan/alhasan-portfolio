// tsParticles
//   .load("tsparticles", {
//     fpsLimit: 60,
//     interactivity: {
//       detectsOn: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "bubble",
//           parallax: { enable: false, force: 60, smooth: 10 },
//         },
//         resize: true,
//       },
//       modes: {
//         bubble: {
//           distance: 200,
//           duration: 2,
//           opacity: 0.8,
//           size: 40,
//           speed: 3,
//         },
//         grab: { distance: 400, links: { opacity: 1 } },
//         push: { quantity: 4 },
//         remove: { quantity: 2 },
//         repulse: { distance: 200, duration: 0.4 },
//       },
//     },
//     particles: {
//       move: {
//         distance: 100,
//         direction: "none",
//         enable: true,
//         outMode: "none",
//         random: false,
//         speed: 6,
//         straight: false,
//       },
//       number: { density: { enable: true, area: 800 }, value: 0 },
//       opacity: {
//         animation: { enable: true, minimumValue: 0.5, speed: 1, sync: false },
//         random: false,
//         value: 1,
//       },
//       shape: {
//         type: "char",
//       },
//       size: {
//         animation: { enable: true, minimumValue: 10, speed: 5, sync: false },
//         random: false,
//         value: 16,
//       },
//     },
//     stroke: { color: "#ffffff", width: 1 },
//     retina_detect: true,
//   })
//   .then((container) => {
//     let configs = {
//       "Font Awesome 5 Free": {
//         weight: "900",
//         chars: [
//           { value: "\uf06a", color: "#f00" },
//           { value: "\uf7ba", color: "#ff0" },
//           { value: "\uf3ed", color: "#0ff" },
//           { value: "\uf55f", color: "#0f0" },
//           { value: "\uf013", color: "#00f" },
//         ],
//       },
//       "Font Awesome 5 Brands": {
//         weight: "400",
//         chars: [
//           {
//             value: "\uf179",
//             color: "#fff",
//           },
//           {
//             value: "\uf38b",
//             color: "#f00",
//           },
//           {
//             value: "\uf3b9",
//             color: "#ff0",
//           },
//           {
//             value: "\uf13b",
//             color: "#0f0",
//           },
//           {
//             value: "\uf13b",
//             color: "#00f",
//           },
//         ],
//       },
//     };

//     for (let family in configs) {
//       const obj = configs[family];

//       let weight = obj.weight;
//       let chars = obj.chars;

//       for (let item of chars) {
//         let value = item.value;
//         let color = item.color;
//         let particleOptions = {
//           color: {
//             value: color,
//           },
//           shape: {
//             options: {
//               char: {
//                 fill: true,
//                 font: family,
//                 style: "",
//                 value: value,
//                 weight: weight,
//               },
//             },
//             type: "char",
//           },
//         };

//         let particle = container.particles.addParticle(
//           undefined,
//           particleOptions
//         );

//         console.log(particle);
//       }
//     }
//   });

tsParticles.load("tsparticles", {
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      ondiv: {
        enable: true,
        mode: "bubble",
        type: "rectangle",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 5,
        speed: 3,
        color: ["#ffffff", "#ff7700"],
      },
    },
  },
  particles: {
    color: {
      value: ["#ffa500", "#1254ef"],
    },
    links: {
      color: "random",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      collisions: true,
      direction: "none",
      enable: true,
      out_mode: "bounce",
      random: false,
      speed: 5,
      straight: false,
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
      random: true,
      value: 0.5,
    },
    shape: {
      type: "square",
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 2,
        speed: 1,
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 2,
      },
      value: 4,
    },
  },
  retina_detect: true,
});
