var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/styles.css
var styles_default = "/build/_assets/styles-23VZRPOO.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: styles_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV3("div", { className: "h-screen w-full bg-slate-600", children: /* @__PURE__ */ jsxDEV3("h1", { className: "text-5xl font-bold text-blue-400", children: "Hello world!" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login
});

// app/components/layout.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV4("div", { className: "h-screen w-full bg-blue-600 font-mono", children }, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

// app/components/form-field.tsx
import { useState, useEffect } from "react";
import { Fragment, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {
  },
  error = ""
}) {
  let [errorText, setErrorText] = useState(error);
  return useEffect(() => {
    setErrorText(error);
  }, [error]), /* @__PURE__ */ jsxDEV5(Fragment, { children: [
    /* @__PURE__ */ jsxDEV5("label", { htmlFor, className: "text-blue-600 font-semibold", children: label }, void 0, !1, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV5("input", { onChange: (e) => {
      onChange(e), setErrorText("");
    }, type, id: htmlFor, name: htmlFor, className: "w-full p-2 rounded-xl my-2", value }, void 0, !1, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: errorText || "" }, void 0, !1, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/form-field.tsx",
    lineNumber: 26,
    columnNumber: 12
  }, this);
}

// app/routes/login.tsx
import { useState as useState2 } from "react";
import { Fragment as Fragment2, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Login() {
  let [action, setAction] = useState2("login"), [formData, setFormData] = useState2({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  }), handleInputChange = (event, field) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value
    }));
  };
  return /* @__PURE__ */ jsxDEV6(Layout, { children: /* @__PURE__ */ jsxDEV6("div", { className: "h-full flex justify-center items-center flex-col gap-y-4", children: [
    /* @__PURE__ */ jsxDEV6(
      "button",
      {
        onClick: () => setAction(action == "login" ? "register" : "login"),
        className: "absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
        children: action === "login" ? "Sign Up" : "Sign In"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6("h2", { className: "text-5xl font-extrabold text-yellow-300", children: "Welcome to Expense Tracker" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("p", { className: "font-semibold text-slate-300", children: [
      " ",
      action === "login" ? "login now" : "Sign up to get started!",
      " !"
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("form", { className: "rounded-2xl bg-gray-200 p-6 w-96", children: [
      /* @__PURE__ */ jsxDEV6(
        FormField,
        {
          htmlFor: "email",
          label: "Email",
          value: formData.email,
          onChange: (e) => handleInputChange(e, "email")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 39,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(
        FormField,
        {
          htmlFor: "password",
          label: "Password",
          type: "password",
          value: formData.password,
          onChange: (e) => handleInputChange(e, "password")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 45,
          columnNumber: 11
        },
        this
      ),
      action !== "login" ? /* @__PURE__ */ jsxDEV6(Fragment2, { children: [
        /* @__PURE__ */ jsxDEV6(
          FormField,
          {
            htmlFor: "firstName",
            label: "First Name",
            value: formData.firstName,
            onChange: (e) => handleInputChange(e, "firstName")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 56,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          FormField,
          {
            htmlFor: "lastName",
            label: "Last Name",
            value: formData.lastName,
            onChange: (e) => handleInputChange(e, "lastName")
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 62,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 55,
        columnNumber: 34
      }, this) : null,
      /* @__PURE__ */ jsxDEV6("div", { className: "w-full text-center", children: /* @__PURE__ */ jsxDEV6("button", { type: "submit", name: "_action", value: action, className: "rounded-xl mt-2 bg-yellow-300 px-2 py-3 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: action === "login" ? "Sign In" : "Sign Up" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-GBVXT6RF.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-MLQG6ZEY.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-UFMDA3VV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CTTFVOIO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DLWASLOY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-F3TWZEVX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "bd3cf857", hmr: { runtime: "/build/_shared\\chunk-UFMDA3VV.js", timestamp: 1698153552150 }, url: "/build/manifest-BD3CF857.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
