# The Cocktail Curator
<p align="center">
  <img src="/src/images/giphy.gif" width="80%"/>
</p>
# PROJECT 2 README <!-- omit in toc -->


- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


### Overview

**The Cocktail Curator** 
The point of my app is to take a spirits category and introduce the user to classic cocktails they may enjoy based on spirit of choice. Essentially also giving them a small description to go along with each cocktail. As this is something i've done for a living this is one of my interests and passion projects for sure.
<br>

ShowPage for cocktails
https://wireframe.cc/pro/pp/50935099b337869

<br>

### MVP

**The Cocktrail Curator** So what i've decided to do is take an old project of mine and totally revamp it with react. Since i had issues applying myself with the first project, i am going all out with this one. The cocktail curator will act as a database that allows you to search for cocktails based on spirit, or simply allow the curator to pick for you.

<br>

#### Goals

* Homepage properly describes the process and guides the user along the choosing process
* Cocktail layout acts as the stage for listing cocktails and ingredients
* All subsequent components will render based on spirit selection
* The spirits showpage will render a list of cocktails for that specific spirit
* A Random Cocktail option will allow for the user to quickly have a cocktail be suggested without having to specify anything
* All rendered pages will have easy navigation incorporated.
* Create a cocktail page
* Styling of info will be uniform and easy to follow along

<br>

#### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Used to make the page dynamically render all components_ |
| React Link | _Used to link all pages via onclick actions_ |
|   React Switch   | _Switch is what enables my routes to render due the underlying python 2 problem_ |

<br>

#### Data


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Cocktail DB |      yes      | _https://www.thecocktaildb.com_ | _/api/json/v1/1/filter.php?i=Gin)_ |

<br>

#### Component Hierarchy


```
src
|__ App.js
|__ components/
      |__ Cocktails
          |__Cocktail.js
          |__Cocktails.jsx
          |__NewSpirit.jsx
      |__ LandingPage
          |__LandingPage.jsx
      |__ Selector
          |__Selector.jsx
      |__ Shared
          |__Footer.jsx
          |__Header.jsx
```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the title as a nav back home._          |
|     App      | functional |   y   |   n   | _The App will house the overall structure and the axios call._   |
|   Selector   | functional |   n   |   y   | _The Selector will be what renders the buttons to choose spirit of choice to start._     |
|     NewSpirit     | functional |   y   |   y   | _This component will be what updates state for spirit when someone clicks a different spirit_   |
|   Cocktail    | functional |   n   |   y   | _The Cocktails component will render the all of the details for mixing the certain cocktail on its own page._|
|     Cocktails     | functional |   n   |   y   | _The Cocktails component will render the list of cocktails base on spirit preference._ |
|    Footer    | functional |   n   |   n   | _The footer will house my copyright_ |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Header/footer |    L     |     1 hr      |          |    <1 hr    |
| App html/axios call |    H     |     3 hrs      |          |     1hrs     |
| Make Cocktails layout |    H     |     9 hrs      |          |     9hrs     |
|   NewSpririt   |    H     |     7 hrs      |          |     1hr     |
| Get Selector to work |    H     |     7 hrs      |          |     1hrs     |
| Universal Styling   |    H     |     8 hrs      |          |    4hrs     |
| TOTAL               |          |    35 hrs      |          |     15hrs     |

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| API call toggle | _  const apiCall = async (str = "") => {
    if (str === "Random") {
      let data = await axios(URL2)
      updateDrinks(data.data.drinks)
    } else {
      let data = await axios(URL + spirit)
      updateDrinks(data.data.drinks)
    }
  }_ |

<br>

### Post-MVP
** Add cocktails to favorite, stored to local.
** Add styled age checker
** Flowing page transitions
<br>

***



