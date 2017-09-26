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
  ('hi','pie@gmail.com', '$2a$10$nTpQGr/.Tb7FEoC4PJeS5uGCjzomw/3yz/fpKE.iyuF1OfZq1tj.W', '/images/user_profile_female.jpg')
;



INSERT INTO
  reviews (title, body, user_id, album_id)
VALUES
  ('Lorde is queen', 'her new album is incredible, everyone should give it a listen!', 1, 3),
  ('New album from Radiohead!', 'Wow this album sounds just like all their albums', 1, 4),
  ('Melodrama', 'Love how catchy this album is', 1, 3),
  ('More like Slay Knowles', 'Just amazing like her sister', 1, 2)
;
