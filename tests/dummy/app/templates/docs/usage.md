# Usage

```handlebars
{{#goodpoint-arrow as |arrow|}}
  {{#arrow.from}}
    <div>Draw an arrow from here</div>
  {{/arrow.from}}
  {{#arrow.to}}
    <div>To here</div>
  {{/arrow.to}}
{{/goodpoint-arrow}}
```