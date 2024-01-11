const gallowsWrap = document.createElement("div");
gallowsWrap.classList.add("gallow-wrap");
const gallowsImg = document.createElement("img");
gallowsImg.src = "./assets/gallows.png";
gallowsImg.alt = "empty gallow";
gallowsImg.classList.add("gallow-img");
gallowsWrap.appendChild(gallowsImg);

const head= document.createElement("img");
head.src = "./assets/head.jpg";
head.alt = "head";
head.classList.add("head");
gallowsWrap.appendChild(head);

const gallowsBody= document.createElement("img");
gallowsBody.src = "./assets/body.jpg";
gallowsBody.alt = "body";
gallowsBody.classList.add("gallows-body");
gallowsWrap.appendChild(gallowsBody);

const leftHand= document.createElement("img");
leftHand.src = "./assets/hand-one.jpg";
leftHand.alt = "left hand";
leftHand.classList.add("left-hand");
gallowsWrap.appendChild(leftHand);

const rightHand= document.createElement("img");
rightHand.src = "./assets/hand-two.jpg";
rightHand.alt = "right hand";
rightHand.classList.add("right-hand");
gallowsWrap.appendChild(rightHand);

const leftLeg= document.createElement("img");
leftLeg.src = "./assets/leg-one.jpg";
leftLeg.alt = "left leg";
leftLeg.classList.add("left-leg");
gallowsWrap.appendChild(leftLeg);

const rightLeg= document.createElement("img");
rightLeg.src = "./assets/leg-two.jpg";
rightLeg.alt = "right leg";
rightLeg.classList.add("right-leg");
gallowsWrap.appendChild(rightLeg);


export default gallowsWrap;

