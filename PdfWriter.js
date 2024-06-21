let htmlPdf = require("html-pdf");


class PdfWriter{
    static WritePdf(filename, html){
        htmlPdf.create(html,{}).toFile(filename, (err) =>{});
    }
}

module.exports = PdfWriter;