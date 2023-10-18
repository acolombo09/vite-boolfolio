import { createRouter, createWebHistory } from "vue-router";

// importazione componenti singole pagine
import HomePage from "./pages/Home.vue";
import ProjectsPage from "./pages/Projects.vue";
import BlogPage from "./pages/Blog.vue";
import ContactsPage from "./pages/Contacts.vue";
// import ProjectsShowPage from "./pages/projects/Show.vue";
// import componente jolly per url sbagliati o sconosciuti richiesti dall'utente
import NotFoundPage from "./pages/NotFound.vue";


// definiamo le rotte
const routes = [
  {
    path: "/", // uri da scrivere nel browser
    name: "home", // nome della rotta da usare per creare un link
    component: HomePage, // componente che ritorna l'html della pagina
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsPage,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundPage,
  },

  // {
  //   // Show di un singolo post
  //   path: "/projects/:id",
  //   name: "projects.show",
  //   component: ProjectsShowPage
  // }
]

// creazione istanza di Router
const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
	// passiamo l'array delle rotte
  routes,
});

// esportiamo l'istanza router per poterla usare dentro main.js
export { router };