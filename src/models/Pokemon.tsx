export interface Pokemon{
    name:string;
    id:number;
    abilities:Ability[];
    sprites:{
        other:{
            'official-artwork':{
                front_default:string
            }
        }
    }
}

interface Ability{
    ability:{
        name:string;
        url:string;
    }
}