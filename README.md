
# Rolodex
Create a single-page application using Backbone that will track contact information for you about your friends!

## Learning Goals
- Introduction to Backbone
- Using an MVC Framework with JS
- Continue utilizing jQuery, HTML & CSS knowledge
- Create a responsive, dynamic look & feel

## Requirements
Your application shall be a single-page application that has interactive features, allowing the user to view a list of contacts, add new contacts into it, and view the details for a selected contact. Optionally your application will support editing the data for the selected contact.

### Wave 1
When wave 1 is complete your application should:
- Have a Backbone **Model** subclass called `Contact`. This model should have these attributes:
  - Name
  - E-mail address
  - Phone number
- Have a single instance of `Contact` created from static data.
- Have a Backbone **View** subclass called `ContactView`.
- Display a single contact card on the contact list. This contact card should:
  - Be implemented by using `Contact` and `ContactView` together.
  - Show the name only, no other contact details.

### Wave 2
When wave 2 is complete your application should:
- Have a Backbone **Collection** subclass called `Rolodex`. This collection should use the model `Contact`.
- Display a list of contact cards (as in Wave 1) using the `Rolodex` collection. This list should update when a new entry is added to collection.
- Have a form for creating new contacts. The form should:
  - Have inputs fields for each attribute on `Contact`.
  - Have "Save" and "Cancel" buttons.
  - When "Save" is clicked:
    - Create a new `Contact` instance from the inputs.
    - Add that new instance to the `Rolodex` collection.
    - Clear all input fields.
  - When "Cancel" is clicked:
    - Clear all input fields.

### Wave 3
In this wave we will implement a **modal** element for viewing the full details of a single contact selected from the contacts list.

A modal (or modal window) is a section of your UI that appears on top of the rest of the page, and "steals the focus" from the page beneath it. When another section of the page is clicked upon, the modal disappears. One example of a modal is the [user registration/sign-in form on imgur](http://ui-patterns.com/patterns/modal-windows/examples/16841). You can see many more examples of modals [on this webpage](http://ui-patterns.com/patterns/modal-windows/examples).

When wave 3 is complete your application should:
- Allow the user to select a `Contact` by clicking upon its card in the contacts list.
- Have a contact details modal. It should:
  - Be displayed when a contact card is selected.
  - Use the provided template for contact details.
  - Fill in the template with attributes from the selected `Contact`.
  - Be removed from the page when any other part of the page is clicked upon.

### Optional Enhancements
- Add the functionality that will allow you to **edit** the Contact
  - This should be triggered from the contact details modal, using an edit button or some other edit method
  - When a Contact is updated, the contact list should be updated, if necessary

## Project Scaffold
You have been provided with a project scaffold that has some of the structure you will need to get started. Note that Backbone is much less structured than our Rails applications, so we are providing some of this structure for you. You would not normally have this structure when starting a new Backbone application.

This project scaffold follows the structure and naming conventions of the live code and Ada Trader exercise. HTML and CSS code are kept within the `build/` directory, and your JavaScript code is located within `src/`.

### JavaScript code
- `src/`
  - `app.js`: Serves as the "entry point" and is responsible for creating whatever models and views are required to get the application running
  - `app/`
    - `collections/`
      - `rolodex.js`: This collection represents an ordered list of Contact models
    - `models/`
      - `application.js`: This model represents the overall application
      - `contact.js`: This model represents a single contact
    - `views/`
      - `application_view.js`: This view handles logic for the overall application
      - `contact_view.js`: This view handles logic for a single contact
      - `rolodex_view.js`: This view handles logic for the rolodex collection

### HTML & CSS
In the `build/` directory we've provided an `index.html` file that has some existing "static" structure (the HTML that will not change as your application runs) and a couple of templates for the dynamic parts of the application. You should investigate this file as you begin working on the project, to get a handle on which pieces of HTML match up with what views.

The most important thing to remember in this regard is that a view should not directly interact with any page elements not contained within its "attached" element. At the same time, only a single view should interact with any given page element. This means that while your `RolodexView` may "contain" all of the contact cards, it shouldn't interact directly with their contents because a `ContactView` instance is responsible for those contents.

## Completed Example
To give a better sense of the end goal for the project, we're providing some screenshots and a short demo video of a completed version of the project:

### Wave 1 Complete
![Wave 1 Complete](http://i.imgur.com/8yYIHrX.png)

### Wave 2 Complete
![Wave 2 Complete](http://i.imgur.com/51FJAyN.png)

### Wave 3 Complete
![Wave 3 Complete](http://i.imgur.com/Ze3rP4A.png)

### All Waves Complete
![All Waves Complete animation](http://i.imgur.com/lpvoQme.gif)
