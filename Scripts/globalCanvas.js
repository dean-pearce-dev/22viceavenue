//Setting up the canvas
var canvas = document.getElementById("bgCanvas");
var context = canvas.getContext("2d");
canvas.width = 1600;
canvas.height = 900;
canvas.style.display = 'block';
canvas.style.marginLeft = "auto";
canvas.style.marginRight = "auto";
canvas.style.border = "3px solid black";

//Variable for tracking multiple state of the game
//Full description of each variable is available above function clickEvent in the clickListeners script
var gameState = 0;
var convoState = 0;
var questionState = false;
var questionSet = 1;
var fwArrowVis = false;
var backArrowVis = false;
var showAnswer = false;
var answerNum = 0;
var questionsAsked = 0;
var fateChoice = false;
var secondChance = false;
var killTracker = 0;
var confirmKill = false;
var currentSpeaker = 0;
var speakerDisplay = false;

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;

//Creating variables for each image
var mainScreen = new Image();
var startButton = new Image();
var creditsButton = new Image();
var backButton = new Image();
var playAgainButton = new Image();
var menuButton = new Image();
var fwArrow = new Image();
var backArrow = new Image();
var transHeader = new Image();
var transBox = new Image();
var restartButton = new Image();
var killButton = new Image();
var spareButton = new Image();
var yesButton = new Image();
var noButton = new Image();
var harryPortrait = new Image();
var henryPortrait = new Image();
var harveyPortrait = new Image();
var button1 = new Image();
var button2 = new Image();
var button3 = new Image();
var button4 = new Image();
var button5 = new Image();
var button6 = new Image();

//Defining the source for each image
mainScreen.src = "Images/Main Screens/title-screen.png";
startButton.src = "Images/Buttons/start-game.png";
creditsButton.src = "Images/Buttons/credits.png";
backButton.src = "Images/Buttons/back.png";
playAgainButton.src = "Images/Buttons/playagain-button.png"
menuButton.src = "Images/Buttons/menu-button.png"
fwArrow.src = "Images/Buttons/fwarrow.png";
backArrow.src = "Images/Buttons/backarrow.png";
transHeader.src = "Images/Misc/transparent-header.png";
transBox.src = "Images/Misc/transparentbox.png";
restartButton.src = "Images/Buttons/restart.png";
killButton.src = "Images/Buttons/kill-button.png";
spareButton.src = "Images/Buttons/spare-button.png";
yesButton.src = "Images/Buttons/yes-button.png";
noButton.src = "Images/Buttons/no-button.png";
harryPortrait.src = "Images/Misc/harry-portrait.png";
henryPortrait.src = "Images/Misc/henry-portrait.png";
harveyPortrait.src = "Images/Misc/harvey-portrait.png";
button1.src = "Images/Buttons/1box.png";
button2.src = "Images/Buttons/2box.png";
button3.src = "Images/Buttons/3box.png";
button4.src = "Images/Buttons/4box.png";
button5.src = "Images/Buttons/5box.png";
button6.src = "Images/Buttons/6box.png";

//Array for character portraits to be used
var charPortrait = [harryPortrait, henryPortrait, harveyPortrait];

//Arrays for conversations to cycle through

//Wake up room convo
var firstConvo = ["\"So... You're finally awake. Welcome to 22 Vice Avenue. Now we can get down to business.\"",
    "\"We understand you have many questions...\"",
    "\"You'll have a chance to ask them later.\"",
    "\"For now, just listen to what we have to say.\"",
    "\"We have a test for you.\"",
    "\"We are holding captive three people who have wronged us.\"",
    "\"We shall ask you to decide each of their fates.\"",
    "\"After you have made your decisions, you will be judged accordingly.\"",
    "\"For each captive, you may ask us one question each.\"",
    "\"Use this information wisely to make your decisions.\"",
    "\"Are you ready to get started?\"", "\"That is most... disappointing.\"",
    "\"Well we'll have no use for you here, time for you to leave.\"",
    "\"Great, Let's begin. Meet us in the next room.\"",
    "\"Good, join us in the next room.\""];

//Room 1 convo
var secondConvo = ["\"Welcome to the first test.\"",
    "\"Before you is our first wrong-doer.\"",
    "\"Ask us one question each.\"",
    "\"Then make your decision.\"",
    "",
    "\"As you wish.\"",
    "The man is carried into another room. You are ushered into a different room."];

//Room 2 Convo
var thirdConvo = ["\"This is the second test. Are you ready to continue?\"",
    "\"Good, let's begin\"",
    "",
    "\"Interesting.\"",
    "The man is carried into the next room. You are directed to the final room."];

//Room 3 Convo
var fourthConvo = ["\"Time for your final test. Are you ready to continue?\"",
    "\"Great, let's get on with it then.\"",
    "",
    "\"Hmmm...\"",
    "\"It's time for your evaluation. Follow us.\"",
    "You follow the strangers into a dark room which is impossible to see in."];

//Convo for ending outcome 1
var convoEnding1 = ["\"You have exceeded our expectations.\"",
    "\"We will process your employment in due time.\"",
    "\"For now, go to sleep, we will wake you when we need you.\"",
    "You awaken in your bed gasping for air.",
    "You want to believe what you just experienced was a dream...",
    "but you can't shake the feeling that you're dreaming right now,",
    "and that what you experienced whilst you were asleep was in fact reality."];

