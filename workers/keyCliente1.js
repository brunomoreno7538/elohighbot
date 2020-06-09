const fs = require("fs");

const dataName = "keys/keyCliente1.txt";
let exists = false;
const keys = [];

class Key {
  writeKey(data) {
    fs.appendFile(dataName, `${data}\n`, (error) => {
      if (error) {
        throw error;
      }
    });
  }
  selectErase(searchKeyword) {
    const array = fs.readFileSync(dataName).toString().split("\n");
    for (const index in array) {
      keys.push(array[index]);
    }

    keys.find((element) => {
      if (element === searchKeyword) {
        exists = true;
        let index = keys.indexOf(searchKeyword);
        if (index > -1) {
          keys.splice(index, 1);
        }
      }
    });

    if (exists) {
      fs.readFile(dataName, { encoding: "utf-8" }, (error, data) => {
        if (error) {
          throw error;
        } else {
          const dataArray = data.split("\n");
          let lastIndex = -1;
          for (let index = 0; index < dataArray.length; index++) {
            if (dataArray[index].includes(searchKeyword)) {
              lastIndex = index;
              break;
            }
          }
          dataArray.splice(lastIndex, 1);

          const updateData = dataArray.join("\n");
          fs.writeFile(dataName, updateData, (err) => {
            if (err) {
              throw err;
            } else {
              console.log("Sucesso");
            }
          });
        }
      });
      console.log(keys);
      exists = false;
      return true;
    }
    return false;
  }
}
module.exports = new Key();
