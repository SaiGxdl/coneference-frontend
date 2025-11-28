
# 📊 Employee & Task Dashboard — Frontend

**React + Vite | Modern UI | Mock JSON Data**

A clean, professional dashboard UI that displays Employees and Tasks using mock JSON data.
Designed for evaluation and portfolio use — fully responsive, theme-ready, and deployable to Vercel or GitHub Pages.

---

## 🚀 Live Demo



```
https://coneference-frontend.vercel.app/
```

---

## 📌 Features

### 🎨 Frontend Functionality

* Employee list with role, department & email
* Task list with status, description & due date
* Search employees (live)
* Filter tasks by status
* View details in modal
* Refresh mock data
* Fully responsive layout
* Smooth card hover animations
* Icons (react-icons)
* Light/Dark mode toggle (CSS variables + localStorage)

### 📁 Data (static mock JSON)

* `src/data/employees.json`
* `src/data/tasks.json`

### 🧪 Developer Experience

* Vite (fast dev)
* Hot Module Reloading
* Clean folder structure
* Reusable components
* CSS variables for theming

---

## 🛠 Tech Stack

| Layer      | Technology                 |
| ---------- | -------------------------- |
| Framework  | **React 18 + Vite**        |
| Styling    | Custom CSS + CSS Variables |
| Icons      | react-icons                |
| Routing    | (Optional) React Router    |
| Build Tool | Vite                       |
| Deployment | Vercel / GitHub Pages      |

---

## 📂 Folder Structure

```
conference-frontend/
│
├── index.html
├── vite.config.js
├── package.json
│
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── style.css
    │
    ├── data/
    │   ├── employees.json
    │   └── tasks.json
    │
    ├── components/
    │   ├── Header.jsx
    │   ├── EmployeeCard.jsx
    │   ├── EmployeeList.jsx
    │   ├── TaskList.jsx
    │   ├── Modal.jsx
    │
    └── pages/
        └── Dashboard.jsx
```

---

## ⚙️ Setup Instructions (Local Development)

### 1️⃣ Clone the repo

```bash
git clone https://github.com/SaiGxdl/conference-frontend.git
cd conference-frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run locally

```bash
npm run dev
```

App will be available at:

```
http://localhost:5173
```

---

## 🌐 Deployment

### ⭐ Recommended: Deploy to Vercel

Perfect for React/Vite apps.

1. Go to [https://vercel.com](https://vercel.com)
2. Log in with GitHub
3. Import your repository
4. Use default settings

   * Build command: `npm run build`
   * Output directory: `dist/`
5. Deploy 🚀

Every push to `main` auto-deploys.

---

### 📄 Alternative: Deploy to GitHub Pages

#### 1. Add Vite base path in `vite.config.js`

```js
export default defineConfig({
  plugins: [react()],
  base: "/conference-frontend/",
});
```

#### 2. Add GitHub Actions workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy Frontend

on:
  push:
    branches: ["main"]

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"

      - run: npm ci
      - run: npm run build

      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### 3. Push code

```bash
git add -A
git commit -m "deploy: setup GitHub Pages"
git push origin main
```

---

## 📸 Screenshots (for evaluation)

![Home Page](/Homepage.png)
![Home Page Dark Mode](/HomepageDarkmode.png)

> These demonstrate correct UI rendering and mock-data functionality.

---

## 🔍 Bonus Features Implemented

* Dark mode with theme persistence (localStorage)
* Modern and clean UI with gradients and card shadows
* Icons (search, theme toggle, GitHub, dashboard icon)
* Smooth hover & focus states
* Responsive smartphone/tablet layout
* Clean separation of UI components
* Modular architecture for scalability

---

## 📌 Assumptions

* Frontend uses **mock JSON**, not a backend API.
* Actual backend functionality is implemented in the separate backend project.
* All data is local and does not persist between refreshes.
* No authentication is required.
* UI is designed for clarity and evaluation, not production-grade complexity.

---

## 👨‍💻 Author

**Your Name**
Frontend Developer — React | Vite | UI/UX

GitHub: [https://github.com/](https://github.com/)SaiGxdl

---

