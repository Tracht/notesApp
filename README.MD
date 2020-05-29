# Notes App
`Challenge:` Build a frontend, single page web app to create and list notes

## How to use

1. Clone this repo with `git clone`.
2. open `index.html` in your browser of choice.
3. Have fun! 🤩

## Object Table

| Object | Message |
| --- | --- |
| Note | body() |
| | preview() |

| Object | Message |
| --- | --- |
| NoteManager | numberOfNotes()
| | addNote()
| | getNote(index) |

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

- [x] object that holds notes
- [x] instantiate notes
- [x] retrieve list of notes
- [x] note function that returns first 20 characters of the note body
- [x] a way to get those 20 characters onto the page as an element
- [x] create a list of HTML elements as links on the page
- [x] updates every time new note is added

Create a note

- [x] generate text box element
- [x] generate a submit button
- [x] get text from text box and put it into a element on the page
- [x] new note object
- [x] clear text element box when note is generated
- [x] stop empty notes being added

Create note Manager
- [x] holds an array of note objects
- [x] create addNote method to add note objects to array
- [x] create getNote method to retrieve a note

View full note

- [x] clicking link suppresses default event and triggers custom event
- [x] retrieve particular note's full text
- [x] generate HTML element that holds full note text

## Preview
<img width="280" alt="homepage" src="https://user-images.githubusercontent.com/28805811/83274013-1b7c9480-a1c5-11ea-9d72-84f5b63598bd.png">

<img width="273" alt="fullNotePage" src="https://user-images.githubusercontent.com/28805811/83274015-1c152b00-a1c5-11ea-804a-58badf24ed90.png">
