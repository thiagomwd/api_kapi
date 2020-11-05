<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/thiagomwd/api_kapi">
    <img src="image/kapiimg.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">API Kπ</h3>

  <p align="center">
    A SIMPLE API TO SOLVE A COMPLEX PROBLEM
    <br />
    <a href="https://github.com/thiagomwd/api_kapi"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://kapix.herokuapp.com/deals">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
    - [Environment .env.dev](#environment-envdev)
  - [Start](#start)
- [Usage](#usage)
  - [Important Routes](#important-routes)
    - [GET](#get)
    - [POST](#post)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://kapix.herokuapp.com/deals)

This is a backend application, with intuition to build knowledge about integration.

It aims to synchronize information between two external applications.

### Built With

* [Nodejs](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
```sh
git clone https://github.com/thiagomwd/api_kapi.git
```
2. Install Yarn packages
```sh
yarn install
```
3. Start
```sh
touch .env.dev
```
#### Environment .env.dev

```sh
#Database info of access
URI_DB=

# Integrations keys
API_PIPEDRIVE_KEY=
API_BLING_KEY=

# URLs

URL_BLING_API=
```

### Start
```sh
yarn dev
```

<!-- USAGE EXAMPLES -->
## Usage

Some information about using the application

### Important Routes

Some api routes

#### GET

* /deals
```json
{
"success": true,
  "data": {
    "_id": "5fa31b91dea3a0b8a991171d",
    "aggregation": true,
    "2020-11-02": {
      "1000": []
    }
  }
}
```
* /sync
```sh
Syncronize deals in orders on bling manually
```

#### POST

* /hook
```sh
Syncronize deals in orders on bling using pipedrive webhooks
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email

Project Link: [https://github.com/thiagomwd/](https://github.com/thiagomwd/api_kapi)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/thiagomwd/repo.svg?style=flat-square
[contributors-url]: https://github.com/thiagomwd/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/thiagomwd/repo.svg?style=flat-square
[forks-url]: https://github.com/thiagomwd/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/thiagomwd/repo.svg?style=flat-square
[stars-url]: https://github.com/thiagomwd/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=flat-square
[issues-url]: https://github.com/thiagomwd/repo/issues
[license-shield]: https://img.shields.io/github/license/thiagomwd/repo.svg?style=flat-square
[license-url]: https://github.com/thiagomwd/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/thiago-miranda-874a66b9
[product-screenshot]: image/template.png
