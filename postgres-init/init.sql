-- Create the movies table
CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    CONSTRAINT unique_movie UNIQUE (title, director)
);

-- Insert seed data (won't duplicate thanks to unique constraint)
INSERT INTO movies (title, director)
VALUES 
    ('Interstellar', 'Christopher Nolan'),
    ('The Matrix', 'Wachowski Sisters')
ON CONFLICT DO NOTHING;
