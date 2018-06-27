module.exports = { contents: "\"use strict\";\nexports.__esModule = true;\nvar sum_1 = require(\"./sum\");\nvar moment = require(\"moment\");\nrequire(\"./main.css\");\nrequire(\"./extra.scss\");\nvar time = moment().format('MMMM Do YYYY, h:mm:ss a');\ndocument.body.innerHTML = \"\\n<div class=\\\"content\\\">\\n    <h1>Welcome to FuseBox!</h1>\\n    <div class=\\\"datetime\\\">\" + time + \"</div>\\n    <div>the result of Calculation is \" + sum_1.calculate(5) + \"</div>\\n</div>\";\n//# sourceMappingURL=index.js.map",
dependencies: ["./sum","moment","./main.css","./extra.scss"],
sourceMap: {},
headerContent: undefined,
mtime: 1530059969828,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
