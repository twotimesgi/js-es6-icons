let containerHTML = document.getElementById("js-container");
let categories = [];
let selectHTML = document.getElementById("select-category");
renderHTLM(...iconsDB);
getCategories();

selectHTML.addEventListener("change", function(e){
    filterBy(selectHTML.value);
});

function filterBy(category){
    let filteredIcons = iconsDB.filter((icon) => icon.type == category);
    renderHTLM(...filteredIcons); 
}

function renderHTLM(...arr){
    containerHTML.innerHTML = "";    
    for (let i = 0; i < arr.length; i++){
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `<i style="color: ${arr[i].color};" class="${arr[i].family} ${arr[i].prefix+arr[i].name}"></i>
                        <span>${arr[i].name}</span>`;
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