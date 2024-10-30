const jmeno = prompt ("Vlož jméno.").trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const prijmeni = prompt ("Vlož příjmení.").trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    document.body.innerHTML = `<p>Email je ${prijmeni.length >= 5 
        ? prijmeni.slice(0, 5) 
        : prijmeni.slice()}.${jmeno.length >= 3 
        ? jmeno.slice(0, 3) 
        : jmeno.slice()}@fit.cvut.cz.</p>`;

/*const znakyJmeno = jmeno.trim()
const znakyPrijmeni = prijmeni.trim ()

const znakyMalaJmeno = znakyJmeno.toLowerCase()
const znakyMalaPrijmeni = znakyPrijmeni.toLowerCase()

const diaZnakyMalaJmeno = znakyMalaJmeno.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const diaZnakyMalaPrijmeni = znakyMalaPrijmeni.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

if ((jmeno.length>=4) && (prijmeni.length>=6 )) {
    document.body.innerHTML =`<p> Email je ${prijmeni.slice(0,5)}.${jmeno.slice(0,3)}@fit.cvut.cz.</p>`
    
} else if ((jmeno.length>=4) && (prijmeni.length<6 )) {
     document.body.innerHTML =`<p> Email je ${prijmeni}.${jmeno.slice(0,3)}@fit.cvut.cz.</p>`

} else if ((jmeno.length<4) && (prijmeni.length>=6 )) {
    document.body.innerHTML =`<p> Email je ${prijmeni.slice(0,5)}.${jmeno}@fit.cvut.cz.</p>`

}else {
     document.body.innerHTML =`<p> Email je ${prijmeni}.${jmeno}@fit.cvut.cz.</p>`
} */

/*Pokud se přihlásíte jako student například na Fakultu Informačních 
Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, 
který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme 
pět prvních znaků a z vašeho křestního jména první tři. 
Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. 
Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.

Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho
 křestní jméno a pak příjmení, obojí bez diakritiky. Pomocí metody trim zajistěte,
  že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky. 
  Pomocí metody slice vyřízněte ze jména i příjmení příslušné části. 
  Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.*/