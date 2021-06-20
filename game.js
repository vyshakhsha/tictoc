var restart = document.querySelector('#b');
var square = document.querySelectorAll('td');
var flag = 0
var player=""
var count=0

function clearboard() {
  for (var i = 0; i < square.length; i++) {
    square[i].textContent = '';
  }
  var flag = 0;
  document.querySelector("h2").textContent="";
  count=0
  console.log("Count is"+count)

}

restart.addEventListener('click', clearboard);


function changemaker() {

  if (flag == 0) {
    this.textContent = 'X';
    flag = 1
    player="X"
    win_check()
  } else if (flag == 1) {
    this.textContent = 'O';
    flag = 0
    player="O"
    win_check()
  }
}

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('click', changemaker)
}

// Check if any player won the game

function win_check() {

  //check if X win the GAME

  // checking rows

if ((document.querySelector("#box1").textContent == "X") && (document.querySelector("#box2").textContent == "X") && (document.querySelector("#box3").textContent == "X")) {
    winner(player)
  }
  else if ((document.querySelector("#box4").textContent == "X") && (document.querySelector("#box5").textContent == "X") && (document.querySelector("#box6").textContent == "X")) {
    winner(player)
  }
  else if ((document.querySelector("#box7").textContent == "X") && (document.querySelector("#box8").textContent == "X") && (document.querySelector("#box9").textContent == "X")) {
    winner(player)
  }

  // checking columns

    else if ((document.querySelector("#box1").textContent == "X") && (document.querySelector("#box4").textContent == "X") && (document.querySelector("#box7").textContent == "X")) {
      winner(player)
    }
    else if ((document.querySelector("#box2").textContent == "X") && (document.querySelector("#box5").textContent == "X") && (document.querySelector("#box8").textContent == "X")) {
      winner(player)
    }
    else if ((document.querySelector("#box3").textContent == "X") && (document.querySelector("#box6").textContent == "X") && (document.querySelector("#box9").textContent == "X")) {
      winner(player)
    }

    //checking diagonals

    else if ((document.querySelector("#box1").textContent == "X") && (document.querySelector("#box5").textContent == "X") && (document.querySelector("#box9").textContent == "X")) {
      winner(player)
    }
    else if ((document.querySelector("#box3").textContent == "X") && (document.querySelector("#box5").textContent == "X") && (document.querySelector("#box7").textContent == "X")) {
      winner(player)
    }








      //check if Object win the GAME

      // checking rows

    else if ((document.querySelector("#box1").textContent == "O") && (document.querySelector("#box2").textContent == "O") && (document.querySelector("#box3").textContent == "O")) {
        winner(player)
      }
      else if ((document.querySelector("#box4").textContent == "O") && (document.querySelector("#box5").textContent == "O") && (document.querySelector("#box6").textContent == "O")) {
        winner(player)
      }
      else if ((document.querySelector("#box7").textContent == "O") && (document.querySelector("#box8").textContent == "O") && (document.querySelector("#box9").textContent == "Object()")) {
        winner(player)
      }

      // checking columns

        else if ((document.querySelector("#box1").textContent == "O") && (document.querySelector("#box4").textContent == "O") && (document.querySelector("#box7").textContent == "O")) {
          winner(player)
        }
        else if ((document.querySelector("#box2").textContent == "O") && (document.querySelector("#box5").textContent == "O") && (document.querySelector("#box8").textContent == "O")) {
          winner(player)
        }
        else if ((document.querySelector("#box3").textContent == "O") && (document.querySelector("#box6").textContent == "O") && (document.querySelector("#box9").textContent == "O")) {
          winner(player)
        }

        //checking diagonals

        else if ((document.querySelector("#box1").textContent == "O") && (document.querySelector("#box5").textContent == "O") && (document.querySelector("#box9").textContent == "O")) {
          winner(player)
        }
        else if ((document.querySelector("#box3").textContent == "O") && (document.querySelector("#box5").textContent == "O") && (document.querySelector("#box7").textContent == "O")) {
          winner(player)
        }
        else{
            var check_tie=1;
            for(var j=0;j<9;++j){
              if(square[j].textContent ==''){
                check_tie=0
                break
              }
            }
            if(check_tie===1){
              document.querySelector("h2").textContent="GAME TIED";
            }

        }
}


//Function to print the result

function winner(player){
  document.querySelector("h2").textContent="Player "+player+" won the game";
}
