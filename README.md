# Pharos

A system that identifies the location of swimmers using UWB signal technology and records their time spent underwater.

## Desktop Client

You need these global dependencies to run the client:
* Node.js (tested with v7.6.0)
* Yarn (because it's better than `npm` in almost every way)

### Installation

1. Make sure you have Node.js installed. You may download it [here](https://nodejs.org/en/download/current/).
2. After installation, run `npm i -g yarn` to install yarn.
3. Clone the repo: `git clone https://github.com/eshiman/Pharos.git`
4. Enter the directory: `cd Pharos`
5. Install dependencies: `yarn`

### Running

`yarn build` : use `webpack` to bundle front end assets.

`yarn dev` : run local `webpack-dev-server` @ `http://localhost:9000`. Hot module replacement included! :)

`yarn start` : run desktop client.

## Authors

Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich
