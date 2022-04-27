/* 
Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
*/


const teamMembers = [
  {
  memberName: "Angela Caroll",
  professionRole: "Chief Editor",
  memberImg: "angela-caroll-chief-editor.jpg",
  },

  {
  memberName: "Angela Lopez",
  professionRole: "Social Media Manager",
  memberImg: "angela-lopez-social-media-manager.jpg",
  },

  {
  memberName: "Barbara Ramos",
  professionRole: "Graphic Designer",
  memberImg: "barbara-ramos-graphic-designer.jpg",
  },

  {
  memberName: "Scott Estrada",
  professionRole: "Developer",
  memberImg: "scott-estrada-developer.jpg",
  },

  {
  memberName: "Walter Gordon",
  professionRole: "Office Manager",
  memberImg: "walter-gordon-office-manager.jpg",
  },

  {
  memberName: "Wayne Bernett",
  professionRole: "Founder CEO",
  memberImg: "wayne-barnett-founder-ceo.jpg",
  },

]