// adjacency list

class PersonNode{
    constructor(name, adjacent= new Set()){
        this.name = name;
        this.adjacent = adjacent;
    }
}

class FriendGraph {
    constructor(){
        this.nodes = new Set();
        // we are storing all nodes in one set
    }
    addPerson(node){
        this.nodes.add(node)
    }
    addPeople(peopleList){
        for(let node of peopleList){
            this.addPerson(node)
        }
    }
    setFirends(person1,person2){
        person1.adjacent.add(person2)
        person2.adjacent.add(person1)
    }
}



const homer = new PersonNode('Homer Simpson')
const marge = new PersonNode('Marge Simpson')
const magggie = new PersonNode('Maggie Simpson')
homer.adjacent.add(marge)
marrge.adjacent.add(homer)
magggie.adjacent.add(marge)
magggie.adjacent.add(homer)
homer.adjacent.add(magggie)
marrge.adjacent.add(magggie)

// we are adding connections with the add to our set and our list shows adjacent connections, it sucks to do this each time so we will create a method instead
















