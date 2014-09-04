angular-jquery-datepicker
=========================

jQuery UI datepicker (http://jqueryui.com/datepicker/) to AngularJS

### Scripts

```html
<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="//code.jquery.com/ui/1.11.0/jquery-ui.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/i18n/jquery-ui-i18n.min.js"></script>
<script src="scripts/angular-jquery-datepicker.js"></script>
```

### App

```js
var app = angular.module('YourApp', ['angular-jquery-datepicker']);
```

```js
app.config(function ($datepickerProvider) {
  $datepickerProvider.setDefaults('es');
});
```

### View

```html
<input type="text" id="CreationDate" name="CreationDate" class="form-control pull-left" data-ng-model="event.creationaudit.date" datepicker />
```
