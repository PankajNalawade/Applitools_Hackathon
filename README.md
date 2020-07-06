# Applitools_Hackathon

# *AppliFashion*

Applifashion is a high profile e-commerce company that sells fancy shoes. The AppliFashion web app is used by millions of people, using various devices and browsers to buy shoes
   
   
   ![](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpWB4uRzdrgZECI-85YZ2r0j-qywGq39eX3g&usqp=CAU)
   ![](https://www.swtestacademy.com/wp-content/uploads/2019/02/cypress-logo.jpg)



# *Introduction* 

This project can be used to test Applifashion web app in a fast, easy and reliable way, which runs on various devices and browser configurations using Cypress and Applitools.

# *Preconditions*

1) Download and install node.js 

2) Add node js path in environment variable

3) IDE which supports javascripting should be installed for example visual studio code

4) Latest version of chrome should be installed

5) Applitools API key should be added in the project "applitools.config.js" file

# *Installation steps*

1) Clone this project in your local machine

2) Open the project in the IDE

3) Run "npm install"

# *Test Execution steps*

1) We have four spec files ModernTestsV1.js, ModernTestsV2.js, TraditionalTestsV1.js and TraditionalTestsV2.js

2) To run ModernTestsV1.js spec :  "npm run test-ModernTestsV1" which will test V1 version of Applifashion app on Applitools Ultrafast Grid using Modern visual AI approach

3) To run ModernTestsV2.js spec :  "npm run test-ModernTestsV2" which will test V2 version of Applifashion app on Applitools Ultrafast Grid using Modern visual AI approach

4) ModernTestsV1.js and ModernTestsV2.js run test on following browsers and viewports

| Combination |	Browsers    |	Width |	Height |	Device |
|:------------|:-----------:|:-----:|:------:|--------:|
| 1           |	Chrome V80+ |	1200  |	700    |	Laptop | 
| 2           |	Firefox v75.0+ |	1200  |	700    |	Laptop | 
| 3           |	Latest Edge Chromium |	1200  |	700    |	Laptop | 
| 4           |	Chrome V80+ |	768  |	700    |	Tablet | 
| 5           |	Firefox v75.0+ |	768  |	700    |	Tablet | 
| 6           |	Edge Chromium |	768  |	700    |	Tablet | 
| 7           |	iPhone X & Portrait |	500  |	700    |	Mobile | 

Note: New browsers and viewports can be added in "applitools.config.js" file

5) To run TraditionalTestsV1.js spec :  "npm run test-chrome-TraditionalTestsV1" which will test V1 version of Applifashion app on the local chrome browser in a headless mode

6) To run TraditionalTestsV2.js spec :  "npm run test-chrome-TraditionalTestsV2" which will test V2 version of Applifashion app on the local chrome browser in a headless mode

7) TraditionalTestsV1.js and TraditionalTestsV2.js run test on following browsers and viewports

| Combination |	Browsers    |	Width |	Height |	Device |
|:------------|:-----------:|:-----:|:------:|--------:|
| 1           |	Chrome |	1200  |	700    |	Laptop | 
| 2           |	Chrome |	768  |	700    |	Tablet | 
| 3           |	Chrome |	500  |	700    |	Mobile |

Note: New browsers and viewports can be added in "cypress\fixtures\testdata.json" file

# *Test Reports*

1) ModernTests reports which includes test execution report of ModernTestsV1.js and ModernTestsV2.js can be found at https://eyes.applitools.com/app/test-results/00000251808314089678?accountId=1Tcb6v2JnEST38KhdQoolg~~&display=details&top=00000251808314089678%2830%29

2) TraditionalTestsV1 test execution report can be found under the project and in below format

    HTML format : "cypress\test_reports\Traditional-V1-TestResults.html" 
    
    JSON format : "cypress\test_reports\Traditional-V1-TestResults.json"

3) TraditionalTestsV2 test execution report can be found in below format

    HTML format : "cypress\test_reports\Traditional-V2-TestResults.html"
    
    JSON format : "cypress\test_reports\Traditional-V2-TestResults.json"

# *Contributors*

Alokkumar Pandey: https://github.com/alokpandey91

Nilesh Saurabh: https://github.com/nilesh-saurabh

Pankaj Nalawade: https://github.com/PankajNalawade






