const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

var Human = document.createElement("div");
Human.style.background = "mediumpurple";
Human.style.padding = "30px 20px 30px 30px";
Human.style.margin = "20px auto 20px auto";

var humanTag = document.createElement("p");
var humanText = document.createTextNode("Genre: Human");
humanTag.style.background = "mediumpurple";
humanTag.style.color = "ghostwhite"
humanTag.appendChild(humanText);

var humanDiv1 = document.createElement("div");
var humandiv1Text = document.createTextNode("Micheal Jackson");
var humandiv1tag = document.createElement("span");
var humandiv1tagText = document.createTextNode("lifetime:1022-1055");
humandiv1tag.appendChild(humandiv1tagText);
humanDiv1.appendChild(humandiv1Text);
humanDiv1.appendChild(humandiv1tag);
humanDiv1.style.background = "lightblue";
humanDiv1.style.height = "40px";
humanDiv1.style.fontSize = "24px"
humanDiv1.style.paddingLeft = "10px";
humanDiv1.style.marginTop = "20px";
humandiv1tag.style.marginLeft = "10px";
humandiv1tag.style.fontSize = "16px";


var humanDiv2 = document.createElement("div");
var humanDiv2P = document.createElement("p");
var humandiv2Text = document.createTextNode("Popular Photos");
humanDiv2P.appendChild(humandiv2Text);
humanDiv2.appendChild(humanDiv2P);
humanDiv2.style.fontSize = "30px";
humanDiv2.style.background = "lightblue";
humanDiv2.style.marginTop = "10px";
humanDiv2.style.paddingLeft = "10px";
var humanimg1 = document.createElement("img");
humanimg1.src = "human1.jpg";
humanimg1.style.width = "60px";
humanimg1.style.height = "60px";
humanimg1.style.marginLeft = "10px";
var humanimg2 = document.createElement("img");
humanimg2.src = "human2.jpg"
humanimg2.style.width = "60px";
humanimg2.style.height = "60px";
humanimg2.style.marginLeft = "10px";
var humanimg3 = document.createElement("img");
humanimg3.src = "human3.jpg"
humanimg3.style.width = "60px";
humanimg3.style.height = "60px";
humanimg3.style.marginLeft = "10px";
humanDiv2.appendChild(humanimg1);
humanDiv2.appendChild(humanimg2);
humanDiv2.appendChild(humanimg3);

var humanButton = document.createElement("div");
humanButton.style.textAlign = "center";
var humanButtonText = document.createTextNode("visit");
humanButton.appendChild(humanButtonText);
humanButton.style.background = "deeppink";
humanButton.addEventListener("mouseenter",function () {
    humanButton.style.background = "pink";
});
humanButton.addEventListener("mouseout",function () {
    humanButton.style.background = "deeppink";
});
humanButton.style.color = "ghostwhite";
humanButton.style.fontSize = "24px";
humanButton.style.marginTop = "10px";
humanButton.style.height = "32px";

Human.appendChild(humanTag);
Human.appendChild(humanDiv1);
Human.appendChild(humanDiv2);
Human.appendChild(humanButton);


var Classical = document.createElement("div");
Classical.style.background = "mediumpurple";
Classical.style.padding = "30px 20px 30px 30px";
Classical.style.margin = "20px auto 20px auto";

var classicalTag = document.createElement("p");
var classicalText = document.createTextNode("Genre: Classical");
classicalTag.style.background = "mediumpurple";
classicalTag.style.color = "ghostwhite"
classicalTag.appendChild(classicalText);

var classicalDiv1 = document.createElement("div");
var classicaldiv1Text = document.createTextNode("Maria JK");
var classicaldiv1tag = document.createElement("span");
var classicaldiv1tagText = document.createTextNode("lifetime:1920-2001");
classicaldiv1tag.appendChild(classicaldiv1tagText);
classicalDiv1.appendChild(classicaldiv1Text);
classicalDiv1.appendChild(classicaldiv1tag);
classicalDiv1.style.background = "lightblue";
classicalDiv1.style.height = "40px";
classicalDiv1.style.fontSize = "24px"
classicalDiv1.style.paddingLeft = "10px";
classicalDiv1.style.marginTop = "20px";
classicaldiv1tag.style.marginLeft = "10px";
classicaldiv1tag.style.fontSize = "16px";


