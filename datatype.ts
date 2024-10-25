import { Url } from "url"

export interface Signup{
    name:string,
    password:string,
    email:string
}
export interface Login{
    password:string,
    email:string
}

export interface Products{
    name:string,
    price:number,
    category:string,
    description:string,
    image:string,
    id:number

}