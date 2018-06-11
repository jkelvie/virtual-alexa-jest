const va = require("virtual-alexa");
const recipe = require("../recipe");

describe("VirtualAlexa Tests Using Just", function() {
    test("spy works", async () => {
        const spy = jest.spyOn(recipe, "stepOne");

        const handle = require("../index").handler;
        const virtualAlexa = va.VirtualAlexa.Builder()
            .handler("./index.handler")
            .sampleUtterancesFile("./test/SampleUtterances.txt")
            .intentSchemaFile("./test/IntentSchema.json")
            .create();

        const response = await virtualAlexa.launch();
        expect(spy).toHaveBeenCalled();
    });
});
