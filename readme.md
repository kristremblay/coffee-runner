## Coffee Runner
*Coffee is the lifeblood of the office.  Occasionally, when the office coffee maker just can't satisfy, a noble soul may
venture out into the wild to seek adequate caffeination.  This age-old practice is known colloquially as the Coffee Run,
and this application seeks to aid in keeping the tradition strong.*

<p align="center">
    <img src="https://kristremblay.com/wp-content/uploads/2019/02/coffee-runner.png" 
    alt="Cute, isn't he?"
    width="250" height="250"
    >
</p>

### Purpose
This demo application uses various web technologies to allow users to schedule or subscribe to coffee runs. Realistically,
it is best suited for small groups who just want a cup of the good stuff.

### Languages/Frameworks/Etc
* PHP 7 with Laravel 5.7
* React 16.8 + Redux
* SQLite
* Slack API (For coffee arrival notifications)

### Possible Improvements
*The following is a (growing) list of nice-to-haves that will likely not be implemented soon due to time constraints.  
Depending on future time they may be added.*

* WebSocket subscriptions using Pusher API
  *  Update the client for all users whenever a CRUD action takes place or a coffee run expires.
* GraphQL Implementation
  *  Replace existing API routes with something much nicer for client-side consumption.