# Firebase FAQ’s

## Some common checks to perform:

 - Have you understood and followed the quest instructions correctly?
 - Are you running the firebase init and deploy commands in the correct directory?


0. **Firebase Command not-found**
   
   ![Screenshot 2024-06-21 130330](https://github.com/cnu1812/Community-Library/assets/75531528/56c5d829-44ef-4bae-89bd-4c8504597caa)

   **Solution**

   - `npm install -g firebase-tools`

0.1 **Firebase CLI v13.11.3 is incompatible with Node.js**

   ![Screenshot 2024-06-21 130915](https://github.com/cnu1812/Community-Library/assets/75531528/275e1c0b-3412-4c2c-9072-1afb1774e88b)

   **Solution**

   - `nvm install <preferred version>`
   - eg: `nvm install v19.11.0`
   - `nvm use v19.11.0`

1 . **I received an error message of "Failed to create project. See firebase-debug.log for more info".**

   ![error](https://user-images.githubusercontent.com/75531528/209460596-d3d06b1b-2447-45fd-869c-761e32c52afe.png)
   

   **Solution:**

   - Open your firebase-debug.log file in the directory you were running the firebase commands, and try to read for the specific error.
   - If the specific error says "**Callers must accept Terms of Service**" like what you see in the image below, visit https://console.firebase.google.com, then click 'add project' and follow the steps to create the project. Once that is done, when initiating Firebase, instead of creating a new project, you should select the option 'use existing project'. 

  
 ![unnamed](https://user-images.githubusercontent.com/75531528/209911236-149b54e7-4522-45f0-a57a-661d214d881e.png)

  - If the specific error says "**HTTP Error: 403, The caller does not have permission**", you may want to check that you are logged in to Firebase on your terminal. Run the following two commands separately. In the event that this solution does not work, you can use the solution in the previous bullet point.
    - `firebase logout`
    - `firebase login`


2 . When running commands in Windows Powershell, the error message is "**firebase.ps1 cannot be loaded because running scripts is disabled on this system**"

   ![powershell error](https://user-images.githubusercontent.com/75531528/209460696-8ea4a5ce-5026-4dd8-bd9c-7289d43535f0.png)

   **Solution**: 
 
   - Use command prompt or Git Bash to run the commands instead. OR
   - In Windows Powershell, execute ***Set-ExecutionPolicy RemoteSigned -Scope CurrentUser***. Then continue with the Firebase commands.

3 . **When I visit my hosting URL, I see a page that says "Firebase Hosting Setup Complete". Where is the website I built?**

   ![webhosting](https://user-images.githubusercontent.com/75531528/209460670-da1f947f-f713-411e-8d2d-d8710090b45b.png)

You are likely seeing this because the index.html file in your public directory was overwritten with Firebase code. This happens if you chose Y in the command line interface when the file was asked if you wish to overwrite index.html. 

**Solution** :
   - Open your public directory's index.html file and replace the code in it with the code you want to deploy. Also check the other files in the public directory, such as .css and .js files, to ensure they contain the code you want to deploy. Once the files in your public directory contain the correct code, proceed to redeploy using the "firebase deploy" command in your command line interface.

4 . **When I visit my hosting URL, I see a page that says "404 Page Not Found".**

When you were asked if you wanted to use your public directory, you likely chose NO instead of just pressing Enter. As a result, the files in your public directory were not deployed to Firebase. 

**Solution**: 
 - Start from the beginning with `firebase init` and follow the instructions carefully in the campaign. When there is an option for overwriting, select no. 
 - If you feel that the hosting URL is not working, you can run the command `firebase deploy --only hosting`
