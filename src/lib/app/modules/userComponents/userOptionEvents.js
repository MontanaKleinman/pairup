import { gameActivate } from "../initiationComponents/gameActivate";

export let userOptionEvents = {

//Select Options Functionality
openOptions: function() {var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("settings__form__select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    userOptionEvents.closeOptions(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
    let players = document.getElementsByName("players")[0].selectedIndex;
    let mode = document.getElementsByName("mode")[0].selectedIndex;
    let difficulty = document.getElementsByName("difficulty")[0].selectedIndex;
    userOptionEvents.completeOptions(players, mode, difficulty)
  }) 
} 
},

closeOptions: function () {
  document.addEventListener("click", function(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  })
  },

completeOptions: function(players, mode, difficulty) {
  let buttonElement = document.getElementById("startGame");
    if ((players > 0 && players < 5) && (mode > 0 && mode < 3) && (difficulty > 0 && difficulty < 5)) {
            buttonElement.classList.remove("button--hidden");
            buttonElement.classList.add("button");  
            gameActivate.startTap(players, mode, difficulty)
        } else {
            buttonElement.classList.remove("button");
            buttonElement.classList.add("button--hidden");
        }  
    } 
    
}

userOptionEvents.openOptions()
userOptionEvents.closeOptions()


