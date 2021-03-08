const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain = [...this.chain, `( ${String(value)} )`];

    return this;
  },
  removeLink(position) {
    this.chain =
      position < this.getLength()
        ? this.chain.filter((_, i) => i !== position - 1)
        : [];
        
    if(this.getLength() === 0) {
          throw new Error("THROWN");
    }
    
    return this;  
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];

    return result;
  }
};

module.exports = chainMaker;
