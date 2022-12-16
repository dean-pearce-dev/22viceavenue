//Listens for a click event on the canvas, and runs the clickEvent function
canvas.addEventListener("click", clickEvent, false);

//Checks the current speaker count, and resets it to 0 after 3 so that it can be looped
function loopSpeaker()
{
    if (currentSpeaker == 2)
    {
        currentSpeaker = 0;
    }
    else
    {
        currentSpeaker++;
    }
}

//Checks whether the speaker name and portrait should be displayed
function speakerDisplayCheck()
{
    if (gameState < 7 && speakerDisplay == false)
    {
        speakerDisplay = true;
    }

    else if (convoState == 6 && gameState == 4)
    {
        speakerDisplay = false;
    }

    else if (convoState == 4 && gameState == 5)
    {
        speakerDisplay = false;
    }

    else if (convoState == 5 && gameState == 6)
    {
        speakerDisplay = false;
    }

    else if (convoState >= 3 && gameState == 7)
    {
        speakerDisplay = false;
    }

    else if (convoState >= 4 && gameState == 8)
    {
        speakerDisplay = false;
    }

    else if (convoState >= 4 && gameState == 9)
    {
        speakerDisplay = false;
    }
}

//Resets the various game states, runs when player hits restart, menu, or play again
function resetGame()
{
    convoState = 0;
    questionState = false;
    questionSet = 1;
    showAnswer = false;
    answerNum = 0;
    questionsAsked = 0;
    fateChoice = false;
    secondChance = false;
    killTracker = 0;
    confirmKill = false;
    currentSpeaker = 0;

    for (let i = 0; i < answers.length; i++)
    {
        answers[i].asked = "false";
    }
}

