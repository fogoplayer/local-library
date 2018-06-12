var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var GenreSchema = new Schema(
    {
        name: { type: String, required: true, min: 3, max:100},
    }
)

//Virtual for URL
GenreSchema.virtual('genre')
.get(function(){
    return 'catalog/genre/' + this.id;
})

module.exports = mongoose.model('Genra', GenreSchema);