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

### Installation (Work in Progress)
*Installation instructions will eventually include a Docker-based (and much nicer) alternative.*
1. Clone this repository
2. Within the `coffee-runner` directory, run the following commands in the order they appear:
   1. `composer install`
   2. `npm install`
   3. `touch database/db.sqlite` (note: you may need to install SQLite drivers)
   4. `cp .env.example .env`
3. Open `.env` in your preferred editor and add the following lines:
   1. `DB_CONNECTION=sqlite`
   2. `DB_DATABASE="<FULL-PATH-TO/coffee-runner/database/db.sqlite>"` *Note: you will want to remove other DB Fields.*
4. Open `database/seeds/UsersTableSeeder.php` in your preferred editor and change my email address to yours.  
The password is `secret` by default.
5. Run the following artisan commands in the order they appear:
   1. `php artisan migrate`
   2. `php artisan db:seed`
6. Generate a new application key with `php artisan key:generate`
7. Start the server with the `php artisan serve` command.

That should do it. If you encounter any problems with the installation, please create an issue and I will address it.

### Possible Improvements
*The following is a (growing) list of nice-to-haves that will likely not be implemented soon due to time constraints.  
Depending on future time they may be added.*

* WebSocket subscriptions using Pusher API
  *  Update the client for all users whenever a CRUD action takes place or a coffee run expires.
* GraphQL Implementation
  *  Replace existing API routes with something much nicer for client-side consumption.