var classicalDiv2 = document.createElement("div");
var classicalDiv2P = document.createElement("p");
var classicaldiv2Text = document.createTextNode("Popular Photos");
classicalDiv2P.appendChild(classicaldiv2Text);
classicalDiv2.appendChild(classicalDiv2P);
classicalDiv2.style.fontSize = "30px";
classicalDiv2.style.background = "lightblue";
classicalDiv2.style.marginTop = "10px";
classicalDiv2.style.paddingLeft = "10px";
var classicalimg1 = document.createElement("img");
classicalimg1.src = "classical1.jpg";
classicalimg1.style.width = "60px";
classicalimg1.style.height = "60px";
classicalimg1.style.marginLeft = "10px";
var classicalimg2 = document.createElement("img");
classicalimg2.src = "classical2.jpg"
classicalimg2.style.width = "60px";
classicalimg2.style.height = "60px";
classicalimg2.style.marginLeft = "10px";
classicalDiv2.appendChild(classicalimg1);
classicalDiv2.appendChild(classicalimg2);

var classicalButton = document.createElement("div");
classicalButton.style.textAlign = "center";
var classicalButtonText = document.createTextNode("visit");
classicalButton.appendChild(classicalButtonText);
classicalButton.style.background = "deeppink";
classicalButton.addEventListener("mouseenter",function () {
    classicalButton.style.background = "pink";
});
classicalButton.addEventListener("mouseout",function () {
    classicalButton.style.background = "deeppink";
});
classicalButton.style.color = "ghostwhite";
classicalButton.style.fontSize = "24px";
classicalButton.style.marginTop = "10px";
classicalButton.style.height = "32px";

Classical.appendChild(classicalTag);
Classical.appendChild(classicalDiv1);
Classical.appendChild(classicalDiv2);
Classical.appendChild(classicalButton);

var Abstract = document.createElement("div");
Abstract.style.background = "mediumpurple";
Abstract.style.padding = "30px 20px 30px 30px";
Abstract.style.margin = "20px auto 20px auto";

var abstractTag = document.createElement("p");
var abstractText = document.createTextNode("Genre: Abstract");
abstractTag.style.background = "mediumpurple";
abstractTag.style.color = "ghostwhite"
abstractTag.appendChild(abstractText);

var abstractDiv1 = document.createElement("div");
var abstractdiv1Text = document.createTextNode("John Herry UY");
var abstractdiv1tag = document.createElement("span");
var abstractdiv1tagText = document.createTextNode("lifetime:1894-1928");
abstractdiv1tag.appendChild(abstractdiv1tagText);
abstractDiv1.appendChild(abstractdiv1Text);
abstractDiv1.appendChild(abstractdiv1tag);
abstractDiv1.style.background = "lightblue";
abstractDiv1.style.height = "40px";
abstractDiv1.style.fontSize = "24px"
abstractDiv1.style.paddingLeft = "10px";
abstractDiv1.style.marginTop = "20px";
abstractdiv1tag.style.marginLeft = "10px";
abstractdiv1tag.style.fontSize = "16px";


var abstractDiv2 = document.createElement("div");
var abstractDiv2P = document.createElement("p");
var abstractdiv2Text = document.createTextNode("Popular Photos");
abstractDiv2P.appendChild(abstractdiv2Text);
abstractDiv2.appendChild(abstractDiv2P);
abstractDiv2.style.fontSize = "30px";
abstractDiv2.style.background = "lightblue";
abstractDiv2.style.marginTop = "10px";
abstractDiv2.style.paddingLeft = "10px";
var abstractimg1 = document.createElement("img");
abstractimg1.src = "abstract1.jpg";
abstractimg1.style.width = "60px";
abstractimg1.style.height = "60px";
abstractimg1.style.marginLeft = "10px";
var abstractimg2 = document.createElement("img");
abstractimg2.src = "abstract2.jpg"
abstractimg2.style.width = "60px";
abstractimg2.style.height = "60px";
abstractimg2.style.marginLeft = "10px";
var abstractimg3 = document.createElement("img");
abstractimg3.src = "abstract3.jpg"
abstractimg3.style.width = "60px";
abstractimg3.style.height = "60px";
abstractimg3.style.marginLeft = "10px";
var abstractimg4 = document.createElement("img");
abstractimg4.src = "abstract4.jpg"
abstractimg4.style.width = "60px";
abstractimg4.style.height = "60px";
abstractimg4.style.marginLeft = "10px";
var abstractimg5 = document.createElement("img");
abstractimg5.src = "abstract5.jpg"
abstractimg5.style.width = "60px";
abstractimg5.style.height = "60px";
abstractimg5.style.marginLeft = "10px";
abstractDiv2.appendChild(abstractimg1);
abstractDiv2.appendChild(abstractimg2);
abstractDiv2.appendChild(abstractimg3);
abstractDiv2.appendChild(abstractimg4);
abstractDiv2.appendChild(abstractimg5);

