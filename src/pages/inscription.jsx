import '../assets/styles/Inscriptions.css';

export default function Inscription() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeUxft2_eVQFJJTSJQurSptYx39wdiVW_QvUzGGrSmV9hwurA/viewform";

  return (
    <div className="inscription fade-in container d-flex flex-column align-items-center justify-content-center">
      <iframe 
        src={googleFormUrl} 
        width="100%" 
        height="800px" 
        style={{ border: 'none', marginTop: '20px' }} 
        title="Google Form"
      ></iframe>
    </div>
  );
}
