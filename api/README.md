# LabControl - Api

## How to install
You will need to use [composer](https://getcomposer.org/).

```bash
git clone https://github.com/mateusKoppe/labcontrol-api &&
cd labcontrol-api &&
composer install
```
After this you will need to configure the enviroment, duplicate the `.env.example` to `.env` and set your configs.
When you finish the database configuration just hit the code bellow to migrate your database:
```bash
php artisan migrate

#If you want to seed your dabase you can also run:
php artisan db:seed
```
and finaly to start the server just run:
```bash
php artisan serve
```

Read the [Laravel's documentation](https://laravel.com/docs/5.5) for more info.
