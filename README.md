
# Store

Simulation of a virtual store with user registration with authentication.

## Installation

Install Store with npm.

1.- Clone the repository to a local folder on your PC.
Enter this code in your terminal: 

```
git clone https://github.com/helterdev/StoreAuth.git

```

2.- Install the dependencies of both the client and server folders.
```
  cd client and cd server
  npm install

```
3.- In the root of the client folder, create a .env.local file and add the following environment variables.
```
NEXT_PUBLIC_URL='http://localhost:8080/api'
NEXT_PUBLIC_PRODUCTS_API=https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/
NEXT_PUBLIC_API='products?page=1&rows=8&sortBy=id&orderBy=ASC'
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=any text or access
```
4.- Ready, now run the project with the following scripts.
```
client
npm run dev
out: http://localhost:3000


server
npm run server
```

