-- Migration: Create users table for Tontastika CMS
-- Erstellt: 2025-12-03
-- Zweck: Admin-User-Authentifizierung

-- HIER KOMMT DEIN SQL CODE HIN!
-- Erstelle eine Tabelle namens "users" mit folgenden Spalten:
-- 
-- - id: Primärschlüssel, Auto-Increment
-- - username: Text (max 50 Zeichen), eindeutig, nicht leer
-- - password_hash: Text (255 Zeichen für bcrypt Hash), nicht leer
-- - created_at: Zeitstempel, automatisch beim Erstellen gesetzt
-- - updated_at: Zeitstempel, automatisch beim Update gesetzt

-- Tipp: Starte mit CREATE TABLE users ( ... );
-- Nutze INT, VARCHAR(), TIMESTAMP, AUTO_INCREMENT, PRIMARY KEY, UNIQUE, NOT NULL


CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'editor') DEFAULT 'editor',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);