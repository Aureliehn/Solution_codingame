// compter le nombre de fois qu'un mot apparait 
const arr = ['toto', 'toto', 'tati', 'tata'];
const occ = {};
for (const n of arr) {
  occ[n] = occ[n] ? occ[n] + 1 : 1;
}
console.log(occ);
// sortie console : Object { toto: 2, tati: 1, tata: 1 }
console.log(Object.values(occ));
// sortie console :Array(3) [ 2, 1, 1 ]

// retrouver les mots contenants les lettres du tableau
words=['toto', 'tre', 'hid', 'rat'];
letters=['t', 'r'];
result=[]
for(i=0; i<words.length; i++){
    for(j=0; j<letters.length; j++){
        if(words[i].includes(letters[j])){
            result.push(words[i]) 
        }
    }
    var resultat = Array.from(new Set(result))
    console.log(resultat, 'result')
}

// exercice solde
prices= [100,30,80,10];
discount=[20]

function CalculateTotalPrice(prices, discount) {
    let total=0;
    let maxPrice=0
   for(let i=0;i<prices.length;i++) {
       total +=prices[i];
       maxPrice = Math.max(...prices)
   }
   let remise = maxPrice*discount/100
   console.log(total - remise, 'r')
}
CalculateTotalPrice(prices, discount)

// Dans ce probleme on vous donne une liste d'entiers et un entier k, on vous demande de trouver s'il existe une paire d'entiers dans la liste dont la somme est exactement k  
tab = [1, 3, 5]
k=8
total = []
function searchSum(tab, k){
    for(let i = 0; i<tab.length; i++){
        for(let j = 0; j<tab.length; j++){
            if(tab[i]+tab[j]=== k){
                total.push(tab[i], tab[j])
                console.log(total)
            }
        }
    }
}
searchSum(tab, k)