"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 323:
/***/ ((module) => {

module.exports = require("@mailchimp/mailchimp_marketing");

/***/ }),

/***/ 677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailchimp = __webpack_require__(323);
mailchimp.setConfig({
    apiKey: "0ac0f50a7bae92880a2ca6464042c7c1-us13",
    server: "us13"
});
async function handler(req, res) {
    const { email , name  } = JSON.parse(req.body);
    // const response = await fetch(
    //   "https://us13.api.mailchimp.com/2.0/lists/subscribe.json?apikey=8666dfa2c161d80b38868d63bca783dc-us13&id=90c61ea7f7&email[email]=lancka@francka.pl&merge_vars[FNAME]=Maria&double_optin=false&send_welcome=false"
    // );
    // if (response) {
    //   const json = await response.json();
    //   res.status(200).json({ success: true, data: response });
    // } else {
    //   res.status(400).json({
    //     success: false,
    //   });
    // }
    const response = await mailchimp.lists.addListMember("90c61ea7f7", {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: name
        }
    });
    console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
    res.status(200).json({
        success: true,
        data: response
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(677));
module.exports = __webpack_exports__;

})();