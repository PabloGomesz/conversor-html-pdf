 class Table{

    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    get RowsCount(){
        return this.rows.length;
    }

    get ColumCount(){
        return this.header.length;
    }
 }

module.exports = Table;