const express = require( 'express' );
const router = express.Router();
const mongoose = require('mongoose');

const Event = require( '../models/event' );

router.get('/', (req, res, next) => {

    // select fetches only specified fields
    // map() maps to new array
    Event.find()
    .select()
    .exec()
    .then(docs => {
        const response = {
        count: docs.length,
        Events: docs.map(doc => {
            return doc;
        })
        };

        if (docs.length >= 0) {
        res.status(200).json(response);
        }
        else{
        res.status(404).json({

            message: 'No entires found'

        });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
        error : err
        });
    });
});

router.post('/', (req, res, next) => {
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        organization: req.body.organization,
        date: req.body.date,
        address: req.body.address,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        category: req.body.category,
        tag: req.body.tag,
        description: req.body.description,
        userId: req.body.userId,

      });

      // save mongoose models to database
      event
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({

            message : 'Created event succesfully',
            eventCreated: {

                organization: result.organization,
                date: result.date,
                address: result.address,
                longitude: result.longitude,
                latitude: result.latitude,
                category: result.category,
                tag: result.tag,
                description: result.description,
                userId: result.userId,

                request: {
                    type: 'GET',
                    url: 'https://event-maps-api.herokuapp.com/events/' + result._id
                }

            }
          });

        })
        .catch(err => {
          console.log(err);
          res.status(500).json({error : err});
        });
});

router.get('/:eventId', ( req, res, next ) => {
    const id = req.params.eventId;

    Event.findById( id )
    .select()
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json({
          Event: doc
        });
      }
      else
      {
        res.status(404).json({message: 'No valid entry found for provided ID'});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error : err})
    });

});

// [
// 	{"propName":	"address", "value": "1155 Union Cir, Denton, TX 76203"}
// ]
router.patch('/:eventId', ( req, res, next ) => {
    const id = req.params.eventId;
    const updateOps = {};

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Event
        .update({_id: id}, { $set: updateOps})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
            message: 'event successfully updated',
            request: {
                type: 'GET',
                url: 'https://event-maps-api.herokuapp.com/events/' + id
            }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
            error: err
            });
    });
});

router.delete('/:eventId', ( req, res, next ) => {
    const id = req.params.eventId;
    Event.remove( { _id: id } )
        .exec()
        .then(result => {
        res.status(200).json({
            message: 'event deleted',
            request: {
                type: 'POST',
                url: 'https://event-maps-api.herokuapp.com/events/'
            }
        });
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
        });
});

router.delete('/', (req, res, next ) => {
    var currentDate = new Date();
    console.log( currentDate.toString() );
    Event.remove( { date: { $lt: currentDate.toString() } } )
        .exec()
        .then( result => {
            res.status(200).json({
                res: result
            });

        })
        .catch( err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})
// export router with configured routes
module.exports = router;