var abstractButton = document.createElement("div");
abstractButton.style.textAlign = "center";
var abstractButtonText = document.createTextNode("visit");
abstractButton.appendChild(abstractButtonText);
abstractButton.style.background = "deeppink";
abstractButton.addEventListener("mouseenter",function () {
    abstractButton.style.background = "pink";
});
abstractButton.addEventListener("mouseout",function () {
    abstractButton.style.background = "deeppink";
});
abstractButton.style.color = "ghostwhite";
abstractButton.style.fontSize = "24px";
abstractButton.style.marginTop = "10px";
abstractButton.style.height = "32px";

Abstract.appendChild(abstractTag);
Abstract.appendChild(abstractDiv1);
Abstract.appendChild(abstractDiv2);
Abstract.appendChild(abstractButton);

var Beauty = document.createElement("div");
Beauty.style.background = "mediumpurple";
Beauty.style.padding = "30px 20px 30px 30px";
Beauty.style.margin = "20px auto 20px auto";

var beautyTag = document.createElement("p");
var beautyText = document.createTextNode("Genre: Beauty");
beautyTag.style.background = "mediumpurple";
beautyTag.style.color = "ghostwhite"
beautyTag.appendChild(beautyText);

var beautyDiv1 = document.createElement("div");
var beautydiv1Text = document.createTextNode("Coco");
var beautydiv1tag = document.createElement("span");
var beautydiv1tagText = document.createTextNode("lifetime:1777-1799");
beautydiv1tag.appendChild(beautydiv1tagText);
beautyDiv1.appendChild(beautydiv1Text);
beautyDiv1.appendChild(beautydiv1tag);
beautyDiv1.style.background = "lightblue";
beautyDiv1.style.height = "40px";
beautyDiv1.style.fontSize = "24px"
beautyDiv1.style.paddingLeft = "10px";
beautyDiv1.style.marginTop = "20px";
beautydiv1tag.style.marginLeft = "10px";
beautydiv1tag.style.fontSize = "16px";


var beautyDiv2 = document.createElement("div");
var beautyDiv2P = document.createElement("p");
var beautydiv2Text = document.createTextNode("Popular Photos");
beautyDiv2P.appendChild(beautydiv2Text);
beautyDiv2.appendChild(beautyDiv2P);
beautyDiv2.style.fontSize = "30px";
beautyDiv2.style.background = "lightblue";
beautyDiv2.style.marginTop = "10px";
beautyDiv2.style.paddingLeft = "10px";
var beautyimg1 = document.createElement("img");
beautyimg1.src = "beauty1.jpg";
beautyimg1.style.width = "60px";
beautyimg1.style.height = "60px";
beautyimg1.style.marginLeft = "10px";
var beautyimg2 = document.createElement("img");
beautyimg2.src = "beauty2.jpg"
beautyimg2.style.width = "60px";
beautyimg2.style.height = "60px";
beautyimg2.style.marginLeft = "10px";
beautyDiv2.appendChild(beautyimg1);
beautyDiv2.appendChild(beautyimg2);

var beautyButton = document.createElement("div");
beautyButton.style.textAlign = "center";
var beautyButtonText = document.createTextNode("visit");
beautyButton.appendChild(beautyButtonText);
beautyButton.style.background = "deeppink";
beautyButton.addEventListener("mouseenter",function () {
    beautyButton.style.background = "pink";
});
beautyButton.addEventListener("mouseout",function () {
    beautyButton.style.background = "deeppink";
});
beautyButton.style.color = "ghostwhite";
beautyButton.style.fontSize = "24px";
beautyButton.style.marginTop = "10px";
beautyButton.style.height = "32px";

Beauty.appendChild(beautyTag);
Beauty.appendChild(beautyDiv1);
Beauty.appendChild(beautyDiv2);
Beauty.appendChild(beautyButton);



var body=document.getElementsByTagName("body");
body[0].insertAdjacentElement("beforeend", Human);
body[0].insertAdjacentElement("beforeend",Classical);
body[0].insertAdjacentElement("beforeend", Abstract);
body[0].insertAdjacentElement("beforeend", Beauty);