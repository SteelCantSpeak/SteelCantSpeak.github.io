//{
//    "name": "",
//    "system": "",
//    "overview": "",
//    "links":
//    {
//        "itch.io": ""
//    },
//    "image": ""

//}

let content = `
[
    {
        "name": "Never Leave your Buddy Behind!",
        "system": "Unity",
        "overview": "A Simple Game I made for GMTK 2021 following the theme 'Stuck Together' in which one player controls two characters, having to move further and further into the Void. I used it to test my Rigging and UX Skills.",
        "links":
        {
            "itch.io": "https://steelcantspeak.itch.io/nlybb"
        },
        "image": "images/nlybb.png"

    }
]`;


const jsonObj = JSON.parse(content);
const box = document.getElementById('folio-Content');

for (var i = 0; i < jsonObj.length; i++) {

    

    let keys = Object.keys(jsonObj[i].links);
    let lnkTmp = "";
    for (var j = 0; j < keys.length; j++) {
        lnkTmp += `<a class="button" href="${jsonObj[i].links[keys[j]]}">${keys[j]}</a>`;
    }

    let tmplt = `<div>
                        <h2> ${jsonObj[i].name}</h2>
                        <h3>${jsonObj[i].system}</h3>
                        <div style="margin:auto; width:80%; display: flex; align-items: center; justify-content: center;">
                            <p style = "display: inline-block">${jsonObj[i].overview}</p>
                            <img style = "padding: 15px;max-width:80%; height: 160px;" src="${jsonObj[i].image}" />
                        </div>
                        <div>${lnkTmp}</div>
                        <hr />
                 </div>`;
    box.innerHTML += tmplt;



    //console.log(jsonObj[i]);
}
