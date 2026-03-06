import { jsxs, jsx } from "react/jsx-runtime";
import { queryOptions, QueryClient } from "@tanstack/react-query";
import { useRouter, useMatch, rootRouteId, ErrorComponent, Link, useLocation, createRootRouteWithContext, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Gamepad } from "lucide-react";
import axios from "redaxios";
function DefaultCatchBoundary({ error }) {
  const router2 = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  });
  console.error(error);
  return /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [
    /* @__PURE__ */ jsx(ErrorComponent, { error }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
          },
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          children: "Try Again"
        }
      ),
      isRoot ? /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          children: "Home"
        }
      ) : /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          onClick: (e) => {
            e.preventDefault();
            window.history.back();
          },
          children: "Go Back"
        }
      )
    ] })
  ] });
}
function NotFound({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2 p-2", children: [
    /* @__PURE__ */ jsx("div", { className: "text-gray-600 dark:text-gray-400", children: children || /* @__PURE__ */ jsx("p", { children: "The page you are looking for does not exist." }) }),
    /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.history.back(),
          className: "bg-emerald-500 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
          children: "Go back"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "bg-cyan-600 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
          children: "Start Over"
        }
      )
    ] })
  ] });
}
const appCss = "/assets/app--WtsqnG7.css";
const seo = ({
  title,
  description,
  keywords,
  image
}) => {
  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@tannerlinsley" },
    { name: "twitter:site", content: "@tannerlinsley" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...image ? [
      { name: "twitter:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "og:image", content: image }
    ] : []
  ];
  return tags;
};
const firebaseConfig = {
  apiKey: "AIzaSyATHAHDt1RCCqBiBxXdCCq3zE3eEOQVgIE",
  authDomain: "wonderguard-051516-2c7fd.firebaseapp.com",
  projectId: "wonderguard-051516-2c7fd",
  storageBucket: "wonderguard-051516-2c7fd.firebasestorage.app",
  messagingSenderId: "206710874149",
  appId: "1:206710874149:web:abc0c16169b77e7bf75fcc",
  measurementId: "G-ZXK41GBCRV"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const AuthContext = React.createContext({
  user: null,
  loading: true
});
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user2) => {
      setUser(user2);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value: { user, loading }, children });
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === void 0) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
function DashboardWrapper({ children }) {
  const { user, loading } = useAuth();
  const router2 = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (!loading && !user) {
      router2.navigate({ to: "/login" });
    }
  }, [user, loading, router2]);
  const handleLogout = async () => {
    await signOut(auth);
    router2.navigate({ to: "/login" });
  };
  const handleDashboard = async () => {
    router2.navigate({ to: "/dashboard" });
  };
  const handleGame = async () => {
    router2.navigate({ to: "/game" });
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center min-h-screen bg-base-100", children: /* @__PURE__ */ jsx("span", { className: "loading loading-spinner text-primary loading-lg" }) });
  }
  if (!user) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "drawer lg:drawer-open bg-base-200 min-h-[90vh]", children: [
    /* @__PURE__ */ jsx("input", { id: "dashboard-drawer", type: "checkbox", className: "drawer-toggle", checked: isSidebarOpen, onChange: (e) => setIsSidebarOpen(e.target.checked) }),
    /* @__PURE__ */ jsxs("div", { className: "drawer-content flex flex-col min-h-screen", children: [
      /* @__PURE__ */ jsxs("div", { className: "navbar bg-base-100 shadow-sm border-b border-base-200 sticky top-0 z-30", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-none lg:hidden", children: /* @__PURE__ */ jsx("label", { htmlFor: "dashboard-drawer", "aria-label": "open sidebar", className: "btn btn-square btn-ghost", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", className: "inline-block w-6 h-6 stroke-current", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 px-2 mx-2 font-bold text-xl hidden lg:block", children: "Overview" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 px-2 mx-2 font-bold text-xl lg:hidden", children: "Sabacc" }),
        /* @__PURE__ */ jsx("div", { className: "flex-none gap-2", children: /* @__PURE__ */ jsxs("div", { className: "dropdown dropdown-end", children: [
          /* @__PURE__ */ jsx("div", { tabIndex: 0, role: "button", className: "btn btn-ghost btn-circle avatar border border-base-300", children: /* @__PURE__ */ jsx("div", { className: "w-9 rounded-full", children: /* @__PURE__ */ jsx("img", { alt: "User avatar", src: user.photoURL || "https://api.dicebear.com/7.x/identicon/svg?seed=" + user.email }) }) }),
          /* @__PURE__ */ jsxs("ul", { tabIndex: 0, className: "mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200", children: [
            /* @__PURE__ */ jsx("li", { className: "menu-title px-4 py-2 text-xs opacity-70", children: user.displayName || user.email }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { children: "Profile" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { children: "Settings" }) }),
            /* @__PURE__ */ jsx("div", { className: "divider my-0" }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { onClick: handleLogout, className: "text-error", children: "Logout" }) })
          ] })
        ] }) })
      ] }),
      children
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "drawer-side z-40", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "dashboard-drawer", "aria-label": "close sidebar", className: "drawer-overlay" }),
      /* @__PURE__ */ jsxs("div", { className: "menu p-4 w-64 min-h-full bg-base-100 text-base-content border-r border-base-200 flex flex-col pt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 mb-6 text-xl font-bold", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-content", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z", clipRule: "evenodd" }) }) }),
          /* @__PURE__ */ jsx("span", { children: "Sabacc.inc" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "flex-1 flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("li", { className: "menu-title text-xs font-semibold px-2 pb-2", children: "Overview" }),
          /* @__PURE__ */ jsx("li", { className: location.pathname === "/dashboard" ? "active bg-base-200" : "", children: /* @__PURE__ */ jsxs("button", { onClick: handleDashboard, children: [
            /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) }),
            "Dashboard"
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: location.pathname === "/game" ? "active bg-base-200" : "", children: /* @__PURE__ */ jsxs("button", { onClick: handleGame, children: [
            /* @__PURE__ */ jsx(Gamepad, { className: "w-4" }),
            " Game"
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: "menu-title mt-4 text-xs font-semibold px-2 pb-2", children: "Settings" }),
          "``",
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { children: [
            /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
              /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
              /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
            ] }),
            "General Settings"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { children: [
            /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) }),
            "Security"
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto px-2 pt-4 border-t border-base-200", children: /* @__PURE__ */ jsxs("button", { onClick: handleLogout, className: "btn btn-ghost w-full justify-start text-error", children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" }) }),
          "Logout"
        ] }) })
      ] })
    ] })
  ] });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      ...seo({
        title: "Sabacc",
        description: `Sabacc card game`
      })
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" }
    ]
  }),
  errorComponent: (props) => {
    return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(DefaultCatchBoundary, { ...props }) });
  },
  notFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
  component: RootComponent
});
function RootComponent() {
  const location = useLocation();
  return /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(RootDocument, { children: location.pathname === "/login" || location.pathname === "/" ? /* @__PURE__ */ jsx(Outlet, {}) : /* @__PURE__ */ jsx(DashboardWrapper, { children: /* @__PURE__ */ jsx(Outlet, {}) }) }) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { "data-theme": "cyberpunk", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx("main", { className: "min-h-screen", children }),
      /* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" }),
      /* @__PURE__ */ jsx(ReactQueryDevtools, { buttonPosition: "bottom-left" }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$8 = () => import("./login-BHxi9z7V.js");
const Route$9 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./game-BcaFzRlv.js");
const Route$8 = createFileRoute("/game")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const deferredQueryOptions = () => queryOptions({
  queryKey: ["deferred"],
  queryFn: async () => {
    await new Promise((r) => setTimeout(r, 3e3));
    return {
      message: `Hello deferred from the server!`,
      status: "success",
      time: /* @__PURE__ */ new Date()
    };
  }
});
const $$splitComponentImporter$6 = () => import("./deferred-CMNEmDvO.js");
const Route$7 = createFileRoute("/deferred")({
  loader: ({
    context
  }) => {
    context.queryClient.prefetchQuery(deferredQueryOptions());
  },
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./dashboard-DpF4f-Qn.js");
const Route$6 = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./_pathlessLayout-BKuQagRO.js");
const Route$5 = createFileRoute("/_pathlessLayout")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-CL-gOFfa.js");
const Route$4 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const Route$3 = createFileRoute("/api/users")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        console.info("Fetching users... @", request.url);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const list = res.data.slice(0, 10);
        return Response.json(
          list.map((u) => ({ id: u.id, name: u.name, email: u.email }))
        );
      }
    }
  }
});
const $$splitComponentImporter$2 = () => import("./_nested-layout-CzbpeJPs.js");
const Route$2 = createFileRoute("/_pathlessLayout/_nested-layout")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./route-b-CsHX6n6-.js");
const Route$1 = createFileRoute("/_pathlessLayout/_nested-layout/route-b")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./route-a-xd-e2Wm0.js");
const Route = createFileRoute("/_pathlessLayout/_nested-layout/route-a")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const LoginRoute = Route$9.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$a
});
const GameRoute = Route$8.update({
  id: "/game",
  path: "/game",
  getParentRoute: () => Route$a
});
const DeferredRoute = Route$7.update({
  id: "/deferred",
  path: "/deferred",
  getParentRoute: () => Route$a
});
const DashboardRoute = Route$6.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$a
});
const PathlessLayoutRoute = Route$5.update({
  id: "/_pathlessLayout",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const ApiUsersRoute = Route$3.update({
  id: "/api/users",
  path: "/api/users",
  getParentRoute: () => Route$a
});
const PathlessLayoutNestedLayoutRoute = Route$2.update({
  id: "/_nested-layout",
  getParentRoute: () => PathlessLayoutRoute
});
const PathlessLayoutNestedLayoutRouteBRoute = Route$1.update({
  id: "/route-b",
  path: "/route-b",
  getParentRoute: () => PathlessLayoutNestedLayoutRoute
});
const PathlessLayoutNestedLayoutRouteARoute = Route.update({
  id: "/route-a",
  path: "/route-a",
  getParentRoute: () => PathlessLayoutNestedLayoutRoute
});
const PathlessLayoutNestedLayoutRouteChildren = {
  PathlessLayoutNestedLayoutRouteARoute,
  PathlessLayoutNestedLayoutRouteBRoute
};
const PathlessLayoutNestedLayoutRouteWithChildren = PathlessLayoutNestedLayoutRoute._addFileChildren(
  PathlessLayoutNestedLayoutRouteChildren
);
const PathlessLayoutRouteChildren = {
  PathlessLayoutNestedLayoutRoute: PathlessLayoutNestedLayoutRouteWithChildren
};
const PathlessLayoutRouteWithChildren = PathlessLayoutRoute._addFileChildren(
  PathlessLayoutRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  PathlessLayoutRoute: PathlessLayoutRouteWithChildren,
  DashboardRoute,
  DeferredRoute,
  GameRoute,
  LoginRoute,
  ApiUsersRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {})
  });
  setupRouterSsrQueryIntegration({
    router: router2,
    queryClient
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  auth as a,
  deferredQueryOptions as d,
  router as r,
  useAuth as u
};
