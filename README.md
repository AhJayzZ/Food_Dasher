- # Database Final Project - Food Dasher

  Food Dasher is a database design final project focused on food ordering and delivery operations. It showcases a comprehensive database system with entities such as restaurants, menus, customers, orders, and delivery drivers. The project incorporates efficient data models, relationships, and data integrity constraints. With features like menu management, order placement, and delivery tracking, Food Dasher demonstrates our expertise in designing a scalable and secure database system for a seamless food delivery experience.

- ## Goal

  The main goal of Food Dasher is to provide a user-friendly platform for customers to easily order food from various restaurants and track the delivery status. Additionally, it aims to streamline restaurant operations by offering menu management tools and efficient order processing capabilities. The project aims to demonstrate the effective use of database design principles to enhance the overall food ordering and delivery experience.

- ## Developer

  - Backend Development
    - Antony Wang
  - Frontend Development
    - Hank Lin

- ## System Architeture

  - Frontend Framework
    - React
  - Backend Framework
    - Django
    - djangorestframework
  - Database
    - MySQL
  - Develop Enviroment
    - VM: GCP VM(4C/16G/80GB)
    - OS: Ubuntu 22.04
    - Backend: Python 3.10.6
    - Frontend: Node 14.21.3

- ## How to run the project ?

  - ### Step 0. Install python library and node module

    ```bash=
    # requirement installation
    # Path : Food_Dasher/backend/
    pip install -r requirements.txt
    ```

    ```bash=
    # node module installation
    # Path : Food_Dasher/frontend/
    npm install
    ```

  - ### Step 1. Setting .env

    ```bash=
    # Backend setting
    # Path : Food_Dasher/backend/
    cp .env.sample .env
    vi .env

    Change required: DB_PASSWORD , DB_HOST , DB_PORT
    !!! DB_PASSWORD(.env) must same as MYSQL_PASSWORD(docker-compose.yml)!!!
    ```

    ```bash=
    # Frontend setting
    # Path : Food_Dasher/frontend/
    cp .env.sample .env
    vi .env

    Change required: REACT_APP_HOST_IP , REACT_APP_API_PORT
    ```

  - ### Step 2. Run Docker Compose (MySQL、phpMyAdmin)

    ```bash=
    # Path : Food_Dasher/backend/
    docker-compose build
    docker-compose up
    ```

  - ### Step 3. Run Migration

    ```bash=
    # Path : Food_Dasher/backend/
    python3 manage.py makemigrations
    python3 manage.py migrate
    ```

  - ### Step 4. Run Backend and Frontend

    ```bash=
    # Path : Food_Dasher/backend/
    python3 manage.py runserver 0.0.0.0:<backend port>

    # Path : Food_Dasher/frontend/
    npm start
    ```

- ## Impelementation

  - ### Part A. Member
    - #### Member - Register
      ![Imgur](https://imgur.com/PfFeDPo.png)
    - #### Member - Login
      ![Imgur](https://imgur.com/LUQ7u5t.png)
    - #### Member - Role Selection
      ![Imgur](https://imgur.com/Rrg2Kic.png)
  - ### Part B. User
    - #### User - Restaurant Lobby
      ![Imgur](https://imgur.com/u8oLEW8.png)
    - #### User - Restaurant Menu
      ![](https://imgur.com/a/S82RZMz.png)
    - #### User - Order Cart
      ![](https://imgur.com/a/WUPfkKK.png)
    - #### User - Order Checkout
      ![](https://imgur.com/a/AZ49RRD.png)
    - #### User - Order Confirmation
      ![](https://imgur.com/a/3eEdokI.png)
    - #### User - Order Status
      ![](https://imgur.com/a/cO4erUJ.png)
    - #### User - History Order
      ![](https://imgur.com/a/JD4pF1H.png)
    - #### User - Order Compelete
      ![](https://imgur.com/a/97WyCak.png)
    - #### User - Review and Rating
      ![](https://imgur.com/a/kkyQPzX.png)
    - #### User - Review and Rating Overview
      ![](https://imgur.com/a/OzBF7pP.png)
  - ### Part C. Restaurant
    - Restaurant - Order
      ![](https://imgur.com/a/amF2cPk.png)
    - Restaurant - Information
      ![](https://imgur.com/a/cbtU1kl.png)
    - Restaurant - Menu
      ![](https://imgur.com/a/98pgieN.png)

- ## Q&A

  - Q: `docker compose` command not found

    - A: `sudo apt install docker-compose` to install docker compose

  - Q: `pip install` failed when `docker compose build`
    - A: `sudo apt update` and `sudo apt-get install python3-dev default-libmysqlclient-dev build-essential python3.8-dev python3.8-distutils libpython3.8-dev libpq-dev` to install the essential lib
