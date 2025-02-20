```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({ "_id": ObjectId("6519293829382") }, { $inc: { "likes": "10" }});
```