import {vi, describe, expect, test, it} from "vitest";
import { CalculatorService } from "../../src/services/calculator.services";

describe("CalculatorService", () => {

    it("should add tow numbers correctly", async () => {
        // Arrange

        const service = new CalculatorService();
        const a = 5;
        const b = 10;

        //Act

        const result = await service.add(a, b);

        // Asert 
        expect(result).toBe(15);
    })

     it("should sub tow numbers correctly", async () => {
        // Arrange

        const service = new CalculatorService();
        const a = 5;
        const b = 10;

        //Act

        const result = await service.sub(a, b);

        // Asert 
        expect(result).toBe(-5);
    })

     it("should division tow numbers correctly", async () => {
        // Arrange

        const service = new CalculatorService();
        const a = 5;
        const b = 10;

        //Act

        const result = await service.division(a, b);

        // Asert 
        expect(result).toBe(0.5);
    })

     it("should division tow numbers error", async () => {
        // Arrange

        const service = new CalculatorService();
        const a = 5;
        const b = 0;

        //Act
        // Asert 
        await expect(service.division(a,b)).rejects.toThrow("Error, no se puede dividir por cero");
    })

})