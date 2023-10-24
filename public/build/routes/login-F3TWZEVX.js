import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-UFMDA3VV.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\layout.tsx"
  );
  import.meta.hot.lastModified = "1698138919572.9783";
}
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen w-full bg-blue-600 font-mono", children }, void 0, false, {
    fileName: "app/components/layout.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/form-field.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\form-field.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\form-field.tsx"
  );
  import.meta.hot.lastModified = "1698145352033.8384";
}
function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {
  },
  error = ""
}) {
  _s();
  const [errorText, setErrorText] = (0, import_react.useState)(error);
  (0, import_react.useEffect)(() => {
    setErrorText(error);
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor, className: "text-blue-600 font-semibold", children: label }, void 0, false, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 37,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { onChange: (e) => {
      onChange(e);
      setErrorText("");
    }, type, id: htmlFor, name: htmlFor, className: "w-full p-2 rounded-xl my-2", value }, void 0, false, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 38,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: errorText || "" }, void 0, false, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/form-field.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(FormField, "uOYBLtFYhSL+iiVZVnYWVm7OeCY=");
_c2 = FormField;
var _c2;
$RefreshReg$(_c2, "FormField");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/login.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1698153551674.9177";
}
function Login() {
  _s2();
  const [action, setAction] = (0, import_react2.useState)("login");
  const [formData, setFormData] = (0, import_react2.useState)({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  const handleInputChange = (event, field) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full flex justify-center items-center flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setAction(action == "login" ? "register" : "login"), className: "absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: action === "login" ? "Sign Up" : "Sign In" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-5xl font-extrabold text-yellow-300", children: "Welcome to Expense Tracker" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-semibold text-slate-300", children: [
      " ",
      action === "login" ? "login now" : "Sign up to get started!",
      " !"
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "rounded-2xl bg-gray-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormField, { htmlFor: "email", label: "Email", value: formData.email, onChange: (e) => handleInputChange(e, "email") }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormField, { htmlFor: "password", label: "Password", type: "password", value: formData.password, onChange: (e) => handleInputChange(e, "password") }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      action !== "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormField, { htmlFor: "firstName", label: "First Name", value: formData.firstName, onChange: (e) => handleInputChange(e, "firstName") }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormField, { htmlFor: "lastName", label: "Last Name", value: formData.lastName, onChange: (e) => handleInputChange(e, "lastName") }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 55,
        columnNumber: 33
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", name: "_action", value: action, className: "rounded-xl mt-2 bg-yellow-300 px-2 py-3 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: action === "login" ? "Sign In" : "Sign Up" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s2(Login, "oOeLxwt/9uvMo/SHJIv3ZqgjW0w=");
_c3 = Login;
var _c3;
$RefreshReg$(_c3, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-F3TWZEVX.js.map
