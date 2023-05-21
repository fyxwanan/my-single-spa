import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication(
  '@single-spa/welcome',
  () => System.import('https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'),
  location => location.pathname === '/'
)

registerApplication({
  name: "@study/sub-react",
  app: () =>
    System.import(
      "@study/sub-react"
    ),
  activeWhen: ["/sub-react"],
});

// registerApplication({
//   name: "@study/navbar",
//   app: () => System.import("@study/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
