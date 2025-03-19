from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import TeamMember, Feature

def init_db():
    # Create tables
    Base.metadata.create_all(bind=engine)

    # Create a new session
    db: Session = SessionLocal()

    # Check if the tables are already populated
    if not db.query(TeamMember).first():
        team_members = [
            TeamMember(name="Amrit Sharma", role="Backend Developer", description="Oversees the project and ensures all deliverables are met.", image_url="amrit.jpg"),
            TeamMember(name="Ashim Sapkota", role="Fontend Developer", description="Develops the maintainable frontend for the project.", image_url="ashim.jpg"),
            TeamMember(name="Biraj Acharya", role="AI Engineer", description="Develops AI models for seismic image processing.", image_url="biraj.jpg"),
        ]
        db.add_all(team_members)

    if not db.query(Feature).first():
        features = [
            Feature(title="Superresolution", description="Enhances the resolution of seismic images for better analysis."),
            Feature(title="Denoising", description="Reduces noise in seismic data for clearer insights."),
            Feature(title="Real-Time Processing", description="Processes seismic data quickly for on-the-spot decision-making."),
            Feature(title="Custom Models", description="Utilizes advanced AI models tailored to seismic imaging."),
        ]
        db.add_all(features)

    db.commit()
    db.close()

if __name__ == "__main__":
    init_db()
