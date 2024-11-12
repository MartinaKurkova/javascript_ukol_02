/*
Catering
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

Catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč
*/

const justFood = (amountPeople) => {
    const price1 = 100;
    return `Catering od Just Food pro ${amountPeople} lidí za ${amountPeople * price1} Kč.`
}

console.log(justFood(5));

const yourMama = (amountPeople) => {
    const price2 = 500;
    return `Catering od Your Mama pro ${amountPeople} lidí za ${amountPeople * price2} Kč.`
}

console.log(yourMama(5));

const flavourHeaven = (amountPeople) => {
    const price3 = 2000; 
    return `Catering od Flavour Heaven pro ${amountPeople} lidí za ${amountPeople * price3} Kč.`
}

console.log(flavourHeaven(5));


const createEvent = (eventName, amountPeople, catering) => {
    return `<p> Událost ${eventName} s ${catering(amountPeople)}</p>`;
};



console.log(createEvent("Opékání buřtů", 10, justFood));
console.log(createEvent("Křest knihy", 50, yourMama));
console.log(createEvent("Inaugurace prezidenta", 100, flavourHeaven));