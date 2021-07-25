let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function print(path1){
    
    let folderContent = fs.readdirSync(path1);                  

    let mainFolderPath = path.join(path1,"organize");           
    fs.mkdirSync(mainFolderPath);                               

    for(let i = 0 ; i < folderContent.length ; i++){            
        let extension = path.extname(folderContent[i]);
        let ext = extension.split(".")[1];
        let folderName = "other";

        for(key in types){                                     
            for(let j = 0 ; j < types[key].length ; j++){       
                if(ext == types[key][j]){               
                    folderName = key;
                    break;
                } 
            }
        }

        let typesPath = path.join(mainFolderPath,folderName);

        let doesExist = fs.existsSync(typesPath);
        
        if(!doesExist){                                      
                fs.mkdirSync(typesPath);                        
        } 

        let srcPath = path.join(path1,folderContent[i]);                 
        let destPath = path.join(mainFolderPath,folderName,folderContent[i]);   
        fs.copyFileSync(srcPath,destPath);
    }
}

module.exports = {
    OrganiseFxn : print
}