  

class Processor{

    static Process(data){
        let Rows = data.split("\r\n");
        let rows = [];

        Rows.forEach(row =>{
           let arr = row.split(",");
           rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;