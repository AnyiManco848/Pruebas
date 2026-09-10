import { ifError } from "node:assert";
import { ICalculatorService } from "./interfaces/calculator.interfaces"
import { error } from "node:console";


export class CalculatorService implements ICalculatorService {

    async add(a: number, b: number): Promise<number> {
        return a + b;
    
    }
    async sub(a: number, b: number): Promise<number> {
        return a - b;
    
    }
    async multipli(a: number, b: number): Promise<number> {
        return a * b;
    
    }
    async division(a: number, b: number): Promise<number> {
        if ( b === 0 ){

            throw new Error("Error, no se puede dividir por cero")
        }
       
        return a / b;
    
    }


}