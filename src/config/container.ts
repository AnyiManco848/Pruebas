import { asClass, createContainer, InjectionMode} from 'awilix';
import { CalculatorService } from '../services/calculator.services';

export const container = createContainer(
    {
        injectionMode : InjectionMode.CLASSIC
    }
);

container.register({
    CalculatorService : asClass(CalculatorService).singleton()
}) 
