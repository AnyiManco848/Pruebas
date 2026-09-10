import { ICalculatorService } from "./services/interfaces/calculator.interfaces"
import { container } from "./config/container"

// const calculatorService: ICalculatorService = new CalculatorService();

const calculatorService = container.resolve<ICalculatorService>("CalculatorService")


async function main() {
    const result = await calculatorService.add(5,10)
    console.log("Result add:", result)

    const resultsub = await calculatorService.sub(5,10)
    console.log("Result sub:",resultsub)

    const resultmultipli = await calculatorService.multipli(5,10)
    console.log("Result multipli:",resultmultipli)
    
    const resultdivision = await calculatorService.division(5,0)
    console.log("Result division:",resultdivision)
    
} 
main() 

