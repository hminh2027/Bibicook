const express = require("express");
const router = express.Router();

// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
const userValidation = require("../validations/user.validation");
const accountController = require("../controllers/account.controller");
const { authenticate } = require("../middlewares/auth.middleware");

router.route("/").get(
  authenticate
  // validate(userValidation.),
  // accountController.getUsers
);
router.route("/me").get(authenticate, accountController.getUserByToken);

router
  .route("/:userId")
  .get
  // auth("getUsers"),
  // validate(userValidation.getUser)
  // accountController.getUserById
  ();
// .patch(
//   // auth("manageUsers"),
//   // validate(userValidation.updateUser),
//   accountController.updateUser
// )
// .delete(
//   // auth("manageUsers"),
//   // validate(userValidation.deleteUser),
//   accountController.deleteUser
// );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The account managing API
 * /account:
 *   get:
 *     summary: Get an user
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
