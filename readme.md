# Welcome to Assignment 5

## <img width=30px src="assets/logo.png"/> DONATE BANGLADESH

## Key Rule

- Do not ask about mark distribution in the group, as it will not be provided.
- Do not post assignment feedback after receiving it. If you encounter issues or have complaints, please join a support session for discussion.
- Avoid using "lorem ipsum" text. Use relevant and meaningful content instead.
- Feel free to modify the color or design, but ensure the design is visually appealing and professional.
- You are **not allowed** to use any JavaScript library or framework for this assignment.

## Design👍

- **Navbar**: Create a visually appealing navbar with the following structure:👍
  - Logo positioned in the middle. 👍
  - "Blog" button on the left.👍
  - Account balance with a coin icon on the right.👍
  - "Donation" and "History" buttons in the center (as per Figma).👍
- **Donation Cards**: Create 3 donation cards with the following details:👍
  - Image on the left.👍
  - Donation title.👍
  - Donation info.👍
  - Current donation amount.👍
  - Input field for donation amount.👍
  - Button for submitting the donation.👍
- **History Section**: Initially hidden and empty.👍

## Functionalities👍

- **Donation and History Button Functionality**:
  - Clicking the "History" button will hide the donation data and display the history.👍
  - Clicking the "Donation" button will hide the history and display the donation data.👍
- **Donation Functionality for Each Card**:👍
  - When the "Donate Now" button is clicked:👍
    - The donation input will be deducted from the total account balance, and the updated balance will be shown.👍
    - The card’s current donation amount will increase.👍
    - A meaningful notification will be added to the History section.👍
- **Input Validation**:
  - Show an alert if invalid data is found and stop the transaction.👍
  - Validate the donation amount:👍
    - If the donation amount is greater than the account balance.👍
    - If the input field contains an invalid number.👍
    - If the input field is empty.👍
- **History Section**:👍
  - The history section will display transaction notifications, including:
    - Date and time of the transaction.👍
    - Donation amount.👍
    - Donation name.👍

## Challenges 👍

- **Sticky Navbar**: Make the navbar sticky to the top of the page.👍
- **Blog Page**: Create a `blog.html` file and link it to the main page:👍
  - The blog page should contain 4 questions and their answers:👍
    1. What is the Document Object Model (DOM)?👍
    2. How do you select an element from the DOM?👍
    3. What is event delegation in the context of the DOM, and why is it useful?👍
    4. How do you manipulate an element's attributes and styles using the DOM?👍
- **Toggle Active Status**: Toggle the active status of the "Donation" and "History" buttons:👍
  - Change the button color to indicate when it's active.
- **Static Modal**: Display a static modal instead of an alert on a successful donation.👍
- **Reusable Functions**: Use at least 2 common functions.👍
- **Responsive Design**: Ensure the application is responsive for different screen sizes.👍
