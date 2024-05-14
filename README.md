# How to start an application on local machine using predefined scripts:

## Prerequisites:

- Node.js - at least of version >= 20.6.0, as built-in support for .env files is used;
- typescript - _start_ and _dev-watch_ scripts use **tsc** for transpilation;
- PostgreSQL@15 or PostgreSQL@16.

### Server side:

1. Move to "server" directory:

```bash
$ cd server
```

2. Install necessary packages:

```bash
$ npm install
```

3. Create new PostgreSQL database with desired credentials and start it.

***

4. Add necessary credentials and ports to the **.env.example** file and then ***RENAME IT to .env***

***

5. Seed database with initial records:

```bash
$ npm run seed-db
```

6. Start server:

```bash
$ npm run start
```

### Client side:

1. Move to "client" directory:

```bash
$ cd client
```

2. Install necessary packages:

```bash
$ npm install
```

3. Start client:

```bash
$ npm run dev
```
