# Order Pizza

#### This is for code Project#4

#### By **Alan Falcon**

## Description

This website is our forth project for the Introduction to Programming. A site for ordering pizza.

## Setup/Installation Requirements

* You may view this project at: https://falconswoosh.github.io/intrWk4-orderPizza/
* This project may be cloned from:  https://github.com/falconswoosh/intrWk4-orderPizza.git
* Clone to your local system
* Open the project folder "intrWk4-orderPizza"
* Open the index.html in your browser to execute its contents
* You may use your editor-of-choice to edit and modify it.
    * For example, if your editor is [Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/), issue the following in your bash:
    $ Atom index.html

## Specifications    
| Behavior | Input | Output |
|---|---|---|
| may choose a type of pizza with default as original |  original | original |
| may choose to order a certain size pizza with default as medium  | medium | medium |
| may select individual toppings. Default and required is cheese | cheese | cheese |
| may finalize their selections where total price displays | various selections are made via dropdowns and checkboxes and the user finalizes their selection by clicking the "Continue" button | ...Total Price $8.24|
| include a reset button to clear selections and start fresh | selections are chosen, "Reset" is clicked | display area is cleared returning to the default state |
| include a continue button to allow the user to continue to the next step | clicking on "Continue" | a confirmation is displayed noting the selections made and the total price |
| include a persistent warning on use of the reset and the continue buttons | N/A | Warning: Click 'Continue' only once. Doing so will commit your most recent Selections to your order. Otherwise, Click 'Reset' to start over.
| include a hidden tip for further user information related to topping choices | NOTE: the tip is blank until a mouse hovers in an area below "Please select your toppings" | Cheese is required for all pizza orders. After all, a pizza isn't a pizza without cheese ! If you do not desire a cheese-only pizza, please do select additional toppings for your pizza...|
| include error traps such as disallow clicking the "Continue" button more than once, breaking out of the order allowing a committed order to remain, and to keep the user from unchecking the one required topping - cheese. | user clicks "Continue" more than once in a row | INVALID Response. This form will reset for you to try again. You are not allowed to click "Continue" twice or click "Reset" after already committing via the "Continue" button.|


## Known Bugs

* N/A

## Support and contact details

Alan Falcon email: [falconswoosh@gmail.com](falconswoosh@gmail.com)

## Technologies Used


* [CSS](http://ref.openweb.io/CSS/)
* [CSS: Bootstrap](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjswubPlLnWAhVGVRQKHaRLBkgQFggmMAA&url=https%3A%2F%2Fgetbootstrap.com%2Fcss%2F&usg=AFQjCNFpcAPIPLCu0F7w2NDTOafHdV8Pkw)
* [CSS: Materialize](http://materializecss.com/forms.html)
* [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03)
* [GitHub](https://github.com/), [Atom](http://flight-manual.atom.io/getting-started/sections/why-atom/)
* [HTML](http://htmlreference.io/)
* [Javascript](https://github.com/falconswoosh/intrWk2-tracksuggester)
* [Javascript Jquery](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiBj_WJlbnWAhWBLhQKHfHUAQEQFggmMAA&url=https%3A%2F%2Fjquery.com%2F&usg=AFQjCNFnz7C6MAXGLm7pVcOD_LrOjJUUiA)
* [Markdown](https://en.wikipedia.org/wiki/Markdown)

### License
* All rights reserved for technologies utilized.

Copyright (c) 2016 **_{MIT}_**
