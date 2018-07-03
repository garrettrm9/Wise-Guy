#Known issues/needed updates

1. Annotate!!!!

* Make code DRY - re-use form components, nest superfluous components' modals in their parent
* Add most recent joke/routine to their preview components on ProfilePage
* Display routine's total run time on buildPage and POSSIBLY in routineList on routinePage as well

#Fixed issues/updates

1. (UPDATE 6-21-18: ignoring ... for now) Changing 'paper' component background-color

* (UPDATE 6-21-18: no longer removing, will add validations to fix) Removing auth
* (UPDATE 6-20-18: complete ... using modals) Conditional rendering of "edit routine" and "edit build routine" forms throws unknown error, likely linked to library components. "Edit joke" has old code for comparison.
* (UPDATE 6-27-18: fixed) After deleting joke from BuildJokes, routineJokeList on BuildPage does not re-render automatically
* (UPDATE 6-27-18: fixed) After editing joke from BuildJokes, routineJokeList on BuildPage does not re-render automatically
* (UPDATE 6-27-18: fixed) Editing jokes on Build page does not re-render joke if its part of that routine (rendered above)
* (UPDATE 6-30-18: implemented and working) Needs nav bar for navigation
* (UPDATE 7-1-18: implemented and working) Auth needs validation
