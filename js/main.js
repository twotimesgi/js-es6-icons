let containerHTML = document.getElementById("js-container");
let categories = [];
let selectHTML = document.getElementById("select-category");
renderHTLM();
getCategories();

selectHTML.addEventListener("click", function(){
    
});

function renderHTLM(){
    for (let i = 0; i < iconsDB.length; i++) {
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `<i style="color: ${iconsDB[i].color};" class="${iconsDB[i].family} ${iconsDB[i].prefix+iconsDB[i].name}"></i>
                        <span>${iconsDB[i].name}</span>`;
        containerHTML.append(item);
    }
}

function getCategories(){
    iconsDB.forEach((icon) => {
        if(!categories.includes(icon.type)){
             categories.push(icon.type);
             let option = document.createElement("option");
             option.value = icon.type;
             option.innerHTML = icon.type;
             selectHTML.append(option);
        }
    });
}