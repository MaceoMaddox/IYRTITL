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
  # ${data.description}
  # ${data.usage}
  # ${data.instructions}
  # ${data.username}
  # ${data.email}
  # ${data.licenses}`;
}

module.exports = generateMarkdown;
