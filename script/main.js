




const restaurant = {
  nom: "Chez Oli",
  ouvert: true,
  commandes: [
    {
      table: 1,
      client: "Olivier",
      plats: [
        { nom: "Burger", prix: 12.5 },
        { nom: "Frites", prix: 4 }
      ]
    },
    {
      table: 2,
      client: "Aurélio",
      plats: [
        { nom: "Salade César", prix: 9 },
        { nom: "Eau plate", prix: 2 }
      ]
    },
    {
      table: 1,
      client: "Olivier",
      plats: [
        { nom: "Café", prix: 2.5 }
      ]
    },
    {
      table: 3,
      client: "Charlotte",
      plats: [
        { nom: "Pâtes aux champignons", prix: 11 },
        { nom: "Verre de vin rouge", prix: 5 }
      ]
    },
    {
      table: 4,
      client: "Lorian",
      plats: [
        { nom: "Nuggets", prix: 6 },
        { nom: "Compote", prix: 3 },
        { nom: "Jus de pomme", prix: 2 }
      ]
    },
    {
      table: 5,
      client: "Hugo",
      plats: [
        { nom: "Purée carottes", prix: 4 },
        { nom: "Petit pot dessert", prix: 2.5 }
      ]
    },
    {
      table: 6,
      client: "Thomas",
      plats: [
        { nom: "Pizza Margherita", prix: 10 },
        { nom: "Bières artisanale", prix: 4.5 }
      ]
    },
    {
      table: 3,
      client: "Charlotte",
      plats: [
        { nom: "Tiramisu", prix: 5.5 }
      ]
    },
    {
      table: 7,
      client: "Aurélie",
      plats: [
        { nom: "Steak frites", prix: 14 },
        { nom: "Coca zéro", prix: 3 }
      ]
    }
  ]
};

const prixTotaux ={}

function addTotal(object){
    let total = document.createElement("p");
    total.innerHTML = `Total de la table :${prixTotaux[`table${object.table}`]} €.`;
    for(let element of document.querySelectorAll("details")){
        if (element.dataset.index == object.table){
            element.append = total;
        }
        
    }
    
}

function fillSummary(object){
    let p = document.createElement("p");
    p.innerHTML = `client : ${object.client} <br>`;
    let total = 0;
    for (let plat of object.plats){
        p.innerHTML += `- ${plat.nom} : ${plat.prix} €. <br>`
        total += plat.prix;
    }

    if(prixTotaux[`table${object.table}`] == 0){
         prixTotaux[`table${object.table}`] = total;
    }
    else{
        prixTotaux[`table${object.table}`] += total;
    }
    
    console.log(prixTotaux);

    
    p.innerHTML += `<strong>Total : ${total} €.</strong> `
    return p
                    
}

function addExtra(object,rightDetails){
    rightDetails.append(fillSummary(object));

}



function createSummary(object){
    let details = document.createElement("details");
    details.setAttribute("data-index",object.table)
    let summary = document.createElement("summary");
    summary.innerHTML = ` Table :${object.table} <br>`
    details.append(summary);
    details.append(fillSummary(object));
    
    document.getElementById("summaryContainer").append(details);

}

function addToSummary(){
    let tables = [];
    for (let element of restaurant.commandes){
        

        if (tables.includes(element.table)){
            
            for (let e of document.querySelectorAll("details")){
                if(e.dataset.index == element.table){
                    addExtra(element,e);
                    
                }
            }
        }
        else{
            tables.push(element.table);
            prixTotaux[`table${element.table}`] = 0;
            createSummary(element);

        }
      
    }
     for (let element of restaurant.commandes){
        
        addTotal(element);
       
      
    }

    
    console.log(tables);


}



addToSummary();











