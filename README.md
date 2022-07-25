<p align = "center">
  <img 
    width = "300"
    height = "300"
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/chatee-logo.png"
  >
</p>

## Team name: Chatee

Developers : Chen Shun & Law Sean Meng

Proposed Orbital level of achievement: Apollo 11

[Prototype Video](https://drive.google.com/file/d/1XcYd5QDdlYp2DIDTj-IkeUzC9R8SAIQt/view?usp=sharing)

## Motivation

When you chat about different topics all the time in a large group and you want to refer back to a specific topic that has been buried under other conversation topics, it is often **difficult and time-consuming** to navigate. When you try to search for a topic using current features, you have to try to recall what words were used to navigate back, so why not group conversation chunks under topics that can be easily referred to?

Many people also use chat groups to plan events, but there is a **lack of an integrated feature** that allows for planning and tracking of events within the messaging app.

Common messaging apps are used for both work and private life and this limits the user interface to be generally **unexciting**. With a messaging app more dedicated towards personal usage, we can appeal to friend groups looking for a more **attractive** user interface.

## Aim

We hope to make a more engaging messaging platform to socialise with your friends or loved ones.

## User Stories

1. I want to be able to categorise conversations and look up portions related to a specific topic easily.

2. I want to be able to schedule and track events as I plan them with my friends, and have a clear overview of all my events both within specific group chats and across all of them.

3. I want a novel and refreshing messaging environment with which to connect with my friends and loved ones.

## Project Scope

Chatee is a messaging plaform designated for private life bonding between you and your loved ones.

We transform your dull chatrooms into customisable rooms where you and your friends can decorate freely, give it your own personal touch and fill it with your group identity.

Besides the normal chat features, we also include additional features like the event scheduling function and conversation tagging system for the wild conservations you are going to have with your friends!

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/poster-milestone2.png"
  >
</p>

Here's a short introduction to our app.

## Feature list

Our core features include:

1. Tagging system - to catergorise conversation for easy lookup
2. Event scheduling function - to allow users to track important dates in relevant group chats
3. A gamified point system - to incentivise users to spend time bonding in group chats.
4. A personalised private space for each group chat - to create an engaging chatting environment. Users can use points to purchase virtual items to decorate their common space.

## Techstack

Frontend User Interface (Client side):

- React Native

Backend (Server side):

- Stream
- Firebase
- Express.js

## List of components/features to implement

| Admin               | Chat                   | Point System              | Others           | Additional |
| ------------------- | ---------------------- | ------------------------- | ---------------- | ---------- |
| Login/ Sign Up Page | Real-time Messaging    | Point Calculation Logic   | Event Scheduling |
| Home Page           | Group Chat             | Point Dashboard           |                  |
| Profile Page        | Send and Receive Media | Customisable Space Set Up |                  |
|                     | Search Chat            | Virtual item Shop         |                  |
|                     | Conversation Tagging   |                           |                  |

## System Design Diagram

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/system-design-diagram.png"
  >
</p>

## Program Flow

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/event-flow.png"
  >
</p>

## Technical Proof of Concept

Follow these steps to view our app at the current stage:

1. Download the app from our github repo
2. Open your command prompt
3. Navigate to the directory where the app is located
4. Run npm start

(Running on actual devices)

5. Download the Expo Go app from the App Store/Google Play Store
6. Scan the QR code shown in your command prompt
7. If the project is unable to open, go to the developer tools (localhost:**\***)
8. Switch the connection to "Tunnel" and scanning again

(Running on emulators/simulators)

5. Go to the developer tools (localhost:**\***)
6. Click on "Run on Android device/emulator" for Android emulators, or "Run on IOS simulator" for IOS simulators

Once the app is loaded, click on Sign Up to enter an email and password to sign up with.

Enter the same email/password to log into the app.

In the home page, press the Sign Out button at the bottom to sign out.

OR

You can try this alternative:
[link](https://expo.dev/@seox/chatee-milestone-2)

## Progression

### Milestone 1

We implemented the sign up and log in pages, ensuring that new and existing users are able to successfully log into the app.

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/sign-up.png"
  >
</p>

<p align = "center">
This is the sign up page where users can enter their email and password to register for their own new account.
</p>
<br/>

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/Login.png"
  >
</p>

<p align = "center">
Users will then use their registered credentials to log into the app from the log in page.
</p>
<br/>

### Milestone 2

We implemented the profile, a basic game interface, a working chat interface, and an event calendar/scheduler.

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/profile.png"
  >
</p>

<p align="center">
This is the settings page where users can view and edit their profile. The option to sign out is also located here.
</p>
<br/>

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/channel-list.png"
  >
</p>

<p align="center">
Users are able to see the channels that they are in on this page, and can click on any of them to enter the game interface.
</p>
<br/>

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/game-ui.png"
  >
</p>

<p align="center">
This is the game interface, where users are able to navigate to the leaderboard, chat, or shops using the buttons near the bottom.
</p>
<br/>

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/in-chat.png"
  >
</p>

<p align="center">
Users can send messages and attachments using the built in chat interface. They are also able to reply, edit, pin and delete messages.
</p>
<br/>

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/event-calendar.png"
  >
</p>

<p align="center">
From this events calendar, users can get an overview of dates where they have scheduled events.
</p>
<br/>

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/event-schedule.png"
  >
</p>

<p align="center">
Upon clicking any of the dates, users will be able to get a closer look at the event descriptions of the events that they have scheduled for the respective dates.
</p>

## Limitations

#### Firebase and Stream API free limit

As we are using free plans, we are unfortunately limited to only a maximum of 20k new sign ups and 50k log in requests per day, with a maximum cap on the size of storage. These restrictions limit the scalability of our app without payments. Furthermore, although API calls for stream are generous, we are making use of a 30 day free trial, and we are unable to make use of stream for free after this trial period. This greatly limits the ability for our app to function without subscribing to premium services.

#### Lacking key parts of the Shop feature

Our app currently lacks much of the implementation of our Shop feature,which is a key part of what our app is meant to offer. We seek to fix this by Milestone 3.

#### Non android friendly

Currently, there are some bugs when using our app on android that need to be fixed, to ensure compatability of our app on both platforms, IOS and Android. We seek to fix this by Milestone 3.

## Test Cases

We have implemented test cases for our app, focussing mainly on the key features of our app, all of which are essential in realizing the Project Scope that we have set out to achieve. Namely, they are Registration and Login, Profile, Game Interface, Chat, and Events.
These tests are currently conducted manually, but we potentially seek to automate some of them for Milestone 3.

<table> <thead> <tr> <th>Test ID</th> <th>Key Feature</th> <th>Purpose</th> <th>Steps</th> <th>Expected</th> <th>Results</th> <th>Test Date</th> </tr> </thead> <tbody> <tr> <td>1</td> <td rowspan=3>Registration and Login</td> <td>Test that the user can sign up successfully.</td> <td> <ol> <li>On the sign up page, key in username, email and password.</li> <li>Click on Confirm button.</li> <li>Enter same details on the log in page.</li> <li>Verify that clicking on Log In button successfully brings user into channel list.</li> </ol> </td> <td>User is able to use credentials entered in sign up page to successfully log into their account.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>2</td> <td>Test that an unregistered user cannot log in.</td> <td> <ol> <li>On the log in page, key in <i>abc123@fakemail.com</i> as the email and <i>abc123</i> as password.</li> <li>Click on Log In button.</li> <li>Verify that an alert pops up and user is unable to log in.</li> </ol> </td> <td>An alert indicating "Invalid Email/Password" pops up, and user is unable to log into the app.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>3</td> <td>Test that a registered user can successfully log in.</td> <td> <ol> <li>On the log in page, key in <i>abc123@gmail.com</i> as the email and <i>abc123</i> as password.</li> <li>Click on Log In button.</li> <li>Verify that user is able to log in successfully.</li> </ol> </td> <td>User is able to log into app successfully with the username and password.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>4</td> <td rowspan=2>Profile</td> <td>Test that the user can see their profile.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Settings page.</li> <li>Verify that user is able to see their profile and profile picture.</li> </ol> </td> <td>User is able to see their own profile on the Settings page.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>5</td> <td>Test that the user can edit their profile.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Settings page.</li> <li>Click on the Edit Profile button.</li> <li>Select a new profile picture.</li> <li>Verify that the profile picture has succesfully been changed.</li> </ol> </td> <td>User is successfully able to change their profile picture to their newly selected picture.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>6</td> <td rowspan=5>Game Interface</td> <td>Test that user is able to see game interface.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Chats page.</li> <li>Click on one of the channels.</li> <li>Verify that user is able to see the game interface appear.</li> </ol> </td> <td>User is able to see the game interface appear.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>7</td> <td>Test that user is able to see the leaderboard.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Chats page.</li> <li>Click on one of the channels.</li> <li>Click on the medal icon to navigate to the leaderboard.</li> <li>Verify that user is able to see the leaderboard.</li> </ol> </td> <td>User is able to see the leaderboard.</td> <td>FAIL</td> <td>27/06/2022</td> </tr> <tr> <td>8</td> <td>Test that user is able to see the shop interface.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Chats page.</li> <li>Click on one of the channels.</li> <li>Click on the shop icon to navigate to the shop.</li> <li>Verify that user is able to see the shop interface.</li> </ol> </td> <td>User is able to see the shop interface.</td> <td>FAIL</td> <td>27/06/2022</td> </tr> <tr> <td>9</td> <td>Test that user is unable to buy item from shop with insufficient points.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Chats page.</li> <li>Click on one of the channels.</li> <li>Click on the shop icon to navigate to the shop.</li> <li>Click on one of the items that the user cannot afford and attempt to purchase.</li> <li>Verify that an alert pops up and user is unable to purchase the item.</li> </ol> </td> <td>An alert indicating "Insufficient Points" pops up, and user is unable to purchase the item.</td> <td>FAIL</td> <td>27/06/2022</td> </tr> <tr> <td>10</td> <td>Test that user is able to buy item from shop with sufficient points.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Chats page.</li> <li>Click on one of the channels.</li> <li>Click on the shop icon to navigate to the shop.</li> <li>Click on one of the items that the user can afford and attempt to purchase.</li> <li>Verify that points decrease and user is able to purchase the item.</li> </ol> </td> <td>Users points decrease according to the price of the item, and user successfully purchases the item.</td> <td>FAIL</td> <td>27/06/2022</td> </tr> <tr> <td>11</td> <td rowspan=3>Chats</td> <td>Test that user is able to see channel list.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Chats page.</li> <li>Verify that user is able to see their channel list.</li> </ol> </td> <td>User is able to see their own channel list on the Chats page.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>12</td> <td>Test that user is able to send messages in chat.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Chats page.</li> <li>Click on one of the channels.</li> <li>Click on the chat button.</li> <li>Enter a message in the message bar and click send.</li> <li>Verify that the message is successfully sent.</li> </ol> </td> <td>User is succesfully able to use the chat to send messages.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>13</td> <td>Test that user is able to send attachments in chat.</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Chats page.</li> <li>Click on one of the channels.</li> <li>Click on the chat button.</li> <li>Click the attachments icon and select an image to send.</li> <li>Verify that the image is successfully sent.</li> </ol> </td> <td>User is successfully able to use the chat to send the image.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>14</td> <td rowspan=4>Events</td> <td>Test that user is able to see their events calendar</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Events page.</li> <li>Verify that user is able to see their events calendar.</li> </ol> </td> <td>User is able to see their own events calendar.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>15</td> <td>Test that user is able to navigate to their events schedule</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Events page.</li> <li>Click on one of the dates on the events calendar.</li> <li>Verify that user is able to see the events schedule interface.</li> </ol> </td> <td>User is able to see the events schedule for their selected date.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>16</td> <td>Test that user is able to navigate back to the events calendar from their events schedule</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Events page.</li> <li>Click on one of the dates on the events calendar.</li> <li>Hold and pull down on the grey bar under the events schedule dates.</li> <li>Verify that the interface changes back to the events calendar.</li> </ol> </td> <td>User is successfully able to navigate back to the events calendar from the events schedule.</td> <td>PASS</td> <td>27/06/2022</td> </tr> <tr> <td>17</td> <td>Test that user is able to add an event to their calendar</td> <td> <ol> <li>Log into the app.</li> <li>Navigate to the Events page.</li> <li>Click on the grey plus icon on the bottom right of the screen.</li> <li>Fill in event date and description and add.</li> <li>Verify that the new event appears on the events calendar.</li> </ol> </td> <td>User is successfully able to add their new event to their events calendar.</td> <td>PASS</td> <td>27/06/2022</td> </tr> </tbody> </table>

## Software Engineering Practices

#### Git

By making use of Git, we have been able to track the changes in our code, when they were made, as well as who made them. Throughout the changes made between Milestone 1 and Milestone 2, Git allows us to keep track of the different version of our code. This allows us to easily revert back or check against previous versions of the code to fix it when bugs arise.

We have also made use of Git pull requests, to ensure that there bugs do not arise as a result of our concurrent modification of code. One party will be able to review modifications from the other party, before deciding which parts of the modified code can be merged safely.

<p align = "center">
  <img 
    src="https://github.com/Seox123/chatee/blob/main/assets/readme/merge-pull-request.png"
  >
</p>

## Plans for Milestone 3

<p align = "center">Milestone 3 (25 July)
</p>

| Timeline     | Task                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| 28/6 to 13/7 | Work on the point system logic, set up point dashboard, set up virtual item shop and customisable space |
| 14/7 to 15/7 | Ensure that app functions as intended on Android                                                        |
| 16/7 to 19/7 | Implement the tagging feature                                                                           |
| 20/7 to 23/7 | Additional User Testing and implement additional features like voice chat, video message etc            |
| 24/7 to 25/7 | Touch up and work on Milestone 3 submission                                                             |

## Project Log

Click on this link to view our project log: [Milestone 2 Project Log](https://docs.google.com/document/d/1wDyYmlRUFEFz6dVdrGeOskHL9oaUD8Vw/edit?usp=sharing&ouid=103325622220421600280&rtpof=true&sd=true)
