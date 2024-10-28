const jmeno = prompt ("Vlož jméno.")
const prijmeni = prompt ("Vlož příjmení.")

const Znakyjmeno = jmeno.trim()
const ZnakyPrijmeni = prijmeni.trim ()

const ZnakyMalaJmeno = Znakyjmeno.toLowerCase()
const ZnakyMalaPrijmeni = ZnakyPrijmeni.toLowerCase()

const DiaZnakyMalaJmeno = ZnakyMalaJmeno.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const DiaZnakyMalaPrijmeni = ZnakyMalaPrijmeni.normalize('NFD').replace(/[\u0300-\u036f]/g, '')


if ((Znakyjmeno.length>=5) && (ZnakyPrijmeni.length>=5 )) {
    document.body.innerHTML =`<p> Email je ${DiaZnakyMalaPrijmeni.slice(0,4)}.${DiaZnakyMalaJmeno.slice(0,4)}@fit.cvut.cz.</p>`
    
} else if ((Znakyjmeno.length>=5) && (ZnakyPrijmeni.length<5 )) {
     document.body.innerHTML =`<p> Email je ${DiaZnakyMalaPrijmeni}.${DiaZnakyMalaJmeno.slice(0,4)}@fit.cvut.cz.</p>`

} else if ((Znakyjmeno.length<5) && (ZnakyPrijmeni.length>=5 )) {
    document.body.innerHTML =`<p> Email je ${DiaZnakyMalaPrijmeni.slice(0,4)}.${DiaZnakyMalaJmeno}@fit.cvut.cz.</p>`

}else {
     document.body.innerHTML =`<p> Email je ${DiaZnakyMalaPrijmeni}.${DiaZnakyMalaJmeno}@fit.cvut.cz.</p>`
}



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