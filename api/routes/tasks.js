const express = require( 'express' );
const router = express.Router();
const mongoose = require('mongoose');

const Task = require( '../models/task' );



router.post('/', (req, res, next) => {

    // record when last update was made
    // var update_date = new Date();

    const task = new Task({
        _id: new mongoose.Types.ObjectId(),
        taskText: req.body.taskText,
        completed: req.body.completed,
      });

      // save mongoose models to database
      task
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({

            successful: true,
            taskId: result._id,
            message : 'Created task succesfully'

          });

        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            successful: false,
            error : err
            });
        });
});



router.delete('/:taskId', ( req, res, next ) => {
    const id = req.params.taskId;
    Task.remove( { _id: id } )
        .exec()
        .then(result => {
        res.status(200).json({
            message: 'task deleted',
            request: {
                type: 'POST',
                url: 'https://event-maps-api.herokuapp.com/events/'
            }
        });
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            successful: false,
            error: err
        });
        });
});

router.patch('/:taskId', ( req, res, next ) => {
    const id = req.params.taskId;
    const updateOps = {};

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Task
        .update({_id: id}, { $set: updateOps})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
            successful: true,
            message: 'task successfully updated',
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
            successful: false,
            error: err
            });
    });
});

// export router with configured routes
module.exports = router;