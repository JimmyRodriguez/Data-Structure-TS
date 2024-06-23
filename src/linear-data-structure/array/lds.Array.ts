

export class ARRAY {
    // Array of numbers
    private oddNumbers: number[] = [1,3,5,7,9];
    // Array of strings
    private cities: string[];
    // Generic array type
    private names: Array<string>;
    // Mixed typed array
    private mixedArray: (string | number)[];
    

    constructor() {
        //this.oddNumbers = [1,3,5,7,9]
        this.cities = ["Amsterdam", "London", "Istanbul"];
        this.names = ["Hermione", "Ron", "Harry"];
        this.mixedArray  = ["Dumbledore", 3, "Severus Snape", 7];
    }

    public getOddNumbers(){
        console.log("odd",this.getOddNumbers);

        return this.oddNumbers;
    }

    public getCities(){
        return this.cities;
    }

    public getNames(){
        return this.names;
    }

    public getMixedArray(){
        return this.mixedArray;
    }
}

