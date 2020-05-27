
describe("new note", function() {

  var note
  var body1 = "Make sure to bring a tent this weekend"

  beforeEach(function(){
    note = new Note(body1)
  })

  it("returns 'Make sure to bring a tent this weekend'", function() {
    expect(note.body).toEqual(body1)
  })

  it("returns first 20 char: 'Make sure to bring a' ", function() {
    console.log(note.preview())
    expect(note.preview()).toEqual('Make sure to bring a')
  })

})
