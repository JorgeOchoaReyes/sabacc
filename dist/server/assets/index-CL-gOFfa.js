import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { u as useAuth } from "./router--689VTfQ.js";
import "@tanstack/react-query";
import "@tanstack/react-router-ssr-query";
import "@tanstack/react-query-devtools";
import "@tanstack/react-router-devtools";
import "react";
import "firebase/auth";
import "firebase/app";
import "lucide-react";
import "redaxios";
function LandingPage() {
  const {
    user,
    loading
  } = useAuth();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-base-100 flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "navbar-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "dropdown", children: [
          /* @__PURE__ */ jsx("div", { tabIndex: 0, role: "button", className: "btn btn-ghost lg:hidden", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h8m-8 6h16" }) }) }),
          /* @__PURE__ */ jsxs("ul", { tabIndex: 0, className: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { children: "Features" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { children: "Leaderboard" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { children: "How to Play" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "btn btn-ghost text-2xl font-bold gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-secondary tracking-widest uppercase", children: "Sabacc" }),
          /* @__PURE__ */ jsx("span", { className: "badge badge-primary badge-sm", children: "Beta" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "navbar-center hidden lg:flex", children: /* @__PURE__ */ jsxs("ul", { className: "menu menu-horizontal px-1 font-medium tracking-wide", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-primary transition-colors", children: "Features" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-primary transition-colors", children: "Leaderboard" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-primary transition-colors", children: "How to Play" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "navbar-end gap-3", children: loading ? /* @__PURE__ */ jsx("span", { className: "loading loading-spinner text-primary" }) : user ? /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "btn btn-primary shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-transform", children: "Go to Dashboard" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Link, { to: "/login", className: "btn btn-ghost hidden sm:inline-flex", children: "Login" }),
        /* @__PURE__ */ jsxs(Link, { to: "/login", className: "btn btn-secondary shadow-lg shadow-secondary/30 hover:-translate-y-0.5 transition-transform group", children: [
          "Play Now",
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative pt-20 pb-32 overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent -z-10 rounded-b-full blur-3xl opacity-50" }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-12 mb-16 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-block mb-6 relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-secondary/20 blur-xl rounded-full" }),
            /* @__PURE__ */ jsx("span", { className: "relative badge badge-secondary badge-outline border-secondary/50 px-4 py-3 uppercase tracking-widest text-xs font-bold shadow-xl shadow-secondary/10", children: "The Galaxy's Most Notorious Card Game" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight", children: [
            "Master the odds. ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent", children: "Take the pot." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-base-content/80 mb-10 max-w-2xl mx-auto leading-relaxed", children: "Experience the highest stakes in the outer rim. Play classic Corellian Spike Sabacc against smugglers, scoundrels, and high rollers." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/login", className: "btn btn-primary btn-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto px-8", children: "Start Playing Free" }),
            /* @__PURE__ */ jsx("a", { href: "#how-to-play", className: "btn btn-outline btn-lg border-base-content/20 hover:border-base-content/40 hover:bg-base-200 w-full sm:w-auto", children: "View Rules" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 text-sm text-base-content/50 flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex -space-x-2", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx("div", { className: "avatar border-2 border-base-100 rounded-full w-8 h-8", children: /* @__PURE__ */ jsx("img", { src: `https://api.dicebear.com/7.x/identicon/svg?seed=player${i}`, alt: "user", className: "rounded-full bg-base-300" }) }, i)) }),
            /* @__PURE__ */ jsx("span", { className: "ml-2", children: "Join 10,000+ active players today" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto mt-20", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 from-base-100 to-transparent z-10 h-full w-full bottom-0 pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center -space-x-12 sm:-space-x-24 rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out group translate-y-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-32 h-48 sm:w-64 sm:h-96 rounded-2xl bg-gradient-to-br from-base-200 to-base-300 border-4 border-base-content/10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] -rotate-12 group-hover:-rotate-12 group-hover:-translate-x-12 transition-all duration-500 overflow-hidden relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" }),
              /* @__PURE__ */ jsxs("div", { className: "p-2 sm:p-4 h-full flex flex-col justify-between relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-6xl font-black text-error opacity-80", children: "-2" }),
                /* @__PURE__ */ jsx("div", { className: "self-end text-error opacity-80", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-8 h-8 sm:w-16 sm:h-16", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M11.99 22L1.87 11.88C1.49 11.5 1.5 10.88 1.88 10.5L11.99 0.39L22.1 10.5C22.48 10.88 22.49 11.5 22.11 11.88L11.99 22Z", clipRule: "evenodd" }) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-32 h-48 sm:w-64 sm:h-96 rounded-2xl bg-gradient-to-br from-success/20 to-base-300 border-4 border-success/30 shadow-[0_0_60px_rgba(0,_169,_111,_0.2)] z-10 group-hover:-translate-y-8 transition-all duration-500 overflow-hidden relative backdrop-blur-sm -mx-4 sm:mx-0", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-success/20 blur-2xl rounded-full" }),
              /* @__PURE__ */ jsxs("div", { className: "p-2 sm:p-4 h-full flex flex-col justify-between items-center relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] sm:text-sm font-bold tracking-widest uppercase text-success border border-success/30 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 bg-success/10", children: "Sylop" }),
                /* @__PURE__ */ jsx("div", { className: "text-success shadow-success/50 filter drop-shadow-[0_0_15px_rgba(0,169,111,0.5)]", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-16 h-16 sm:w-32 sm:h-32", children: /* @__PURE__ */ jsx("path", { d: "M12 2L15 8H21L16 13L18 20L12 16L6 20L8 13L3 8H9L12 2Z" }) }) }),
                /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-6xl font-black text-success opacity-80", children: "0" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-32 h-48 sm:w-64 sm:h-96 rounded-2xl bg-gradient-to-br from-base-200 to-base-300 border-4 border-base-content/10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rotate-12 group-hover:rotate-12 group-hover:translate-x-12 transition-all duration-500 overflow-hidden relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" }),
              /* @__PURE__ */ jsxs("div", { className: "p-2 sm:p-4 h-full flex flex-col justify-between relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-6xl font-black text-info opacity-80", children: "+2" }),
                /* @__PURE__ */ jsx("div", { className: "self-start text-info opacity-80", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-8 h-8 sm:w-16 sm:h-16", children: /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }) }) })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-base-200 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold tracking-widest text-primary uppercase mb-3", children: "Why Play On Our Network?" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl md:text-4xl font-bold", children: "Standard features for high rollers." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-xl border border-base-content/5 hover:-translate-y-2 transition-transform duration-300", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary/20 rounded-2xl flex justify-center items-center mb-4 text-primary", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-8 h-8", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.723-2.083c.193-.286.392-.57.596-.853l.27-.369-1.832-1.001zm1.47-5.54L9.049 8.35a4.493 4.493 0 00-4.305 1.758 4.433 4.433 0 002.083-2.723c.286-.193.57-.392.853-.596l.369-.27 1.001 1.832C9.563 8.312 9.426 8.399 9.3 8.495z" }) }) }),
            /* @__PURE__ */ jsx("h3", { className: "card-title text-xl", children: "Provably Fair Shuffling" }),
            /* @__PURE__ */ jsx("p", { className: "text-base-content/70", children: "Our quantum RNG ensures every deck is perfectly randomized. No loaded dice or marked cards here." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-xl border border-base-content/5 hover:-translate-y-2 transition-transform duration-300", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-secondary/20 rounded-2xl flex justify-center items-center mb-4 text-secondary", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-8 h-8", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" }) }) }),
            /* @__PURE__ */ jsx("h3", { className: "card-title text-xl", children: "Global Matchmaking" }),
            /* @__PURE__ */ jsx("p", { className: "text-base-content/70", children: "Play against opponents from Coruscant to Tatooine. Find a table with stakes that match your bankroll 24/7." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-xl border border-base-content/5 hover:-translate-y-2 transition-transform duration-300", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-accent/20 rounded-2xl flex justify-center items-center mb-4 text-accent", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-8 h-8", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
            /* @__PURE__ */ jsx("h3", { className: "card-title text-xl", children: "Instant Payouts" }),
            /* @__PURE__ */ jsx("p", { className: "text-base-content/70", children: "When you win the Sabacc pot, your credits are transferred instantly via secure holonet protocols." })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/5" }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Ready to test your luck?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-base-content/70 mb-10 max-w-2xl mx-auto", children: "Create an account now to receive 1,000 free starting credits. The tables are waiting." }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsx(Link, { to: "/login", className: "btn btn-primary btn-lg px-12 shadow-lg shadow-primary/30", children: "Sign Up Now" }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-base-content/50", children: "No deposit required to start playing." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "footer footer-center p-10 bg-base-300 text-base-content rounded-t-3xl mt-auto", children: /* @__PURE__ */ jsxs("aside", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-bold text-2xl tracking-widest uppercase mb-2", children: "Sabacc Network" }),
      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Providing reliable high-stakes entertainment since 2BBY." }),
      /* @__PURE__ */ jsxs("p", { className: "text-base-content/50 mt-4", children: [
        "Copyright © ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " - All right reserved"
      ] })
    ] }) })
  ] });
}
export {
  LandingPage as component
};
