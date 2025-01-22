class Die {
    constructor(facesNum){
        this.facesNum = facesNum;
    }

    roll(){
        return Math.floor(Math.random() * this.facesNum) + 1;
    }
}

module.exports = Die;