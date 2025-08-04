# Scorekeeping By Rounds

> This application was created to keep score of players or teams for any number of rounds (including a bonus round) <br/>
> [Live - Scorekeeping by Rounds Website](https://scorekeeping-by-rounds.ryan-brock.com/) <br/>
 
![Main webpage - Ranking](/pics/ranking-page.png)

---

## 📚 Table of Contents

- [What's My Purpose?](#-whats-my-purpose)
- [How to Use](#-how-to-use)
  - [Settings](#settings)
  - [Score Entry](#advanced-search)
  - [Rankings](#Rankings)
- [Technologies](#-technologies)
- [Getting Started (Local Setup)](#-getting-started-local-setup)
  - [Run Locally](#run-locally)
  - [Test](#test)
  - [GitHub Hooks](#github-hooks)
  - [Build](#build)
  - [Deploy](#deploy)

---

## 🧠 What's My Purpose?

This single page angular frontend was created keep score of players or teams for any number of rounds (including a bonus round) <br/>

This application does support having 2 screens of the webpage open at once. For example you could have the 'Ranking' page on a different screen/monitor as the 'Score Entry' page and the 'Ranking' page will update the scores between 1-20 seconds of entering them <br/><br/>

I was inspired to create this after attending a STL Team Transplant Trivia where they kept score for over 100 tables on an excel sheet. I met with the lady in charge and she said, we can't pay for it (being a non-profit) but would use software if I made. I was able to fulfill that request

---

## 🚦 How to Use

### Settings

![Settings webpage](/pics/settings-page.png)

Settings - Description

- Title - The game being played (Ex. trivia or joepardy) <br/>
- Number of Rounds - Input the number of rounds <br/>
- Number of Players - Input the number of players <br/>
- Use Players or Teams - Are individuals or groups competing against each other? <br/>
- Has Bonus Round - Toggle if a bonus round applies (A bonus round replaces the lowest round) <br/>
- Should Sort By - Should the 'Ranking' Page sort by player/team # or what place they are in? <br/>
- Show Last Round - Should the 'Ranking' Page show the previous round of scores along with the total scores? <br/>
- Apply Scored Goes to Next Round - When the apply button is clicked on the 'Score Entry' page should it automatically navigate to the next round? <br/>
- Color - Choose the color scheme for the application *this is the only setting that applies on selection <br/>

<br/>

Buttons - Description

- Apply - Applies the currectly selected settings (except for color)<br/>
- Reset Only Scores - Resets just the scores<br/>
- Reset Everything - Resets the scores and the settings<br/>
- Export Scores - Exports the current scores to an excel document (hopefully you'd do this when the game was over)<br/>

---

### Score Entry

![Score entry webpage](/pics/score-entry-page.png)

Allows the user to navigate to different rounds and input each player's/team's score for the round <br/>

The 'Apply' button must be clicked in order for the scored to be saved <br/>

---

### Rankings

![Ranking webpage](/pics/ranking-page.png)

Shows the total scores and depending on the settings it will show the last round entered scores <br/>

---

## 🛠 Technologies

- Framework: `Angular 8`
- Testing: `Karma`
- Deployment: `GitHub Pages`

---

## 🚀 Getting Started (Local Setup)

* Install [node](https://nodejs.org/en) - v16 is needed
* Clone [repo](https://github.com/rbrock44/scorekeeping-by-rounds)

---

### Run Locally

```
npm install
npm start
```

---

### Test

- Unit
  - ng test || npm run test
- Integration
  - ng e2e || npm run e2e
        
---

### Github Hooks

- Build
    - Trigger: On Push to Main
    - Action(s): Builds application then kicks off gh page action to deploy build output

---

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

### Deploy

Run `npm run prod` to build and deploy the project. Make sure to be on `master` and that it is up to date before running the command. It's really meant to be a CI/CD action

---
