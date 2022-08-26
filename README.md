![](https://img.shields.io/badge/Microverse-blueviolet)

# Leaderboard

> This project is about creating a functionable leaderboard

## Built With

- HTML
- CSS
- Javascript
- Linters for html&css and js
- Webpack
- ES6 classes

## Website

[Click here to access the website](https://github.com/mullenlucas/leaderboard/dist/)

## Information

**Work In Progress**

**This project is for an exercise for the microverse program. Features may be added across exercise completions**

## To run this repository locally, these commands should be run on the directory's terminal:

```
npm install

```
All the necessary packages will be installed with the command above

## Initialization

The creation of the game ID was accomplished running the following code:

```
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  body: JSON.stringify({
    "name": "Alpha game"
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// {result: 'Game with ID: TSK9ITkTv5Aof6D0OyN3 added.'}
```

## Author

👤 **Author**

- GitHub: [@mullenlucas](https://github.com/mullenlucas)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/lucas-mullen-447312119/)

## 🤝 Contributing

 - Readme Template taken from [Microverse Readme Template](https://github.com/microverseinc/readme-template)
 - Linters for html&css taken from [Microverse Linters](https://github.com/microverseinc/linters-config)
 
Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- To all the collaborators for the Readme Template and the Linters
- The Microverse Team
- My coding-partners and fellow cohort members

## 📝 License

This project is MIT licensed
