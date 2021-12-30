# Frontend coding challenge

The following list contains the minimum requirements for this project:

* The completed page should accurately represent the design templates
* Clicking the column headings should sort the data from highest to lowest values, or alphabetical as appropriate
* When sorting by Payroll Provider, Direct Contractors should always appear as the first entry
* When sorting by any other column, Direct Contractors should appear sorted with the provider entries

### Extra credits
If you fancy doing a little extra, here are some things that might be nice to add:

* Clicking column headings should toggle sorting in forward and backward directions for that column
* Show the currently sorted column data in a darker colour
* Mobilise the table for small devices
* Animate the re-ordering of the table rows


## Running the back end
The back end requires Java 8, and can be run from the backend directory with the command ./run.sh

If it launches correctly you should see the following in the console:

INFO [2015-10-29 13:17:10,166] org.eclipse.jetty.server.Server: Started @2126ms

This should expose an endpoint on the following URL: http://localhost:6502/application/labourstats

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


