#!/usr/bin/env node

let fs = require("fs");
root_path = process.cwd() + "/" + process.argv[2];
let sub_dir_names = ["css", "javascript"];
let sub_file_names = ["styles.css", "app.js"];
let sub_file_body = ["", "console.log('hello world')"];

let root_file_body =
  "<!DOCTYPE html>" +
  '<html lang="en">' +
  "<head>" +
  '  <meta charset="UTF-8">' +
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '  <meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  "  <title>Document</title>" +
  '  <link href="css/styles.css" rel="stylesheet">' +
  "</head>" +
  "<body>" +
  '  <script src="javascript/app.js"> </script>' +
  "</body>" +
  "</html>";

if (!fs.existsSync(root_path)) {
  fs.mkdirSync(root_path);

  fs.writeFile(root_path + "/" + "index.html", root_file_body, function(err) {
    if (err) throw err;
    console.log("Generation index is succesful!");
  });

  for (let i = 0; i < 2; i++) {
    let sub_path = root_path + "/" + sub_dir_names[i];
    fs.mkdirSync(sub_path);
    fs.writeFile(sub_path + "/" + sub_file_names[i], sub_file_body[i], function(
      err
    ) {
      if (err) throw err;

      console.log("Generation is succesful!");
    });
  }
}
