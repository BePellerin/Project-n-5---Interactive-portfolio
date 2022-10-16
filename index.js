const handleSubmit = (event) => {
  event.preventDefault();
  const formTitle = document.querySelector("#npTitle").value;
  const formUrl = document.querySelector("#projectImgLink").value;
  const formText = document.querySelector("#npDescription").value;
  const newProjectCard = createNewProjectCard(formTitle, formUrl, formText);
  document.querySelector("#cards").appendChild(newProjectCard);
  resetForm();
};

createNewProjectCard = (title, imageUrl, text) => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("cardTitle");
  cardTitle.innerText = title;
  newCard.appendChild(cardTitle);

  const cardImg = document.createElement("img");
  cardImg.classList.add("cardImg");
  cardImg.src = imageUrl;
  cardImg.alt = "";
  newCard.appendChild(cardImg);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("cardText");
  cardDescription.innerText = text;
  newCard.appendChild(cardDescription);

  return newCard;
};

const resetForm = () => {
  const formTitle = (document.querySelector("#npTitle").value = "");
  const formUrl = (document.querySelector("#projectImgLink").value = "");
  const description = (document.querySelector("#npDescription").value = "");
};
