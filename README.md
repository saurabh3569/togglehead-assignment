This project contains three main folders:

1. **server/** → Backend API (Node.js + Express)
2. **admin-panel/** → Admin panel frontend (React)
3. **client/** → Main client frontend (React)

---

## Requirements

- Node.js
- npm or yarn

---

## Setup & Run

### 1. Run Backend

```bash
cd server
npm install
npm run dev
```

````

Backend will run on `http://localhost:5000`

---

### 2. Run Admin Panel

```bash
cd admin-panel
npm install
npm start
```

Admin panel will run on `http://localhost:3000`

---

### 3. Run Client

```bash
cd client
npm install
npm start
```

Client will run on `http://localhost:3001`

---

## Notes

- Make sure backend (`server`) is running before starting frontends.
- API base URLs are set according to backend port.
````
