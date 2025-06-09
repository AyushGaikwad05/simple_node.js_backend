const express=require('express')
const router = express.Router();
const MenuItem = require('./../models/menu') 

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Menu Data Fetched ! ');
        res.status(200).json(data);


    }

    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }


});

router.post('/', async (req, res) => {

    try {
        const data = req.body
        const newMenu = new MenuItem(data);

        const savedmenu = await newMenu.save(data);
        console.log('Menu data saved !');
        res.status(200).json(savedmenu);


    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }    

});


router.get ('/:tastetype' , async  (req,res)=>{

    const tastetype=req.params.tastetype; 

    try {

        if (tastetype=='sweet'||tastetype=='sour'||tastetype=='spicy')
        {
             const response = await MenuItem.find({ taste: tastetype});
              console.log('response fetched');
            res.status(200).json(response);
        }
           
        else {
            res.status(404).json({ error: 'Invalid Work Type' });
        }



    }

    catch (err)
    {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }


})




module.exports =router; 
