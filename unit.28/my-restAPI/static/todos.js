$('.delete-todo').click(deleteTodo)

async function deleteTodo() {
  const id = $(this).data('id')
  await axios.delete(`/API/todos/${id}`)
  $(this).parent().remove()
}




// class Node {
//     construtor(val, next=null){
//         this.val = val;
//         this.next = next;
//     }
// }

// const firstPage = 
// new Node('google.com', 
//     new Node('reddit.com', 
//          new Node('amaozon.com')));     
// class LinkedList {
//   constructor(vals = []) {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;

//     for (let val of vals) this.push(val);
//   }
// }
// const history = new LinkedList();
// history.head = fisrtPage;

class Node {
    construtor(val, next=null){
        this.val = val;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    travers() {
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    find(val) {
        let curentNode = this.head;
        while(curentNode){
            if(curentNode.val === val) return true;
            curentNode = curentNode.next;
        }
        return false;
    }
    append(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
    }

  }

const firstPage = 
new Node('google.com', 
    new Node('reddit.com', 
         new Node('amaozon.com'))); 

  const history = new LinkedList();
  history.head = fisrtPage;









