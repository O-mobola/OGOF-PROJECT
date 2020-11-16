
const menu = document.getElementById('menu');
const menu1 = document.getElementById('menu1');
const menuList = document.getElementById('menu-list');
const menuWrap = document.getElementById('menu-wrap');
const figBox = document.getElementById("fig-box");
const fastFood = document.getElementById("fast-food");
const drinks = document.getElementById("drinks");
const chicken = document.getElementById("chicken");
const rice = document.getElementById("rice");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const list = document.getElementsByClassName("list");
//const prylist = document.querySelectorAll(".pry-list");
//const prylist = document.getElementsByClassName("pry-list");
/*const slideElement = document.getElementById("slide");*/

//Navigation open & close

function showMenu() {
	menuList.style.display = "flex";
	menuList.style.opacity = "1";
	menu.style.display = "none";
	menu1.style.display = "flex";
  //menuList.style.opacity = "1";
	//menuList.style.trasitionProperty = "all 3s 2s";
}

menu.addEventListener("click",showMenu);

function closeMenu() {
	menuList.style.display = "none";
	menu1.style.display = "none";
	menu.style.display = "flex";
}

menu1.addEventListener("click", closeMenu);

//Displaying Gallery

//Display Fast-food
function showFastFood() {
  box2.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "none";
	drinks.style.backgroundColor = "grey";
  drinks.style.color = "white";
  chicken.style.backgroundColor = "grey";
  chicken.style.color = "white";
  rice.style.backgroundColor = "grey";
  rice.style.color = "white";
	fastFood.style.backgroundColor = "white";
  fastFood.style.color = "black";
	box1.style.display = "flex";
	showTrans();
	showBox();
}

//Display Drinks
function showDrinks() {
	box1.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "none";
	fastFood.style.backgroundColor = "grey";
  fastFood.style.color = "white";
	chicken.style.backgroundColor = "grey";
  chicken.style.color = "white";
	rice.style.backgroundColor = "grey";
  rice.style.color = "white";
	box2.style.display = "flex";
	drinks.style.backgroundColor = "white";
  drinks.style.color = "black";
  //box2.style.opacity = "1";
  showTrans();
  showBox();
  //box1.style.transitionProperty= "opacity 2s 1s";
}

//Display Chicken
function showChicken() {
	box1.style.display = "none";
	box2.style.display = "none";
	box4.style.display = "none";
	fastFood.style.backgroundColor = "grey";
  fastFood.style.color = "white";
	drinks.style.backgroundColor = "grey";
  drinks.style.color = "white";
  rice.style.backgroundColor = "grey";
  rice.style.color = "white";
	box3.style.display = "flex";
	chicken.style.backgroundColor = "white";
  chicken.style.color = "black";
  //box3.style.opacity = "1";
  showTrans();
	showBox();
  //list.style.transition= "opacity 2s 1s";
}

//Display Rice
function showRice() {
	box1.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "none";
	fastFood.style.backgroundColor = "grey";
  fastFood.style.color = "white";
	drinks.style.backgroundColor = "grey";
  drinks.style.color = "white";
  chicken.style.backgroundColor = "grey";
  chicken.style.color = "white";
	box4.style.display = "flex";
	rice.style.backgroundColor = "white";
  rice.style.color = "black";
  //box4.style.opacity = "1";
  showTrans();
  showBox();
}


/*const slide = document.getElementById('slide');*/
/*const p3 = document.getElementById('p3');*/


let count = 1;
showGallery(count);

function slideBut(n) {
	//slider button to be true or false i.e 1 or 0
	showGallery(count += n);
	
}

function showGallery (n) {
	let index;
	//get all elements with the class name p
	const slideElement = document.getElementsByClassName('myslide');
		

	//console.log(slideElement.length); test if iteration works
	
	//condition to iterate through all elements with class p
	if(n > slideElement.length) {
		count = 1;
	}
	
	if(n < 1) {
		count = slideElement.length;
	}
	//iteration
for(index =0;  index < slideElement.length; index++){
	
	slideElement[index].style.display = "none";
	
}
slideElement[count-1].style.display = "block";
/*setInterval(()=> {slide.innerHTML}, 2000);*/
}


function showTrans() {
	fastFood.style.opacity ="1";
	chicken.style.opacity ="1";
	drinks.style.opacity ="1";
	rice.style.opacity ="1";
}


function showBox() {
	//box1.style.display ="flex";
	box1.style.opacity ="1";
	//box2.style.display ="none";
	box2.style.opacity ="1";
	//box3.style.display="none";
	box3.style.opacity ="1";
	//box4.style.display ="none";
	box4.style.opacity ="1";
}


const imgBox= document.querySelector(".img-box");

function showCol(){
	//const imgBox= document.querySelector(".img-box");
	imgBox.style.animation = "colBox 3s 3s ease 1 backward";
}

imgBox.addEventListener('scroll', showCol);

const drinkElement = document.getElementById("drink");
function showDrink(){
	//const drink = document.getElementById("drink");
	drinkElement.style.animation ="drinks 2s 2s ease-in 2 normal backward";
}

drinkElement.addEventListener("scroll", showDrink);

/* i want to use opacity to fade in but it doesnt work
function showBox2() {
	//box1.style.display ="none";
	box1.style.opacity ="0";
	//box2.style.display ="flex";
	box2.style.opacity ="1";
	//box3.style.display="none";
	box3.style.opacity ="0";
	//box4.style.display ="none";
	box4.style.opacity ="0";
}
function showBox3() {
	//box1.style.display ="none";
	box1.style.opacity ="0";
	//box2.style.display ="none";
	box2.style.opacity ="0";
	//box3.style.display ="flex";
	box3.style.opacity ="1";
	//box4.style.display ="none";
	box4.style.opacity ="0";
}

function showBox4() {
	//box1.style.display ="none";
	box1.style.opacity ="0";
	//box2.style.display ="none";
	box2.style.opacity ="o";
	//box3.style.display="none";
	box3.style.opacity ="0";
	//box4.style.display ="flex";
	box4.style.opacity ="1";
}
*/