export type CarType = {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: 2 | 3 |4 |5 | 6 | 8 | 10 | 12|16
    displcement: number,
    drive: "rwd" |"fwd"|"4wd"|"awd",
    fuel_type: "gas" |"diesel"|"electricity",
    highway_mpg: number,
    make: string,
    model:string,
    transmission: "a"|"m",
    year:number,
}