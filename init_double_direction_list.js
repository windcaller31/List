function Node(element){
  this.element = element;
  this.next = null;
  this.previous = null;
}

var linked_list =  function (){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;

  function find(item){
    var curr = this.head;
    while(curr!=null){
      if(curr.element == item){
        return curr;
      }else{
        curr = curr.next;
      }
    }
    return null;
  }

  function insert(newElement,element){
    var newNode = new Node(newElement);
    var curr = this.find(element);
    newNode.next = curr.next;
    newNode.previous = curr;
    curr.next = newNode;
  }

  function display(){
    var curr = this.head;
    while(curr.next != null){
      console.log(curr.next.element);
      curr = curr.next;
    }
  }

  function remove(item){
    var curr = this.find(item);
    if( curr != null ){
      curr.previous.next = curr.next;
      curr.next.previous = curr.previous;
      curr.previous = null;
      curr.next = null;
    }
  }
}




var test = new linked_list();
test.insert("a","head");
test.insert("r","a");
test.insert("c","r");
test.insert("e","c");
test.remove("c")
test.display();
