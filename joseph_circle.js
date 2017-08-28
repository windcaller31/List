function Node(element){
  this.element = element;
  this.next = null;
}

var linked_list =  function (){
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.find_previous = find_previous;
  this.kill =  kill;

  function find(item){
    var curr = this.head;
    do{
      if(curr.element == item){
        return curr;
      }else{
        curr = curr.next;
      }
    }while(curr!=null && curr.element!="head")
    return null;
  }

  function insert(newElement,element){
    var newNode = new Node(newElement);
    var curr = this.find(element);
    newNode.next = curr.next;
    curr.next = newNode;
  }

  function display(){
    var curr = this.head;
    while(curr!=null && curr.next.element!="head"){
      console.log(curr.next.element);
      curr = curr.next;
    }
  }

  function find_previous(item){
    var curr = this.head;
    do{
      if(curr.next.element == item){
        return curr;
      }
      curr = curr.next;
    }while(curr!=null && curr.element!="head")
    return null;
  }

  function remove(item){
    var curr = this.find_previous(item);
    if(curr!=null){
      curr.next = curr.next.next;
    }
  }

  function kill(n,m){
    var kill_num = 0;
    var kill_index = 1;
    var curr = this.head.next;
    while(curr!=null&& n-kill_num > 2){
      if(curr.element == "head"){
        curr = curr.next;
      }
      if(kill_index ==m){
        this.remove(curr.element);
        curr = curr.next;
        kill_index = 1;
        kill_num++;
      }else{
        kill_index++;
        curr = curr.next;
      }
    }
  }
}
var test = new linked_list();
test.insert("1","head");
test.insert("2","1");
test.insert("3","2");
test.insert("4","3");
test.insert("5","4");
test.insert("6","5");
test.insert("7","6");
test.insert("8","7");
test.insert("9","8");
test.insert("10","9");
test.kill(10,3);
test.display();
