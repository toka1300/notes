**JSON.parse(response)**: It the response comes back as a string which is a in JSON format, we want it as a JS object, this will do it

**JSON.stringify(data):** Does the opposite, if you need to send info to API

**Errors**
- 2... No error
- 4... client side
- 5 .. server side
 
 **Headers**

 - Like metadata sent on with the API request (key/value pair)
 - Can set the headers in a tool like Hoppscotch or in the code

 **Example**
```
fetch("https://dog.ceo/api/breeds/image/random") 
.then((res) => {
  return resp.json();
})
.then ((data) => {
  return fetch("https://dog.ceo/api/breeds/image/${data}")
})
.catch((e) => {
  console.log(e)
})
```
You can take the response from one API call and then feed it into the next using '.then'
```
const test = async () => {
  try {
  const resp = await fetch("https://dog.ceo/api/breeds/image/random")
  const json = await resp.json();
  } catch (e) {
    console.log('Error:', e);
  }
}

```
- The initial fetch returns a promise (resolved or rejected), but at this point is incomplete and resolved (returns a readable stream), need to use res.json to stop if from resolving too soon