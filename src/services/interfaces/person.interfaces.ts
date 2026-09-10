export interface Person{
    name : string
    lastName : string
    age : Number

}

export interface FullPerson{
    name : string
    lastName : string
    fullName: string
    age : Number

}

export interface IPersonService{
    CreatePerson(person:Person):Promise<FullPerson> 
}