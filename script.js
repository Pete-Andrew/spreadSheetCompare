

function generateTableOne() {
    var data = $('textarea[name=excel_data]').val();
    console.log(data);

    var workbook = XLSX.read(data, { type: 'binary' });
    var sheet = workbook.Sheets[workbook.SheetNames[0]];
    
    var htmlTable = XLSX.utils.sheet_to_html(sheet, { display: true });
    
    // Insert into DOM
    $('#excel_table').html(htmlTable);
}

function generateTableTwo() {
    var data = $('textarea[name=excel_data_two]').val();
    console.log(data);

    var workbook = XLSX.read(data, { type: 'binary' });
    var sheet = workbook.Sheets[workbook.SheetNames[0]];
    
    var htmlTable = XLSX.utils.sheet_to_html(sheet, { display: true });
    
    // Insert into DOM
    $('#excel_table_two').html(htmlTable);
}

// This code uses the XLSX object from the SheetJS library to read the Excel data.
// Then it converts the sheet to an HTML table while preserving formatting. 
// Make sure to adjust the SheetJS library version in the script tag according to your preference or use a CDN that provides the version you need.

// Note: The sheet_to_html function may not perfectly reproduce all Excel formatting, especially complex styles. 
// For more advanced formatting support, you might want to explore other options or libraries.


//I can now import 2 spreadsheets to a webpage. 
//How Can I now compare the 2 spreadsheets and if two enteries match then copy the formatting. 

// bulk of code taken from a JS fiddle by David Underwood - Palmetto Systems − Greenville, SC. Thanks to this legend! 

//The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).
//Basic syntax is: $(selector).action()



//Junk Code ................



// function generateTableOne() {
//     var data = $('textarea[name=excel_data]').val();
//     console.log(data);
// var rows = data.split("\n");

// var table = $('<table />');

// for(var y in rows) {
//     var cells = rows[y].split("\t");
//     var row = $('<tr />');
//     for(var x in cells) {
//         row.append('<td>'+cells[x]+'</td>');
//     }
//     table.append(row);
// }

// // Insert into DOM
// $('#excel_table').html(table);
// }

// function generateTableTwo() {
//     var data = $('textarea[name=excel_data_two]').val();
//     console.log(data);
// var rows = data.split("\n");

// var table_two = $('<table />');

// for(var y in rows) {
//     var cells = rows[y].split("\t");
//     var row = $('<tr />');
//     for(var x in cells) {
//         row.append('<td>'+cells[x]+'</td>');
//     }
//     table_two.append(row);
// }

// // Insert into DOM
// $('#excel_table_two').html(table_two);
// }