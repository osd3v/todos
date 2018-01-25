var PDFDocument = require('pdfkit');
var fs = require('fs');

doc = new PDFDocument;    
doc.pipe(fs.createWriteStream('output.pdf'));    
doc.font('./Hermit-medium.ttf')
.fontSize(30)
.text('oscar campos herrera');
doc.save();
doc.end();