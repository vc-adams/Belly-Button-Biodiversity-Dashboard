# Belly Button Biodiversity - Interactive_Visualizations

Built an interactive dashboard to explore the Belly Button Biodiversity dataset from http://robdunnlab.com/projects/belly-button-biodiversity/. The data catalogs the microbes that colonize in human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## View the Dashboard
* Go to https://vc-adams.github.io/Belly_Button_Biodiversity_Dashboard/ to see the interactive tool.

## Getting Started    
* These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Python
  * To create the local server
* Visual Studio Code (VSC)
  * Version 1.52.1 was used to create the Dashboard
* json 2.0.2
  * Used to view data file
* Prettify JSON
  * Used to view data file

### Installing Prerequisites
* Python
  * https://www.python.org/downloads/
* Visual Studio Code (VSC)
  * https://code.visualstudio.com/download
* json 2.0.2 and Prettify JSON
  * Both should be installed inside VSC. 
    1) Opening VSC 
    2) At the top left of the window, click on the magnifying glass 
    3) Type one of the extension names in the text box, the list will filter below the text box 
    4) Click on the extension below the text box 
    5) Click Install button 
    6) Repeat steps 3 thru 5 for the second extension 

### Deployment
* View the code and the data in VSC by 
    1) Copy all the file in this repository
    2) Open VSC
    3) File --> Open 
    4) Select the directory where all the files are located
    5) Select the file you would like to view in the panel on the right

* To test the Dashboard localy
  * If you have already copied the file in this repository skip step 1
    1) Copy all the file in this repository
    2) Open a terminal window
       - For a Mac: 
           1) Open Launchpad and search for terminal. Alternatively, you can access the terminal by pressing ⌘ + space on your keyboard and searching for "terminal."
       - For a Windows: 
           1) Open your computer's Start menu.
           2) Click the Windows Image icon on the bottom-left corner of your desktop.
           3) After opening the Start menu, type this on your keyboard to search the menu items. Type cmd or Command Prompt.  Command Prompt will show up as the top result.
           4) Click the Image titled Command Prompt app on the menu. This will open the Command Prompt terminal in a new window.
    3) Create a local server to access the data files.
       - Inside the terminal window, map to the directory where the files from the repository are located.
           - Example inside the quotation marks: "cd /Downloads/Belly_Button_Biodiversity_Interactive_Visualization".
       - After typing in the file path of the director and press enter.
       - Then type the text inside the quotation marks, "python -mhttp.server". This will allow your computer to access the data file that is located on your computer.
       - Open a web browser (preferably Google Chrome).
       - In the address bar of the browser type the text inside the quotation marks, "localhost:8000". The dashboard should pull up after you press enter.
       - When you are done make sure to shutdown the server by going to the terminal window and pressing control + c buttons simultaneously.

### Screenshot of the application
![Screen_Shot](https://user-images.githubusercontent.com/67811128/120016882-c6778800-bfaa-11eb-8fbb-1e0ceba10548.png)

