# Chatbot for the site 

:dart: To build a basic chatbot which can converse with the user about the site and services that the site provides.

* Chatbot using Deep Learning and Flask techniques. The chatbot is trained on a dataset containing categories (intents), pattern and responses. We use a special Artificial Neural Network (ANN) to classify which category the user’s message belongs to and then we give a random response from the list of responses.

## File Structure

* *intents.json* : The file containing predefined patterns and responses.
* *training.py*  : Script to build the model and train the chatbot.
* *app.py*       : Flask Python script to implement web-based GUI for the chatbot. Users can interact with the bot.
* *Texts.pkl*    : Pickle file to store the words using nltk containing a list of the vocabulary.
* *Labels.pkl*   : The classes pickle file containing the list of categories(Labels).
* *model.h5*     : Trained model containing information about the model and consists of weights of the neurons.

## Setup

* Modify and save the *intents.json* file as per the required intents and responses for the Chatbot.
* Run the *training.py* file. Make sure the *.pkl* and *.h5* files are generated.
  ```
  python training.py
  ```
* Run the *app.py* file. Copy and paste the url generated on a browser window.
  ```
  flask run
  ```
  OR
  ```
  python app.py
  ```
* Chatbot is ready to converse!

## Output

* The conversation should look somewhat like :

![Screenshot 2022-10-29 164418](https://user-images.githubusercontent.com/86421205/198829695-6f6e9841-16f5-4294-a9d8-b5f977262f65.png)

![Screenshot 2022-10-29 164923](https://user-images.githubusercontent.com/86421205/198829706-3f23b90b-1a82-46a0-a42d-cf373bbbfe5a.png)
