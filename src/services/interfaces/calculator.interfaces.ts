export interface ICalculatorService{
    add(a: number, b: number): Promise<number>;
    sub(a: number, b: number): Promise<number>;
    multipli(a: number, b: number): Promise<number>;
    division(a: number, b: number): Promise<number>;
}