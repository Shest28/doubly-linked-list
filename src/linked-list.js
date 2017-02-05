const Node = require('./node');

class LinkedList {
		
    constructor() {
		this._head = null;
		this._tail = null;
		this.length = 0;	
	}

    append(data) {
		var list = this.list;
		var node = new Node(data,null,null);
		if (this.length === 0) {
			this._head = node;		
			this._tail = node;
		} 
		else {
			this._tail.next = node;
			node.prev = this._tail;
			this._tail = node;
		}
		this.length++;		
	  return this;			
	}

    head() {
			return this._head.data
	}
    tail() {
			return this._tail.data
	}

    at(index) {
		if ((index >= 0) && (index < this.length)) {
			var node = this._head;
			while (index--) {
			node = node.next;
			}
          return node.data;
		}
	}

    insertAt(index, data) {
		if ((index >= 0) && (index < this.length)) {
		var node = this._head;
			while (index--) {
			node = node.next;
			}
		node.data = data;	
		}
	  return this;
	}

    isEmpty() {
		if (this.length == 0) return true
		else return false;
	}

    clear() {
		while (this.length != 0) {
			var node = this._tail;
			if (this._head == node){
				this._head.data = null;
				this._head.next = null;
			}
			else{
				this._tail = node.prev;	
				node.data = null;
				node.next = null;
				node.prev = null;
			}
			this.length--;
		}
	  return this;
	}

    deleteAt(index) {

		if ((index > 0) && (index < (this.length-1))) {
			var node = this._head;
			while (index--) {
				node = node.next;
			}
			node.prev.next = node.next;
			node.next.prev = node.prev;
			this.length--;	
			node.data = null;
			node.next = null;
			node.prev = null;
		}
		if (index == 0){
			var node = this._head;
			node.prev = null;
			this._head = node.next;		
			node.data = null;
			node.next = null;
		}
		else{
			var node = this._tail;
			node.next = null;
			this._tail = node.prev;	
			node.data = null;
			node.prev = null;
		}
	  return this;
	}

    reverse() {
		var nodeHead = this._head;
		var nodeTail = this._tail;
		var node = new Node();
		for(var i=0; i<this.length/2; i++){		
			node.data = nodeHead.data;
			nodeHead.data = nodeTail.data;
			nodeTail.data = node.data;
			
			nodeHead = nodeHead.next;
			nodeTail = nodeTail.prev;
		}
	  return this;
	}

    indexOf(data) {
		var node = this._head;
		var count = 0;
		for(var i=0; i<this.length; i++){		
			if (node.data === data) {
				count++;
				return i;
			}
			node = node.next;
		}
		if (count == 0) return -1;
	}
}

module.exports = LinkedList;
