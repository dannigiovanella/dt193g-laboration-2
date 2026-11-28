-- Setup för att skapa tabell och lägga in data


-- Skapar tabellen för spelsamling
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    platform VARCHAR(50) NOT NULL,
    release_year INTEGER NOT NULL,
    rating DECIMAL(3, 1),
    completed BOOLEAN NOT NULL DEFAULT FALSE
);

-- Lägger till fyra testspel
INSERT INTO games (title, platform, release_year, rating, completed)
VALUES
    ('GTA 6', 'PS5', 2026, NULL, FALSE),
    ('Far Cry 5', 'PC', 2018, 8.0, FALSE),
    ('Outriders', 'PS5', 2021, 7.5, FALSE),
    ('Remnant 2', 'PC', 2023, 8.5, FALSE);
