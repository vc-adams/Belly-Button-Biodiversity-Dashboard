# Belly Button Biodiversity - Interactive_Visualizations

Built an interactive dashboard to explore the Belly Button Biodiversity dataset from http://robdunnlab.com/projects/belly-button-biodiversity/. The data catalogs the microbes that colonize in human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## View the Dashboard
* Go to https://vc-adams.github.io/Interactive_Visualizations_Week_15/ to see the interactive tool.

## Getting Started    
* These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Visual Studio Code (VSC)
  * Version 1.52.1 was used to create the Dashboard
* json 2.0.2
  * Used to view data file
* Prettify JSON
  * Used to view data file

### Installing Prerequisites
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
       i) Inside the terminal window, map to the directory where the files from the repository are located.
           - Example inside the quotation marks: "cd /Downloads/Belly_Button_Biodiversity_Interactive_Visualization".
      ii) After typing in the file path of the director and press enter.
     iii) Then type the text inside the quotation marks, "python -mhttp.server". This will allow your computer to access the data file that is located on your computer.
      iv) Open a web browser (preferably Google Chrome).
       v) In the address bar of the browser type the text inside the quotation marks, "localhost:8000". The dashboard should pull up after you press enter.
      vi) When you are make sure to shutdown the server by doing to the terminal window and pressing control + c buttons simultaneously.


Add additional notes about how to deploy this on a live system

### Running the tests

Explain how to run the automated tests for this system

Break down into end to end tests

Explain what these tests test and why

Give an example
And coding style tests

Explain what these tests test and why

Give an example


## Built With

Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

## Authors

Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

Hat tip to anyone whose code was used
Inspiration
etc
