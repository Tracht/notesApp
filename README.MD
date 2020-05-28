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

- object that holds notes [x]
- instantiate notes [x]
- retrieve list of notes [x]
- note function that returns first 20 characters of the note body [x]
- a way to get those 20 characters onto the page as an element [x]
- create a list of HTML elements as links on the page [x]
- updates every time new note is added [x]

Create a note

- generate text box element [x]
- generate a submit button [x]
- get text from text box and put it into a element on the page [x]
- new note object [x]
- clear text element box when note is generated [x]
- stop empty notes being added

View full note

- retrieve particular note's full text
- clicking link suppresses default event and instead displays full note text
- generate HTML element that holds full note text [x]
