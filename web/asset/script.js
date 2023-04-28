





var current_step = 0;

function proceed(){
  console.log(current_step);
  var choice = document.getElementsByTagName("input")[0].value;
  if(current_step == 0){
    console.log("BP 开始");
    start();
    document.getElementById("ban1").className = "ban_img breathing";
    document.getElementsByTagName("button")[0].innerHTML = "ban";
  }
  if(current_step == 1){
    show_ban(choice);
    document.getElementById("ban1").src = "./asset/" + choice + ".png";
    document.getElementById("ban1").className = "ban_img";
    play_ban_effect();
    document.getElementById("ban2").className = "ban_img breathing";
    document.getElementById("ban3").className = "ban_img breathing";
  }
  if(current_step == 2){
    show_ban(choice);
    document.getElementById("ban2").className = "ban_img";
    play_ban_effect();
    document.getElementById("ban2").src = "./asset/" + choice + ".png";
  }
  if(current_step == 3){
    show_ban(choice);
    document.getElementById("ban3").className = "ban_img";
    play_ban_effect();
    document.getElementById("ban3").src = "./asset/" + choice + ".png";
    document.getElementById("ban4").className = "ban_img breathing";
    document.getElementById("ban5").className = "ban_img breathing";
  }
  if(current_step == 4){
    show_ban(choice);
    document.getElementById("ban4").className = "ban_img";
    play_ban_effect();
    document.getElementById("ban4").src = "./asset/" + choice + ".png";
  }
  if(current_step == 5){
    show_ban(choice);
    document.getElementById("ban5").className = "ban_img";
    play_ban_effect();
    document.getElementById("ban5").src = "./asset/" + choice + ".png";
    document.getElementById("ban6").className = "ban_img breathing";
  }
  if(current_step == 6){
    show_ban(choice);
    document.getElementById("ban6").className = "ban_img";
    play_ban_effect();
    document.getElementById("ban6").src = "./asset/" + choice + ".png";
    document.getElementsByTagName("button")[0].innerHTML = "pick";
    document.getElementById("pick1").className = "pick_img breathing_blue";
  }
  if(current_step == 7){
    document.getElementById("pick1").className = "pick_img";
    document.getElementById("pick1").src = "./asset/" + choice + ".png";
    play_quote(choice);
    document.getElementById("pick2").className = "pick_img breathing_blue";
    document.getElementById("pick3").className = "pick_img breathing_blue";
  }
  if(current_step == 8){
    document.getElementById("pick2").className = "pick_img";
    document.getElementById("pick2").src = "./asset/" + choice + ".png";
    play_quote(choice);
  }
  if(current_step == 9){
    document.getElementById("pick3").className = "pick_img";
    document.getElementById("pick3").src = "./asset/" + choice + ".png";
    play_quote(choice);
    document.getElementById("pick4").className = "pick_img breathing_blue";
    document.getElementById("pick5").className = "pick_img breathing_blue";
  }
  if(current_step == 10){
    document.getElementById("pick4").className = "pick_img";
    document.getElementById("pick4").src = "./asset/" + choice + ".png";
    play_quote(choice);
  }
  if(current_step == 11){
    document.getElementById("pick5").className = "pick_img";
    document.getElementById("pick5").src = "./asset/" + choice + ".png";
    play_quote(choice);
    document.getElementById("pick6").className = "pick_img breathing_blue";
    document.getElementById("pick7").className = "pick_img breathing_blue";
  }
  if(current_step == 12){
    document.getElementById("pick6").className = "pick_img";
    document.getElementById("pick6").src = "./asset/" + choice + ".png";
    play_quote(choice);
  }
  if(current_step == 13){
    document.getElementById("pick7").className = "pick_img";
    document.getElementById("pick7").src = "./asset/" + choice + ".png";
    play_quote(choice);
    document.getElementById("pick8").className = "pick_img breathing_blue";
    document.getElementById("pick9").className = "pick_img breathing_blue";
  }
  if(current_step == 14){
    document.getElementById("pick8").className = "pick_img";
    document.getElementById("pick8").src = "./asset/" + choice + ".png";
    play_quote(choice);
  }
  if(current_step == 15){
    document.getElementById("pick9").className = "pick_img";
    document.getElementById("pick9").src = "./asset/" + choice + ".png";
    play_quote(choice);
    document.getElementById("pick10").className = "pick_img breathing_blue";
  }
  if(current_step == 16){
    document.getElementById("pick10").className = "pick_img";
    document.getElementById("pick10").src = "./asset/" + choice + ".png";
    play_quote(choice);
  }
  current_step++;
}

function start(){
  const bgm = document.getElementById("myAudio");
  bgm.play();
  bgm.volume = 0.2;
}

function show_ban(ban_tar){
  document.getElementById("ban_poster_img").src = "./asset/" + ban_tar + ".png";
  document.getElementById("ban_poster").style.opacity = 1;
  setTimeout(function(){
    document.getElementById("ban_poster").style.opacity = 0;
  },2000)
}

function play_quote(target){
  target = "./asset/" + target + ".mp3";
  var quote = new Audio(target);
  quote.play();
  quote.volume = 1;
}

function play_ban_effect(){
  var ban = new Audio("./asset/ban.mp3");
  ban.play();
}

function pick(){
  var target = document.getElementById("target").value;
  console.log(target);
  document.getElementById("imgg").src = "./asset/" + target + ".png";
  var quote = new Audio("./asset/" + target + ".mp3");
  quote.play();
}
