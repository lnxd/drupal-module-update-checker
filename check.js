// Import axios
const axios = require('axios');

// Class that checks the status of a drupal module for Drupal 10 compatibility
class Check
{

  // Function that checks the status of a single module
  async checkModule(module)
  {
    // Make a GET request to the drupal module page
    const response = await axios.get(`https://www.drupal.org/project/${module}`);
    console.log(`https://www.drupal.org/project/${module}`)
    // Check the response for the string "^10"
    const regex = new RegExp("\\^10");
    if (regex.test(response.data))
    {
      // If the string is found, return true
      return true;
    }
    else
    {
      // If the string is not found, return false
      return false;
    }
  }

  // Function that checks the status of multiple modules
  async checkModules(modules)
  {
    // Create an empty array to hold the objects
    let moduleArray = [];
    // Loop through the array of modules
    for (let i = 0; i < modules.length; i++)
    {
      // Check the status of each module
      let status = await this.checkModule(modules[i]);
      // Create an object with the module name and its status
      let module = {
        name: modules[i],
        status: status
      }
      // Push the object to the array
      moduleArray.push(module);
    }
    // Return the array of objects
    return moduleArray;
  }
}