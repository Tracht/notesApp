describe('noteManager', function() {

  let manager
  beforeEach(function() {
    manager = new NoteManager()
  })

  it('have empty array at start', function() {
    expect(manager.numberOfNotes()).toEqual(0)
  })

  it('adds a new note object to noteManager note array', function(){
    let newNote = "note1"
    manager.addNote(newNote)
    expect(manager.numberOfNotes()).toEqual(1)
  })

  it('gets a note', function() {
    let newNote = "note1"
    manager.addNote(newNote)
    expect(manager.getNote(0)).toEqual(newNote)
  })

})
