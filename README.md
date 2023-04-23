# Elitmus_project
Hey all, This is a project related to the task assigned by E_Litmus for their Second round of summer internship oppurtunity.

#### The detailed Task details were as follows:
      "You need to design an interactive puzzle that can be solved on an online website.
      The aim of the puzzle is to assess the soft skills of its users.
      The soft skills to be assessed by the puzzle can be chosen by you
      The puzzle should incorporate direct or subtle methods of measuring these soft skills"
For the this task we were supposed to create a full fledged website which will host this game and also to deploy on glitch/similar platform.

#### The detailed requirements were:
        The Website should contain the following list of features
      Anyone with an email address can create an Id and password to participate in the game
      The puzzle must contain
      Minimum 5 clues
      Minimum 2 dead-ends
      Minimum 1 solution 
      All the progress / user data depending on your puzzle requirements should be stored for every user
      On refreshing, from either browser or website, the puzzle should start from the same step or give the user an option to restart
      A dashboard for the admin where the progress of all the users can be tracked & analyzed
     
## Proposed Solution and Devlopment:

The Theme of whole Project is set to Retro and name for theme is Wreck-it-retro. It is showcasing retro feeling using our super favorite Mario games animation.
This game contains 3 Levels and one additional level.

### Tech Stack:
  1. Node.Js as server..
  2. Firebase as DB
  3. GCP based OAuth login by Google for login
  4. Glitch as Deployment. 
  
### Components:
  Login Page, LeaderBoard for Admin, Index+ Game pages
  
### Basic Structure
  New user comes -->> Registered and Logged in -->> Database updated with new user -->> Game starts ->> USer completes the game -->> Logout
  Admin -->> Can visit Leaderboard and analyse

## Lets Look at the Game and what it Achieves:
### The First level:
  This level is a crossword puzzle. It assess the CRITICAL THINKING of the student. Students are encouraged to find the answers through given clues across and Down.
  This level uses almost 8 diffrent clues to fill up the crossword. The questions framed here are more of general knowledge and to the theme, so students can 
  find this level easy and make itself comfortable with the platform. First level is scored by taking how much amount of time is being taken to complete the level.
  The whole game is played with points name "GBugs", which are calculated by formula of time taken by the student to complete.
  The answers of this level is attached here to do check. Answers are: ""
### The Second level :
  This level is a Basic Understanding and aptitude in soft skills. Questions are framed such way that it addresses Analytical thinking of the student.
  Each MCQ has 4 options from which only one is correct. This Level is the CRUCIAL level. As student can be trapped here and find himself in loop **DEADEND** if it answers wrong to any one of the 4 MCQ Question. If all the answers are correct it advances to next level and if he is wrong to any question he goes to extra level where he has to solve a Randomised Memory game. Also the GBugs are reduced if he fails at level 2 each time. After completing his memory game correctly it is then redirected to Level 2 to agin answer the MCQ question. This loop continues till he gives all correct answer. Now this level judges his anlytical thinking to make correct decisoons about time management and Decison making.
