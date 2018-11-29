<h1 align="center">HV-Autocomplete</h1>

HV-Autocomplete is the most flexible autoсomplete for styling and developing. You can do something more then with another autoсomplets. Firstly goal HV-Autocomplete is you may do Horizontal search results. See examples below.

<p align="center"> 
 <img width="100%" src="gifs/gautocomplete.gif" >
</p>

```javascript
var options = {
  input: document.querySelector("#input"),
  data: data,
  horizontal: true
};

new HVAutocomplete(options);
```

## Getting started

Just download our HV-Autocomplete plugin and include to your HTML. 

```html
<!-- JS file -->
<script src="path/to/hv-autocomplete.js"></script>
```

Also you can use our css files. Download.

```html 
<!-- CSS file -->
<link rel="stylesheet" href="path/to/hv-autocomplete.css">
```

## Basic

HV-Autocomplete plugin is very simple to use. Just create object HVAutocomplete and set options for it.

<h4>Example</h4>

<p align="center"> 
 <img width="100%" src="gifs/gautocomplete2.gif" >
</p>

<h4>Code</h4>

```javascript
var options = {
  input: document.querySelector("#input"),
  data: data
};

new HVAutocomplete(options);
```

## Data types

HV-Autocomplete get two data types: **default**, **for categories**.

<h4>Default</h4>

```json
[
  {"name": "Alex", "url": "http://..."},
  {"name": "Page", "url": "http://..."},
  ...
]
```

<h4>For categories</h4>

```json
{
  "category1": {
    "title": "Category 1",
    "data": [
      {
        "name": "Page Warner",
        "url": "http://..."
      },
      ... ]
  },
  "category2": {
    "title": "Category 2",
    "data": [
      {
        "name": "Golden Curtis",
        "url": "http://..."
      },
      ... ]
  },
  ...
}
```

## Categories

With HV-Autocomplete you can separate your data to categories. For this use `categories: true` option.

<h4>Example</h4>

<p align="center"> 
 <img width="100%" src="gifs/gautocomplete3.gif" >
</p>

<h4>Code</h4>

```javascript
var options = {
  input: document.querySelector("#input"),
  data: data
};

new HVAutocomplete(options);
```

<h4>Data type</h4>

```json
{
  "category1": {
    "title": "Category 1",
    "data": [
      {
        "name": "Page Warner",
        "url": "http://..."
      },
      ... ]
  },
  "category2": {
    "title": "Category 2",
    "data": [
      {
        "name": "Golden Curtis",
        "url": "http://..."
      },
      ... ]
  },
  ...
}
```

## Horizontal categories

We want that user can use HV-Autocomplete in horizontal orientation. For this simple use right data type - see above.

<p align="center"> 
 <img width="100%" src="gifs/gautocomplete.gif" >
</p>

<h4>Code</h4>

```javascript
var options = {
  input: document.querySelector("#input"),
  data: data,
  horizontal: true
};

new HVAutocomplete(options);
```

## Search

HV-Autocomplete has two search methods for your convenience:
- Default search
- Global search - looking all matches after space. For this search use `globalSearch: true`

<h4>Example</h4>

<p align="center"> 
 <img width="100%" src="gifs/gautocomplete4.gif" >
</p>

<h4>Code</h4>

```javascript
var options = {
  input: document.querySelector("#input"),
  data: data,
  globalSearch: true
};

new HVAutocomplete(options);
```

## Styling

We took care that styling will easy, so include two options for this:

- `resultClass`
- `resultStyles`

<h4>resultClass</h4>

It option replase default class to your class result block and child nodes.

For example:

```
div.hv-result => div.your-class-result
  └── p.hv-element-no-category => div.your-class-element-no-category
```

<h4>resultStyles</h4>

It options set inline styles for result block.

## Structure child nodes result block

<h4>Default structure</h4>

```
div.hv-result
  └── a.hv-element-no-category          => option
```

<h4>Structure with category</h4>

```
div.hv-result
  └── div.hv-block-category             => block if has category
        ├── h3.hv-title-category        => title category
        └── a.hv-element-with-category  => option
```

## API

| Options         | Default value | Type             | Description                                  |
| --------------- | ------------- | ---------------- | -------------------------------------------- |
| `data`          | `none`        | **object**       | See above. `Required field`                  |
| `input`         | `none`        | **HTML element** | Set HTML element. `Required field`           |
| `maxLength`     | `5`           | **number**       | Set maximum search result.                   |
| `horizontal`    | `false`       | **boolean**      | Set your autocomplete horizontal  See above. |
| `globalSearch`  | `false`       | **boolean**      | Set type search. See above.                  |
| `resultClass`   | `hv-result`   | **string**       | Set class for result. See above.             |
| `resultStyles`  | `null`        | **object**       | Set inline styles for result. See above.     |
| `onOptionClick` | `null`        | **function**     | Callback after click on option               |


## License

hv-autocomplete is Copyright © 2015-2018 Codica. It is released under the [MIT License](https://opensource.org/licenses/MIT).

## About Codica

[![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com)

We love open source software! See [our other projects](https://github.com/codica2) or [hire us](https://www.codica.com/) to design, develop, and grow your product.
