const express = require( 'express' );
const router = express.Router();
const mongoose = require( 'mongoose' );

const Rank = require( '../models/rank' );
const User = require( '../models/user' );

router.get('/', (req, res, next) => {

    Rank.find()
    .select()
    .exec()
    .then(docs => {
        const response = {
        count: docs.length,
        leaderboard: docs.map(doc => {
            return {
                name: doc.name,
                points: doc.points
            }
            })
        };

        console.log(response);

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
    User
        .findById( req.body.userId )
        .then( user => {
            if( !user ) {
                return res.status(404).json({
                    message: 'User not found'
                  });
            }

            const rank = new Rank({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                points: req.body.points,
                userId: req.body.userId
            });

            return rank
                        .save()
                        .then(result => {
                            console.log(result);
                            res.status(201).json({
                              message : 'rank added',
                            });
                          })
                          .catch(err => {
                            console.log(err);
                            res.status(500).json({
                              error: err
                            });
                          });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
            error : err
            })
        });


});

// export router with configured routes
module.exports = router;