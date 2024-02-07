console.log('Hello')
function findLongestWord(words){
    let wordsReformed=words.map(mot => { //maps trait chaq mot de tab words ,pour chaq mot un objet crée contient deux parametre
        return{
            mot,
            longeur : mot.length, //Calcule et stocke la longueur du mot
        };
    });
    //.reduce() pour trouver l'objet avec la plus grande propriété "longueur"
    return wordsReformed.reduce((store, currentValue)=> { //store:représente le mot le plus long rencontré
        if (currentValue.longeur>store.longeur){
            return currentValue;
        }else{
            return store;
        }
        
    });
}

//console.log(findLongestWord(words));

function calculateTotalMarks(students) {
    return students
      .map(student => (student.marks < 50 ? student.marks + 15 : student.marks))
      .filter(mark => mark > 50)
      .reduce((store, currentValue) => store + currentValue);
  }
  
  const students = [
    {
      name: 'aa',
      marks: 98,
    },
    {
      name: 'bb',
      marks: 23,
    },
    {
      name: 'cc',
      marks: 45,
    },
    {
      name: 'aa',
      marks: 75,
    },
  ];
  
  console.log(calculateTotalMarks(students));


  const Tab = [
    {
      nom: "Pierre",
      age: 25,
      ville: "Paris",
    },
    {
      nom: "Marie",
      age: 30,
      ville: "Lyon",
    },
    {
      nom: "Jean",
      age: 22,
      ville: "Marseille",
    },
  ];
  Tab.push({
    nom: "Sophie",
    age: 28,
    ville: "Bordeaux",
  });
  
  Tab.unshift({
    nom: "Lucas",
    age: 19,
    ville: "Lille",
  });
  let idCounter = 0;

Tab.forEach((objet) => {
  objet.id = ++idCounter;
});
import { Search } from "./fonction.js";

const objetRecherche = Search(Tab, 3);

console.log(objetRecherche); // nrmlt y'Affichi l'objet { nom: "Jean", age: 22, ville: "Marseille" }

const objetIntrouvable = Search(Tab, 10);

console.log(objetIntrouvable); 