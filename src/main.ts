import './index.css';
import { fetchSyllogismTree } from './api/fetchSyllogismTree';
import { renderSyllogism } from './lib/renderSyllogism';

async function init() {
  const rootId = '00000000-0000-0000-0000-000000000002'; // your test root

  const tree = await fetchSyllogismTree(rootId);
  if (!tree) return;

  const mount = document.getElementById('app');
  if (mount) {
   mount.innerHTML = renderSyllogism(tree);
  }
}

init();
// import { getOrCreateUser } from "./auth";
// const user=await getOrCreateUser();

// console.log("Current user:", user);
// const app = document.getElementById("app");
// if (app) {
//   app.textContent = "Your Vite + TypeScript setup is working!";
// }
// import { fetchSyllogismTree } from './api/fetchSyllogismTree';
// import { renderSyllogismTree } from './render/renderSyllogismTree';

// async function init() {
//   const rootId = 'your-root-id-here';
//   const tree = await fetchSyllogismTree(rootId);

//   if (!tree) return;

//   const mount = document.getElementById('app');
//   if (mount) {
//     mount.appendChild(renderSyllogismTree(tree));
//   }
// }

// init();


// import { fetchSyllogismTree } from './api/fetchSyllogismTree';

// async function loadTree() {
//   const rootId = 'your-root-id-here';
//   const tree = await fetchSyllogismTree(rootId);

//   console.log('Nested syllogism tree:', tree);

//   // Example: render into the page
//   const el = document.getElementById('output');
//   if (el) {
//     el.textContent = JSON.stringify(tree, null, 2);
//   }
// }

// loadTree();


// await supabase.auth.signInWithOtp({ email });
// await supabase.auth.signUp({ email, password });
// await supabase.auth.signOut();
