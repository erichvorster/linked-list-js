//linked lists are a linear data structure
//unlike arrays linked lists are note stored sequentially, but instead are linked with a pointer.
//Each node contains data and the a reference to the next item in the data.
// First node is the head and last is the tail. Last node equates to null.

// Linked lists are preferable over arrays when:

// you need constant-time insertions/deletions from the list (such as in real-time computing where time predictability is absolutely critical)

// you don't know how many items will be in the list. With arrays, you may need to re-declare and copy memory if the array grows too big

// you don't need random access to any elements

// you want to be able to insert items in the middle of the list (such as a priority queue)


// Arrays are preferable when:

// you need indexed/random access to elements

// you know the number of elements in the array ahead of time so that you can allocate the correct amount of memory for the array

// you need speed when iterating through all the elements in sequence. You can use pointer math on the array to access each element, whereas you need to lookup the node based on the pointer for each element in linked list, which may result in page faults which may result in performance hits.

// memory is a concern. Filled arrays take up less memory than linked lists. Each element in the array is just the data. Each linked list node requires the data as well as one (or more) pointers to the other elements in the linked list.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //initialize head to null as empty list should equate to null
    this.head = null;
    this.head = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }
  // Insert at index
  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; //node after the index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }
  // Remove at index
removeAt(index){
    if(index > 0 && index > this.size) {
        return;
    }

    let current = this.head
    let previous;
    let count = 0

    // Remove First 
    if(index === 0){
        this.head = current.next
    } else {
        while (count < index) {
            count++;
            previous = current
            current = current.next
        }

        previous.next = current.next
    }
    this.size--
}
  // Clear list
  clearList(){
    this.head = null
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertLast(500);
ll.insertAt(7000, 5);

// ll.getAt(0);
ll.removeAt(2);

ll.printListData();


//Try creating a removeFirst() & removeLast()