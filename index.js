
let magazine1 = ["two","times","three","is","not","four"];
let note1 = ["two","times","two","is","four"];

function checkMagazine(magazine, note) {
    // Write your code here

    let words_in_magazine = true;

    let map = {};
  
    for( let word of magazine){
      map[word] = (map[word] || 0) + 1;
    }

    for( let word of note){
      map[word] = (map[word] || 0) - 1;
    }

    for( let key in map){
      if(map[key] < 0){
        words_in_magazine = false;
        console.log(words_in_magazine);
        break;
      }
    }
  console.log(words_in_magazine);

    if(words_in_magazine == true){
      console.log("Yes");
    }else{
      console.log("No");
    }  

    console.log(map);
}

checkMagazine(magazine1, note1);