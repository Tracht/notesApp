# Notes App
Challenge: build a frontend single page web app to create and display notes

## How to use
1. Clone this repo with `git clone`.
2. From the command line, run `open index.html` in the browser of your choice.
3. Have fun! 🤩

## Preview
Homepage
<img width="280" alt="homepage" src="https://user-images.githubusercontent.com/28805811/83274013-1b7c9480-a1c5-11ea-9d72-84f5b63598bd.png">

View the entire note
<img width="273" alt="fullNotePage" src="https://user-images.githubusercontent.com/28805811/83274015-1c152b00-a1c5-11ea-804a-58badf24ed90.png">

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

## Diagramming HTTP request/response

#### Page 1: shows note form & a list of note links
![displayPage1](https://user-images.githubusercontent.com/28805811/83970821-b8c77f00-a8cf-11ea-95cc-d68da908a1a6.png)

#### Page 1: creating new note shows updated list of note links
![createNote](https://user-images.githubusercontent.com/28805811/83970874-017f3800-a8d0-11ea-9bc6-7276bf8b4165.png)

#### Page 2: clicking on a note link displays page 2, showing the note's full body text
![displayPage2_fullbody](https://user-images.githubusercontent.com/28805811/83970777-77cf6a80-a8cf-11ea-8010-88e19927be30.png)

#### Page 2: clicking on "home" button returns to page 1
![homeButton](https://user-images.githubusercontent.com/28805811/83970938-63d83880-a8d0-11ea-8e27-dacd81aad2fd.png)
