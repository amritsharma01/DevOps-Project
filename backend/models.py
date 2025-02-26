from sqlalchemy import Column, Integer, String, Text
from database import Base

class TeamMember(Base):
    __tablename__ = "team_members"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    role = Column(String(100))
    description = Column(Text)
    image_url = Column(String(255))

class Feature(Base):
    __tablename__ = "features"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255))
    description = Column(Text)
    
