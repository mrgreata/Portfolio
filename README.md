# 📊 Personal Portfolio with Custom Tracking System

This project is my personal **portfolio website** combined with a fully self-hosted **visitor tracking system** — built using **Cloudflare Workers**, **Supabase (PostgreSQL)**, and **Grafana** for visualization.

Everything runs without Google Analytics or external tracking providers — privacy-friendly, lightweight, and fully under my control.

---

## 🚀 Overview

- **Website:** Static portfolio (HTML, CSS, JS)
- **Tracking:** Custom JavaScript tracker (`track.js`)
- **Serverless API:** Cloudflare Worker (`worker.js`) receives and stores data
- **Database:** Supabase (PostgreSQL)
- **Analytics Dashboard:** Grafana (self-hosted)

---

## 🧩 System Architecture

```text
[Visitor Browser]
     ↓
  track.js (sends event data)
     ↓
  Cloudflare Worker (serverless endpoint)
     ↓
  Supabase (PostgreSQL database)
     ↓
  Grafana Dashboard (data visualization)
