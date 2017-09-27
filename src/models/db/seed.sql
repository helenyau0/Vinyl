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
  ('Lorde is queen', 'her new album is incredible, everyone should give it a listen!', 1, 3),
  ('New album from Radiohead!', 'Wow this album sounds just like all their albums', 1, 4),
  ('Melodrama', 'Lorde captures emotions like none other. Her second album is a masterful study of being a young woman, a sleek and humid pop record full of grief and hedonism, crafted with the utmost care and wisdom.
', 2, 3),
  ('Beautiful', 'Solange’s new record is stunning, a thematically unified and musically adventurous statement on the pain and joy of black womanhood.', 2, 2)
;
