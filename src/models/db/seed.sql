INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead')
;

INSERT INTO
  users (name,email, password, image)
VALUES
  ('Helen','pie@gmail.com', '$2a$10$nTpQGr/.Tb7FEoC4PJeS5uGCjzomw/3yz/fpKE.iyuF1OfZq1tj.W', '/images/default_photo.png'),
  ('Luna','jello@gmail.com', '$2a$10$fJJlu.WhxMpW.zFeUhtO1uVGMvN334FNsRcmZOJ.5aZBJ.IippQ7O', '/images/default_photo.png')

;

INSERT INTO
  reviews (title, body, user_id, album_id)
VALUES
('Malibu', 'Malibu is an expansive opus that flows in multiple directions like a classic 70s double album', 1, 1),
('Anderson .Paak: Malibu', 'Malibu has reshaped my musical values, it’s made me rethink what I look for in music. Whether its Untitled/Unmastered, Views, Coloring Book, Layers, or any of the other worthy candidates for album of the year, Ive needed to put them aside for periods and come back to them later, but Malibu is the album I turn to when I need a break.', 2, 1),
  ('Lorde is queen', 'Her new album is incredible, everyone should give it a listen!', 1, 3),
  ('New album from Radiohead!', 'Wow this album sounds just like all their albums', 1, 4),
  ('Great Album from Radiohead', 'The most heartening thing about In Rainbows, besides the fact that it may represent the strongest collection of songs Radiohead have assembled for a decade, is that it ventures into new emotional territories', 2, 4),
  ('Melodrama', 'Lorde captures emotions like none other. Her second album is a masterful study of being a young woman, a sleek and humid pop record full of grief and hedonism, crafted with the utmost care and wisdom.
', 2, 3),
  ('Solanges A Seat at the Table Walks Softly, Speaks Radically', 'Her minimalist distillation of R&B, which takes into consideration not just the genres rich musical history but also its penchant for social commentary, has resulted in a stunning statement that redefines the old chestnut about the personal being political.', 1, 2),
  ('Beautiful', 'it’s among the most exquisite productions of the year, each track silken-smooth and replete with quietly virtuosic instrumental flourishes—and in service of a story of pain and healing. ', 2, 2)
;
