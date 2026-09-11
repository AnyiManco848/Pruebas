"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const calculator_services_1 = require("../../src/services/calculator.services");
(0, vitest_1.describe)("CalculatorService", () => {
    (0, vitest_1.it)("should add tow numbers correctly", async () => {
        // Arrange
        const service = new calculator_services_1.CalculatorService();
        const a = 5;
        const b = 10;
        //Act
        const result = await service.add(a, b);
        // Asert 
        (0, vitest_1.expect)(result).toBe(15);
    });
    (0, vitest_1.it)("should sub tow numbers correctly", async () => {
        // Arrange
        const service = new calculator_services_1.CalculatorService();
        const a = 5;
        const b = 10;
        //Act
        const result = await service.sub(a, b);
        // Asert 
        (0, vitest_1.expect)(result).toBe(-5);
    });
    (0, vitest_1.it)("should division tow numbers correctly", async () => {
        // Arrange
        const service = new calculator_services_1.CalculatorService();
        const a = 5;
        const b = 10;
        //Act
        const result = await service.division(a, b);
        // Asert 
        (0, vitest_1.expect)(result).toBe(0.5);
    });
    (0, vitest_1.it)("should division tow numbers error", async () => {
        // Arrange
        const service = new calculator_services_1.CalculatorService();
        const a = 5;
        const b = 0;
        //Act
        // Asert 
        await (0, vitest_1.expect)(service.division(a, b)).rejects.toThrow("Error, no se puede dividir por cero");
    });
});
//# sourceMappingURL=calculator.service.spec.js.map