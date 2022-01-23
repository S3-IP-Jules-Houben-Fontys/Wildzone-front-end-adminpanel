# Wildzone Front-end Adminpanel

This is the front-end adminpanel repository for the Wildzone webshop & adminpanel project.

In the C2 diagram below you can see the overview of this application.

![Wildzone-C2 Container diagram drawio (3)](https://user-images.githubusercontent.com/73841047/149792794-d9613d19-3aaa-4673-95ae-ec1a562c2e7c.png)

For a detailed explanation of the choices made, I refer you to <a href="https://github.com/S3-IP-Jules-Houben-Fontys/Wildzone-documentation">the Wildzone documentation (in Dutch)</a>

## Getting started

There are two ways to run this front-end project:

<ul>
    <li><a href="#run">How to run front-end locally</a></li>
    <li><a href="#docker">How to run front-end in Docker</a></li>
</ul>

<h2 id="run">How to run front-end locally</h2>

Make sure you have cloned this repository, depending on what branch you pull, you might have varying experiences. Check the section <a href="#branches">branches</a> to see which branch suits your purpose.

<ol>
<li>Go to ther root of the project you just pulled and execute the following command:</li>
  
`npm i`

This will install all the required packages to run this front-end.
  
<li>Clone the sample.env and change the name to be just '.env'. Fill in the empty values with your preferred settings.</li>
<li>Make sure you have <a href="https://www.docker.com/get-started">Docker installed</a> and running on your machine.</li>
<li>Start up all the services which are being used in the front-end with the following command in the root folder:</li>

`docker-compose up` <br>
You can also run this in detached mode if you want to re-use the console:<br>
`docker-compose up -d`

Note: it is not required to start these services, but parts of the front-end might break if not all services are running 
  
<li>Finally start the front-end with the following command:</li>
  
`npm start` 

  The application will start at <a href="http://localhost:3000/">http://localhost:3000/</a>
 
</ol>

<h2 id="docker">How to run front-end in Docker</h2>

This is only possible if the application is working and pushed to Docker hub. You can test this yourself by checking out <a href="https://hub.docker.com/repository/docker/jjuless/wildzone-front-end-adminpanel">jjuless' Docker Hub</a> to see if there is an image or check out the badge just below the subtitle. If the badge states 'passing', then you can use this method.

**Not available yet**

<h2 id="tests">Tests</h2>
To test wether the application is working correctly or not, integration tests get run when pushed to development and main. The tests can also be run when the front-end is <a href="#run">run locally</a>. This can be done with the following command:

`npm test`


<h2 id="branches">Branhces</h2>

![Wildzone-Software Branches drawio](https://user-images.githubusercontent.com/73841047/143588680-91d9ee14-e0ad-4790-bcad-021cdfcdaf89.png)

The main branch is protected, so you can only create a pull request for it, which when approved merges with main. New finished code gets merged into development, also with a pull request but development is not protected. On the branch userstory or to be more precise "US-XX" where XX is the number/id of the userstory the new feature gets developed. 

Commits need to be descriptive to get a quick overview what has been added. When needed the description can add further information about the commit. 
