class Bottle{

    constructor(length, height, color){
        this.length = length
        this.height = height
        this.color = color
    }
    
    display(){
        return `the lenght of the bottle is ${this.length}`
    }

}

const waterbottle_1 = new Bottle('20in', '40in', 'orange')
const waterbottle_2 = new Bottle('20in', '40in', 'orange')
const waterbottle_3 = new Bottle('20in', '40in', 'orange')
const waterbottle_4 = new Bottle('20in', '40in', 'orange')

let array1 = [10,4,5,2,7,23,15]

array1.sort((a,b) => a - b);






