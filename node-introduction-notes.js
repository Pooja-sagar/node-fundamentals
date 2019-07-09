/*   
Page 1 
Node  - is a platform to run the javascript programs. It is built on top of V8 Engine 
Node is made about modules 
Nodejs - API - by using node js we can do serverside scripting 
Expressjs is a third party module which will be used when we are trying to work on server side programming. It has been created by Daugwilson
Node.js
    - Inbuilt module
    - User defined module
    - Third party module(npmjs.com)
        - Global module (used in any projects in the system)
            npm install -g <packagename> eg: rimraf - It will delete files in subfolders 
        - Project module ( used by perticular project)
            Package.json (To create package.json: npm init -y) (-y - force creation)
            Package-log.json - It will manage all the dependency and exact versions of the packages that are installed for this project
            npm install -S <packagename> (Save Dependency - Install the packages which needs to be used in the development mode as well as deployment mode (why do we have to manage this?  - It will be usefull during Continuous integration during deployment stage ) eg: connect - used to handle http request and response (note: if we install any package without switch it is installing as a save dependency at the project level  )
                 "connect": "^3.7.0"
                 ^ -> Caret symbol - 3.x.x will be installed
                 3 -> Major (Major will be maintained)
                 7 -> Minor (Latest Minor will be installed)
                 0 -> Revision number (Latest revision will be installed)

                 "connect": "~3.7.0"
                 ~ -> Tilde symbol - 3.7.x will be installed 
                 3 -> Major (Major will be maintained)
                 7 -> Minor (Minor will be maintained)
                 x -> Revision number (Latest revision will be installed)

                  "connect": ">3.7.0"
                 ~ -> Greater symbol - latest will be installed 
                 3 -> Major (Latest Major will be installed)
                 7 -> Minor (Latest Minor will be installed)
                 x -> Revision number (Latest revision will be installed)

                 "connect": "3.7.0"
                 No symbol - Exact version will be installed
                 3 -> Major
                 7 -> Minor
                 0 -> Revision number 

            npm install -D <packagename> (Developer Dependency - Install the packages which needs to be used only in the development mode eg: Unit testing frameworks - chai )  
                 "chai": "^4.2.0"

            npm install (It will install all the packages specified in package.json)
*/

console.log(`Welcome to Nodejs Fundamentals`);

