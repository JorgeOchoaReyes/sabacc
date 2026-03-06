import { jsx, jsxs } from "react/jsx-runtime";
import { useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { u as useAuth, a as auth } from "./router-BQYUG8IQ.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ArrowLeft } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router-ssr-query";
import "@tanstack/react-query-devtools";
import "@tanstack/react-router-devtools";
import "firebase/app";
import "firebase-admin";
import "firebase-admin/auth";
import "firebase-admin/firestore";
import "firebase-admin/storage";
function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    user
  } = useAuth();
  useEffect(() => {
    if (user) {
      router.navigate({
        to: "/dashboard"
      });
    }
  }, [user, router]);
  const handleGoogleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.navigate({
        to: "/dashboard"
      });
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to sign in with Google.");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "hero min-h-[85vh] bg-base-100", children: /* @__PURE__ */ jsxs("div", { className: "hero-content flex-col w-full max-w-md", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxs("button", { className: "btn btn-primary", onClick: () => router.navigate({
      to: "/"
    }), children: [
      " ",
      /* @__PURE__ */ jsx(ArrowLeft, {}),
      " Back to Home"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold bg-clip-text text-secondary", children: "Welcome Back" }),
      /* @__PURE__ */ jsx("p", { className: "py-4 text-lg opacity-80", children: "Sign in to access your dashboard." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "card shrink-0 w-full shadow-2xl bg-base-200 border border-base-content/10", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
      error && /* @__PURE__ */ jsxs("div", { className: "alert alert-error shadow-lg mb-4 animate-shake", children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "stroke-current shrink-0 h-6 w-6", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: error })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "form-control mt-2", children: /* @__PURE__ */ jsxs("button", { onClick: handleGoogleLogin, disabled: isLoading, className: "btn w-full btn-outline border-base-content/20 hover:border-base-content/40 hover:bg-base-300 text-base-content h-14 flex items-center justify-center gap-3 transition-all", children: [
        isLoading ? /* @__PURE__ */ jsx("span", { className: "loading loading-spinner" }) : /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", fill: "#4285F4" }),
          /* @__PURE__ */ jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }),
          /* @__PURE__ */ jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05" }),
          /* @__PURE__ */ jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })
        ] }),
        "Continue with Google"
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "divider text-xs opacity-50 mt-6 mb-2", children: "SECURE LOGIN" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-xs opacity-60 mt-4 leading-relaxed", children: "By continuing, you agree to our Terms of Service and Privacy Policy. Access is restricted to authorized personnel." })
    ] }) })
  ] }) });
}
export {
  Login as component
};