//Gets the X and Y position of the mouse, if else statements are to check the various conditions, then makes the necessary changes on click
//gameState 0 = Menu, 1 = Credits, 2 = Wake Up Room, 3 = Game Over, 4 = Room 1, 5 = Room 2, 6 = Room 3, 7 = Ending 1, 8 = Ending 2, 9 = Ending 3, 10 = End Game Screen
//convoState is for cycling through the conversation arrays
//questionSet determines what set of questions are being used
//questionState determines whether or not to show the questions and answer buttons
//showAnswer is to display the answer to the player's question
//fwArrowVis enables the Forward Arrow
//fateChoice is to enable the 'Kill' or 'Spare' choice
//secondChance is to confirm the player's fate choice
//killTracker tracks how many times the player chose kill
//confirmKill is used to confirm that the player has picked 'Kill'
//currentSpeaker is to decide what array is used from speakerTag
//speakerDisplay is to determine whether or not the speaker picture and text should appear
function clickEvent()
{
    //var mouseX = event.pageX;
    var mouseX = findXPointOnCanvas(event.clientX);
    //var mouseY = event.pageY;
    var mouseY = findYPointOnCanvas(event.clientY);
    console.log("Mouse X: " + mouseX);
    console.log("Mouse Y: " + mouseY);

    //Start button
    if (gameState == 0 && mouseX >= buttonPos[0].xStart && mouseX <= buttonPos[0].xEnd && mouseY >= buttonPos[0].yStart && mouseY <= buttonPos[0].yEnd) 
    {
        gameState = 2;
        fwArrowVis = true;
        speakerDisplayCheck();
    }

    //Menu button at the end of the game
    if (gameState == 10 && mouseX >= buttonPos[0].xStart && mouseX <= buttonPos[0].xEnd && mouseY >= buttonPos[0].yStart && mouseY <= buttonPos[0].yEnd) 
    {
        gameState = 0;
        fwArrowVis = false;
        resetGame()
    }

    //Play Again button at the end of the game, loads into the first room, and resets all the game states
    else if (gameState == 10 && mouseX >= buttonPos[1].xStart && mouseX <= buttonPos[1].xEnd && mouseY >= buttonPos[1].yStart && mouseY <= buttonPos[1].yEnd) 
    {
        gameState = 2;
        speakerDisplayCheck();
        fwArrowVis = true;
        resetGame()
    }

    //Credits Button
    else if (gameState == 0 && mouseX >= buttonPos[1].xStart && mouseX <= buttonPos[1].xEnd && mouseY >= buttonPos[1].yStart && mouseY <= buttonPos[1].yEnd) 
    {
        gameState = 1;
    }

    //Back button on credits screen
    else if (gameState == 1 && mouseX >= buttonPos[2].xStart && mouseX <= buttonPos[2].xEnd && mouseY >= buttonPos[2].yStart && mouseY <= buttonPos[2].yEnd) 
    {
        gameState = 0;
    }

    //Arrow to first dialogue choice in wake up room
    else if (convoState == 9 && gameState == 2 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd) 
    {
        convoState++
        loopSpeaker();
        fwArrowVis = false;
    }

    //Number 1 button in wake up room
    else if (convoState == 10 && gameState == 2 && mouseX >= buttonPos[4].xStart && mouseX <= buttonPos[4].xEnd && mouseY >= buttonPos[4].yStart && mouseY <= buttonPos[4].yEnd) 
    {
        loopSpeaker();
        convoState = 13;
        fwArrowVis = true;
    }

    //Number 2 button in wake up room
    else if (convoState == 10 && gameState == 2 && mouseX >= buttonPos[5].xStart && mouseX <= buttonPos[5].xEnd && mouseY >= buttonPos[5].yStart && mouseY <= buttonPos[5].yEnd) 
    {
        loopSpeaker();
        convoState = 14;
        fwArrowVis = true;
    }

    //Number 3 button in wake up room
    else if (convoState == 10 && gameState == 2 && mouseX >= buttonPos[6].xStart && mouseX <= buttonPos[6].xEnd && mouseY >= buttonPos[6].yStart && mouseY <= buttonPos[6].yEnd) 
    {
        loopSpeaker();
        convoState = 11;
        fwArrowVis = true;
    }

    //Arrow button to play the game over state after dialogue option 3 in wake up room
    else if (convoState == 12 && gameState == 2 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        gameState = 3;
        fwArrowVis = false;
        speakerDisplay = false;
    }

    //Restart button on game over screen
    else if (gameState == 3 && mouseX >= buttonPos[0].xStart && mouseX <= buttonPos[0].xEnd && mouseY >= buttonPos[0].yStart && mouseY <= buttonPos[0].yEnd)
    {
        gameState = 0;
        fwArrowVis = false;
        speakerDisplay = false;
        resetGame();
    }

    //Arrow button after dialogue options 1 & 2
    else if (convoState > 12 && gameState == 2 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        loopSpeaker();
        gameState = 4;
        convoState = 0;
    }

    //Arrow button to move to room 2
    else if (convoState == 6 && gameState == 4 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        speakerDisplayCheck();
        loopSpeaker();
        gameState = 5;
        convoState = 0;
    }

    //Arrow button to move to room 3
    else if (convoState == 4 && gameState == 5 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        speakerDisplayCheck();
        loopSpeaker();
        gameState = 6;
        convoState = 0;
    }

    //Arrow button to ending 1 in room 3
    else if (killTracker == 3 && convoState == 5 && gameState == 6 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        speakerDisplayCheck();
        loopSpeaker();
        gameState = 7;
        convoState = 0;
    }

    //Arrow button to ending 2 in room 3
    else if (killTracker < 3 && killTracker > 0 && convoState == 5 && gameState == 6 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        speakerDisplayCheck();
        loopSpeaker();
        gameState = 8;
        convoState = 0;
    }

    //Arrow button to ending 3 in room 3
    else if (killTracker == 0 && convoState == 5 && gameState == 6 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        speakerDisplayCheck();
        loopSpeaker();
        gameState = 9;
        convoState = 0;
    }

    //Arrow button to end screen from ending 1
    else if (convoState == 6 && gameState == 7 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        speakerDisplay = false;
        gameState = 10;
        convoState = 0;
        fwArrowVis = false;
    }

    //Arrow button to end screen from ending 2
    else if (convoState == 7 && gameState == 8 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        speakerDisplay = false;
        gameState = 10;
        convoState = 0;
        fwArrowVis = false;
    }

    //Arrow button to end screen from ending 3
    else if (convoState == 6 && gameState == 9 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        speakerDisplay = false;
        gameState = 10;
        convoState = 0;
        fwArrowVis = false;
    }

    //Arrow button to questions in room 3
    else if (convoState == 1 && gameState == 6 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        convoState++;
        questionState = true;
        fwArrowVis = false;
        questionSet = 3;
    }

    //Arrow button to questions in room 2
    else if (convoState == 1 && gameState == 5 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        convoState++;
        questionState = true;
        fwArrowVis = false;
        questionSet = 2;
    }

    //Arrow button to questions in room 1
    else if (fateChoice === false && questionsAsked === 0 && questionState === false && showAnswer === false && convoState == 3 && gameState == 4 && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        convoState = 4;
        questionState = true;
        fwArrowVis = false;
    }

    //Back button on answer display
    else if (questionsAsked < 3 && questionState === false && showAnswer === true && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        showAnswer = false;
        questionState = true;
        backArrowVis = false;
    }

    //Back button if three questions have been asked
    else if (questionsAsked === 3 && questionState === false && showAnswer === true && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        speakerDisplay = false;
        showAnswer = false;
        questionState = false;
        questionsAsked = 0;
        backArrowVis = false;
        fateChoice = true;
    }

    //Number 1 button for questions
    else if (questionState === true && answers[(questionSet * 6) - 6].asked === "false" && mouseX >= buttonPos[4].xStart && mouseX <= buttonPos[4].xEnd && mouseY >= buttonPos[4].yStart && mouseY <= buttonPos[4].yEnd)
    {
        questionsAsked++;
        showAnswer = true;
        answerNum = (questionSet * 6) - 6;
        answers[answerNum].asked = "true";
        questionState = false;
        backArrowVis = true;
    }

    //Number 2 button for questions
    else if (questionState === true && answers[(questionSet * 6) - 5].asked === "false" && mouseX >= buttonPos[5].xStart && mouseX <= buttonPos[5].xEnd && mouseY >= buttonPos[5].yStart && mouseY <= buttonPos[5].yEnd)
    {
        questionsAsked++;
        showAnswer = true;
        answerNum = (questionSet * 6) - 5;
        answers[answerNum].asked = "true";
        questionState = false;
        backArrowVis = true;
    }

    //Number 3 button for questions
    else if (questionState === true && answers[(questionSet * 6) - 4].asked === "false" && mouseX >= buttonPos[6].xStart && mouseX <= buttonPos[6].xEnd && mouseY >= buttonPos[6].yStart && mouseY <= buttonPos[6].yEnd)
    {
        questionsAsked++;
        showAnswer = true;
        answerNum = (questionSet * 6) - 4;
        answers[answerNum].asked = "true";
        questionState = false;
        backArrowVis = true;
    }

    //Number 4 button for questions
    else if (questionState === true && answers[(questionSet * 6) - 3].asked === "false" && mouseX >= buttonPos[7].xStart && mouseX <= buttonPos[7].xEnd && mouseY >= buttonPos[7].yStart && mouseY <= buttonPos[7].yEnd)
    {
        questionsAsked++;
        showAnswer = true;
        answerNum = (questionSet * 6) - 3;
        answers[answerNum].asked = "true";
        questionState = false;
        backArrowVis = true;
    }

    //Number 5 button for questions
    else if (questionState === true && answers[(questionSet * 6) - 2].asked === "false" && mouseX >= buttonPos[8].xStart && mouseX <= buttonPos[8].xEnd && mouseY >= buttonPos[8].yStart && mouseY <= buttonPos[8].yEnd)
    {
        questionsAsked++;
        showAnswer = true;
        answerNum = (questionSet * 6) - 2;
        answers[answerNum].asked = "true";
        questionState = false;
        backArrowVis = true;
    }

    //Number 6 button for questions
    else if (questionState === true && answers[(questionSet * 6) - 1].asked === "false" && mouseX >= buttonPos[9].xStart && mouseX <= buttonPos[9].xEnd && mouseY >= buttonPos[9].yStart && mouseY <= buttonPos[9].yEnd)
    {
        questionsAsked++;
        showAnswer = true;
        answerNum = (questionSet * 6) - 1;
        answers[answerNum].asked = "true";
        questionState = false;
        backArrowVis = true;
    }

    //Forward button to fate choice
    else if (questionsAsked === 3 && questionState === false && showAnswer === false && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd)
    {
        questionsAsked = 0;
        fwArrowVis = false;
        fateChoice = true;
    }

    //Kill button
    else if (fateChoice === true && mouseX >= buttonPos[10].xStart && mouseX <= buttonPos[10].xEnd && mouseY >= buttonPos[10].yStart && mouseY <= buttonPos[10].yEnd)
    {
        fateChoice = false;
        secondChance = true;
        confirmKill = true;
    }

    //Spare button
    else if (fateChoice === true && mouseX >= buttonPos[11].xStart && mouseX <= buttonPos[11].xEnd && mouseY >= buttonPos[11].yStart && mouseY <= buttonPos[11].yEnd)
    {
        fateChoice = false;
        secondChance = true;
        confirmKill = false;
    }

    //Second Chance Yes button for kill at first choice
    else if (secondChance === true && confirmKill === true && gameState == 4 && mouseX >= buttonPos[10].xStart && mouseX <= buttonPos[10].xEnd && mouseY >= buttonPos[10].yStart && mouseY <= buttonPos[10].yEnd)
    {
        speakerDisplayCheck();
        secondChance = false;
        killTracker++;
        fwArrowVis = true;
        convoState = 5;
    }

    //Second Chance Yes button for spare at first choice
    else if (secondChance === true && confirmKill === false && gameState == 4 && mouseX >= buttonPos[10].xStart && mouseX <= buttonPos[10].xEnd && mouseY >= buttonPos[10].yStart && mouseY <= buttonPos[10].yEnd)
    {
        speakerDisplayCheck();
        secondChance = false;
        fwArrowVis = true;
        convoState = 5;
    }

    //Second Chance Yes button for kill at second choice
    else if (secondChance === true && confirmKill === true && gameState == 5 && mouseX >= buttonPos[10].xStart && mouseX <= buttonPos[10].xEnd && mouseY >= buttonPos[10].yStart && mouseY <= buttonPos[10].yEnd)
    {
        speakerDisplayCheck();
        secondChance = false;
        killTracker++;
        fwArrowVis = true;
        convoState = 3;
    }

    //Second Chance Yes button for spare at second choice
    else if (secondChance === true && confirmKill === false && gameState == 5 && mouseX >= buttonPos[10].xStart && mouseX <= buttonPos[10].xEnd && mouseY >= buttonPos[10].yStart && mouseY <= buttonPos[10].yEnd)
    {
        speakerDisplayCheck();
        secondChance = false;
        fwArrowVis = true;
        convoState = 3;
    }

    //Second Chance Yes button for kill at third choice
    else if (secondChance === true && confirmKill === true && gameState == 6 && mouseX >= buttonPos[10].xStart && mouseX <= buttonPos[10].xEnd && mouseY >= buttonPos[10].yStart && mouseY <= buttonPos[10].yEnd)
    {
        speakerDisplayCheck();
        secondChance = false;
        killTracker++;
        fwArrowVis = true;
        convoState = 3;
    }

    //Second Chance Yes button for spare at third choice
    else if (secondChance === true && confirmKill === false && gameState == 6 && mouseX >= buttonPos[10].xStart && mouseX <= buttonPos[10].xEnd && mouseY >= buttonPos[10].yStart && mouseY <= buttonPos[10].yEnd)
    {
        speakerDisplayCheck();
        secondChance = false;
        fwArrowVis = true;
        convoState = 3;
    }

    //Second Chance No button
    else if (secondChance === true && mouseX >= buttonPos[11].xStart && mouseX <= buttonPos[11].xEnd && mouseY >= buttonPos[11].yStart && mouseY <= buttonPos[11].yEnd)
    {
        fateChoice = true;
        secondChance = false;
        confirmKill = false;
    }

    //Arrow button to advance conversations
    else if (fwArrowVis === true && mouseX >= buttonPos[3].xStart && mouseX <= buttonPos[3].xEnd && mouseY >= buttonPos[3].yStart && mouseY <= buttonPos[3].yEnd) 
    {
        convoState++;
        speakerDisplayCheck();
        loopSpeaker();
    }

}