const sender = {
    store : [],
    receive(newData) {
        this.store.push(newData)
    },
    send() {
        return this.store.pop();
    }
};

function f1() {
    return 1    
}
function f2() {
    return 2    
}
function f3() {
    return 3    
}

export { f1, f2, f3, sender };
