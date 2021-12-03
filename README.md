# project-family-style
assignment 1 
Overview of project: This website is essentially built for this game called Family Style. Family Style is a 2-8 player cross-platform cooperative cooking game. 
External users' goal: The site’s users are people that are interested to download the game, get it's merch,know more about it and how to play it. It is also for them to decide if they want to download the game. 
Site owners' goal: The creators of the game want to promote their game and have more people playing it. They also want people to buy their merch and help new players learn how to play the game. 


Design Process
-------------------
(About page)
As a site owner, I want to promote my game so that more people will download it. As External users, I visit the website to decide if i want to download this game.
For my About page of the website i decided to share the features of this website so that it may pique the interest of external users. I also decided to put pictures of game play screenshots that relate to each feature so that they would not be bored of just reading text. I also made my text short and concise to better engage external users. Adding on, the images can give the external users' a sneak peak of the game helping them decide whether or not to download the game.
Furthermore, I chose to put brighter colors to make the website feel more bright and lighthearted, fitting the theme of the game. 

(How to play page)
As an external user, I want to visit this website to learn how to play Family Style.
As a site owner, I want to help new players learn how to play the game so that I will have bigger groups of regular players.
To better help different types of learners, I decided to use different media like video, text and images for the how to play portion. Also, I decided that putting the content into different boxes makes it clearer and easier for the user to read and understand. I decided to make this portion scroll horizontally instead of vertically as for my About portion it is already quite a lenthgy horizontal scroll with the different points. Furthermore, I wanted to break away from the usual and rigid format to make the website a little more interesting for users to use.

(Download/merch page)
As an external user, I want to visit this website to download the game / buy their merch.
As a site owner, I want more people to download the game / buy merch so that the game can be succesful and there will be a higher profit. 
I created a seperate page for this to help external users easier naviagte the website. This allows them just to go to the download/merch page if downloading the game/buying merch was their main purpose for visiting the website, saving them time. It also helps decrease the likeliness that the external users clicks out of the website quickly as they cannot find what they want. 

wireframes : https://xd.adobe.com/view/cf2b2db9-cfb9-4b88-a852-44a74209f402-9a78/ 

Features
----------
Existing features

feature 1 - when external users hover on a text/image link it changes colour
this feature allows external users to know that the text/image link is clickable and feel assured that it is working.

feature 2 -external users can send in their emails
This feature allows external users that want to be updated about any games update be updated. This also helps the site owner further promote their game as external users would get personal notifications, making them more likely to play and check out the new updates. 

feature 3- function that thanks user after inputing their email to be updated on the game's update
This helps validate the user as they would know that their email is recieved. It also helps user feel more appreciated and included. This improves their experience using this website, leaving with them a good impression of the site owners. This will in turn help create more loyal and regular players, benefitting the site owners as they get more profits.


feature4 - external users can email the site owners if they have any queries or any problems by clicking a text link
this can help to grow more regular players as if they have any problems or questions, they can get the problems fixed/questions cleared and continue playing. By making a text link, it also makes it easier and less tedious for users as they do not have to copy and paste the site owner's email to a mailing app on their own. 

feature5 - the nav bar is position:sticky 
this allows the user the to go to other pages without scrolling all the way up to click on a page on the nav bar, improving user's experience.

feature6 - letting the users see a sneak peak of the merch 
This increases the probability that the users would buy the merch. This is because, some users may not visit the website to buy the merch, being able to see the designs of the merch may help the users realise that they like it and would go buy it. Also profiting the site owner. Making the pictures of the merch show when clicking a button also makes the website a bit more interactive and interesting.


Testing
--------
1 - sneakpeak of the merch 
I tried clicking on the 'Here's a little sneak peak if you are interested!' button and the merch images showed. However, when I pressed it again, another set of images popped up. To fix this, I created a variable and added an IF statement, so that it will only show on even clicks. This managed to work properly in the end. 

2 - the footer
2a - For the 'click here to contact us', I tried to click on the text link to check if it brought me to Mail to send an email to the account that I linked it too. It worked okay.

2b - For the email validation portion, I tried to submit an empty email as well as random letter without the @. For both, an error message pops up. I also tried submitting an email in the correct format and it succesfully sent. 

2c - For the thank you message that pops uo after the user successfully submits an email, it took a few tries. Firstly, I created a function for the thank you message. However, when it was an empty value or sent in the wrong format, the messgae would pop up. The error message for an invalid input also did not pop up.  The message also kept adding on everytime I pressed the submit button. After finding out my mistake, which is incrementing the msg variable, I changed it but the message still popped up after an empty or invalid input was submitted. The error message for an invalid input also still did not pop up. After that, I realised I had to create an IF statement so that the message would only pop up when the input value is correct and when the value is not empty. The message only pooped up after submitting the correct input after the changes were made. However, the error message for an invalid input still did not pop up. My lecturer helped me and pointed out that  .preventdefault should be placed in the if statement after the value is checked. Finally, the code worked. There was proper email validation and the thank you message only pops up after a user enters a valid input.

My project looks very similar on different browsers. I viewed my website on my laptop in Firefox, Microsoft Edge and Chrome. On FireFox, my button that is in the merch portion, it's border was white in color. I decided to leave it because it did not largely affect the aesthetic and flow of the website. My project also looks similar in both mobile , tablet and laptop view. I used developer tools, responsive as well as the different mobile/ipad view to see my website on different screen sized. Things that changed are the font sizes and the width and height of images/videos/flexbox(how to play portion). The portion with a slightly larger change is the downloading of the app. I changed it's format for the mobile view so that it would better fit it and not look so squeezed. Some positions of absolute images also slightly changes in certain viewports.  

Some interesting problems I faced was during the time I started to make my website a responsive one. I initially did not add a meta tag and started adding media queries. However, after adding a few css codes and changing the size of the viewport in developer tools, I realised there were no change. Not only that, it just cut my website and only showed a portion of it that fitted into the viewport. There were also white spaces at the bottom. After searching google and asking friends for help, I realised I had to add the meta tag and the media queries worked and my wesite could shrink in size. This gave me a better a deeper understanding of why the meta tag is important. 





Technologies Used
------------------
-w3shools
   I used this website to help with html/css codes, I am not sure about or want more information/examples on.
   https://www.w3schools.com/ 

-Colorhunt 
  I used this to help look for suitable colors for the game's theme.

Credits
----------
Content
content in class about is referenced from https://familystyle.info/ 

Media
Family style logo (https://familystyle.info/img/FamilyStyleNewLogo.png)

egg/onion (https://images.app.goo.gl/5x3bE8MwVFoQh1Wf9)

game play screenshot 1 (https://images.app.goo.gl/Mo3nnNDxKz3L1Pn7A)

game play screenshot 2 (https://images.app.goo.gl/Fdi3xe2T7X1h3k6U9)

game play screenshot 3 (https://images.app.goo.gl/amSuigYrR6hoQqj67)

confetti (https://images.app.goo.gl/iDzsFhrPJzJxjzoZA)

screen 4 & 5 and the first video shown on the How To Play page were screenshotted/screen recorderd from the Family Style app.

Second video shown ( https://youtu.be/GO4m7WBxLtQ )

download on apple store/google play images ( https://images.app.goo.gl/FbBxXrYGNkUWqmF96 )

merch images were screenshotted from ( https://family-style-game.creator-spring.com/? )


Acknowlwdgements
I recieved inspiration for this project from Family Style'sofficial website https://familystyle.info/ 
horizontal scrolling https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6 
