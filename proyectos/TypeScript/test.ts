let firstName: string = "Fran";

// firstName = 33;

let aa: any = "any";
aa = 33

let bb: unknown = "unknown";
bb = 33

let Array2: number[] = [1, 2, 3];

// Array2.push("a");

const read: readonly string[]= ["Fran"];

// read.push("fdf")

const car:{marca: string, modelo: string, año:number} = {
    marca: "Ford",
    modelo: "Mustang",
    año: 2020
}

function main(string: string) :void{
    console.log(string);
}

