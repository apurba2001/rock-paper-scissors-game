let playerScoreCount = 0;
let computerScoreCount = 0;

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const massage = document.getElementById('massage');
const rock_hand = document.getElementById('rock');
const paper_hand = document.getElementById('paper');
const seasor_hand = document.getElementById('seasor');
const footer = document.getElementById('footer');
const restart = document.getElementById('restart');
const use = document.getElementById('p');
const com = document.getElementById('c');
const dis = document.querySelectorAll('.display');
const start_class = document.getElementById('start-class');
const play = document.getElementById('input-form');
const play_btn = document.getElementById('play-btn');
const round_input = document.getElementById('round-input');
const total_round = document.getElementById('entered-r');
const winning_msg = document.getElementById('win-msg');
const child = document.getElementById('child');

play.addEventListener('submit',() => {
    total_round.innerText = round_input.value;
    child.classList.remove('start');
    round_input.value = '';
})
rock_hand.addEventListener('click',()=>{
    let remaining_round = parseInt(total_round.innerText);
    game('r');
    display();
    use.innerText = 'ROCK';
    remaining_round -= 1;
    total_round.innerText = remaining_round;
    end();
})
paper_hand.addEventListener('click',()=>{
    let remaining_round = parseInt(total_round.innerText);
    game('p');
    display();
    use.innerText = 'PAPER';
    remaining_round -= 1;
    total_round.innerText = remaining_round;
    end();
})
seasor_hand.addEventListener('click',()=>{
    let remaining_round = parseInt(total_round.innerText);
    game('s');
    display();
    use.innerText = 'SCISSORS';
    remaining_round -= 1;
    total_round.innerText = remaining_round;
    end();
})
restart.addEventListener('click',()=>{
    window.location.reload();
})

var computerChoice = () =>{
    const choices = ['r','p','s']
    let random = Math.floor(Math.random() * 3)
    display_bord(choices[random]);
    return choices[random];
}

var game = (player_choice) =>{
    const comChoice = computerChoice();
    switch(player_choice + comChoice){
        case 'pr':
        case 'sp':
        case 'rs':
            win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose();
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            drow();
        break;
    }   
}
var win = () =>{
    playerScoreCount += 1;
    playerScore.innerText = playerScoreCount;
    massage.style.color = 'rgb(75, 255, 66)';
    massage.style.display = 'block';
    massage.innerText = 'WON';
    use.style.backgroundColor ='green';
    setTimeout(() => massage.style.display = 'none',2000);
    com.style.backgroundColor = 'red';
}

var lose = () =>{
    computerScoreCount += 1;
    computerScore.innerText = computerScoreCount; 
    massage.style.color = 'rgb(255, 20, 20)';
    massage.style.display = 'block';
    massage.innerText = 'LOSE';
    use.style.backgroundColor = 'red';
    com.style.backgroundColor = 'green';
    setTimeout(() => massage.style.display = 'none',2000);
}

var drow = () =>{
    massage.style.color = 'rgb(174, 177, 177)';
    massage.style.display = 'block';
    massage.innerText = 'TIE';
    use.style.backgroundColor = 'rgb(97, 96, 96)';
    com.style.backgroundColor = 'rgb(97, 96, 96)';
    setTimeout(() => massage.style.display = 'none',2000);
}

var display_bord = (computer) =>{
    let c_massage = '';
    if(computer === 'p') c_massage = 'PAPER';
    else if (computer ==='s') c_massage = 'SCISSORS';
    else  c_massage = 'ROCK';
    com.innerText = c_massage;
}

var display = () =>{
    footer.style.color = 'transparent';
    restart.style.display = 'block';
    Array.from(dis).forEach((e)=>{
        e.style.display = 'flex';
        setTimeout(() =>e.style.display = 'none',2000);
    })
}
var end = () =>{
    let remaining_round = parseInt(total_round.innerText);
    if(remaining_round === 0){
        rock_hand.style.display = 'none';
        paper_hand.style.display = 'none';
        seasor_hand.style.display = 'none';
        setTimeout(() => {
            child.classList.add('end');
            restart.innerText = 'Play again';
        },2100) 
   }
   if(playerScoreCount > computerScoreCount){
        winning_msg.innerText = 'WON';
        winning_msg.style.color = 'rgb(75, 255, 66)';
   }else if(computerScoreCount > playerScoreCount){
        winning_msg.innerText = 'LOSE';
        winning_msg.style.color = 'rgb(255, 20, 20)';
   }else{
        winning_msg.innerText = 'TIE';
        winning_msg.style.color = 'rgb(97, 96, 96)';
   }
}