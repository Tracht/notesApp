describe('noteManager', function() {
  let manager
  beforeEach(function() {
    manager = new NoteManager()
  })

  it('have empty array at start', function() {
    expect(manager.notes.length).toEqual(0)
  })
})
