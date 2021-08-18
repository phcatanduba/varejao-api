## How to use

1. Sign-up sending a request to POST /sign-up
2. Sign-in sending a request to POST /sign-in
3. Get your 'JWT TOKEN'
4. Send a JSON to POST /contacts with the JWT TOKEN
5. JSON format: 
```bash{
     {
      contacts": [
          {
              "name": "Srta. Isabelly Castro",
              "cellphone": "5541959365078" ***exact this length and only numbers***
          },
        }
     }
```

## How to run
1. Clone this repository
2. Create a database using ``migrations`` 
- 2.1 Enter to postgres terminal
```bash
sudo su postgres
psql postgres
```
- 2.2 Create a database
```bash
CREATE DATABASE [database_name];
```
- 2.3 Insert your database info at ``.env file`` as the following example
```bash
DATABASE_URL='postgres://postgres:PASSWORD@localhost:5432/DATABASE_NAME'
```
- 2.4 Finally, you can run migrations to create the tables
```bash
npm run build
npm run typeorm migration: run
```
- 3 Insert your JWT_SECRET info at ``.env file`` as the following example
```bash
JWT_SECRET='A_RANDOM_STRING'
```

4. Install dependencies
```bash
npm i
```
5. Run the back-end with
```bash
npm run dev
```
