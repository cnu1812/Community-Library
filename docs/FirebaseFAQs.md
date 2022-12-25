# Firebase FAQ’s

## Some common checks to perform:

 - Check if you are running the firebase init and deploy commands in the correct directory.
- Follow the quest steps properly.

1. **What should I do if I get  “Error: Failed to create project. See firebase-debug.log for more info. after u provide a projectID?**

   **Solution:**
   - See your firebase-debug.log file.
   - If the error is as shown in the image below(see the lines marked in red)
   - image
   - Ensure that your projectID contains only lowercase characters and starts with an alphabet.
   - If the error is as shown in the image below
   - image
   - Create your firebase project in the browser.
   - Visit https://console.firebase.google.com , then click add project   and follow the steps to create the project.
   - In your terminal, choose the option ‘use existing project’ and continue.

2.  **If you are running firebase commands using Windows powershell and encounter the error shown below.**

   image

    **Solution**:  Use Command prompt(cmd) or Git Bash to run those commands.

     **Solution**: In powershell,type the below(underlined) command and execute
     ***Set-ExecutionPolicy RemoteSigned -Scope CurrentUser***
     Then continue with the firebase commands.

3. **Upon visiting your deployed url, if u don’t see the intended page and instead see the page as shown in the image below.**



 **Solution**: 
   - It means that the index.html file in your public directory was overwritten with firebase code.This happens if you chose Y in the cli when the file was asked to be overwritten.

**Solution** :
   - Open index.html file of your public directory and replace the code in it  with the code you want to deploy(in case of quests, it means the code provided in quest steps) and also check with the other files in the public directory like css, js files and ensure they contain the code you wish to deploy. Once the files in your public directory contain the correct code, proceed to redeploy using the “firebase deploy” in your cli.

4. **If you encounter the error "HTTP Error: 403, The caller does not have permission" in your firebase-debug.log file.**

    **Solution**: you may want to check if you are logged in on your terminal.
    Suggested solution is to execute the following commands in your cli: 
    - firebase logout 
    - firebase login
      - and continue with further steps

    **Solution**:
    - Create your firebase project in the browser.
      - Visit https://console.firebase.google.com , then click add project and follow the steps to create the project.
       - In your terminal, choose the option ‘use existing project’ and continue. 

5.  **404: Page not found**

     **Solution**: 
     Project Name should be lowercase (?)

     That's because when you were asked if you want to use your public directory, you choose NO instead of just pressing Enter. Start the step again from firebase init, and follow the steps from the campaign accordingly

     Public folder shouldn’t override on deploy. Replace all files on the public folder and redeploy, but this time choose no

     firebase deploy --only hosting

6. **Firebase quiries mostly related to Authentication and Terminals.     Mostly windows users who experience these problems.**

 **Solution**:

   - Seems like if u have created a project once on firebase through their website. Then you can create next projects from CLI on windows... It works fine .
   - So people either create a demo project on firebase before.. Then can follow quest instructions for creating project through CLI or they can use existing project option.

7. **CSS is not applying?**

   **Solution:** File name not the same in the index.html file
    You css folder is in capitalized form: 
    1. Rename it to lower case 
    2. Save 
    3. Redeploy
















