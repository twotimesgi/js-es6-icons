let iconsDB = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: null
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: null
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: null
	}
];

let containerHTML = document.getElementById("js-container");
let categories = ["All"];
let selectHTML = document.getElementById("select-category");
assignColor(iconsDB);
renderHTLM(iconsDB);
getCategories(iconsDB);

selectHTML.addEventListener("change", function(e){
    filterBy(selectHTML.value);
});

function filterBy(category){
    let filteredIcons;

    if(category != "All"){
    filteredIcons = iconsDB.filter((icon) => category == icon.type);
    }else{
    filteredIcons = iconsDB;
    }

    renderHTLM(filteredIcons); 
}

function renderHTLM(arr){
    containerHTML.innerHTML = "";    
    for (let i = 0; i < arr.length; i++){
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `<i style="color: ${arr[i].color};" class="${arr[i].family} ${arr[i].prefix+arr[i].name}"></i>
                        <span>${arr[i].name}</span>`;
        containerHTML.append(item);
    }
}

function getCategories(arr){
    arr.forEach((icon) => {
        if(!categories.includes(icon.type)){
             categories.push(icon.type);
             let option = document.createElement("option");
             option.value = icon.type;
             option.innerHTML = icon.type;
             selectHTML.append(option);
        }
    });
}


function assignColor(arr){
	arr.forEach(icon => {
		if(icon.color == null){
			let randomColor = Math.floor(Math.random()*16777215).toString(16);
			icon.color = "#" + randomColor;
		}
	});
}