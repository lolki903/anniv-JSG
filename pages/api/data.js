//database route

export default function handler(req, res) {
  let finput = "./data/user-data.csv";
  let fs = require("fs");

  try {
    const data = fs.readFileSync(finput, "utf8");
    data.split(/r?\n/).forEach((line) => {
      console.log(`line : ${line}`);
      data.split(/;/).forEach((value) => {
        console.log(`value: ${value}`);
      });
    });
  } catch (err) {
    console.error(err);
  }
}
