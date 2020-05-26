# Notes App
`Challenge:` Build a frontend, single page web app to create and list notes

## User Stories
```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

As a programmer
I can create a new note
So I can record something I need to remember

As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

## Approach

View notes 20 characters each

- retrieve list of notes
- note function that returns first 20 characters of the note body
- a way to get those 20 characters onto the page as an element
- create a list of HTML elements as links on the page
- updates every time new note is added
- clicking link suppresses default event and instead displays full note text

Create a note

- generate text box element
- generate a submit button
- get text from text box and put it into a...
- new note object

View full note

- retrieve particular note's full text
- generate HTML element that holds full note text
