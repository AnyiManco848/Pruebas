import { Person } from "./interfaces/person.interfaces";

export class PersonService implements PersonService{

    async FullPerson(name: string, lastName: string,): Promise <string> {
        
        return `${name} ${lastName}`;

    }
}