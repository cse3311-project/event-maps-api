const express = require('express');
const router = express.Router();
const User = require( '../models/user' );
const Event = require( '../models/event');
const Rank = require( '../models/rank');
var bcrypt = require( 'bcryptjs' );
const mongoose = require('mongoose');


router.post('/signup', (req, res, next) => {

    User.find( {email: req.body.email} )
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: 'email is already linked to an existing account'
          });
        }
        else {
            User.find( {username: req.body.username } )
              .exec()
              .then( user => {

                if( user.length >= 1 ) {
                  return res.status(409).json({
                    message: 'username is already linked to an existing account'
                  });
                } else {

                  bcrypt.hash(req.body.password, 10, (err, hash) =>{
                    if (err) {
                      return res.status(500).json({
                          error: err
                      });
                    } else {

                      console.log(hash);

                      const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        username: req.body.username,
                        password: hash
                      });

                      //status 201 when creating resource
                      user
                        .save()
                        .then(result => {
                          // console.log( result.username );

                          const rank = new Rank({
                              _id: new mongoose.Types.ObjectId(),
                              name: result.username,
                              userId: result._id
                          });

                          // create initial rank for user
                          return rank
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                  message : 'User Created',
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
                          res.status(500).json({error : err});
                        });
                    }
                  });

                }


              });
        }
      });
});

router.post('/login', exports.user_login = (req, res, next) => {
    User.find({ email: req.body.username })
      .exec()
      .then(user => {
        if (user.length < 1) {

          User.find({ username: req.body.username })
            .exec()
            .then( user => {

              if ( user.length < 1 ) {
                return res.status(401).json({
                  message: 'Auth failed'
                });
              } else {

                  bcrypt.compare( req.body.password, user[0].password, ( err, result) => {
                    if (err) {
                      return res.status(401).json({
                        message: 'Auth failed'
                      });

                    }
                    //result is the truth value of comparison
                    if ( result ) {
                      return res.status(200).json({
                        message: 'Auth successful',
                      });

                    } else {
                      return res.status(401).json({
                        message: 'Auth failed'
                      });
                    }
                  });
                }



            });
          // User.find({ username: req.body})

        }else {

          bcrypt.compare( req.body.password, user[0].password, ( err, result) => {
            if (err) {
              return res.status(401).json({
                message: 'Auth failed'
              });

            }
            //result is the truth value of comparison
            if ( result ) {
              return res.status(200).json({
                message: 'Auth successful',
              });

            } else {
              return res.status(401).json({
                message: 'Auth failed'
              });
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
      });
});


router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'User deleted',
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


router.get('/events/created', (req, res, next) =>  {
    const id = req.body.id;
    Event.find( {userId: id} )
    .select()
    .exec()
    .then(doc => {
      if ( doc.length > 0 ) {
        res.status(200).json({
          UserCreatedEvents: doc,
        });
      }
      else
      {
        res.status(404).json({message: 'No valid entry found for provided ID'});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error : err});
    });




});

//export such that module can be used in other files
module.exports = router;
