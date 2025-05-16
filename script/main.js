const [NomArticle, prixUnitaire, quantite, total] = document.querySelectorAll("#article, #prixUnitaire, #quantite,#total");

const listDIv = document.getElementById('list-container');
const addButton = document.getElementById("ADD");

const ListeCommande =[];

class Commande {
    constructor(article,prix,amount){
        this.article = article;
        this.prix = Number(prix);
        this.amount = Number(amount);
        let date = new Date()
        this.time =`  ${date.toLocaleDateString()}  ${date.toLocaleTimeString()}`;
    }
    totalPrice() {
        let total = this.prix * this.amount;
        return total;
    }
    
    display(){
        return `${this.amount} x ${this.article} - Total : ${this.totalPrice().toFixed(2)} € 
        
        `
    }
    horodate(){

    }
}

function reset(){
    NomArticle.value = "";
    prixUnitaire.value = "";
    quantite.value = "";
}

function addDisplay(){
    listDIv.innerHTML = "";
    total.innerHTML = "";
    ListeCommande.forEach((element,index)=>{
        let div = document.createElement("div");
        div.innerHTML = `<div>${element.display()} ${element.time}</div> <span class="del" data-index = ${index}>❌</span>`;
        listDIv.append(div);
    })

    let sum = ListeCommande.reduce((acc,element) =>{
        return acc += element.totalPrice();
    },0)

    total.innerHTML ="Total : "+ sum.toFixed(2) + "€";
}

addButton.addEventListener("click",(event)=>{
    event.preventDefault();
    if(!NomArticle.value || !prixUnitaire.value || !quantite.value){
        alert("Veuillez remplir tout les champs !");
        return
    }

    ListeCommande.push(new Commande(NomArticle.value,prixUnitaire.value,quantite.value));

    addDisplay()
    reset();
})

listDIv.addEventListener("click",(event)=>{
    if(event.target.matches(".del")){
        let delIndex = Number(event.target.dataset.index);
        ListeCommande.splice(delIndex,1);
        addDisplay();
        if (ListeCommande.length == 0){
            listDIv.innerHTML = "Aucune commande";
            total.innerHTML = "";
        }
    }
})










