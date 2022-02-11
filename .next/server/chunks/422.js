"use strict";
exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Newsletter = ()=>{
    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const [sent, setSent] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const subscribeUser = async (e)=>{
        e.preventDefault();
        setSent(true);
        const response = await fetch("./api/hello", {
            method: "POST",
            body: JSON.stringify({
                email,
                name
            })
        });
        if (response.ok) {
            const json = await response.json();
            console.log(json);
            if (json.success === true) {
                setMessage("You've been subscribed");
            } else {
                setMessage("There was an error!");
            }
        }
    };
    if (sent) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !message ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: "animate__animated animate__flash animate__infinite infinite",
            children: "Give me a second!"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: "animate__animated animate__fadeIn",
            children: message
        })
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: subscribeUser,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "form-control",
                style: {
                    maxWidth: "20em",
                    marginTop: 10
                },
                type: "email",
                placeholder: "Email",
                value: email,
                onChange: (e)=>setEmail(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "form-control animate__animated animate__fadeIn",
                style: {
                    maxWidth: "20em",
                    marginTop: 10
                },
                type: "text",
                placeholder: "Your name :)",
                hidden: !email ? true : false,
                value: name,
                onChange: (e)=>setName(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn animate__animated animate__fadeIn",
                type: "submit",
                style: {
                    color: "white",
                    borderColor: "white",
                    border: "1px dotted",
                    marginTop: "1em"
                },
                hidden: !name ? true : false,
                children: "Sign me up!"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Newsletter);


/***/ })

};
;