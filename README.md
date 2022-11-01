# change-taps-onclick

I hope this design help you to understand addEventListener() and control some element in the DOM using dataset attribute.

## addEventListener()
- To add an event handler to an event of an element, you use the addEventListener() method of the element object:

```
element.addEventListener(type,eventListener);

```
- Suppose that you have a button with the class **.btn**:

```
<button class="btn">Subscribe</button>

```

- To attach an event handler to the click event, you use the following:

- First, define an event handler:

```
function clickHandler(event) {
   console.log('Button Clicked');
}
```

- Then, use the addEventListener() method of the button element:
```
const btn = document.querySelector('.btn');
btn.addEventListener('click', clickHandler);
```
- If you’re not resuing the event handler function, you can use an anonymous function as an event handler:
```
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(event){
   console.log('Button Clicked');
});
```


