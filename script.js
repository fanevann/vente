let voitures = JSON.parse(localStorage.getItem("voitures")) || [];

function afficherVoitures() {
    const liste = document.getElementById("listeVoitures");
    liste.innerHTML = "";

    voitures.forEach((v, index) => {
        liste.innerHTML += `
            <tr>
                <td>${v.marque}</td>
                <td>${v.modele}</td>
                <td>${v.prix} $</td>
                <td>
                    <button class="delete" onclick="supprimerVoiture(${index})">Supprimer</button>
                </td>
            </tr>
        `;
    });

    localStorage.setItem("voitures", JSON.stringify(voitures));
}

function ajouterVoiture() {
    const marque = document.getElementById("marque").value;
    const modele = document.getElementById("modele").value;
    const prix = document.getElementById("prix").value;

    if (marque && modele && prix) {
        voitures.push({ marque, modele, prix });
        afficherVoitures();
    }
}

function supprimerVoiture(index) {
    voitures.splice(index, 1);
    afficherVoitures();
}

function rechercherVoiture() {
    const filtre = document.getElementById("recherche").value.toLowerCase();
    const lignes = document.querySelectorAll("#listeVoitures tr");

    lignes.forEach(ligne => {
        ligne.style.display = ligne.innerText.toLowerCase().includes(filtre)
            ? ""
            : "none";
    });
}

afficherVoitures();