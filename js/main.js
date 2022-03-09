let containerHTML = document.getElementById("js-container");

for (let i = 0; i < iconsDB.length; i++) {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `<i style="color: ${iconsDB[i].color};" class="${iconsDB[i].family} ${iconsDB[i].prefix+iconsDB[i].name}"></i>
                      <span>${iconsDB[i].name}</span>`;
    containerHTML.append(item);
}

