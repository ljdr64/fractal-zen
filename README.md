# Fractal Zen 🧘‍♀️

**Fractal Zen** is an online store focused on incense, aromatic products, and wellness items.

This project uses:

- 🛍️ **Medusa.js** for the backend e-commerce API
- 🌐 **Next.js Storefront Starter** for the frontend

---

## 📁 Project Structure

```
fractal-zen/
├── backend/   # Medusa.js backend
├── frontend/  # Next.js storefront frontend
```

---

## 🚀 Getting Started

### Start the whole project

From the root folder, first give execute permission to the script (only once):

```bash
chmod +x start.sh
```

Then run:

```bash
./start.sh
```

This will:

- Start the backend container (`fractal-postgres`)
- Launch the Medusa backend at `http://localhost:9000`
- Launch the frontend at `http://localhost:8000`

---

### Backend

1. Go to the backend folder:

   ```bash
   cd backend/fractal-zen-backend
   ```

2. Install dependencies and start the server:

   ```bash
   npm install
   npm run dev
   ```

   The Medusa server will run at `http://localhost:9000`.

3. Access the admin panel:

   ```
   http://localhost:9000/app
   ```

---

### Frontend

1. Go to the frontend folder:

   ```bash
   cd frontend/fractal-zen-frontend
   ```

2. Install dependencies and start the dev server:

   ```bash
   npm install
   npm run dev
   ```

   The storefront will be available at `http://localhost:8000`.

---

## 🔑 Environment Setup

Make sure to configure the following in `frontend/.env.local`:

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_test_xxx   # from admin panel
```

---

## 🧾 License

This project is licensed under the MIT License © 2025 Laureano Rodríguez.
