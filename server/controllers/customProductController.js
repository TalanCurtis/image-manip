module.exports={
  testGet: (req, res, next)=>{
      let myResponse = 'testGet hit';
      console.log(myResponse);
      // console.log(req.session.user)
      res.status(200).send(myResponse);
  },
  // getAll Users hits the database
  getAllCustomProduct: (req, res)=>{
    const db = req.app.get('db')
    db.customProduct.get_all_customProduct().then(dbResponse => {
        res.status(200).send(dbResponse)
    })
  },
  createCustomProduct: (req, res)=>{
    // req.body is where you would get the variables to replace "testName", "testImage.png", "testAuthId".
    const db = req.app.get('db')
    // ( name , path , tags , styleId, categories , layersData , colorRecipe , createdAt , updatedAt)
    db.customProduct.create_customProduct([
        "testName", // name
        "c:/dev/prod/testname.png", // path
        '["mens", "alleson"]', // tags
        "StyleId", // styleId
        '["baseball"]', // categories
        {"import":"test"}, // layersData
        101, // colorRecipe
        '2018-11-02 09:57:12.08-06', // createdAt
        '2018-11-04 09:57:12.08-06'  // updatedAt
      ]).then(dbResponse => {
        res.status(200).send(dbResponse)
    })
  },
  updateCustomProduct: (req, res)=>{
    // req.body is where you would get the variables to replace "testName"
    const db = req.app.get('db')
    db.customProduct.update_customProduct(["Purple", "testName"]).then(dbResponse => {
        res.status(200).send(dbResponse)
    })
  },
  deleteCustomProduct: (req, res)=>{
    // req.body is where you would get the variables to replace "testName"
    const db = req.app.get('db')
    db.customProduct.delete_customProduct(["testName"]).then(dbResponse => {
        res.status(200).send(dbResponse)
    })
  },
}