//Convo for ending outcome 2
var convoEnding2 = ["\"You show a lot of promise...\"",
    "\"However, we have better candidates on the table right now.\"",
    "\"We may re-evaluate your potential in the future...\"",
    "\"But for now, it's time for you to wake up.\"",
    "You awaken in your bed.",
    "You try to recall the dream you just had, but it only makes you feel confused.",
    "You have an uneasy feeling, like someone is watching you.",
    "You attempt to get back to sleep, but you don't feel like you'll get much sleep tonight."];

//Convo for ending outcome 3
var convoEnding3 = ["\"This really is disappointing.\"",
    "\"We had such high hopes for you...\"",
    "\"Such high hopes indeed.\"",
    "\"Oh well. Time for you to leave.\"",
    "You awaken in your bed.",
    "You feel like you've had the strangest dream, but you can't quite recall it.",
    "It's the middle of the night, so you decide to go back to sleep."]

//Array for which character is speaking
var speakerTag = ["Harry", "Henry", "Harvey"];

//Questions array
//0-5 First Set
//6-11 Second Set
//12-17 Third Set
var questions = ["1. What is his name?",
    "2. How old is he?",
    "3. What did he do?",
    "4. What is his job?",
    "5. Who are you people?",
    "6. What do you want from me?",
    "1. What is his name?",
    "2. How old is he?",
    "3. What did he do?",
    "4. What is his job?",
    "5. How did I get here?",
    "6. Why are you doing this?",
    "1. What is his name?",
    "2. How old is he?",
    "3. What did he do?",
    "4. What is his job?",
    "5. Is this real?",
    "6. What are you going to do with me?",];

//0-5 Answers to first set of questions
//6-11 Answers to second set of questions
//12-17 Answers to third set of questions
var answers = Object.freeze([
    { "answer": "\"Johnathan Barnes.\"", "asked": "false"},
    { "answer": "\"28\"", "asked": "false"},
    { "answer": "\"He stole from us an item which is most coveted.\"", "asked": "false"},
    { "answer": "\"He is a lawyer.\"", "asked": "false"},
    { "answer": "\"We are eternal.\"", "asked": "false"},
    { "answer": "\"We want to evaluate your potential.\"", "asked": "false"},
    { "answer": "\"Anthony Andrews.\"", "asked": "false"},
    { "answer": "\"47\"", "asked": "false"},
    { "answer": "\"He conspired to bring down our organization.\"", "asked": "false"},
    { "answer": "\"His employment was recently terminated, by us.\"", "asked": "false"},
    { "answer": "\"The same way you'll leave.\"", "asked": "false"},
    { "answer": "\"Why do any of us do anything? It is in our nature.\"", "asked": "false"},
    { "answer": "\"Tommy Johnson\"", "asked": "false"},
    { "answer": "\"21\"", "asked": "false"},
    { "answer": "\"He murdered one of our associates in cold blood.\"", "asked": "false"},
    { "answer": "\"Government Agent.\"", "asked": "false"},
    { "answer": "\"Define real.\"", "asked": "false"},
    { "answer": "\"We will make a decision at the conclusion of this test.\"", "asked": "false"}]);

//Object array for button position variables
// 0 = Start Button & Restart Button, 1 = Credits Button, 2 = Back Button, 3 = Forward Arrow, 4-9 = Numbered box buttons, 10-11 = Kill and Spare buttons
var buttonPos = Object.freeze([
    { "xStart": 650, "yStart": 500, "xClickStart": 818, "xClickEnd": 1118, "yClickStart": 510, "yClickEnd": 610 },
    { "xStart": 650, "yStart": 700, "xClickStart": 818, "xClickEnd": 1118, "yClickStart": 710, "yClickEnd": 810 },
    { "xStart": 650, "yStart": 700, "xClickStart": 818, "xClickEnd": 1118, "yClickStart": 710, "yClickEnd": 810 },
    { "xStart": 1450, "yStart": 750, "xClickStart": 1618, "xClickEnd": 1718, "yClickStart": 760, "yClickEnd": 860 },
    { "xStart": 1300, "yStart": 715, "xClickStart": 1468, "xClickEnd": 1543, "yClickStart": 730, "yClickEnd": 805 },
    { "xStart": 1400, "yStart": 715, "xClickStart": 1568, "xClickEnd": 1643, "yClickStart": 730, "yClickEnd": 805 },
    { "xStart": 1500, "yStart": 715, "xClickStart": 1668, "xClickEnd": 1743, "yClickStart": 730, "yClickEnd": 805 },
    { "xStart": 1300, "yStart": 815, "xClickStart": 1468, "xClickEnd": 1543, "yClickStart": 830, "yClickEnd": 905 },
    { "xStart": 1400, "yStart": 815, "xClickStart": 1568, "xClickEnd": 1643, "yClickStart": 830, "yClickEnd": 905 },
    { "xStart": 1500, "yStart": 815, "xClickStart": 1668, "xClickEnd": 1743, "yClickStart": 830, "yClickEnd": 905 },
    { "xStart": 400, "yStart": 775, "xClickStart": 570, "xClickEnd": 790, "yClickStart": 785, "yClickEnd": 860 },
    { "xStart": 900, "yStart": 775, "xClickStart": 1070, "xClickEnd": 1290, "yClickStart": 785, "yClickEnd": 860 }]);