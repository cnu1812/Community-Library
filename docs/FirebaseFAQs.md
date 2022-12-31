# Firebase FAQ’s

## Some common checks to perform:

 - Check if you are running the firebase init and deploy commands in the correct directory.
- Follow the quest steps properly.

1 . **What should I do if I get “Error: Failed to create project. See firebase-debug.log for more info.", after you provide a projectID?**

   ![error](https://user-images.githubusercontent.com/75531528/209460596-d3d06b1b-2447-45fd-869c-761e32c52afe.png)



   **Solution:**

   - See your firebase-debug.log file.
   - If the error is as shown in the image below(see the lines marked in red)
   - Ensure that your projectID contains only lowercase characters and starts with an alphabet.
   - If the error is as shown in the image below
  
 ![unnamed](https://user-images.githubusercontent.com/75531528/209911236-149b54e7-4522-45f0-a57a-661d214d881e.png)

  - Create your firebase project in the browser.
  - Visit https://console.firebase.google.com , then click add project   and follow the steps to create the project.
  - In your terminal, choose the option ‘use existing project’ and continue.

2 . **If you are running firebase commands using Windows powershell and encounter the error shown below.**

   ![powershell error](https://user-images.githubusercontent.com/75531528/209460696-8ea4a5ce-5026-4dd8-bd9c-7289d43535f0.png)


**Solution**: 
 
Use the Command Prompt (cmd) or Git Bash to run those commands.

   **Solution**: 
 
   In powershell, execute ***Set-ExecutionPolicy RemoteSigned -Scope CurrentUser***. Then continue with the firebase commands.

3 . **Upon visiting your deployed url, if you don’t see the intended page and instead see the page as shown in the image below.**

   ![webhosting](https://user-images.githubusercontent.com/75531528/209460670-da1f947f-f713-411e-8d2d-d8710090b45b.png)


 **Solution**: 
   - It means that the index.html file in your public directory was overwritten with Firebase code. This happens if you chose Y in the CLI when the file was asked to be overwritten.

**Solution** :
   - Open your public directory's index.html file and replace the code in it with the code you want to deploy (in the case of quests, this means the code provided in quest steps), and also check the other files in the public directory, such as css and js files, to ensure they contain the code you want to deploy. Once the files in your public directory contain the correct code, proceed to redeploy using the "firebase deploy" command in your CLI.

4 . **If you encounter the error "HTTP Error: 403, The caller does not have permission" in your firebase-debug.log file.**

**Solution**: You may want to check if you are logged in on your terminal.
    The Suggested solution is to execute the following commands in your cli: 
   - firebase logout 
   - firebase login
      - and continue with further steps

**Solution**:
   - Create your firebase project in the browser.
      - Visit https://console.firebase.google.com , then click add project and follow the steps to create the project.
       - In your terminal, choose the option ‘use existing project’ and continue. 

5 .  **404: Page not found**

 
   ![404](https://user-images.githubusercontent.com/75531528/209460478-95611c4d-5590-4c02-ab98-124d27daa4ac.png)



**Solution**:

   - Project Name should be lowercase.

   - The cause of this error is that when you were asked if you wanted to use your public directory, you chose NO instead of just pressing Enter. 
     - Restart the step from Firebase init and proceed as directed by the campaign.

   - Public folder shouldn’t override on deploy. 
     - Replace all files on the public folder and redeploy, but this time choose NO.

   - If hosting URL is not working you can simply run this command, `firebase deploy --only hosting`.

6 . **Firebase queries mostly relate to Authentication and Terminals. Mostly Windows users experience these problems.**

**Solution**:

   - It seems as if you have created a project once on Firebase through their website. Then, on Windows, you can create new projects using the CLI. It works fine.
   - So if people have previously created a Firebase demo project, they can either follow quest instructions for creating project via CLI or use the existing project option.

7 . **CSS is not applying**

**Solution:** The file name should not be the same as the index.html file. 

   If your css folder is in capitalized form: 
1. Rename it to lower case 
2. Save 
3. Redeploy
















