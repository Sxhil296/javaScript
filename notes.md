# Understanding innerHTML, innerText, and textContent

## `innerHTML`

The `innerHTML` property allows you to get or set the HTML content within an element. It returns a string representing the HTML markup contained within the element.

### Example:

Suppose you have the following HTML element:

```html
<div id="exampleDiv">
    <p>This is some <strong>bold</strong> text.</p>
</div>
```javascript
const divElement = document.getElementById('exampleDiv');
console.log(divElement.innerHTML); // Output: "<p>This is some <strong>bold</strong> text.</p>"