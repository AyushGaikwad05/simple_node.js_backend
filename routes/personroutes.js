const express = require('express');
const Person = require('./../models/person');
const router = express.Router();

// POST /person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();
        console.log('data saved!');
        res.status(200).json(savedPerson);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }
});

// GET /person/:workType
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (['chef', 'manager', 'waiter'].includes(workType)) {
            const response = await Person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid Work Type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }
});

// GET /person
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched!');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/:id', async (req,res)=>
{
    try {
        const personId=req.params.id;
        const updatedPersonData=req.body; 

        const response =await Person.findById(personId,updatedPersonData,
        {
            new:true,
            runValidators:true 
     
        })
        if(!response) {
            return res.status(404).json({error:'Person Not Found '})
        }
        console.log('data is updated ! ')
         res.status(200).json(response);
    }

    catch(err)
    {
         console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;
