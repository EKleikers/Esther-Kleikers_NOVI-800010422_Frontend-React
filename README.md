
<span style="color:orange"><u>Korte omschrijving</u></span>

Doorzoek de <em>“IUCN Red List of Threatened Species” </em>
database met deze applicatie.

Verfijn de zoekopdracht met de aanwezige filters.

Selecteer uit het zoekresultaat de soort voor gedetailleerde informatie.

<br />
<span style="color:orange"><u>Screenshots belangrijkste pagina’s</u></span>

Zoek met verschillende filters in de database

![screenshot_search](src/assets/images/readme/screenshot_search.png)

Selecteer uit het zoekresultaat

![screenshot_results](src/assets/images/readme/screenshot_results.png)

Bekijk details

![screenshot_details](src/assets/images/readme/screenshot_details.png)
<br /><br />
<span style="color:orange"><u>Benodigdheden</u></span>

In deze applicatie wordt er gebruikt gemaakt van:

* <em>IUCN Red List API:</em>

    “IUCN 2021. IUCN Red List of Threatened Species. Version 2021-2 www.iucnredlist.org

* <em>Firebase Authentication</em> en <em>Firestore Database</em>

    https://console.firebase.google.com/project/bluebird-novi-2021/overview
    <br />  <br />
    <span style="color:orange">Om bovenstaande in de applicatie te gebruiken moeten de volgende gegevens worden toegevoegd:</span>
*   Creëer een nieuw document in de root genaamd: “.env”
*	Kopieer en plak de volgende data naar dit document

     (zie het “.env.dist” document voor de benodigde gegevens)

     
        REACT_APP_IUCN_KEY=bb7070b2d9f28621df09c9eed38d28246cebc21a2a0ed01cd6b6288a67f4944b

        REACT_APP_apiKey= AIzaSyBHUNye91tqiUBJxvCqjYhwRsd5Fqf1bIM
        REACT_APP_authDomain= bluebird-novi-2021.firebaseapp.com
        REACT_APP_projectId= bluebird-novi-2021
        REACT_APP_storageBucket= bluebird-novi-2021.appspot.com
        REACT_APP_messagingSenderId= 404903025067
        REACT_APP_appId= 1:404903025067:web:4d380a226284db1ecfdaee



*   Accounts kunnen zelf worden aangemaakt
*   Tevens is er een test-account aanwezig:
    
    Inlog gegevens voor dit account:
    
        email: esther@novi.nl
        password: 123456

<br />
    <span style="color:orange"><u>installatie instructies</u></span>

-	Clone de code van github naar uw lokale machine 
     
        https://github.com/EKleikers/Esther-Kleikers_NOVI-800010422_Frontend_React
-	Installeer eerst de node_modules door het volgende commando in de terminal te runnen:
     
            npm install

-	Start de applicatie met behulp van 
     
            npm start
     
     Open http://localhost:3000 om de pagina in de browser te bekijken.

<br />
    <span style="color:orange"><u>overige npm commando’s </u></span>

De “jest” testomgeving kan worden gestart met commando:  
    
    npm run test

<br /><br />
<span style="color:orange"><u>nieuw in react? zie standaard info</u></span>
### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

###$ `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

### Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
