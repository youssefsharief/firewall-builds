CONTENTS OF THIS FILE
---------------------
   
 * Installation Instructions
 * Building and Running Instructions
 * Testing Instructions
 * Environment Disclaimer
 * Core Libraries
 * Styling Architecture
 * API Mock
 * Component Tree
 * Services
 * Browser Compatibility
 * Production Preparation



Installation Instructions
------------

 * Download and install Node version 8.9.x
 * Ensure npm version is 5.6.x
 * In the root folder (Source Folder) run "npm install"




Running and Building Instructions
------------

 * In the root folder (Source Folder) run "npm run build"
 * In the root folder (Source Folder) run "npm run server"
 * Go to browser => Navigate to localhost:8080
 ** Note that you could run "npm start" for develpoment server but this dev-server is incompatible with IE10





Testing Instructions
------------

 * In the root folder (Source Folder) run "npm t"
 * To test coverage run "npm run coverage" command then open the generated “coverage” folder in the root folder





Environment Disclaimer
------------

 * Note that the OS used for running and testing this app locally was Windows 10 64-bit




Core Libraries
------------

 * Angular
 * fontello (like font-awesome but only needed icons are imported to reducs bundle size)
 * Mini-moment (like moment but much smaller in size)
 * Bootstrap-sass
 * chart.js (for building the pie charts)



Styling Architecture
------------

 * Sass css pre-processor was used with the "scss" syntax which is a superset of CSS3
 * Component based architecture to incapsulate styling logic for maximum reliability and reusability
 * Each component has a separate file for styling
 * Global variables and styles (like layout) are shared in the "styles" folder 


API Mock
------------

 * Data is first mocked using an array of items (builds and firewalls) that concludes the first state in the "shared/mock" folder
 * Data is then mocked by sending data objects that represents live changes for "running" items so that items info are updated real time. These data objects are in the "shared/mock" folder in a file named "changes"
 * Rxjs was used to get several asynchronous updated in one subscription




Component Tree
------------

 * App Component
	* HomePage Component
		* Table Component
			* TableHeading Component
			* TableListItem Component
				* Progressbar Component
				* IconTYpe Component
			* ExtendedTableListItem Component
				* BoxLayout
				* MetricsBox Component
				* BuildBox Component
					* BuildType Component
				* ChartsBox Component
					* PieChart Component
				* ResultBox Component
				* Spinner Component



Services
------------

 * DataService: provides mock api functionality 
 * DataAnalyzerService: analyses data retrieved from the api and set the item "state" based on raw data 
 * DataFormatterService: formats data to UI friendly formats. For example: - capitalize state name
 * StateColorMapperService: returns the name of the CSS class being used per item "state"
 * FormattedDateService: provides mock UI friendly formatted dates



Browser Compatibility
------------

Browser compatibility was ensured using the following
 * IE10 friendly CSS "flex" syntax 
 * IE10 friendly web server 
 * Core-js pollyfills
 * Eliminate usage of JavaScript’s number locale api for date manipulation and use "moment-mini" library instead



Production Preparation
------------

 * Ahead of time compilation is already used by angular-cli for faster page loading speed 



