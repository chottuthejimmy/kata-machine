type Node <T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
};

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node <T>;
    public tail?: Node <T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (this.head === undefined){ // !this.head
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        return;

}
    insertAt(item: T, idx: number): void {
        if(idx > this.length){
            throw new Error("Lee");
        }
        
        else if(idx === this.length){
            this.append(item);
        }
        else if(idx === 0){
            this.prepend(item);
        }
        else{
            let ptr = this.head;
            for (let i = 0; ptr && i < idx; i++) {
                ptr = ptr.next;
        }
        ptr = ptr as Node<T>;
        const node = {value: item} as Node<T>;
        node.next = ptr;
        node.prev = ptr.prev;
        ptr.prev = node;
       if(ptr.prev){
        ptr.prev.next = node;
       }
       this.length++;
    }
       return;

}

    append(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if(!this.tail){
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        return;
}
    remove(item: T): T | undefined {
        let ptr = this.head;
        // let ptr_value = ptr as Node<T>;
        while(ptr){
            if(ptr.value === item){
                this.length--;
                if(this.length === 1){
                    this.head = this.tail = undefined;
                    return item;
                }
                if(this.head === ptr){
                    this.head = ptr.next;
                    return item;
                }
                if(this.tail === ptr){
                    this.tail = ptr.prev;
                    return item;
                }
                if(ptr.prev)
                     ptr.prev.next = ptr.next;
                if(ptr.next){
                    ptr.next.prev = ptr.prev;
                }
               
                return item;
            }
            ptr = ptr.next;
        }
        return undefined;
}
        get(idx: number): T | undefined {
            if(idx > this.length || idx < 0 || !this.head)
                return undefined;
            let ptr = this.head;
            for (let i = 0; ptr && i < idx; i++) {
                 ptr = ptr.next as Node<T>;
            }
        return ptr.value;

    }
        removeAt(idx: number): T | undefined {
            if(idx > this.length || idx < 0 || !this.head)
                return undefined;
            this.length--;
            if(idx === 0 && this.head){
                const node = this.head;
                this.head = this.head?.next;
                return node.value;
            }
            if (idx === 0 && this.length === 1){
                const node = this.head;
                this.head = this.tail = undefined;
                return node?.value;
            }
            if(idx === this.length && this.length != 1){
                const node = this.tail;
                this.tail = this.tail?.prev;
                return node?.value;
            }
          let ptr = this.head;
            for (let i = 0; ptr && i < idx; i++) {
                 ptr = ptr.next as Node<T>;
            }
            if(ptr.prev){
                ptr.prev.next = ptr.next;
            }
            if(ptr.next){
                ptr.next.prev = ptr.prev;
            }
            ptr.next = ptr.prev = undefined;
            return ptr.value;
    }
}