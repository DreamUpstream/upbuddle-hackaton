const routes = [
  {
    path: "/",
    component: () => import("layouts/AnonLayout.vue"),
    children: [],
  },
  {
    path: "/dashboard",
    component: () => import("layouts/DashboardLayout.vue"),
    children: [
      {
        path: "/spaces",
        component: () => import("pages/SearchPlacesPage.vue"),
      },
      { path: "/inbox", component: () => import("pages/InboxPage.vue") },
      {
        path: "/contacts",
        component: () => import("src/pages/ContactPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
