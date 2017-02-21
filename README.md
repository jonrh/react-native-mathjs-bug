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
	react-native bundle --dev=false --platform=ios --entry-file=index.ios.js --bundle-output something.jsbundle
	```
	
### Investigations
1. In commit 185151fa36ee01c30dbb267fc77f9ae77bfc80be I confirmed that [decimal.js](https://github.com/MikeMcl/decimal.js) worked as expected with React Native [thanks to an update](https://github.com/MikeMcl/decimal.js/pull/42) in v7.0.0. The app could be run in a simulator and the production bundle creation succeeded.

2. Next I downgraded to decimal.js v5.0.8, the same as Math.js [is using](https://github.com/josdejong/mathjs/blob/master/package.json#L79) at the time of writing. I deleted the node_modules/ folder and ran `npm install` again. The app works correctly in development mode in the iOS simulator but when running the production bundle command (installation instruction #5) the following error is produced:

	```
	➜ react-native-mathjs-bug git:(master) ✗ react-native bundle --dev=false --platform=ios --entry-file=index.ios.js --bundle-output 	something.jsbundle
	Loading dependency graph, done.

	Unable to resolve module crypto from /Users/jonrh/Desktop/react-native-mathjs-bug/node_modules/decimal.js/decimal.js:
	Module does not exist in the module map or in these directories: /Users/jonrh/Desktop/react-native-mathjs-bug/node_modules

	This might be related to https://github.com/facebook/react-native/issues/4968
	To resolve try the following:
		1. Clear watchman watches: `watchman watch-del-all`.
		2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
		3. Reset packager cache: `rm -fr $TMPDIR/react-*` or `npm start -- --reset-cache`.
	```
	
	Thus confirming the issue/conflict exits in decimal.js v5.0.8 but not in the latest version.