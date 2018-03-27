export const VAL99 = 99;
export  const VAL98 = 98;
export  const VAL2 = 2;
export  const VAL3 = 3;

class baseClass {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    showName() {
        return (this.name);
    }
}

class subClass extends baseClass {
    super(name, address) {
        this.name = name;
        this.address = address;
    }

    showAddress() {
        return (this.address);
    }
}

 