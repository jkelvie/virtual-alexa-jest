const recipe = require("./recipe");
exports.handler = function (event, context) {
    const stepOne = recipe.stepOne()
    context.succeed({ firstStep: stepOne });
};