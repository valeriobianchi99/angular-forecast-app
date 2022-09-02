export class Meteo {
    
    // Properties
    name: string;
    main: Object;
    weather: any[];

    constructor(){
        this.name='';
        this.main= {};
        this.weather=[];
    }
}