const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://cinte:Assalamualaikum2021!@cluster0.ww7hp.mongodb.net/myFirstDatabase?retryWrites=true&writeConcern=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const comments = database.collection('comments');
    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'Greg Powell' };
    const comment = await comments.findOne(query);
    console.log(comment);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);