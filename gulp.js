// To minify and obfuscate
function minify() {
    // generated folder -> generated-minified folder
    // do not delete the generated folder
}

// For shipping as zip file (tomcat releases)
function zip(projectName) {
    // generated-minified folder -> projectName.zip file
    // do not delete the generated-minified folder
}

// To convert simple static website folder to node project
function node(projectName) {
    // generated-minified folder -> node-project
    // node-project -> node-projectName.zip
    // do not delete the generated-minified, node-projectName folders
}

// To build docker image as defined in Dockerfile and push image
function docker(projectName) {
    // handle versions (read from docker-version file)
    // docker build
    // docker push
    // increment version number and save in docker-version-file
}

function cleanup() {
    // delete generated* folders and files
    // delete node* folders and files
    // delete projectName.zip file
}