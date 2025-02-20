# MongoDB $inc operator error with string value
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical field by a given value.  However, if a string is provided instead of a number, the operation will fail.  This example shows the incorrect usage and the correct way to use the `$inc` operator.

## Bug
The bug lies in the incorrect usage of the `$inc` operator.  It attempts to increment the `likes` field by the string value "10", which is invalid.

## Solution
The solution involves correcting the input to the `$inc` operator, providing a numerical value instead of a string.