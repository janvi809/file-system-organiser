let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organise");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch(command){
    case 'tree':
        treeObj.treeFxn(inputArr[1])
        break;
    case 'organize':
        organizeObj.organiseFxn(inputArr[1])
        break;
    case 'help':
        helpObj.helpFxn(inputArr[1]);

}