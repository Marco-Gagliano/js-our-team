/* 
Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
*/


const hiringTeamMembers = [
  {
  memberName: "Angela Caroll",
  professionRole: "Chief Editor",
  memberImg: "img/angela-caroll-chief-editor.jpg",
  },

  {
  memberName: "Angela Lopez",
  professionRole: "Social Media Manager",
  memberImg: "img/angela-lopez-social-media-manager.jpg",
  },

  {
  memberName: "Barbara Ramos",
  professionRole: "Graphic Designer",
  memberImg: "img/barbara-ramos-graphic-designer.jpg",
  },

  {
  memberName: "Scott Estrada",
  professionRole: "Developer",
  memberImg: "img/scott-estrada-developer.jpg",
  },

  {
  memberName: "Walter Gordon",
  professionRole: "Office Manager",
  memberImg: "img/walter-gordon-office-manager.jpg",
  },

  {
  memberName: "Wayne Bernett",
  professionRole: "Founder CEO",
  memberImg: "img/wayne-barnett-founder-ceo.jpg",
  },
]

for (let i in hiringTeamMembers) {
  let cardMember = document.querySelector (".team-container");
  cardMember.innerHTML +=
  `
  <div class="team-card">

    <div class="card-image">
      <img
        src="${hiringTeamMembers[i].memberImg}"
        alt="${hiringTeamMembers[i].memberName}"
      />
    </div>

    <div class="card-text">
      <h3>${hiringTeamMembers[i].memberName}</h3>
      <p>${hiringTeamMembers[i].professionRole}</p>
    </div>

  </div>
  `
}


const addMemberButton = document.getElementById("addMemberButton");

addMemberButton.addEventListener("click", addMember);

function addMember () {
    const addName = document.getElementById("name").value;
    const addRole = document.getElementById("role").value;
    const addImg = document.getElementById("image").value;
    
    const addNewMember = {
        name: addName,
        role: addRole,
        image: addImg,
    }

    hiringTeamMembers.push(addNewMember);
    console.log(hiringTeamMembers);
    
    const addCardMember = document.querySelector(".team-container");
    addCardMember.innerHTML += 
    `
    <div class="team-card">
                                                                                                
      <div class="card-image">
        <img
          src="${addImg}"
          alt=""
        />
      </div>

      <div class="card-text">
        <h3>"${addName}"</h3>
        <p>"${addRole}"</p>
      </div>

    </div>
    `


}