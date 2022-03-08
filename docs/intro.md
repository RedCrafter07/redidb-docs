---
sidebar_position: 1
---

# Getting started
To get started, install Docker and Docker Compose. You can find some installation scripts [here](https://github.com/RedCrafter07/starters/tree/main/docker).

**Info:** I recommend using [Portainer](https://portainer.io) for Docker and Docker Compose. 

> ### Side note
> We're using typescript and we will use it for the documentation. If you're using plain JavaScript, remember to look out for the types and check if everything works the same.

After doing so, copy the Docker Compose file:

```yaml
version: '3.0'

services:
  db:
    image: redcrafter07/redi-db:0.3
    ports:
      - 12018:12018
    expose:
      - 12018
    environment:
      - USER=user #Change - Default user (admin), currently the only user available
      - PASSWORD=password #Change - Password for default user
      - PORT=12018
    volumes:
      - redi-db:/data:rw

volumes:
  redi-db:
```

## Important
Change the USER variable to a user of your choice and PASSWORD to a secure password. These are the login credentials for the admin user (currently the only user available). Keep it secret!

## Checking if it worked
To check if we've done everything correctly, we can quickly check the port ```12018``` on our server or the machine we deployed RediDB to.