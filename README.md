# 03 JavaScript: Password Generator

## Links

* 🌎 [Live Github Page] ("https://gallolopez1.github.io/javascript-challenge-03/")
* 💾 [Repo (here)] (https://github.com/gallolopez1/javascript-challenge-03)

# <u> Credits:</u>
Major shout-out to my friend <b>Andrew Yu</b> for his patience and knowledge in helping me navigate through this challenge! Thanks to him, I was able to understand the logic behind the code and that there is no "one" way of coding or solving a problem. 

# <u> How to use the password generator:</u>

### Step 1:

![step1](.Assets\images\step1.PNG) 

### Step 2:

![step2](.Assets\images\step2.PNG)

### Step 3 (provide a valid answer):

![step3](.Assets\images\step3.PNG)

### Step 4 (define password values):

![step4](.Assets\images\step4.PNG)

### Step 5 (get password):

![step5](.Assets\images\step5.PNG)

<br>

# <u> Challenge instructions:</u>

Create an application that generates a random password based on user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered by your JavaScript code. It has a clean and polished user interface and is responsive, which ensures that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at some [examples of special characters on the OWASP Foundation website](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

