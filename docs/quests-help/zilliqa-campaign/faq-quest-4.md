---
id: faq-quest-4
title: FAQ Quest 4
---

This is the FAQ of the ***Quest 4: Hello World! Creating Your Web Application***. If you can't solve your issue here you still can ask your doubt in the discord server (#zilliqa-helpdesk channel).

### (Step 3) Issue: npm: command not found
You need to install node first:
1. Go to this link: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases "https://github.com/coreybutler/nvm-windows/releases")
2. Select and install nvm-setup.exe
3.  Run the .exe file and follow the steps as the default
4. After installing nvm you wil open your terminal and run:

```
nvm install 16.0.0
```
And then:
```
nvm current
```

If the lasts command  shows your node version correctly you can continue with the quests.

---

### (Step 3) Issue: "npm WARN EBADENGINE Unsupported engine" while running "npm install"
It's probably a node version issue. You'll need the 16.16.0. To check your node version run at the terminal:
```node --version```
if it's not the needed version, you have 2 ways to downgrade it:

**If you have nvm installed:**
1. Open your terminal and run:
```
nvm list
```
2. a) If it shows the 16.16.0 version run:
```
nvm use 16.16.0
```
2. b) If it not shows, run:
```
nvm install 16.16.0
```
and then:
```
nvm use 16.16.0
```
3. Run ```node --version``` in your terminal again and if it's showing "v16.16.0", you can continue with the quests.

**Install via executable**
1. Go to the [node page](https://nodejs.org/en/) and install the **16.16.0 LTS** version.
2. Run ```node --version``` in your terminal again and if it's showing "v16.16.0", you can continue with the quests.

Ps: If you still recieve some errors after installing 16.16.0, try:
- Run ```npm start``` ignoring the errrors.
- If it doesn't work, try install the 12.16.0 version and run ```npm install``` again.

---

### (Step 3) Issue: "digital envelope routines: unsupported"

Change this line of code in your package.json file

```
"Start" : "react-scripts start"
```
to
```
"Start" : "react-scripts --openssl-legacy-provider start"
```

---

### (Step 4) Issue: "Get Hello" button not working.
If your button it's not working, you need to check:
- Your wallet is connected to the page. To connect click “Connect Zilpay” button at the bottom of the page.
- You paste the contract address correctly:
	- Your code must the format provided in the placeholder (add 0x in the beginning)
	- You need to copy the contract address from the Neo Savant IDE:
