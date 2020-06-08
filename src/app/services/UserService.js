const User = require('../models/User');

exports.getRandomUser = async () => {
  try {
    const randomUser = await User.aggregate(
      [
        { $sample: { size: 1 } },
        {
          $group: {
            _id: '$_id',
          },
        },
      ],
    );

    return randomUser[0]._id;
  } catch (e) {
    throw Error(e);
  }
};
