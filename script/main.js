const [NomArticle, prixUnitaire, quantite, total] = document.querySelectorAll("#article, #prixUnitaire, #quantite,#total");

const listDIv = document.getElementById('list-container');
const addButton = document.getElementById("ADD");

const ListeCommande =[];

class Commande {
    constructor(article,prix,amount){
        this.article = article;
        this.prix = Number(prix).toFixed(2);
        this.amount = Number(amount);
    }
    totalPrice() {
        return this.prix * this.amount;
    }
    
    display(){
        return `${this.amount} x ${this.article} - Total : ${this.totalPrice()} €`
    }
}

function reset(){
    NomArticle.value = "";
    prixUnitaire.value = "";
    quantite.value = "";
}

addButton.addEventListener("click",(event)=>{
    event.preventDefault();
    if(!NomArticle.value || !prixUnitaire.value || !quantite.value){
        alert("Veuillez remplir tout les champs !");
        return
    }

    ListeCommande.push(new Commande(NomArticle.value,prixUnitaire.value,quantite.value));

    listDIv.innerHTML = "";
    total.innerHTML = "";
    let sum = 0;

    for(let element of ListeCommande){
        let div = document.createElement("div");
        div.innerHTML = element.display();
        listDIv.append(div);
        sum += element.totalPrice();
    }

    total.innerHTML ="Total : "+ sum.toFixed(2) + " €";
    reset();
})








