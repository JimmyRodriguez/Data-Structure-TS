

export class Stack<T>{
    
    private items: T[] = [];

    public push(element: T) : void{
        this.items.push(element);
    }

    public pop() : T | any {
        return this.items.pop();
    }
}