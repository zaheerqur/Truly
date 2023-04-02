const userModel = require('../../models/user');
const cloudinary = require('../../config/cloudinary');

async function deleteUser(req, res) {
  try {
    const user = await userModel.findById(req.params.id);
    // delete the user resume from the cloud
    await cloudinary.uploader.destroy(user.resume.cloudinaryId);
    // delete the user avatar from the cloud
    await cloudinary.uploader.destroy(user.avatar.cloudinaryId);
    userModel.remove(user);
    // user.remove();

    console.log('user deleted successfully');
    if (!user)
      return res
        .status(400)
        .json({ sucess: false, message: `This user wasnt found` });

    res.status(201).json({
      sucess: true,
      message: `User with id ${req.params.id} has been deleted`,
      data: user,
    });
  } catch (err) {
    res.status(400).json({ sucess: false, message: `The user id is invalid` });
  }
}
module.exports = { deleteUser };
