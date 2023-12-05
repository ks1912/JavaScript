const XLSX = require("xlsx");
const fs = require("fs");

// Read the Excel file
const workbook = XLSX.readFile("./rawData.xlsx");

// Assuming the first sheet is the one containing your data
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the worksheet to CSV format
const csvData = XLSX.utils.sheet_to_csv(worksheet);

// Save the CSV data to a file
fs.writeFileSync("data.csv", csvData, "utf-8");

console.log("Conversion completed!");
console.log(csvData);
