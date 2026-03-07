let browserName = "Chrome";
let testName = "Smoke Test"
function launchBrowser(browserName){

    if(browserName=="Chrome") {
        console.log("Launched Browser Name is"+ " "+ browserName)
    } else if(browserName=="edge") {
        console.log("Launched Browser Name is"+ " "+ browserName)
    }
        else if(browserName=="firefox")
        {
            console.log("Launched Browser Name is"+ " "+ browserName)

        }
    }


function runTests(testName)
{
    switch (testName){
        case "sanity":
            console.log("conducted test is Sanity Test");
            break;
        case "regression":
            console.log("conducted test is regression Test");
            break;
        default:
            console.log("conducted test is Smoke Test")
    }
}
launchBrowser(browserName)
runTests(testName)