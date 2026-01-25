<u>Create Ionic Angular application</u>: `ionic start`

<u>Add Android as a supported platform in the project</u>:
- `ng build`
- `ionic capacitor add android`
- <u>Set the Package ID</u>:
	- "com.snowboard.starter"
	- In `capacitor.config.json`: "appId":
		- "com.newValue"(?)
- <u>Copy www folder into android application and bundle it in again</u>: `ionic capacitor copy android`
- <u>Open Android application in Android Studio</u>: `ionic capacitor open android`