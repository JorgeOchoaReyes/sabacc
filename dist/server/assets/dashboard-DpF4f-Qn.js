import { jsx, jsxs } from "react/jsx-runtime";
function DashboardLayout() {
  return /* @__PURE__ */ jsx("div", { className: "p-6 md:p-8 max-w-7xl mx-auto w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Dashboard" }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-primary btn-sm", children: "Create Report" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-sm border border-base-200", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-base-content/70 font-medium", children: "Total Revenue" }),
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4 text-base-content/50", children: /* @__PURE__ */ jsx("path", { d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: "$45,231.89" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-success font-medium", children: "+20.1%" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-sm border border-base-200", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-base-content/70 font-medium", children: "Subscriptions" }),
          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4 text-base-content/50", children: [
            /* @__PURE__ */ jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
            /* @__PURE__ */ jsx("circle", { cx: "9", cy: "7", r: "4" }),
            /* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: "+2350" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-success font-medium", children: "+180.1%" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-sm border border-base-200", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-base-content/70 font-medium", children: "Sales" }),
          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4 text-base-content/50", children: [
            /* @__PURE__ */ jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M2 10h20" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: "+12,234" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-success font-medium", children: "+19%" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-sm border border-base-200", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-base-content/70 font-medium", children: "Active Now" }),
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4 text-base-content/50", children: /* @__PURE__ */ jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: "+573" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-success font-medium", children: "+201" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 card bg-base-100 shadow-sm border border-base-200", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
        /* @__PURE__ */ jsx("h2", { className: "card-title text-lg font-semibold", children: "Overview" }),
        /* @__PURE__ */ jsx("div", { className: "h-64 w-full flex items-end gap-2 pt-4", children: [40, 70, 45, 90, 65, 55, 80, 40, 30, 60, 85, 50].map((h, i) => /* @__PURE__ */ jsx("div", { className: "flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm", style: {
          height: `${h}%`
        } }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2 text-xs text-base-content/50", children: [
          /* @__PURE__ */ jsx("span", { children: "Jan" }),
          /* @__PURE__ */ jsx("span", { children: "Feb" }),
          /* @__PURE__ */ jsx("span", { children: "Mar" }),
          /* @__PURE__ */ jsx("span", { children: "Apr" }),
          /* @__PURE__ */ jsx("span", { children: "May" }),
          /* @__PURE__ */ jsx("span", { children: "Jun" }),
          /* @__PURE__ */ jsx("span", { children: "Jul" }),
          /* @__PURE__ */ jsx("span", { children: "Aug" }),
          /* @__PURE__ */ jsx("span", { children: "Sep" }),
          /* @__PURE__ */ jsx("span", { children: "Oct" }),
          /* @__PURE__ */ jsx("span", { children: "Nov" }),
          /* @__PURE__ */ jsx("span", { children: "Dec" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "card bg-base-100 shadow-sm border border-base-200", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
        /* @__PURE__ */ jsx("h2", { className: "card-title text-lg font-semibold mb-4", children: "Recent Sales" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-base-content/70 mb-4", children: "You made 265 sales this month." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: [{
          name: "Olivia Martin",
          email: "olivia.martin@email.com",
          amount: "+$1,999.00"
        }, {
          name: "Jackson Lee",
          email: "jackson.lee@email.com",
          amount: "+$39.00"
        }, {
          name: "Isabella Nguyen",
          email: "isabella.nguyen@email.com",
          amount: "+$299.00"
        }, {
          name: "William Kim",
          email: "will@email.com",
          amount: "+$99.00"
        }, {
          name: "Sofia Davis",
          email: "sofia.davis@email.com",
          amount: "+$39.00"
        }].map((sale, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "avatar", children: /* @__PURE__ */ jsx("div", { className: "w-10 rounded-full bg-base-300 grid place-items-center text-sm font-medium", children: sale.name.split(" ").map((n) => n[0]).join("") }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", children: sale.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-base-content/60 truncate", children: sale.email })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: sale.amount })
        ] }, i)) })
      ] }) })
    ] })
  ] }) });
}
export {
  DashboardLayout as component
};
