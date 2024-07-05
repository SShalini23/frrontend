/*object*/ 
let score =JSON.parse(localStorage.getItem('score')) || {
  //if score is false it will come here else not
    wins:0,
    losses:0,
    ties:0
  };//doesnot reset to zero when loaded the page it will tells the stored value
  updatescore();
 //after reset we dont have anything in the score so it will produce the null
 /*if(!score)//score===null
 {
  score={
    wins:0,
    losses:0,
    ties:0
  };
 }*/
  /*function*/
  let isauto = false;
  let intervalid;
  //const autoplay = () =>{

  //};
  function autoplay()
  {
    if(!isauto)
    {
      intervalid = setInterval(() =>{
        const playerMove=pickCompmove();
        playGame(playerMove);
      },1000);
      isauto=true;
    }
    else
    {
      clearInterval(intervalid);
      isauto=false;
    }
  }
  document.querySelector('.js-rock')
   .addEventListener('click',()=>{
    playGame('rock');
   });

   document.querySelector('.js-paper')
    .addEventListener('click',()=>{
      playGame('paper');
    });

    document.querySelector('.js-scissor')
     .addEventListener('click',()=>{
      playGame('scissors');
     });


  document.body.addEventListener('keydown', (event) =>{
    console.log(event.key);
    if(event.key === 'r')
    {
      playGame('rock');
    }
    else if(event.key === 'p')
    {
      playGame('paper');
    }
    else if(event.key === 's')
    {
      playGame('scissors');
    }
  });
  function playGame(playerMove)
  {
        const compmove=pickCompmove();
        
        let res='';

        if(playerMove === 'scissors')
        {
              if(compmove ==='rock')
              {
                res='You Lose';
              }
              else if(compmove ==='paper')
              {
                res='You Win';
              }
              else if(compmove ==='scissors')
              {
                res='Tie';
              }
        }

        else if(playerMove === 'paper')
        {
              if(compmove ==='rock')
              {
                res='You Win';
              }
              else if(compmove ==='paper')
              {
                res='Tie';
              }
              else if(compmove ==='scissors')
              {
                res='You Lose';
              }
        }
        
        else if(playerMove === 'rock')
        {
              if(compmove ==='rock')
              {
                res='Tie';
              }
              else if(compmove ==='paper')
              {
                res='You Lose';
              }
              else if(compmove ==='scissors')
              {
                res='You Win';
              }
        }
        if(res === 'You Win')
        {
            score.wins+=1;
        }
        else if(res === 'You Lose')
        {
            score.losses+=1;
        }
        else if(res === 'Tie')
        {
            score.ties+=1;
        }

        localStorage.setItem('score',JSON.stringify(score));//storing the value of score in 'score' so that in getitem we get the value..as the score is number but localstorage accepts only string hence we are using the json to convert it into string...
        updatescore();
        
        document.querySelector('.js-result').
        innerHTML = res;

        document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="img"> - <img src="images/${compmove}-emoji.png" class="img"> Computer`;
  }
  function updatescore()
  {
    document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  function pickCompmove()
  {
    const rannum = Math.random();
    let compmove='';
    if(rannum >= 0 && rannum < 1 / 3)
    {
      compmove='rock';
    }
    else if(rannum >= 1/3 && rannum < 2/3)
    {
      compmove='paper';
    }
    else if(rannum >= 2/3 && rannum < 1)
    {
      compmove='scissors';
    }

    return compmove;
  }