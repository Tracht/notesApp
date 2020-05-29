describe('noteManager', function() {

  let manager
  beforeEach(function() {
    manager = new NoteManager()
  })

  it('have empty array at start', function() {
    expect(manager.notes.length).toEqual(0)
  })

  it('adds a new note object to noteManager note array', function(){
    let newNote = "note1"
    manager._addNote(newNote)
    expect(manager.notes.length).toEqual(1)
  })

})
