# Food Truck Tracker

##### Website to list, add, and edit a food truck's upcoming locations, October 19, 2018

#### By AJ MCgladdery

## Description

This web application allows customers to view the upcoming locations of their favorite food truck. This includes a date, address, open hours, and a map location. An admin can modify this list by adding and editing upcoming locations.

## Original Live Website
[Street Food App- Darkside of the Q](https://streetfoodapp.com/eugene/darkside-of-the-q)

![screenshot of live site](https://github.com/amcgladd/angular-food-truck/blob/master/images/Screen%20Shot%202018-10-19%20at%208.37.32%20AM.png)

##User Stories

√ As a patron, I want to see a list of all upcoming scheduled locations. For each event, I need to see its date, street address, operation hours, and a map with a icon showing the location.

√ As an admin, I want to fill out a form when I create a new event to add it to the list.

√ As an admin, I want the option to edit an event's properties after entering them just in case I make a mistake.

As an admin, I want the option to delete an entire event.

As a patron and/or admin, I want to events to be sorted chronologically.

As a patron and/or admin, I want past events to automatically hide from the list.

As a patron and/or admin, I want any event listed for the current date to have a blue left margin.

As a patron and/or admin, I want to see today's event marked green if the truck is currently open. Also, the hours should read "Open now until {{currentEvent.closingHour}}"

As a patron, I want to be able to report a event error by clicking a button that will email the site admin.

As a patron, I want to be able to book a private event by specifying: event type, event details, food preferences, contact information.

As an admin, I want to see a list of private event requests.

As an admin, I want to approve a private event request and add event to admin-only list.

As an admit, I want to sort event list by All, public events, or private events.

As a unknown user, I want to be able to specify my role either patron or admin.

## Planned Component map

![component map](https://github.com/amcgladd/angular-food-truck/blob/master/images/componentMap.png)

## Setup

Install Food Truck Tracker by cloning this repository.

## Technologies Used

HTML, CSS, JavaScript, jQuery, Angular CLI

### Legal

Copyright (c) 2018 **AJ Mcgladdery**

This software is licensed under the MIT license.



# AngularFoodTruck

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
