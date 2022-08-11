# Angular Lab 2

## Instructions

Create a new property in your class component to model a list of athletes. Each
athlete should have the following properties:

1. Name: this is the full name of the athlete, e.g. "Bill Russell"
2. Sport: this is the sport that the athlete plays (or played), e.g. "NBA
   Basketball"
3. Active: this is a flag that indicates whether the athlete is active

Populate your athlete list with at least 3 athletes from 3 different sports and
update your view to display the list of athletes from your model. Your output
should look similar to this:

```html
* Bill Russell (NBA Basketball) is not active * Gabriela Sabatini (WTA Tennis)
is not active * Simone Biles (Olympic Gymnast) is active
```

> Hint: You will need to use the `*ngIf` directive alongside the `active`
> property to display either the "is active" or the "is not active" text for
> each athlete. `*ngIf` can be used in the following way:
> `<span *ngIf="boolean expression">conditional text</span>`
