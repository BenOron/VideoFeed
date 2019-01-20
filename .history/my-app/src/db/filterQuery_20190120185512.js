/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
module.exports = function(data, s) {
  console.log(data);
  data
    .filter(e => e.source.includes(s) || e.source.includes(s))
    .sort((a, b) =>
      a.source.includes(s) && !b.source.includes(s)
        ? -1
        : b.source.includes(s) && !a.source.includes(s)
        ? 1
        : 0
    );
};
