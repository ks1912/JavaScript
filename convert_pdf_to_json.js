const fs = require("fs");
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser();

const pdfFilePath = "test_data.pdf"; // Replace with your PDF file path

pdfParser.loadPDF(pdfFilePath);

pdfParser.on("pdfParser_dataError", (errData) =>
  console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
  // Print extracted data to the console
  console.log("************\n", JSON.stringify(pdfData), "\n************");

  // Write extracted data to a JSON file
  fs.writeFileSync("output.json", JSON.stringify(pdfData));
  console.log("Conversion completed. Check output.json file.");
});
