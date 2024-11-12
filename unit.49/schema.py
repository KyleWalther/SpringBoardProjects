from sqlalchemy import create_engine, Column, Integer, String, Text, ForeignKey, TIMESTAMP
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String)
    email = Column(String, nullable=False)
    display_name = Column(String)
    spotify_access_token = Column(String)
    spotify_refresh_token = Column(String)
    token_expiry = Column(TIMESTAMP)
    created_at = Column(TIMESTAMP)
    last_login = Column(TIMESTAMP)
    
    # Relationships
    genres = relationship('Genre', back_populates='user')
    albums = relationship('Album', back_populates='user')
    tracks = relationship('Track', back_populates='user')
    artists = relationship('Artist', back_populates='user')


class Genre(Base):
    __tablename__ = 'genres'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    genre = Column(String)
    timeframe = Column(String)
    play_count = Column(Integer)
    
    # Relationships
    user = relationship('User', back_populates='genres')


class Album(Base):
    __tablename__ = 'albums'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    album_name = Column(String)
    main_artist = Column(String)
    album_cover_url = Column(String)
    timeframe = Column(String)
    play_count = Column(Integer)
    
    # Relationships
    user = relationship('User', back_populates='albums')


class Track(Base):
    __tablename__ = 'tracks'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    track_name = Column(String)
    artist_id = Column(Integer, ForeignKey('artists.id'))
    album_name = Column(String)
    album_cover_url = Column(String)
    duration_ms = Column(Integer)
    timeframe = Column(String)
    
    # Relationships
    user = relationship('User', back_populates='tracks')
    artist = relationship('Artist', back_populates='tracks')


class Artist(Base):
    __tablename__ = 'artists'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    artist_name = Column(String)
    genre = Column(String)
    popularity = Column(Integer)
    timeframe = Column(String)
    play_count = Column(Integer)
    
    # Relationships
    user = relationship('User', back_populates='artists')
    tracks = relationship('Track', back_populates='artist')


# Database setup (example for SQLite; change for other databases)
engine = create_engine('sqlite:///spotify_data.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
