This is a sample React Native project to demonstrate a bug when Math.js is used as a dependency.

### Dependencies on path
Make sure the below dependencies are installed. See [these instrucrtions](https://facebook.github.io/react-native/docs/getting-started.html#content).

* Node v6.9.1
* Watchman v4.7.0
* react-native-cli v1.0.0

### Installation instructions
In a terminal:

1. Clone the repository to your computer: `git clone https://github.com/jonrh/react-native-mathjs-bug.git`
2. Move into the project folder: `cd react-native-mathjs-bug`
3. Install [npm] dependencies: `npm install`
4. To run the project in an iOS simulator: `react-native run-ios`
5. To make a production bundle of the app: 

	```
	react-native bundle \
		--dev=false \
		--platform=ios \
		--entry-file=index.ios.js \
		--bundle-output something.jsbundle
	```