let Reader = require("./Reader");
let Writer = require("./Writer");
let Processor = require("./Processor");
let Table = require("./Table");
let HtmlParser = require("./htmlParser")
let PdfWriter = require("./PdfWriter");

let leitor = new Reader;
let escritor = new Writer();
async function main(){
    let dados = await leitor.Read("./testeNode.csv");
    
    let dadosProcessados = Processor.Process(dados);

    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);

    PdfWriter.WritePdf(Date.now() + ".PDF", html)
}

main();