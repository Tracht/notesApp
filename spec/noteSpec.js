
describe("new note", function() {

  var note
  var body1 = "Make sure to bring a tent this weekend"

  beforeEach(function(){
    note = new Note(body1)
  })

  it("returns 'Make sure to bring a tent this weekend'", function() {
    expect(note.body).toEqual(body1)
  })


})
