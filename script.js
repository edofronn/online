* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", Arial, sans-serif;
}

body {
  background: radial-gradient(circle at top, #1a1a2e, #0f0f17);
  color: white;
  height: 100vh;
  overflow: hidden;
}

/* PAGES */
.page {
  display: none;
  height: 100vh;
  width: 100vw;
}

.page.active {
  display: block;
}

/* HOME */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.title {
  font-size: 48px;
  margin-bottom: 10px;
}

.subtitle {
  opacity: 0.7;
  margin-bottom: 40px;
}

.grid {
  display: flex;
  gap: 20px;
}

.card {
  width: 220px;
  padding: 20px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  cursor: pointer;
  transition: 0.3s;
  backdrop-filter: blur(10px);
}

.card:hover {
  transform: translateY(-8px);
  background: rgba(255,255,255,0.08);
}

/* TOPBAR */
.topbar {
  padding: 15px;
}

button {
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background: rgba(255,255,255,0.2);
}

/* IMAGE APP */
#drop-zone {
  margin: 60px auto 0;
  width: 60%;
  padding: 60px;
  border: 2px dashed rgba(255,255,255,0.3);
  border-radius: 20px;
  text-align: center;
  transition: 0.2s;
}

#drop-zone.dragover {
  border-color: #00aaff;
  background: rgba(0,170,255,0.1);
}

#viewer {
  display: none;
  height: calc(100vh - 100px);
  justify-content: center;
  align-items: center;
}

#viewer img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* FEATURE */
.feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  text-align: center;
  opacity: 0.8;
}
