// this file was used when I didn't use mongoose at all

// here we import mongodb
const MongoClient = require('mongodb').MongoClient

// here is the mongodb connection string. After mongodb.net/ I added "test" as a name for a route/database
const url = 'mongodb+srv://Omar123:123Omar@choiced.znpd5bd.mongodb.net/streaming_sites?retryWrites=true&w=majority'

// example of creating new products
const createProduct = async (req, res, next) => {
    const newProduct = {
      name: req.body.name,
      price: req.body.name
    }
    // this code tells mongodb which server to connect to
    const client = new MongoClient(url);

    // we do this try/catch to ensure that we catch errors and stop code execution
    try {
      // this establishes the connection
      await client.connect()
      // db defaults with the url connection string. Can provide an argument for a database
      const db = client.db()
      // connects to connection
      const result = db.collection('products').insertOne(newProduct);
    } catch(error) {
      return res.json({message: 'Could not store data.'})
    }
    // closes connection
    client.close()
    res.json(newProduct)
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  let products;

  try {
    await client.connect()
    const db = client.db();
    // this refers to the database collection we are accessing
    const products = await db.collection('products').find().toArray()
  } catch (error) {
    return res.json({message: 'could not retrieve movies/tv shows'})
  };
  client.close();
  res.json(products)

};

exports.createProduct = createProduct;
exports.getProducts = getProducts;