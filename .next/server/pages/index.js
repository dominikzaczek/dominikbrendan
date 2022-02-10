(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,201];
exports.modules = {

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb",
	"button": "Home_button__Zs7A2"
};


/***/ }),

/***/ 393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: external "react-feather"
const external_react_feather_namespaceObject = require("react-feather");
// EXTERNAL MODULE: ./pages/components/newsletter.js
var newsletter = __webpack_require__(422);
;// CONCATENATED MODULE: ./pages/index.js








function Home({ post  }) {
    const [isPost, setIsPost] = external_react_default().useState(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isPost ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-fluid d-flex justify-content-center align-items-center flex-column animate__animated animate__fadeIn",
                style: {
                    backgroundColor: "black",
                    zIndex: "999",
                    position: "absolute",
                    top: "0",
                    minHeight: "100vh",
                    overflow: "scroll"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_namespaceObject.X, {
                        onClick: ()=>setIsPost(false)
                        ,
                        style: {
                            cursor: "pointer"
                        },
                        className: "mt-1 " + (Home_module_default()).button
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-3 ",
                        dangerouslySetInnerHTML: {
                            __html: post.content.rendered
                        }
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container align-items-center",
                style: {
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Dominik Brendan"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "description",
                                content: "The official website for singer and composer Dominik Brendan"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                rel: "icon",
                                href: "/favicon.ico"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "40vh"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "https://hungry-driscoll.77-68-115-165.plesk.page/wp-content/uploads/2022/02/logo-1.png",
                                className: "img-fluid",
                                alt: "Dominik Brendan Logo",
                                style: {
                                    maxWidth: "500px"
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    maxWidth: "500px"
                                },
                                className: "d-flex flex-direction-row justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.instagram.com/dominikbrendan/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_namespaceObject.Instagram, {
                                                size: 33,
                                                className: (Home_module_default()).button
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        style: {
                                            fontWeight: "lighter",
                                            cursor: "pointer"
                                        },
                                        className: "animate__animated animate__flash " + (Home_module_default()).button,
                                        onClick: ()=>setIsPost(true)
                                        ,
                                        children: "What am I doing now?"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                id: "newsletter-button",
                                style: {
                                    fontWeight: "lighter",
                                    cursor: "pointer"
                                },
                                onClick: ()=>{
                                    document.querySelector("#newsletter-button").setAttribute("hidden", "true");
                                    document.querySelector("#newsletter").removeAttribute("hidden");
                                },
                                children: "Sign up to my newsletter →"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "newsletter",
                                className: "animate__animated animate__fade",
                                hidden: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(newsletter["default"], {
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch("https://hungry-driscoll.77-68-115-165.plesk.page/index.php/wp-json/wp/v2/pages/12");
    const post = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            post
        }
    };
}


/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,422], () => (__webpack_exec__(393)));
module.exports = __webpack_exports__;

})();