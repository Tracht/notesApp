
describe("new note", function() {

  var note
  var body = "Make sure to bring a tent this weekend"

  beforeEach(function(){
    note = new Note(body)
  })

  it("returns 'Make sure to bring a tent this weekend'", function() {
    expect(note.body()).toEqual(body)
  })

  it("returns first 20 char: 'Make sure to bring a...' ", function() {
    expect(note.preview()).toEqual('Make sure to bring a...')
  })

})
