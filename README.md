<img width="1115" alt="Screenshot 2022-10-12 at 06 07 02" src="https://user-images.githubusercontent.com/108524172/195255143-5adf3f27-c6a2-4ce0-bd57-8f840e99890e.png">

## Author
Dylan Groome

## Project Overview

This website was developed to quiz users on kanye west album 808s and heartbreak. It was created to be fun, intuitive, easy to play. 

- You can view my deployed website [here] https://dylangroome.github.io/808S-QUIZ/

## Table of Contents

- [UX](#ux)
  * [Project Goals](#project-goals)
  * [Design Choices](#design-choices)
      Colors (#colors)
      Typography (#typography)
      Images (#images)
  * [Features](#features)
- [Testing](#testing)
  * [Validation Testing](#validation-testing)
  * [Cross Browser and Cross Device Testing](#cross-browser-and-cross-device-testing)
  * [Manual Testing](#manual-testing)
  * [Defect Tracking](#defect-tracking)
  * [Defects of Note](#defects-of-note)
  * [Outstanding Defects](#outstanding-defects)
- [Lighthouse Audits](#lighthouse-audits)
- [Deployment](#deployment)
- [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)


### Project Goals
The website was largely designed to be appealing to young teenagers and young adults.

The website hopes to provide an test to hip-hop and kanye fans to see who knows the most.



### Design Choices

The design was based on the minimalist approach of the album cover.

#### Colors

pastel colour for a minimalist aesthetic.

#### Typography

Font styles and sizes were chosen to match the website's color palette and minimalist approach.
<img width="292" alt="Screenshot 2022-10-12 at 09 40 26" src="https://user-images.githubusercontent.com/108524172/195294583-4cb2057f-644a-4c27-b943-cca0ac9b0413.png">


#### Images

<img width="588" alt="Screenshot 2022-10-12 at 09 37 36" src="https://user-images.githubusercontent.com/108524172/195294182-eb6b7f98-bc60-43d5-b5f0-31947f1c5c9e.png">

The heart was used to fill the centre space.
The heart resembles the album cover.

### Features

The home page allows users to visit quiz and high-scores page.
the home page allows user to turn on and off music while presenting a brief description on the album.

The quiz page asks questions on the topic and keeps track of users score.
When the quiz ends the user gets brought to the end page.

The end page allows the user to keep score by entry of name and allows user to return home.

The highscores page shows a leaderboard of highscores.



## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

### Validation Testing
You should try to ensure you code is valid and follows proper indentation.  In this section you should write up any websites you used to validate your code. As your projects becomes more complex these tools may change.

- [CSS Validator](https://jigsaw.w3.org/css-validator/) Note, any error associated with root: color variables were ignored.
- [HTML Validator](https://validator.w3.org/)
- [JS validation](https://jshint.com) for each .js file/ , if using ES6, add this before pasting in your file: `/*jshint esversion: 6 */ `
- [JSON validation](https://jsonlint.com/) for each .json file 

### Cross Browser and Cross Device Testing
1. Visit https://gs.statcounter.com/browser-market-share to figure out the most popular browsers & operating system combos seen across the we for the geographic region, and platoform(s) and screen sizes you expect your users to belong to. 

1. Include a sentence about why you chose the combinations you did.

1. Create a table that lists out what devices, browsers, and operating system you tested your application on and a brief description of why you chose the mixture you did. The point is to prove that you looked at the site across various browsers, operating systems, and viewport breakpoints.

1. if you can't find the brower/device/OS combinations you want on Browserstack with your github student webpack (or you didn't activate that in time), note what you'd ideally test on then what you ended up testing on as a compromise. 

| TOOL / Device                 | BROWSER     | OS         | SCREEN WIDTH  |
|-------------------------------|-------------|------------|---------------|
| real phone: motog6            | chrome      | android    | XS 360 x 640  |
| browser stack: iPhone5s       | safari      | iOs        | XS 320 x 568  |
| dev tools emulator: pixel 2   | firefox     | android    | SM 411 x 731  |
| browserstack: iPhone 10x      | Chrome      | iOs        | SM 375 x 812  |
| browserstack: nexus 7 - vert  | Chrome      | android    | M 600 x 960   |
| real tablet: ipad mini - vert | safari      | iOs        | M 768 x 1024  |
| browserstack: nexus 7 - horiz | firefox     | android    | LG 960 x 600  |
| chrome emulator: ipad - horiz | safari      | iOs        | LG 1024 x 768 |
| browserstack                  | Chrome      | windows    | XL 1920 x 946 |
| real computer: mac book pro   | safari 12.1 | Mohave     | XL 1400 x 766 |
| browserstack                  | IE Edge 88  | windows 10 | XL 1920 x 964 |

### Manual Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. 

There are 3 ways you can document your testing:

**1. Markdown**

Describing your testing process is via scenarios, right here such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

**2. Use Spreadsheets**    

Here is a [Manual Testing Template](https://docs.google.com/spreadsheets/d/1vc1IVL-ydQwWeWMqnk_GRox6HE6qxDLpchGse8Crayo/edit#gid=296578096) that you can use as a starting point to keep track of your testing efforts. Make a copy of it in your own account and update as needed to reflect the browsers you are testing and features.  

**3.Use Github Agile Tools**

Create Custom Issue Template and A Pojrect Board in git hub.[Here's a brief overview](https://docs.google.com/document/d/1nDS5tZeMO77Dfq85IZGMSV6C41XaPm9FwcpR3k-UTVc/edit?usp=sharing) I put together on how to do this

It's ok to spot check specific functionality across devices and browsers but each page should be viewed as a whole for each device/browser combo at least once too.

A quick way to check if items are exceeding the screen width of a project is to run this javascript in the console for various screen emulations:

```
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll('*'),function(el){if(el.offsetWidth > docWidth){console.log(el);}});
```


### Defect Tracking

Try to create issues in real time as it better reflects the daily life of a developer.

The easiest way to track defects is by using GITHUB's Issues to track these as it's really easy to copy/paste screenshots in and then write up how you closed them. At this stage you don't need a custom template or labels, that comes in P4.

**Creating Defects**
1. Click the Issues menu item 
![image](https://user-images.githubusercontent.com/23039742/169566835-240ce89c-6ab1-45b6-8ee8-5f693de70e5d.png)

2. click the Green New Issue button
![image](https://user-images.githubusercontent.com/23039742/169567026-07ff2fb7-ebc0-4ce0-b8a8-38ab7da8844b.png)

3. Fill in the default form
![image](https://user-images.githubusercontent.com/23039742/169567286-c85218d1-1118-4472-93be-04eda040ecc5.png)
 - Fill in a descriptive title
 - add steps to reproduce if it's not straight forward
 - include a screenshot
<img width="967" alt="image" src="https://user-images.githubusercontent.com/23039742/169567840-255b514c-0a1e-4514-8593-9c2aab295b6e.png">
4. click the submit New issue button

**Closing Defects**
1. Go to the issue list in GitHub and click on the issue you have fixed 
<img width="1476" alt="image" src="https://user-images.githubusercontent.com/23039742/169568053-6e34b94c-ff31-4d7f-9faf-1d04286f0397.png">

2. Add a brief write up of what you fixed and include a screenshot if necessary then Click the Close with Comment Button
![image](https://user-images.githubusercontent.com/23039742/169570025-6d559641-d573-4749-bc0f-33a151358481.png)

**Reopening Defects**
1. If you find you didn't fix the issue, you can toggle to the closed items:
![image](https://user-images.githubusercontent.com/23039742/169570117-274898ec-ee02-487a-ac14-4755095d5e8a.png)

2. Click on the issue you want to re-open
3. Scroll down and click the re-open button
![image](https://user-images.githubusercontent.com/23039742/169570383-9fc53595-1761-4117-a369-d798877c7fe2.png)


### Defects of Note
Some defects are more pesky than others. Highlight 3-5 of the bugs that drove you the most nuts and link to them directly here.


### Outstanding Defects
It's ok to not resolve all the defects you found as long as:
- it does not impacting a user from completing a vital function on the website
- it only affects a very small subset of users
- is an extreme edge case that very few users would try

If you know of something that isn't quite right, create an issue and  link to it here and explain why you chose not to resolve it. 

Sometimes it's as simple, word wrapping issue that makes the site look odd at a certain screensize that you just didn't have time to fix due to the impending deadline and lack of skills. It's best to mention it but note why you allowed it to go live than let asccessors think you didn't notice it. 

## Accessibility

Accessibility testing is aimed to make sure that those with visual or physical disabilities can still browse your website. Some users have had strokes or accidents that make it difficult to use a mouse so they use keyboard keys to tab through sites. Others use screen readers that rely on HTML tags to help the user navigate quickly through the site to find information they want, others have color blindness or contrast issues. It's the law to provide services 
Here's a [site](https://www.w3.org/WAI/fundamentals/accessibility-intro/#:~:text=Accessibility%20is%20Important%20for%20Individuals%2C%20Businesses%2C%20Society,-The%20Web%20is&text=That%20is%2C%20the%20accessibility%20barriers,older%20people) where you can learn more about accessibility and the internet.

### Lighthouse Audits
You should run your deployed website pages through lighthouse's audit to check performance, accessibility, best practices and SEO scores. You should aim to get 85 or higher score. 
https://web.dev/measure/  If you have lower scores, read the report and follow the links to address the flagged issues. You can run this tool from Chrome Dev Tools too against your local machine, but the performance will the worst (I personally ignore my performance results unless it's deployed code. I hope for > 60 on that mark, but > 85 on the other 3)

### Keyboard Navigation
Another way to accessibility test you site is to try to click on the browser and see what happens if you use the tab, arrow and enter keys. Does it work well or does the user get stuck?

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages).

In particular, you should provide all details of the differences between the deployed version and the development version, if any.

Remember to use proper markdown for commands and enumerated steps.


You may want to re-watch the [initial deployment in gitpod video](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/9b06129195c64fada6783de9cfe82d60/) when writing up this section.


Write out steps you would take and test them to deploy your code to GitHub Pages, include screenshots if you think they would make the process easier.

## Credits 

### Content

Quiz questions and answers were inspired from the facts page on the album.

- https://hip-hop-music.fandom.com/wiki/808s_%26_Heartbreak

### Media

Images and audios were taken from the following websites.

- https://www.pngkit.com/bigpic/u2q8w7w7o0q8i1w7/
- https://www.youtube.com/watch?v=LlmK6j1GMxI
- https://www.youtube.com/watch?v=Dm4uTQjq-mk

### Acknowledgments

Help

- https://www.w3schools.com/howto/howto_css_modals.asp

YouTube Inspiration

- https://www.youtube.com/watch?v=DtaSNnHky2w
- https://www.youtube.com/watch?v=f4fB9Xg2JEY

My Code Institute mentor Malia Havlicek.

And finally Code Institute for inspiration regarding project ideas and content for referring back to whenever needed.
