// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)";
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/github/license/saltstack/salt)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "ISC") {
    return "[![License](https://img.shields.io/pypi/l/xpanse)](https://opensource.org/licenses/ISC)";
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `##License This application uses the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
 ${data.description}

  ## Table of Contents
  1. Installation Instructions
  2. Usage Guide
  3. License
  4. Contribution Guide
  5. Test Instructions
  6. Questions
   ${data.instructions}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Questions
  Github: [${data.username}](github.com/${data.username})
  Email: ${data.email}`;
}

module.exports = generateMarkdown;
