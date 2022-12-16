//Set the function "redraw" to run at 30fps
setInterval(redraw, 1000 / 30);

//Draw the title screen and menu buttons, draws different buttons and images if the corresponding states change
function redraw()
{
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
    context.drawImage(mainScreen, 0, 0, canvas.width, canvas.height);

    //Menu Screen
    if (gameState == 0)
    {
        mainScreen.src = "Images/Main Screens/title-screen.png";
        context.drawImage(startButton, buttonPos[0].xStart, buttonPos[0].yStart, menuButtonWidth, menuButtonHeight);
        context.drawImage(creditsButton, buttonPos[1].xStart, buttonPos[1].yStart, menuButtonWidth, menuButtonHeight);
    }

    //Credits Screen
    else if (gameState == 1)
    {
        mainScreen.src = "Images/Main Screens/credits.png";
        context.drawImage(backButton, buttonPos[2].xStart, buttonPos[2].yStart, menuButtonWidth, menuButtonHeight);
    }

    //Wake Up Room, First Dialogue Choice
    else if (convoState == 10 && gameState == 2)
    {
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(firstConvo[convoState], questionPos[2].xStart, questionPos[2].yStart);
        context.fillText("1. I'm ready.", questionPos[3].xStart, questionPos[3].yStart);
        context.fillText("2. I'll do whatever you say!", questionPos[4].xStart, questionPos[4].yStart);
        context.fillText("3. I'm not doing your dirty work!", questionPos[5].xStart, questionPos[5].yStart);
        context.drawImage(button1, buttonPos[4].xStart, buttonPos[4].yStart, 75, 75);
        context.drawImage(button2, buttonPos[5].xStart, buttonPos[5].yStart, 75, 75);
        context.drawImage(button3, buttonPos[6].xStart, buttonPos[6].yStart, 75, 75);
    }

    //Wake Up Room
    else if (gameState == 2)
    {
        mainScreen.src = "Images/Main Screens/wakeuproom.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New"
        context.fillText(firstConvo[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //Game Over Screen
    else if (gameState == 3)
    {
        mainScreen.src = "Images/Main Screens/bedroom.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.drawImage(restartButton, buttonPos[0].xStart, buttonPos[0].yStart, menuButtonWidth, menuButtonHeight);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText("You awaken in your bed, gasping for air as if you'd just had a nightmare. What you experienced felt so real and yet...", 20, 725);
        context.fillText("You're in your bed at home. It must have just been a dream. It must have.", 20, 750);
    }

    //Room 1
    else if (gameState == 4)
    {
        mainScreen.src = "Images/Main Screens/room1.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(secondConvo[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //Room 2
    else if (gameState == 5)
    {
        mainScreen.src = "Images/Main Screens/room2.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(thirdConvo[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //Room 3
    else if (gameState == 6)
    {
        mainScreen.src = "Images/Main Screens/room3.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(fourthConvo[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //Ending 1 'Bedroom' Screen
    else if (gameState == 7 && convoState >= 3)
    {
        mainScreen.src = "Images/Main Screens/bedroom.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(convoEnding1[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //Ending 1
    else if (gameState == 7)
    {
        mainScreen.src = "Images/Main Screens/finalroom.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(convoEnding1[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //Ending 2 'Bedroom' Screen
    else if (gameState == 8 && convoState >= 4)
    {
        mainScreen.src = "Images/Main Screens/bedroom.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(convoEnding2[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //Ending 2
    else if (gameState == 8)
    {
        mainScreen.src = "Images/Main Screens/finalroom.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(convoEnding2[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //Ending 3 'Bedroom' Screen
    else if (gameState == 9 && convoState >= 4)
    {
        mainScreen.src = "Images/Main Screens/bedroom.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(convoEnding3[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //Ending 3
    else if (gameState == 9)
    {
        mainScreen.src = "Images/Main Screens/finalroom.png";
        context.drawImage(transHeader, questionPos[0].xStart, questionPos[0].yStart);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(convoEnding3[convoState], questionPos[1].xStart, questionPos[1].yStart);
    }

    //End Screen
    else if (gameState == 10)
    {
        mainScreen.src = "Images/Main Screens/endscreen.png";
        context.drawImage(menuButton, buttonPos[0].xStart, buttonPos[0].yStart, menuButtonWidth, menuButtonHeight);
        context.drawImage(playAgainButton, buttonPos[1].xStart, buttonPos[1].yStart, menuButtonWidth, menuButtonHeight);
    }

    //Questions
     while (questionState === true)
    {
        context.font = "20px Courier New";
         context.fillStyle = "#ffffff";
         context.fillText(questions[((questionSet * 6) - 6)], questionPos[3].xStart, questionPos[3].yStart);
         context.fillText(questions[((questionSet * 6) - 5)], questionPos[4].xStart, questionPos[4].yStart);
         context.fillText(questions[((questionSet * 6) - 4)], questionPos[5].xStart, questionPos[5].yStart);
         context.fillText(questions[((questionSet * 6) - 3)], questionPos[6].xStart, questionPos[6].yStart);
         context.fillText(questions[((questionSet * 6) - 2)], questionPos[7].xStart, questionPos[7].yStart);
         context.fillText(questions[((questionSet * 6) - 1)], questionPos[8].xStart, questionPos[8].yStart);
        context.drawImage(button1, buttonPos[4].xStart, buttonPos[4].yStart, 75, 75);
        context.drawImage(button2, buttonPos[5].xStart, buttonPos[5].yStart, 75, 75);
        context.drawImage(button3, buttonPos[6].xStart, buttonPos[6].yStart, 75, 75);
        context.drawImage(button4, buttonPos[7].xStart, buttonPos[7].yStart, 75, 75);
        context.drawImage(button5, buttonPos[8].xStart, buttonPos[8].yStart, 75, 75);
        context.drawImage(button6, buttonPos[9].xStart, buttonPos[9].yStart, 75, 75);
        break;
    }

    //Forward Arrow diplay
    while (fwArrowVis === true)
    {
        context.drawImage(fwArrow, buttonPos[3].xStart, buttonPos[3].yStart, 100, 100);
        break;
    }

    //Back Arrow display
    while (backArrowVis === true)
    {
        context.drawImage(backArrow, buttonPos[3].xStart, buttonPos[3].yStart, 100, 100);
        break;
    }

    //Display answer
    while (showAnswer === true)
    {
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(answers[answerNum].answer, questionPos[3].xStart, questionPos[3].yStart);
        break;
    }

    //Display fate choice
    while (fateChoice === true)
    {
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText("You've asked three questions, you must now make a decision.", questionPos[10].xStart, questionPos[10].yStart);
        context.drawImage(killButton, buttonPos[10].xStart, buttonPos[10].yStart, 225, 75);
        context.drawImage(spareButton, buttonPos[11].xStart, buttonPos[11].yStart, 225, 75);
        break;
    }

    //Display second chance question
    while (secondChance === true)
    {
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText("Are you sure?", questionPos[11].xStart, questionPos[11].yStart);
        context.drawImage(yesButton, buttonPos[10].xStart, buttonPos[10].yStart, 225, 75);
        context.drawImage(noButton, buttonPos[11].xStart, buttonPos[11].yStart, 225, 75);
        break;
    }

    //Checks if questions have been asked, and greys out the corresponding number box if true
    //Box 1, Choice 1
    while (questionState === true && gameState == 4 && answers[0].asked == "true")
    {
        context.drawImage(transBox, buttonPos[4].xStart, buttonPos[4].yStart, 75, 75);
        break;
    }

    //Box 2, Choice 1
    while (questionState === true && gameState == 4 && answers[1].asked == "true")
    {
        context.drawImage(transBox, buttonPos[5].xStart, buttonPos[5].yStart, 75, 75);
        break;
    }

    //Box 3, Choice 1
    while (questionState === true && gameState == 4 && answers[2].asked == "true")
    {
        context.drawImage(transBox, buttonPos[6].xStart, buttonPos[6].yStart, 75, 75);
        break;
    }

    //Box 4, Choice 1
    while (questionState === true && gameState == 4 && answers[3].asked == "true")
    {
        context.drawImage(transBox, buttonPos[7].xStart, buttonPos[7].yStart, 75, 75);
        break;
    }

    //Box 5, Choice 1
    while (questionState === true && gameState == 4 && answers[4].asked == "true")
    {
        context.drawImage(transBox, buttonPos[8].xStart, buttonPos[8].yStart, 75, 75);
        break;
    }

    //Box 6, Choice 1
    while (questionState === true && gameState == 4 && answers[5].asked == "true")
    {
        context.drawImage(transBox, buttonPos[9].xStart, buttonPos[9].yStart, 75, 75);
        break;
    }

    //Box 1, Choice 2
    while (questionState === true && gameState == 5 && answers[6].asked == "true")
    {
        context.drawImage(transBox, buttonPos[4].xStart, buttonPos[4].yStart, 75, 75);
        break;
    }

    //Box 2, Choice 2
    while (questionState === true && gameState == 5 && answers[7].asked == "true")
    {
        context.drawImage(transBox, buttonPos[5].xStart, buttonPos[5].yStart, 75, 75);
        break;
    }

    //Box 3, Choice 2
    while (questionState === true && gameState == 5 && answers[8].asked == "true")
    {
        context.drawImage(transBox, buttonPos[6].xStart, buttonPos[6].yStart, 75, 75);
        break;
    }

    //Box 4, Choice 2
    while (questionState === true && gameState == 5 && answers[9].asked == "true")
    {
        context.drawImage(transBox, buttonPos[7].xStart, buttonPos[7].yStart, 75, 75);
        break;
    }

    //Box 5, Choice 2
    while (questionState === true && gameState == 5 && answers[10].asked == "true")
    {
        context.drawImage(transBox, buttonPos[8].xStart, buttonPos[8].yStart, 75, 75);
        break;
    }

    //Box 6, Choice 2
    while (questionState === true && gameState == 5 && answers[11].asked == "true")
    {
        context.drawImage(transBox, buttonPos[9].xStart, buttonPos[9].yStart, 75, 75);
        break;
    }

    //Box 1, Choice 3
    while (questionState === true && gameState == 6 && answers[12].asked == "true")
    {
        context.drawImage(transBox, buttonPos[4].xStart, buttonPos[4].yStart, 75, 75);
        break;
    }

    //Box 2, Choice 3
    while (questionState === true && gameState == 6 && answers[13].asked == "true")
    {
        context.drawImage(transBox, buttonPos[5].xStart, buttonPos[5].yStart, 75, 75);
        break;
    }

    //Box 3, Choice 3
    while (questionState === true && gameState == 6 && answers[14].asked == "true")
    {
        context.drawImage(transBox, buttonPos[6].xStart, buttonPos[6].yStart, 75, 75);
        break;
    }

    //Box 4, Choice 3
    while (questionState === true && gameState == 6 && answers[15].asked == "true")
    {
        context.drawImage(transBox, buttonPos[7].xStart, buttonPos[7].yStart, 75, 75);
        break;
    }

    //Box 5, Choice 3
    while (questionState === true && gameState == 6 && answers[16].asked == "true")
    {
        context.drawImage(transBox, buttonPos[8].xStart, buttonPos[8].yStart, 75, 75);
        break;
    }

    //Box 6, Choice 3
    while (questionState === true && gameState == 6 && answers[17].asked == "true")
    {
        context.drawImage(transBox, buttonPos[9].xStart, buttonPos[9].yStart, 75, 75);
        break;
    }

    //Displays name and portrait for the character speaking outside of the question state
    while (speakerDisplay === true && questionState === false && showAnswer === false)
    {
        context.drawImage(charPortrait[currentSpeaker], buttonPos[12].xStart, buttonPos[12].yStart, 315, 180);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(speakerTag[currentSpeaker], questionPos[9].xStart, questionPos[9].yStart);
        break;
    }

    //Displays name and portrait for the character speaking during the question state
    while (speakerDisplay === true && questionState === false && showAnswer === true)
    {
        context.drawImage(charPortrait[questionsAsked - 1], buttonPos[12].xStart, buttonPos[12].yStart, 315, 180);
        context.font = "20px Courier New";
        context.fillStyle = "#ffffff";
        context.fillText(speakerTag[questionsAsked - 1], questionPos[9].xStart, questionPos[9].yStart);
        break;
    }
}