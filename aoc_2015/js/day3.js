function readFile(filename) {
    return require("fs").readFileSync(filename).toString();
}
const data = readFile('day3.txt').split('')

//array mit x,y koordinaten... function mit n, s, w, o, 
//schauen ob schon im array, wenn nicht, dann neues element.

function newCoord([x, y], newDir) {
    if (newDir == '^') {
        return [x, y + 1];
    } else if (newDir == '>') {
        return [x + 1, y];
    } else if (newDir == 'v') {
        return [x, y - 1];
    } else {
        return [x - 1, y];
    }
}

function checkCoord(coord1, coord2) {
    if (coord1[0] === coord2[0] && coord1[1] === coord2[1]) {
        return true;
    } else return false;
}

function task1(df) {
    let houseCoord = []
    let currentCoord = [0, 0]
    houseCoord.push(currentCoord)

    for (let dir of df) {

        currentCoord = newCoord(currentCoord, dir);
        //console.log(currentCoord);

        if (!houseCoord.some(coord => checkCoord(coord, currentCoord))) {
            houseCoord.push(currentCoord)
        } else {
            continue;
        }
    }
    return houseCoord;
}
//console.log(task1(data))

function splitData(df) {
    let roboDir = [];
    let santaDir = [];

    for (let [idx, dir] of df.entries()) {
        if (idx % 2 === 0) {
            roboDir.push(dir)
        } else {
            santaDir.push(dir)
        }
    }
    return [roboDir, santaDir]
}

function task2(df) {
    let [roboDir, santaDir] = splitData(df)
    let roboHouses = task1(roboDir);
    let santaHouses = task1(santaDir);
    
    let merge = roboHouses.concat(santaHouses);
    let noDuplicates = [];

    for(let dir of merge){
        //console.log(dir);
        if(!noDuplicates.some(coord => checkCoord(coord, dir))){
            noDuplicates.push(dir);
        }
        else{
            continue;
        }
    }
    return noDuplicates;
}

console.log(task2(data).length);