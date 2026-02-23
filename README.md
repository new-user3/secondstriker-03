# SecondStriker

Full-stack football matchroom application built with:

* **Backend:** Node.js + Express
* **Frontend:** Vue 3 + Vite
* **UI (main version):** Vuetify

This repository contains two implementations:

```
secondstriker-03/
├── secondstriker/              # Main version (Vue + Vuetify)
└── matchroomhttprequests/      # Simpler HTTP request variant
```

Focus on `secondstriker/` unless you have a reason to use the earlier variant.

---

# Architecture

## Backend

* Express server
* Route-based structure
* Jade (Pug) templating for server views
* REST-style endpoints under `/routes`

Key files:

```
backend/
├── app.js
├── bin/www
├── routes/
│   ├── index.js
│   ├── matchRoom.js
│   └── users.js
└── views/
```

## Frontend

* Vue 3
* Vite
* Vue Router
* Vuetify (UI framework)

Key files:

```
frontend/
├── index.html
├── vite.config.js
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── router/
│   ├── components/
│   └── plugins/vuetify.js
```

---

# Prerequisites

* Node.js (v18+ recommended)
* npm

Verify:

```bash
node -v
npm -v
```

---

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/new-user3/secondstriker-03.git
cd secondstriker-03/secondstriker
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# Running the Project

You must run backend and frontend separately in two terminals.

---

## Start Backend

From:

```
secondstriker/backend
```

Run:

```bash
npm start
```

Default Express port is typically:

```
http://localhost:3000
```

Confirm inside `bin/www` if modified.

---

## Start Frontend

From:

```
secondstriker/frontend
```

Run:

```bash
npm run dev
```

Vite will output something like:

```
http://localhost:5173
```

Open it in your browser.

---

# Project Structure (Main Version)

```
secondstriker/
├── backend/
│   ├── routes/
│   ├── views/
│   └── app.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── router/
    │   ├── plugins/
    │   └── App.vue
```

---

# Core Features (Observed Structure)

* Match room view
* Leagues page
* Matches page
* Profile page
* Home page
* Express routing for match and user endpoints
* Vue router for client-side navigation
* Vuetify-based UI layout

---

# Development Notes

* Backend and frontend are decoupled.
* If using API calls from frontend to backend, ensure:

  * Correct port
  * CORS configured in Express if required
* Environment variables should be added via `.env` (not currently structured; implement if scaling).

---

# Production Build

Frontend:

```bash
npm run build
```

Serve the generated `dist/` folder using:

* Express static middleware
* Nginx
* Or any Node production server

---

# Improvement Targets

Current structure is functional but not hardened:

* No visible environment configuration
* No authentication middleware
* No database integration visible
* No API documentation
* No testing layer

If this is intended as a serious project, those are mandatory additions.

---

# License

Add a license file if this project is public. Absence of a license defaults to “all rights reserved.”
