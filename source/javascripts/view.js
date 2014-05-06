/* Write your JS to modify the view here */
window.onload = function(){
  controller()
}

controller=function(){
  // makeATree = function() {
  //   tree = createTree();
  // document.getElementById("orange-tree-template").style.display="block";

  // }
  model()
  view()
}



view=function(){
  viewInstantiateVars();
  instantiateListeners();
}

viewInstantiateVars = function(){
  plant = document.querySelector(".plant");
  fruitCount = document.querySelector(".fruit-count");
  age_counter = document.querySelector(".age");
  click_pick_button = document.querySelector(".pick");
  click_button_age = document.getElementById("click_button_age");
}

instantiateListeners = function(){
  plant.addEventListener('click', makeATree, false);//makeATree
  click_button_age.addEventListener('click', ageATree, false);
  click_pick_button.addEventListener('click', pickAFruit, false);
}

model = function(){
  makeATree = function() {
    tree = createTree();
    document.getElementById("orange-tree-template").style.display="block";

  }
  ageATree = function() {
    tree.grow();
    fruitCount.textContent = "Fruits: " + tree.orangeCount;
    currentAge = age_counter;
    currentAge.textContent = "Age: " + tree.age;
  }
  pickAFruit = function() {
    fruitCount.textContent = "Fruits:" + (tree.orangeCount -=1 );
  }

}



